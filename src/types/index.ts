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
}

export interface KeyFeature {
  title: string;
  content: string;
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
}

export interface FullData {
  name: string;
  title: string;
  profile: string;
  experience: ExperienceData;
  impacts: ImpactData[];
  skills: SkillsData;
  whatISeek: WhatISeekData;
  contact: ContactData;
  projects: ProjectData[];
}
