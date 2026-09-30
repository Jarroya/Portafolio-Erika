import { defaultContactProfile as profile } from '../data/portfolioData';

const KEYWORDS = [
  'Gestión ambiental',
  'Sistemas ISO',
  'Economía circular',
  'Cambio climático',
  'Huella de carbono',
  'Gestión del riesgo',
  'Sostenibilidad',
  'Transformación digital',
];

export function Footer() {
  return (
    <footer className="bg-ink text-brand-300">
      <div className="shell py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl text-brand-100">{profile.name}</p>
            <p className="mt-2 text-sm text-brand-400 max-w-xs">{profile.roleSubtitle}</p>
          </div>

          <ul className="flex flex-wrap gap-x-4 gap-y-2 md:max-w-md md:justify-end">
            {KEYWORDS.map((keyword) => (
              <li key={keyword} className="text-[13px] text-brand-400">
                {keyword}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 border-t border-brand-700/50 pt-6 text-[13px] text-brand-400">
          © {new Date().getFullYear()} {profile.name} · Consultoría ambiental y sostenibilidad.
        </p>
      </div>
    </footer>
  );
}
