import { useState } from 'react';
import { ClipboardCheck, ShieldCheck, Recycle, CloudSun, FileText, BarChart3, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section } from './Section';
import { ServiceDrawer } from './ServiceDrawer';
import { serviceLines } from '../data/portfolioData';
import type { ServiceLine } from '../types';

const ICONS: Record<string, LucideIcon> = {
  'gestion-ambiental': ClipboardCheck,
  'sistemas-iso': ShieldCheck,
  'residuos-circular': Recycle,
  'cambio-climatico': CloudSun,
  'programas-documentacion': FileText,
  'riesgo-sostenibilidad-digital': BarChart3,
};

interface ServicesProps {
  onRequest: (topic: string) => void;
}

export function Services({ onRequest }: ServicesProps) {
  const [active, setActive] = useState<ServiceLine | null>(null);

  const handleRequest = (topic: string) => {
    setActive(null);
    onRequest(topic);
  };

  return (
    <>
      <Section
        id="servicios"
        eyebrow="Líneas de servicio"
        title="Seis frentes de trabajo, un mismo criterio técnico"
        intro="Cada línea agrupa los servicios que puedo desarrollar de forma independiente o combinada. Abre cualquiera para ver el alcance, lo que incluye y los entregables."
        tone="soft"
      >
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceLines.map((line) => {
            const Icon = ICONS[line.id] ?? ClipboardCheck;

            return (
              <li key={line.id} className="reveal">
                <button
                  type="button"
                  onClick={() => setActive(line)}
                  className="group flex h-full w-full flex-col text-left rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:shadow-[0_18px_40px_-24px_rgba(20,40,31,0.35)]"
                  aria-haspopup="dialog"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid place-items-center w-12 h-12 rounded-xl bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm text-ink-faint">{line.number}</span>
                  </div>

                  <h3 className="mt-6 font-display text-xl leading-snug text-ink">{line.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft line-clamp-4">{line.objective}</p>

                  <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700">
                    Ver {line.services.length} servicios
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </Section>

      <ServiceDrawer line={active} onClose={() => setActive(null)} onRequest={handleRequest} />
    </>
  );
}
