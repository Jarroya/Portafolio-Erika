import { defaultContactProfile } from '../data/portfolioData';

/** Enlace de WhatsApp con un mensaje ya redactado según el interés del visitante. */
export function whatsappUrl(topic?: string): string {
  const base = topic
    ? `Hola ${defaultContactProfile.name.split(' ')[0]}, vi tu portafolio y me interesa: ${topic}.`
    : `Hola ${defaultContactProfile.name.split(' ')[0]}, vi tu portafolio y quisiera conversar sobre un proyecto ambiental.`;
  return `https://wa.me/${defaultContactProfile.whatsappNumber}?text=${encodeURIComponent(base)}`;
}

/** Correo con asunto y cuerpo prellenados, sin depender de un servidor. */
export function mailtoUrl(topic?: string): string {
  const subject = topic ? `Consulta sobre ${topic}` : 'Consulta de servicios de consultoría ambiental';
  const body = [
    'Hola Erika,',
    '',
    topic ? `Escribo porque me interesa: ${topic}.` : 'Escribo porque me interesa conversar sobre un proyecto ambiental.',
    '',
    'Organización:',
    'Sector:',
    'Necesidad o alcance estimado:',
    '',
    'Quedo atento(a).',
  ].join('\n');
  return `mailto:${defaultContactProfile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Lleva el foco a la sección de contacto dejando la barra fija sin tapar el título. */
export function scrollToContact(): void {
  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
