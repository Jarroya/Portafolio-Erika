import { ArrowRight, Gauge, FileCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section } from './Section';
import { strategicAlliances, alliancesNote } from '../data/portfolioData';

const ICONS: Record<string, LucideIcon> = {
  'mediciones-monitoreos': Gauge,
  'tramites-ambientales': FileCheck,
};

interface AlliancesProps {
  onRequest: (topic: string) => void;
}

export function Alliances({ onRequest }: AlliancesProps) {
  return (
    <Section
      id="alianzas"
      eyebrow="Alianzas estratégicas"
      title="Un solo interlocutor, una red de especialistas"
      intro="Hay servicios que exigen laboratorios acreditados o profesionales con competencia específica. Los coordino con aliados de confianza para que la empresa no tenga que gestionar varios proveedores en paralelo ni repetir el contexto en cada uno."
      tone="soft"
    >
      <ul className="grid lg:grid-cols-2 gap-5">
        {strategicAlliances.map((alliance) => {
          const Icon = ICONS[alliance.id] ?? Gauge;

          return (
            <li
              key={alliance.id}
              className="reveal flex flex-col rounded-2xl border border-line bg-white p-7 sm:p-8"
            >
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-brand-100 text-brand-700">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </span>

              <h3 className="mt-6 font-display text-xl leading-snug text-ink">{alliance.title}</h3>
              <p className="mt-1.5 text-[13px] font-medium text-brand-700">{alliance.subtitle}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{alliance.description}</p>

              {/* Se separa lo que ejecuta el aliado de lo que aporto yo: evita
                  que el visitante asuma que las mediciones las hago en persona. */}
              <RoleList label="Alcance del aliado" items={alliance.scope} />
              <RoleList label="Mi papel en el proceso" items={alliance.myRole} accent />

              <button
                type="button"
                onClick={() => onRequest(alliance.title)}
                className="mt-auto pt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-brand-700 hover:text-ink transition-colors"
              >
                Consultar esta alianza
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </li>
          );
        })}
      </ul>

      <p className="reveal mt-10 rounded-2xl border border-brand-300 bg-white p-6 sm:p-8 text-[15px] leading-relaxed text-ink">
        <span className="font-medium">Cómo se reparte la responsabilidad: </span>
        {alliancesNote}
      </p>
    </Section>
  );
}

function RoleList({ label, items, accent }: { label: string; items: string[]; accent?: boolean }) {
  return (
    <div className={accent ? 'mt-6 border-t border-line pt-5' : 'mt-6'}>
      <p className="eyebrow text-[10px]">{label}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-[14px] leading-snug text-ink-soft">
            <span
              className={`mt-1.5 shrink-0 rounded-full ${accent ? 'w-1.5 h-1.5 bg-brand-600' : 'w-1 h-1 bg-brand-400'}`}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
