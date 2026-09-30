import { Check } from 'lucide-react';
import { Section } from './Section';
import { defaultContactProfile as profile, expertiseGroups, valueForFirms } from '../data/portfolioData';

export function Profile() {
  return (
    <Section
      id="perfil"
      eyebrow="Perfil profesional"
      title="Soluciones técnicas para gestión ambiental, sistemas de gestión, sostenibilidad y cambio climático"
      intro={`Ingeniera ambiental con más de ${profile.experienceYears} años de experiencia en gestión ambiental, Sistemas Integrados de Gestión y sostenibilidad trabajando con organizaciones de diversos sectores económicos.`}
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 reveal">
          <p className="text-base leading-relaxed text-ink-soft">
            Mi experiencia combina el componente técnico ambiental con la gestión organizacional, el
            cumplimiento de requisitos legales, la gestión del riesgo, el cambio climático, la mejora
            continua y la transformación digital de procesos HSEQ.
          </p>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Trabajo bajo un enfoque práctico: convertir requisitos ambientales y de gestión en
            herramientas que permitan a las organizaciones mejorar su desempeño, reducir riesgos,
            fortalecer el cumplimiento y tomar decisiones basadas en información.
          </p>

          <div className="mt-10 rounded-2xl border border-brand-300/60 bg-brand-50 p-7">
            <h3 className="font-display text-xl text-ink">¿Qué aporto a una firma consultora?</h3>
            <ul className="mt-5 space-y-3">
              {valueForFirms.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-snug text-ink-soft">
                  <Check className="mt-0.5 w-4 h-4 shrink-0 text-brand-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7 reveal">
          <h3 className="eyebrow">Áreas de experiencia</h3>
          <div className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-9">
            {expertiseGroups.map((group) => (
              <div key={group.title}>
                <h4 className="font-display text-lg text-ink border-b border-line pb-3">{group.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[15px] leading-snug text-ink-soft">
                      <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-brand-400" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
