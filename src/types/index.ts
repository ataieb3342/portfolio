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

export interface TechnicalDetail {
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
  technicalDetails?: TechnicalDetail[];
  disclaimer?: string;
  architectureFlow?: string;
}

export interface FullData {
  name: string;
  title: string;
  profile: string;
  experience: ExperienceData;
  impacts: ImpactData[];
  skills: SkillsData;
  contact: ContactData;
  projects: ProjectData[];
}
