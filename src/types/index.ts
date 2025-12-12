export interface ContactData {
  phone: string;
  email: string;
  portfolio: string;
  linkedin: string;
  github: string;
}

export interface ExperienceData {
  title: string;
  company: string;
  period: string;
  appHighlights: string;
  dataHighlights: string;
}

export interface ImpactData {
  icon: string;
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
  motivators: {
    title: string;
    items: string[];
  };
  limits: {
    title: string;
    items: string[];
  };
  closingStatement: string;
  shortVersion: string;
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
  experience: ExperienceData;
  education: EducationData[];
  testimonial?: TestimonialData;
  impacts: ImpactData[];
  skills: SkillsData;
  whatISeek: WhatISeekData;
  contact: ContactData;
  projects: ProjectData[];
}
