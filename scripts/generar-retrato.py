"""Genera los assets del retrato de portada a partir de la foto original.

Recorta el fondo, disuelve los bordes donde el encuadre corta a la persona y
exporta las versiones que consume el sitio:

    public/img/erika-portada.webp      retrato grande, con transparencia
    public/img/erika-portada-sm.webp   versión móvil (se sirve bajo 640px)
    public/img/og-portada.jpg          tarjeta Open Graph, 1200x630

Uso:
    pip install pillow numpy scipy
    python scripts/generar-retrato.py "Nueva foto portada.png"

La foto original no vive en el repositorio: es material de trabajo y pesa
varios MB. Guárdala donde quieras y pásale la ruta al script.

Pensado para retratos de estudio sobre fondo claro y uniforme. Si la foto
nueva tiene fondo oscuro o con textura, este recorte automático no sirve.
"""

import argparse
import pathlib
import sys

import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage

RAIZ = pathlib.Path(__file__).resolve().parent.parent
DESTINO = RAIZ / "public" / "img"

CANVAS = (250, 251, 248)  # --color-canvas de src/index.css

# Umbral de "pixel de fondo" sobre el canal mínimo. El fondo de estudio ronda
# 250-255 y la chaqueta beige baja a ~180, así que 238 los separa con margen.
UMBRAL_FONDO = 238

# Banda de transición del alfa: opaco por debajo de V_LO, transparente por
# encima de V_HI. Da bordes suaves en el cabello en vez de un filo dentado.
V_HI, V_LO = 249.0, 222.0


def recortar_fondo(im: Image.Image) -> Image.Image:
    """Devuelve la imagen con el fondo claro convertido en transparencia."""
    rgb = np.asarray(im.convert("RGB")).astype(np.float64)
    h, w, _ = rgb.shape
    vmin = rgb.min(axis=2)

    # Solo cuenta como fondo lo que está conectado con el borde de la foto:
    # así la blusa blanca del escote no se vacía por ser igual de clara.
    claro = vmin >= UMBRAL_FONDO
    etiquetas, _ = ndimage.label(claro)

    # Semillas en los bordes superior y laterales, nunca en el inferior: la
    # ropa suele llegar hasta abajo y el relleno se colaría hacia el pecho.
    semillas = set(etiquetas[0, :]) | set(etiquetas[:, 0]) | set(etiquetas[:, -1])
    semillas.discard(0)
    fondo = np.isin(etiquetas, list(semillas))

    # Núcleos seguros de fondo y figura; entre ambos queda la banda a difuminar.
    nucleo_fondo = ndimage.binary_erosion(fondo, iterations=3, border_value=1)
    nucleo_figura = ndimage.binary_erosion(~fondo, iterations=3)
    banda = ~(nucleo_fondo | nucleo_figura)

    suave = np.clip((V_HI - vmin) / (V_HI - V_LO), 0.0, 1.0)
    alfa = np.where(nucleo_figura, 1.0, np.where(nucleo_fondo, 0.0, suave))
    alfa = (
        np.asarray(
            Image.fromarray((alfa * 255).astype(np.uint8)).filter(
                ImageFilter.GaussianBlur(0.6)
            ),
            dtype=np.float64,
        )
        / 255.0
    )
    alfa[nucleo_figura] = 1.0
    alfa[nucleo_fondo] = 0.0

    # Descontaminación: en los bordes el color viene mezclado con el blanco del
    # fondo y deja halo. Como C = a*F + (1-a)*B, se despeja F.
    fondo_rgb = np.array([253.0, 253.0, 254.0])
    borde = banda & (alfa > 0.15) & (alfa < 0.97)
    a3 = alfa[..., None]
    limpio = np.where(
        borde[..., None], (rgb - (1.0 - a3) * fondo_rgb) / np.maximum(a3, 1e-6), rgb
    )

    rgba = np.dstack([np.clip(limpio, 0, 255), alfa * 255]).astype(np.uint8)
    img = Image.fromarray(rgba, "RGBA")

    # Fuera el margen transparente sobrante: el encuadre lo decide el layout.
    caja = Image.fromarray((alfa > 0.03).astype(np.uint8) * 255).getbbox()
    margen = 8
    izq, arr, der, aba = caja
    return img.crop(
        (
            max(0, izq - margen),
            max(0, arr - margen),
            min(w, der + margen),
            min(h, aba + margen),
        )
    )


def _smoothstep(t):
    t = np.clip(t, 0.0, 1.0)
    return t * t * (3.0 - 2.0 * t)


def desvanecer(img: Image.Image, lateral: int = 160, inferior: int = 300) -> Image.Image:
    """Disuelve el retrato contra los bordes que el encuadre original corta.

    En esta foto el cabello toca el borde derecho desde el 58% de la altura y
    el izquierdo desde el 84%. Sin esto, el recorte termina en línea recta y
    se nota que la imagen está cortada.
    """
    w, h = img.size
    x = np.arange(w)[None, :]
    y = np.arange(h)[:, None]
    mascara = (
        _smoothstep(x / lateral)
        * _smoothstep((w - 1 - x) / lateral)
        * _smoothstep((h - 1 - y) / inferior)
    )
    out = np.asarray(img).copy()
    out[:, :, 3] = np.clip(out[:, :, 3] * mascara, 0, 255).astype(np.uint8)
    return Image.fromarray(out, "RGBA")


def exportar(retrato: Image.Image) -> None:
    def escalar(ancho):
        alto = round(retrato.height * ancho / retrato.width)
        return retrato.resize((ancho, alto), Image.LANCZOS)

    DESTINO.mkdir(parents=True, exist_ok=True)
    escalar(1200).save(DESTINO / "erika-portada.webp", "WEBP", quality=84, method=6)
    escalar(640).save(DESTINO / "erika-portada-sm.webp", "WEBP", quality=82, method=6)

    # El JPEG no admite transparencia, así que la tarjeta OG va sobre el mismo
    # color de lienzo del sitio para que se lea como fondo neutro.
    og = Image.new("RGB", (1200, 630), CANVAS)
    p = escalar(648)
    og.paste(p, (552, 90), p)
    og.save(DESTINO / "og-portada.jpg", "JPEG", quality=86, optimize=True, progressive=True)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("foto", help="ruta de la foto original")
    parser.add_argument("--lateral", type=int, default=160, help="px de disolución lateral")
    parser.add_argument("--inferior", type=int, default=300, help="px de disolución inferior")
    args = parser.parse_args()

    origen = pathlib.Path(args.foto)
    if not origen.exists():
        print(f"No encuentro la foto: {origen}", file=sys.stderr)
        return 1

    recorte = recortar_fondo(Image.open(origen))
    print(f"recortado -> {recorte.size[0]}x{recorte.size[1]}")
    exportar(desvanecer(recorte, args.lateral, args.inferior))

    for f in sorted(DESTINO.iterdir()):
        print(f"  {f.name:24} {f.stat().st_size / 1024:6.1f} KB")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
