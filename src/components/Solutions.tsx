import { useState } from 'react';
import { ChevronDown, ArrowRight, Clock } from 'lucide-react';
import { Section } from './Section';
import { commercialProducts } from '../data/portfolioData';

interface SolutionsProps {
  onRequest: (topic: string) => void;
}

/** Productos comerciales: alcance cerrado, entregables visibles bajo demanda. */
export function Solutions({ onRequest }: SolutionsProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Section
      id="soluciones"
      eyebrow="Soluciones definidas"
      title="Paquetes con alcance, entregables y tiempo estimado"
      intro="Para quien prefiere contratar un resultado concreto en lugar de horas. Cada solución puede ajustarse al tamaño y al sector de la organización."
    >
      <ul className="grid md:grid-cols-2 gap-5">
        {commercialProducts.map((product) => {
          const isOpen = expanded === product.id;

          return (
            <li
              key={product.id}
              className="reveal flex flex-col rounded-2xl border border-line bg-white p-7 transition-colors hover:border-brand-400"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-sm text-brand-600">
                  {String(product.number).padStart(2, '0')}
                </span>
                {product.badge && (
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-[11px] font-medium tracking-wide text-brand-700">
                    {product.badge}
                  </span>
                )}
              </div>

              <h3 className="mt-4 font-display text-xl leading-snug text-ink">{product.title}</h3>
              <p className="mt-1.5 text-[13px] font-medium text-brand-700">{product.subtitle}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{product.description}</p>

              {product.estimatedTimeline && (
                <p className="mt-5 inline-flex items-center gap-2 text-[13px] text-ink-faint">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  Duración estimada: {product.estimatedTimeline}
                </p>
              )}

              <button
                type="button"
                onClick={() => setExpanded(isOpen ? null : product.id)}
                className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-5 text-sm font-medium text-ink"
                aria-expanded={isOpen}
                aria-controls={`entregables-${product.id}`}
              >
                Entregables
                <ChevronDown
                  className={`w-4 h-4 text-brand-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {isOpen && (
                <div id={`entregables-${product.id}`} className="mt-4">
                  <ul className="space-y-2 border-l border-brand-300 pl-4">
                    {product.deliverables.map((item) => (
                      <li key={item} className="text-[14px] leading-snug text-ink-soft">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[13px] leading-snug text-ink-faint">
                    <span className="font-medium text-ink-soft">Dirigido a:</span> {product.targetAudience}
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={() => onRequest(product.title)}
                className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-ink transition-colors self-start"
              >
                Solicitar esta solución
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
