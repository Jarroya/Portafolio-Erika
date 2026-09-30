import { ArrowRight } from 'lucide-react';
import { Section } from './Section';
import { serviceModalities, b2bSynergy, clientSegments } from '../data/portfolioData';

interface CollaborationProps {
  onRequest: (topic: string) => void;
}

export function Collaboration({ onRequest }: CollaborationProps) {
  return (
    <Section
      id="colaboracion"
      eyebrow="Modalidades de colaboración"
      title="Cuatro formas de trabajar juntos"
      intro="Desde un proyecto cerrado hasta una bolsa de horas para resolver consultas puntuales. La modalidad se elige según la necesidad, no al revés."
      tone="soft"
    >
      <ul className="grid sm:grid-cols-2 gap-5">
        {serviceModalities.map((modality) => (
          <li key={modality.id} className="reveal rounded-2xl border border-line bg-white p-7 flex flex-col">
            <h3 className="font-display text-xl text-ink">{modality.title}</h3>
            <p className="mt-1.5 text-[13px] font-medium text-brand-700">{modality.subtitle}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{modality.description}</p>

            <div className="mt-5">
              <p className="eyebrow text-[10px]">Ideal para</p>
              <ul className="mt-3 space-y-2">
                {modality.idealFor.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[14px] leading-snug text-ink-soft">
                    <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-brand-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {modality.roleExamples && (
              <div className="mt-5 border-t border-line pt-4">
                <p className="eyebrow text-[10px]">Puedo participar como</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {modality.roleExamples.map((role) => (
                    <li
                      key={role}
                      className="rounded-full border border-brand-300 bg-brand-50 px-3 py-1.5 text-[13px] text-ink-soft"
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              type="button"
              onClick={() => onRequest(modality.title)}
              className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-ink transition-colors self-start"
            >
              Consultar esta modalidad
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>

      {/* Modelo de alianza con firmas consultoras */}
      <div className="reveal mt-14 rounded-3xl border border-brand-300 bg-white p-8 sm:p-10">
        <h3 className="font-display text-2xl text-ink">Modelo de alianza con firmas consultoras</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft max-w-2xl">
          Una colaboración que amplía la capacidad de ejecución de la firma sin sumar perfiles
          permanentes a su estructura de costos.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <SynergyColumn title="La firma consultora aporta" items={b2bSynergy.consultoraFirm} />
          <SynergyColumn title="Yo aporto" items={b2bSynergy.specializedConsultant} accent />
        </div>

        <p className="mt-8 rounded-2xl bg-brand-100/70 p-6 text-[15px] leading-relaxed text-ink">
          <span className="font-medium">Resultado: </span>
          {b2bSynergy.result}
        </p>
      </div>

      {/* Clientes objetivo */}
      <div className="reveal mt-14">
        <h3 className="eyebrow">Con quién trabajo</h3>
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientSegments.map((segment) => (
            <li key={segment.title} className="border-t-2 border-brand-400 pt-5">
              <h4 className="font-display text-lg text-ink">{segment.title}</h4>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft">{segment.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function SynergyColumn({ title, items, accent }: { title: string; items: string[]; accent?: boolean }) {
  return (
    <div className={`rounded-2xl p-6 ${accent ? 'bg-brand-50 border border-brand-300' : 'bg-canvas border border-line'}`}>
      <h4 className="font-display text-lg text-ink">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-[14px] leading-snug text-ink-soft">
            <span
              className={`mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full ${accent ? 'bg-brand-600' : 'bg-brand-300'}`}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
