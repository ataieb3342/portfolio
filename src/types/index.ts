import type { IconName } from '@/components/ui/Icon';

/** Les quatre tons du site, posés par les classes `.tone-*`. */
export type Tone = 'lime' | 'violet' | 'cyan' | 'coral';

export interface ContactData {
  phone: string;
  email: string;
  portfolio: string;
  linkedin: string;
  github: string;
}

/** Un chiffre, affiché en grand. N'y mettre que ce qui est compté, jamais estimé. */
export interface Figure {
  value: string;
  label: string;
}

export interface NowData {
  company: string;
  since: string;
  place: string;
  /** Ce que fait l'entreprise, en deux phrases. */
  context: string;
  /** Les règles de travail, en titres courts. */
  principles: string[];
}

/** Une étape du pipeline de l'étude de cas. */
export interface PipelineStep {
  title: string;
  /** Qui ou quoi fait l'étape. */
  by: string;
  detail: string;
}

/** Un groupe d'étapes du pipeline, selon qui les exécute. */
export interface PipelineStage {
  /** `script` : déterministe, sans IA ; `ia` : agents ; `humain` : décision. */
  kind: 'script' | 'ia' | 'humain';
  label: string;
  steps: PipelineStep[];
}

export interface CaseStudyData {
  title: string;
  role: string;
  problem: string;
  solution: string;
  pipeline: PipelineStage[];
  guardrails: string[];
  tags: string[];
}

/** Un projet, en deux phrases. */
export interface ProjectData {
  id: string;
  icon: IconName;
  tone: Tone;
  label: string;
  title: string;
  /** Statut à afficher en évidence (prototype, non livré…). */
  status?: string;
  body: string;
  tags: string[];
}

/** Un site en ligne que je maintiens. */
export interface SiteData {
  id: string;
  name: string;
  url: string;
  body: string;
  figure: Figure;
  /** Capture d'écran au format 16:10. */
  image: string;
  tags: string[];
}

export interface TestimonialData {
  quote: string;
  author: string;
  role: string;
}

export interface ExperienceData {
  id: string;
  title: string;
  company: string;
  period: string;
  contract?: string;
  /** Une ligne. */
  summary: string;
  testimonial?: TestimonialData;
}

export interface EducationData {
  degree: string;
  school: string;
  period: string;
  details?: string;
  /** Mémoire de fin d'études, en lien. */
  thesis?: { title: string; url: string };
}

export interface FullData {
  name: string;
  /** L'angle du récit, en une phrase. */
  pitch: string;
  /** Description longue, pour les moteurs de recherche. */
  profile: string;
  now: NowData;
  caseStudy: CaseStudyData;
  projects: ProjectData[];
  sites: SiteData[];
  experiences: ExperienceData[];
  education: EducationData[];
  skills: string[];
  contact: ContactData;
}
