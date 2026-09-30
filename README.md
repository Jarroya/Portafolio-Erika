# Portafolio de servicios — Erika J. Vásquez

Landing page de consultoría ambiental, sostenibilidad y sistemas de gestión.
React 19 + Vite + Tailwind CSS 4.

## Cómo trabajar con el proyecto

```bash
npm install     # una sola vez
npm run dev     # abre http://localhost:3000
npm run build   # genera la carpeta dist/ lista para publicar
npm run preview # revisa el resultado del build
```

Para publicar: sube la carpeta `dist/` a cualquier hosting estático (Netlify,
Vercel, Hostinger, GitHub Pages). No requiere servidor ni base de datos.

## Antes de publicar

Los datos de contacto son provisionales. Edita `src/data/portfolioData.ts`,
bloque `defaultContactProfile`:

| Campo | Qué poner |
|---|---|
| `email` | Correo profesional real |
| `phone` | Teléfono visible en el sitio |
| `whatsappNumber` | Solo dígitos con código de país, ej. `573001234567` |
| `linkedin` | URL completa del perfil |
| `city` | Ciudad base |

También conviene revisar en `index.html` la etiqueta `<link rel="canonical">`
y cambiarla por el dominio definitivo.

## Estructura

```
src/
  App.tsx                 Orden de las secciones y estado compartido
  data/portfolioData.ts   Todo el contenido editable del portafolio
  types.ts                Tipos del contenido
  lib/contact.ts          Enlaces de correo y WhatsApp prellenados
  hooks/useReveal.ts      Aparición al hacer scroll y bloqueo de scroll
  components/
    Navbar.tsx            Barra fija con anclas y menú móvil
    Hero.tsx              Portada con retrato y franja de confianza
    Profile.tsx           Perfil y áreas de experiencia
    Services.tsx          Seis líneas de servicio (tarjetas)
    ServiceDrawer.tsx     Panel lateral con el detalle de cada línea
    Solutions.tsx         Ocho soluciones con alcance cerrado
    Methodology.tsx       Las seis fases de trabajo
    Collaboration.tsx     Modalidades, alianza B2B y clientes objetivo
    Differential.tsx      Diferencial profesional y enfoque
    Contact.tsx           Datos, WhatsApp y formulario
    Footer.tsx
public/img/               Retrato tratado (webp, jpg) e imagen para compartir
```

## Cómo editar el contenido

Casi todo el texto vive en `src/data/portfolioData.ts`. Para agregar un servicio
dentro de una línea, añade un objeto al arreglo `services` de esa línea; el panel
lateral y el contador de la tarjeta se actualizan solos. Lo mismo aplica para
`commercialProducts`, `methodologyPhases` y `serviceModalities`.

## Formulario de contacto

El formulario no usa servidor: arma un correo con los datos ordenados y lo abre
en el gestor de correo del visitante. Si más adelante quieres recibir los envíos
en una bandeja sin depender de eso, se puede conectar a Formspree, Web3Forms o
similar cambiando solo el `handleSubmit` de `src/components/Contact.tsx`.

## Sobre el retrato de portada

`public/img/erika-portada.webp` es la foto original con el fondo reemplazado por
un degradado de la paleta, encuadre de retrato y corrección de iluminación y
color. El rostro y la vestimenta no fueron alterados.
