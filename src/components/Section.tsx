import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  tone?: 'canvas' | 'soft' | 'deep';
  align?: 'left' | 'center';
}

const TONES: Record<NonNullable<SectionProps['tone']>, string> = {
  canvas: 'bg-canvas',
  soft: 'bg-brand-50',
  deep: 'bg-ink text-brand-100',
};

/** Envoltura común: mismo ritmo vertical, encabezado y ancho de lectura en todas las secciones. */
export function Section({ id, eyebrow, title, intro, children, tone = 'canvas', align = 'left' }: SectionProps) {
  const dark = tone === 'deep';

  return (
    <section id={id} className={`${TONES[tone]} py-20 sm:py-24 lg:py-28`}>
      <div className="shell">
        <header className={`reveal max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
          <p className={`eyebrow ${dark ? 'text-brand-400' : ''}`}>{eyebrow}</p>
          <h2
            className={`mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] ${dark ? 'text-brand-100' : 'text-ink'}`}
            style={{ textWrap: 'balance' }}
          >
            {title}
          </h2>
          {intro && (
            <p className={`mt-5 text-base sm:text-lg leading-relaxed ${dark ? 'text-brand-300' : 'text-ink-soft'}`}>
              {intro}
            </p>
          )}
        </header>

        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
