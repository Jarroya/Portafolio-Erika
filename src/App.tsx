import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { Alliances } from './components/Alliances';
import { Methodology } from './components/Methodology';
import { Collaboration } from './components/Collaboration';
import { Differential } from './components/Differential';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useReveal } from './hooks/useReveal';
import { scrollToContact } from './lib/contact';

export default function App() {
  // Tema que el visitante eligió en servicios o soluciones: llega preseleccionado
  // al formulario de contacto para que no tenga que explicarlo de nuevo.
  const [topic, setTopic] = useState('');

  useReveal();

  const requestTopic = (nextTopic: string) => {
    setTopic(nextTopic);
    scrollToContact();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#servicios"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-brand-100"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main className="flex-1">
        <Hero />
        <Profile />
        <Services onRequest={requestTopic} />
        <Solutions onRequest={requestTopic} />
        <Alliances onRequest={requestTopic} />
        <Methodology />
        <Collaboration onRequest={requestTopic} />
        <Differential />
        <Contact topic={topic} onTopicChange={setTopic} />
      </main>

      <Footer />
    </div>
  );
}
