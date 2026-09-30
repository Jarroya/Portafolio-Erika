import { ArrowRight, MessageCircle } from 'lucide-react';
import { defaultContactProfile as profile, heroFacts } from '../data/portfolioData';

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* Fondo: lavado de color de la paleta, sin texturas que compitan con el retrato. */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60rem 40rem at 78% 8%, rgba(152, 201, 163, 0.30) 0%, rgba(250, 251, 248, 0) 62%), radial-gradient(48rem 36rem at 4% 84%, rgba(237, 238, 201, 0.55) 0%, rgba(250, 251, 248, 0) 60%)',
        }}
        aria-hidden="true"
      />

      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Retrato: primero en móvil, a la derecha en escritorio. */}
          <div className="lg:col-span-5 lg:order-2 reveal">
            <Portrait />
          </div>

          <div className="lg:col-span-7 lg:order-1 reveal">
            <p className="eyebrow">
              {profile.name} · {profile.title}
            </p>

            <h1
              className="mt-5 text-[2.15rem] sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-ink"
              style={{ textWrap: 'balance' }}
            >
              Gestión ambiental que se convierte en{' '}
              <span className="relative inline-block">
                <span className="relative z-10">decisiones</span>
                <span className="absolute inset-x-0 bottom-[0.12em] h-[0.22em] bg-brand-400/80 -z-0 rounded-full" aria-hidden="true" />
              </span>
              .
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-ink-soft max-w-xl">
              Acompaño a empresas y firmas consultoras a diseñar, implementar, documentar y mejorar
              soluciones ambientales, de sostenibilidad, sistemas de gestión y gestión del riesgo.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-brand-100 hover:bg-brand-700 transition-colors"
              >
                Ver líneas de servicio
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-500/50 bg-white/70 px-7 py-4 text-sm font-medium text-ink hover:border-brand-600 hover:bg-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-brand-600" aria-hidden="true" />
                Conversemos sobre tu proyecto
              </a>
            </div>
          </div>
        </div>

        {/* Franja de confianza: cuatro datos que sostienen la promesa de la portada. */}
        <dl className="reveal mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {heroFacts.map((fact) => (
            <div key={fact.label} className="bg-canvas px-5 py-6 sm:px-7 sm:py-7">
              <dt className="font-display text-3xl sm:text-4xl text-brand-600">{fact.value}</dt>
              <dd className="mt-2 text-[13px] leading-snug text-ink-soft">{fact.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:max-w-none">
      <picture>
        {/* Retrato recortado: sin marco ni fondo, se apoya directamente en la portada. */}
        {/* En móvil basta una versión ligera: el retrato nunca pasa de ~304px. */}
        <source media="(max-width: 640px)" srcSet="/img/erika-portada-sm.webp" type="image/webp" />
        <img
          src="/img/erika-portada.webp"
          width={1200}
          height={1487}
          alt="Erika J. Vásquez, ingeniera ambiental y consultora en sostenibilidad"
          className="relative w-full h-auto object-contain"
          fetchPriority="high"
        />
      </picture>
    </div>
  );
}
