/**
 * Configuration globale du site : une seule source de vérité pour l'URL
 * canonique, les métadonnées et la navigation.
 */
export const site = {
  url: "https://www.ataieb-dev.fr",
  name: "Adam Taïeb",
  role: "Data engineer chez Tradim",
  locale: "fr_FR",
  description:
    "Adam Taïeb, data engineer chez Tradim à Dijon. Support de la facturation ECOCITO et migration des traitements SSIS et SSRS vers Python, avec l'IA. Deux sites associatifs en ligne, qu'il maintient.",
} as const;

/** Nom de domaine d'une URL, sans « www. », pour l'afficher tel quel. */
export const domaine = (url: string) => new URL(url).host.replace(/^www\./, "");

export const navLinks = [
  { href: "#maintenant", label: "Maintenant" },
  { href: "#approche", label: "Méthode" },
  { href: "#projets", label: "Projets" },
  { href: "#parcours", label: "Parcours" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;
