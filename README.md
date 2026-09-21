# Portfolio — Adam Taïeb

Portfolio d'ingénieur Full-Stack & Data : parcours, projets et stack technique.

**En ligne :** [ataieb-dev.fr](https://www.ataieb-dev.fr)

## Stack

- **Framework :** Next.js 16 (App Router, React Compiler), React 19, TypeScript
- **Style :** Tailwind CSS 4 — design system par tokens CSS dans `src/app/globals.css`
- **Typographie :** Instrument Serif (titres), Geist Sans (corps), Geist Mono (notes)
- **Animation :** Framer Motion, avec prise en charge de `prefers-reduced-motion`
- **Analytics :** Vercel Analytics

## Architecture

```
src/
├── app/
│   ├── layout.tsx           # Métadonnées, JSON-LD Person, nav, pied de page
│   ├── page.tsx             # Composition des sections (composant serveur)
│   ├── globals.css          # Tokens, échelle typographique fluide, utilitaires
│   ├── opengraph-image.tsx  # Aperçu social généré au build
│   ├── robots.ts / sitemap.ts
├── components/
│   ├── Nav.tsx              # En-tête fixe, section active, progression de lecture
│   ├── Footer.tsx
│   ├── ProjectGrid.tsx      # Sommaire des projets + modale
│   ├── ProjectModal.tsx     # Modale unifiée (captures ou documents)
│   ├── ProjectGallery.tsx   # Carrousel navigable au clavier
│   ├── sections/            # Une section par fichier
│   └── ui/                  # Section, Reveal, Icon
├── lib/
│   ├── data.ts              # Tout le contenu éditorial (expériences, projets…)
│   ├── site.ts              # URL canonique, navigation
│   └── animations.ts        # Variants Framer Motion partagés
└── types/index.ts
```

**Parti pris graphique :** le site est composé comme une revue technique imprimée.
Une grille asymétrique (`.editorial`) pose une colonne de marge en mono — numéro de
section, dates, mentions — face à une colonne de texte. Les blocs sont séparés par
des filets 1px, pas par des cartes. Palette encre chaude / crème / terracotta, un
seul accent, un grain de papier en surimpression.

**Principe technique :** les sections sont des composants serveur. La seule frontière
client est `Reveal`, qui déclenche les animations à l'entrée dans le viewport — plus
le sommaire des projets, qui porte l'état de sélection.

## Modifier le contenu

Tout le texte vit dans [`src/lib/data.ts`](src/lib/data.ts) : profil, chiffres clés,
expériences, projets, compétences, formation, contact. Aucun contenu n'est codé en
dur dans les composants.

Les icônes des blocs « Approche » se choisissent parmi les clés de
[`src/components/ui/Icon.tsx`](src/components/ui/Icon.tsx).

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Vérifications

```bash
npx tsc --noEmit && npx eslint src --max-warnings=0
```

## Contact

- **Email :** contact@ataieb-dev.fr
- **LinkedIn :** [linkedin.com/in/ataieb3342](https://linkedin.com/in/ataieb3342)
- **GitHub :** [github.com/ataieb3342](https://github.com/ataieb3342)

---

© 2026 Adam Taïeb
