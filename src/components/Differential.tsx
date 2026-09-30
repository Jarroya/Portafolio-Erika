import { Plus, Check } from 'lucide-react';
import { Section } from './Section';
import { differentialEquation, differentialOutcomes, differentialPillars } from '../data/portfolioData';

export function Differential() {
  return (
    <Section
      id="diferencial"
      eyebrow="Diferencial profesional"
      title="Seis dimensiones que normalmente se gestionan por separado"
      intro="Integrarlas es lo que permite pasar de generar documentos a sostener decisiones."
    >
      {/* La ecuación del diferencial */}
      <ul className="reveal flex flex-wrap items-center justify-center gap-x-3 gap-y-4 rounded-3xl border border-brand-300 bg-brand-50 px-6 py-10">
        {differentialEquation.map((term, index) => (
          <li key={term} className="flex items-center gap-3">
            {index > 0 && <Plus className="w-4 h-4 text-brand-500" aria-hidden="true" />}
            <span className="font-display text-lg sm:text-xl text-ink">{term}</span>
          </li>
        ))}
      </ul>

      <div className="mt-14 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-6 reveal">
          <h3 className="eyebrow">Lo que esto permite lograr</h3>
          <ul className="mt-6 space-y-3.5">
            {differentialOutcomes.map((outcome) => (
              <li key={outcome} className="flex gap-3 text-[15px] leading-snug text-ink-soft">
                <Check className="mt-0.5 w-4 h-4 shrink-0 text-brand-600" aria-hidden="true" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 reveal">
          <h3 className="eyebrow">Enfoque de trabajo</h3>
          <dl className="mt-6 divide-y divide-line border-y border-line">
            {differentialPillars.map((pillar) => (
              <div key={pillar.name} className="py-5 sm:flex sm:gap-6">
                <dt className="font-display text-lg text-ink sm:w-44 sm:shrink-0">{pillar.name}</dt>
                <dd className="mt-1.5 sm:mt-0 text-[14px] leading-relaxed text-ink-soft">{pillar.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
