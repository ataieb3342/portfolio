/**
 * Configuration globale du site : une seule source de vérité pour l'URL
 * canonique, les métadonnées et la navigation.
 */
export const site = {
  url: "https://www.ataieb-dev.fr",
  name: "Adam Taïeb",
  role: "Data engineer · développement full-stack",
  locale: "fr_FR",
  description:
    "Portfolio d'Adam Taïeb, data engineer à Dijon. Datawarehouse et datamart sous Semarchy xDI et Vertica, migration SAS vers Python, pipeline Spark de segmentation et les interfaces qui l'exposent.",
} as const;

export const navLinks = [
  { href: "#experience", label: "Expérience" },
  { href: "#projets", label: "Projets" },
  { href: "#approche", label: "Approche" },
  { href: "#stack", label: "Stack" },
  { href: "#formation", label: "Formation" },
  { href: "#contact", label: "Contact" },
] as const;
