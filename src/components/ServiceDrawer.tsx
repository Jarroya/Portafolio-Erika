import { useEffect, useRef } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import type { ServiceLine, ServiceItem } from '../types';
import { useScrollLock } from '../hooks/useReveal';

interface ServiceDrawerProps {
  line: ServiceLine | null;
  onClose: () => void;
  onRequest: (topic: string) => void;
}

/** Panel lateral con el detalle completo de una línea de servicio. */
export function ServiceDrawer({ line, onClose, onRequest }: ServiceDrawerProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = line !== null;
  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!line) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby="drawer-titulo">
      <button
        type="button"
        className="absolute inset-0 w-full bg-ink/45 backdrop-blur-[2px] animate-[fadeIn_0.2s_ease-out]"
        onClick={onClose}
        aria-label="Cerrar detalle de la línea de servicio"
      />

      <aside className="absolute inset-y-0 right-0 w-full max-w-2xl bg-canvas shadow-2xl flex flex-col animate-[slideIn_0.28s_cubic-bezier(0.16,1,0.3,1)]">
        <header className="shrink-0 border-b border-line bg-brand-50 px-6 sm:px-9 py-6">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="eyebrow">
                Línea {line.number} · {line.category}
              </p>
              <h2 id="drawer-titulo" className="mt-3 font-display text-2xl sm:text-3xl leading-tight text-ink">
                {line.title}
              </h2>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="shrink-0 grid place-items-center w-10 h-10 rounded-full border border-line bg-white text-ink-soft hover:text-ink hover:border-brand-500 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">{line.objective}</p>
        </header>

        <div className="flex-1 overflow-y-auto px-6 sm:px-9 py-8">
          {line.highlight && (
            <p className="mb-8 flex gap-3 rounded-2xl border border-brand-400/60 bg-brand-100/60 p-5 text-[15px] leading-relaxed text-ink">
              <Sparkles className="mt-0.5 w-5 h-5 shrink-0 text-brand-700" aria-hidden="true" />
              <span>{line.highlight}</span>
            </p>
          )}

          <ol className="space-y-9">
            {line.services.map((service) => (
              <li key={service.id}>
                <ServiceDetail service={service} />
              </li>
            ))}
          </ol>
        </div>

        <footer className="shrink-0 border-t border-line bg-white px-6 sm:px-9 py-5">
          <button
            type="button"
            onClick={() => onRequest(line.title)}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-medium text-brand-100 hover:bg-brand-700 transition-colors"
          >
            Solicitar apoyo en esta línea
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </footer>
      </aside>
    </div>
  );
}

function ServiceDetail({ service }: { service: ServiceItem }) {
  return (
    <article>
      <div className="flex items-baseline gap-3">
        <span className="font-display text-sm text-brand-600">{service.id}</span>
        <h3 className="font-display text-lg text-ink">{service.title}</h3>
      </div>
      {service.description && (
        <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{service.description}</p>
      )}

      <DetailList label="Incluye" items={service.includes} />
      <DetailList label="Entregables" items={service.deliverables} />
      <DetailList label="Ejemplos" items={service.examples} />

      {service.tools && service.tools.length > 0 && (
        <div className="mt-4">
          <p className="eyebrow text-[10px]">Herramientas</p>
          <ul className="mt-2.5 flex flex-wrap gap-2">
            {service.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-brand-300 bg-white px-3 py-1.5 text-[13px] text-ink-soft"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

function DetailList({ label, items }: { label: string; items?: string[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-4">
      <p className="eyebrow text-[10px]">{label}</p>
      <ul className="mt-2.5 space-y-2 border-l border-brand-300 pl-4">
        {items.map((item) => (
          <li key={item} className="text-[15px] leading-snug text-ink-soft">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
