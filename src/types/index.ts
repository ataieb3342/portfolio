import type { IconName } from '@/components/ui/Icon';

export interface ContactData {
  phone: string;
  email: string;
  portfolio: string;
  linkedin: string;
  github: string;
}

/** Un volet du poste : un intitulé, une icône et son descriptif. */
export interface ExperienceAxis {
  icon: IconName;
  label: string;
  body: string;
}

export interface ExperienceData {
  id: string;
  title: string;
  company: string;
  period: string;
  /** Type de contrat, affiché en étiquette. */
  contract: string;
  /** Une phrase de cadrage sous l'intitulé. */
  summary: string;
  axes: ExperienceAxis[];
  /** Faits marquants listés sous les volets. */
  highlights?: string[];
  /** Identifiant du témoignage rattaché, le cas échéant. */
  testimonial?: TestimonialData;
}

export interface ImpactData {
  /** Clé du jeu d'icônes — voir `src/components/ui/Icon.tsx`. */
  icon: IconName;
  title: string;
  description: string;
}

export interface SkillsData {
  data: string[];
  dev: string[];
  tools: string[];
}

export interface WhatISeekData {
  title: string;
  subtitle: string;
  criteria: string[];
  closingStatement: string;
}

export interface TechnicalDetail {
  title: string;
  content: string;
}

export interface ProjectMetrics {
  users?: string;
  activeUsers?: string;
  status?: string;
  scope?: string;
  team?: string;
  impact?: string;
}

export interface KeyFeature {
  title: string;
  content: string;
}

export interface StrategyDocument {
  type: 'pdf' | 'html' | 'link';
  title: string;
  url: string;
  description?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  technos: string[];
  screenshots: string[];
  thumbnail: string;
  category: string;
  link?: string;
  metrics?: ProjectMetrics;
  keyFeatures?: KeyFeature[];
  technicalDetails?: TechnicalDetail[];
  disclaimer?: string;
  architectureFlow?: string;
  iframeUrl?: string; // URL pour afficher le projet dans une iframe interactive
  strategyDocuments?: StrategyDocument[]; // Documents stratégiques (PDF, HTML, etc.)
  relatedProjects?: string[]; // IDs des projets liés
}

export interface EducationData {
  degree: string;
  school: string;
  period: string;
  details?: string;
}

export interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface FullData {
  name: string;
  title: string;
  profile: string;
  experiences: ExperienceData[];
  education: EducationData[];
  impacts: ImpactData[];
  skills: SkillsData;
  whatISeek: WhatISeekData;
  contact: ContactData;
  projects: ProjectData[];
}
