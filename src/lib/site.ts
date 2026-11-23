/**
 * Configuration globale du site : une seule source de vérité pour l'URL
 * canonique, les métadonnées et la navigation.
 */
export const site = {
  url: "https://www.ataieb-dev.fr",
  name: "Adam Taïeb",
  /** Le positionnement, court : titre des pages, pied de page, JSON-LD. */
  role: "Ingénieur outillage IA & systèmes legacy",
  /** Ce qui situe le profil, ajouté au titre des pages. */
  tagline: "Facturation publique",
  locale: "fr_FR",
  description:
    "Ingénieur outillage IA & systèmes legacy à Dijon. Des agents Claude Code sous garde-fous pour diagnostiquer la facturation des collectivités, la rétro-ingénierie de SSIS et SSRS, et un prototype de migration vérifié par golden master.",
} as const;

/** Nom de domaine d'une URL, sans « www. », pour l'afficher tel quel. */
export const domaine = (url: string) => new URL(url).host.replace(/^www\./, "");

export const navLinks = [
  { href: "#diagnostic", label: "Maintenant" },
  { href: "#projets", label: "Projets" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
] as const;
