import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { defaultContactProfile as profile } from '../data/portfolioData';
import { useScrolled } from '../hooks/useReveal';

const LINKS = [
  { href: '#perfil', label: 'Perfil' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#soluciones', label: 'Soluciones' },
  { href: '#metodologia', label: 'Metodología' },
  { href: '#colaboracion', label: 'Colaboración' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(24);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-canvas/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="shell flex items-center justify-between h-18 py-4" aria-label="Navegación principal">
        <a href="#inicio" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-ink text-brand-300 font-display text-sm font-semibold">
            EV
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[14px] sm:text-[15px] font-semibold text-ink">{profile.name}</span>
            <span className="block text-[11px] text-ink-faint">{profile.title}</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-brand-100 hover:bg-brand-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Hablemos
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-xl border border-line bg-white/70 text-ink"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div id="menu-movil" className="lg:hidden border-t border-line bg-canvas/98 backdrop-blur-md">
          <div className="shell py-4 flex flex-col">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] text-ink-soft border-b border-line/70 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-brand-100"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Hablemos
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
