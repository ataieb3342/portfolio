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
  contract?: string;
  /** Une phrase de cadrage sous l'intitulé. */
  summary: string;
  axes?: ExperienceAxis[];
  /** Faits marquants listés sous les volets. */
  highlights?: string[];
  /** Identifiant du témoignage rattaché, le cas échéant. */
  testimonial?: TestimonialData;
}

/** Une mission du poste actuel, détaillée dans la section « Maintenant ». */
export interface MissionData {
  icon: IconName;
  label: string;
  title: string;
  body: string;
  points: string[];
  tags: string[];
}

export interface NowData {
  company: string;
  role: string;
  since: string;
  place: string;
  /** Ce que fait l'entreprise, en une ou deux phrases. */
  context: string;
  missions: MissionData[];
}

export interface SkillsData {
  data: string[];
  dev: string[];
  tools: string[];
}

/** Une conviction de la section « Approche ». */
export interface PrincipleData {
  icon: IconName;
  title: string;
  body: string;
}

export interface ApproachData {
  title: string;
  lead: string;
  principles: PrincipleData[];
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
  now: NowData;
  experiences: ExperienceData[];
  education: EducationData[];
  skills: SkillsData;
  contact: ContactData;
  approach: ApproachData;
}
