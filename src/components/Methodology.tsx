import { Section } from './Section';
import { methodologyPhases } from '../data/portfolioData';

/** Las seis fases como línea de tiempo: horizontal en escritorio, vertical en móvil. */
export function Methodology() {
  return (
    <Section
      id="metodologia"
      eyebrow="Metodología de trabajo"
      title="Entender, diagnosticar, diseñar, implementar, medir y mejorar"
      intro="Una secuencia que se adapta al alcance de cada proyecto y deja un resultado verificable en cada fase."
      tone="deep"
    >
      <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-2xl bg-brand-700/40">
        {methodologyPhases.map((phase) => (
          <li key={phase.number} className="reveal bg-ink p-7 sm:p-8">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl text-brand-500">{phase.number}</span>
              <h3 className="font-display text-xl text-brand-100">{phase.title}</h3>
            </div>

            <p className="mt-4 text-[15px] leading-relaxed text-brand-300">{phase.objective}</p>

            <ul className="mt-5 space-y-2">
              {phase.activities.map((activity) => (
                <li key={activity} className="flex gap-2.5 text-[14px] leading-snug text-brand-200/85">
                  <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 border-t border-brand-700/60 pt-4 text-[13px] leading-snug text-brand-400">
              <span className="font-medium text-brand-300">Resultado: </span>
              {phase.result}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
