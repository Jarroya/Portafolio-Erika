export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  includes?: string[];
  deliverables?: string[];
  examples?: string[];
  tools?: string[];
}

export interface ServiceLine {
  id: string;
  number: string;
  title: string;
  category: string;
  objective: string;
  services: ServiceItem[];
  highlight?: string;
}

export interface CommercialProduct {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  targetAudience: string;
  badge?: string;
  estimatedTimeline?: string;
}

export interface MethodologyPhase {
  number: string;
  title: string;
  objective: string;
  activities: string[];
  result: string;
}

export interface ServiceModality {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  idealFor: string[];
  roleExamples?: string[];
}

export interface ContactProfile {
  name: string;
  title: string;
  roleSubtitle: string;
  experienceYears: number;
  email: string;
  phone: string;
  whatsappNumber: string;
  linkedin: string;
  city: string;
  country: string;
}

export interface ExpertiseGroup {
  title: string;
  items: string[];
}

export interface HeroFact {
  value: string;
  label: string;
}
