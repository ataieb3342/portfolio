/**
 * Configuration globale du site : une seule source de vérité pour l'URL
 * canonique, les métadonnées et la navigation.
 */
export const site = {
  url: "https://www.ataieb-dev.fr",
  name: "Adam Taïeb",
  /** Intitulé, le même que sur LinkedIn. */
  role: "Ingénieur Data",
  /** Ce qui distingue le profil, ajouté au titre des pages. */
  tagline: "Migration de legacy & IA",
  locale: "fr_FR",
  description:
    "Ingénieur data à Dijon. Transpileurs maison (SAS → Python, SSIS/SSRS → .NET) et non-régression pour moderniser le legacy et y brancher de l'IA.",
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
