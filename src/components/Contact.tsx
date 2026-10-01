import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { defaultContactProfile as profile, serviceLines, commercialProducts, strategicAlliances } from '../data/portfolioData';
import { whatsappUrl } from '../lib/contact';

interface ContactProps {
  topic: string;
  onTopicChange: (topic: string) => void;
}

const OPTIONS = [
  ...serviceLines.map((line) => line.title),
  ...commercialProducts.map((product) => product.title),
  ...strategicAlliances.map((alliance) => alliance.title),
  'Apoyo técnico para firma consultora',
  'Otro tema',
];

const INPUT =
  'w-full rounded-xl border border-line bg-canvas px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint/70 focus:border-brand-500 focus:bg-white outline-none transition-colors';

/**
 * El formulario redacta un correo con los datos ya ordenados y lo abre en el
 * gestor de correo del visitante: no requiere servidor ni servicio externo.
 */
export function Contact({ topic, onTopicChange }: ContactProps) {
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = topic ? 'Consulta: ' + topic : 'Consulta de servicios de consultoría ambiental';
    const body = [
      'Nombre: ' + name,
      'Organización: ' + (org || 'No indicada'),
      'Correo de contacto: ' + email,
      'Tema de interés: ' + (topic || 'No indicado'),
      '',
      'Mensaje:',
      message,
    ].join('\n');

    window.location.href =
      'mailto:' + profile.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    setSent(true);
  };

  return (
    <section id="contacto" className="bg-brand-50 py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* min-w-0: sin esto el elemento de rejilla no baja de su ancho máximo
              y el texto con truncate de los datos de contacto desborda la página. */}
          <div className="lg:col-span-5 min-w-0 reveal">
            <p className="eyebrow">Contacto</p>
            <h2 className="mt-4 text-3xl sm:text-4xl leading-[1.12] text-ink" style={{ textWrap: 'balance' }}>
              ¿Tienes un proyecto ambiental que requiere apoyo técnico?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Conversemos sobre el alcance, los entregables y la solución que necesita tu organización.
              Respondo con una propuesta ajustada a tu contexto.
            </p>

            <ul className="mt-10 space-y-4">
              <ContactRow icon={Mail} label="Correo" value={profile.email} href={'mailto:' + profile.email} />
              <ContactRow icon={Phone} label="Teléfono / WhatsApp" value={profile.phone} href={whatsappUrl()} />
              <ContactRow icon={Linkedin} label="LinkedIn" value="Perfil profesional" href={profile.linkedin} />
              <ContactRow icon={MapPin} label="Ubicación" value={profile.city + ' · ' + profile.country} />
            </ul>

            <a
              href={whatsappUrl(topic || undefined)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-500 bg-white px-6 py-3.5 text-sm font-medium text-ink hover:bg-brand-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-brand-600" aria-hidden="true" />
              Escribir por WhatsApp
            </a>
          </div>

          <div className="lg:col-span-7 reveal">
            <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-white p-7 sm:p-9">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nombre" required>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className={INPUT}
                    placeholder="Tu nombre"
                  />
                </Field>

                <Field label="Organización">
                  <input
                    type="text"
                    value={org}
                    onChange={(event) => setOrg(event.target.value)}
                    className={INPUT}
                    placeholder="Empresa o firma consultora"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Correo electrónico" required>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className={INPUT}
                    placeholder="nombre@empresa.com"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Tema de interés">
                  <select value={topic} onChange={(event) => onTopicChange(event.target.value)} className={INPUT}>
                    <option value="">Selecciona un tema</option>
                    {OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Mensaje" required>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className={INPUT + ' resize-y'}
                    placeholder="Cuéntame brevemente la necesidad, el sector y el plazo estimado."
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-medium text-brand-100 hover:bg-brand-700 transition-colors"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                Enviar consulta
              </button>

              <p className="mt-4 text-center text-[13px] leading-snug text-ink-faint" aria-live="polite">
                {sent
                  ? 'Se abrió tu gestor de correo con el mensaje listo para enviar. Si no ocurrió nada, escribe a ' +
                    profile.email
                  : 'El botón abre tu gestor de correo con el mensaje ya redactado.'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[13px] font-medium text-ink-soft mb-2">
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </span>
      {children}
    </label>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid place-items-center w-10 h-10 shrink-0 rounded-xl bg-white border border-line text-brand-700">
        <Icon className="w-4 h-4" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] uppercase tracking-wider text-ink-faint">{label}</span>
        <span className="block text-[15px] text-ink truncate">{value}</span>
      </span>
    </>
  );

  const external = href?.startsWith('http');

  return (
    <li>
      {href ? (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="flex items-center gap-4 hover:opacity-80 transition-opacity"
        >
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-4">{content}</div>
      )}
    </li>
  );
}
