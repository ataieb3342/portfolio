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
    "Adam Taïeb, data engineer chez Tradim à Dijon. Support de la facturation ECOCITO et migration des traitements SSIS et SSRS vers Python, avec l'IA.",
} as const;

export const navLinks = [
  { href: "#maintenant", label: "Maintenant" },
  { href: "#approche", label: "Méthode" },
  { href: "#parcours", label: "Parcours" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;
