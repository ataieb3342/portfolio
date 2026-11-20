# Portfolio — Adam Taïeb

Portfolio d'Adam Taïeb, ingénieur outillage IA & systèmes legacy chez Tradim : poste actuel,
étude de cas (l'outil de diagnostic des tickets de facturation), projets, parcours et stack.

**En ligne :** [ataieb-dev.fr](https://www.ataieb-dev.fr)

## Stack

- **Framework :** Next.js 16 (App Router, React Compiler), React 19, TypeScript
- **Style :** Tailwind CSS 4 — design system par tokens CSS dans `src/app/globals.css`
- **Typographie :** Geist Sans (titres et corps), Geist Mono (repères et étiquettes)
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
│   ├── Nav.tsx              # En-tête translucide, section active, progression de lecture
│   ├── Footer.tsx
│   ├── sections/            # Hero, Étude de cas (poste actuel), Projets, Parcours, Contact
│   └── ui/                  # Section, Reveal, Icon
├── lib/
│   ├── data.ts              # Tout le contenu éditorial (poste, étude de cas, projets…)
│   └── site.ts              # URL canonique, navigation
└── types/index.ts
```

**Parti pris graphique :** un journal d'audit. Sobre : chasse fixe pour les repères,
filets fins, coins nets, aucun dégradé ni halo. Les sections sont des entrées numérotées
(`§1`, `§2`… via `index` sur `Section`, classe `.entry`). Fond sombre par défaut, clair si
le système le demande. La couleur dit qui agit, jamais pour décorer : violet = IA,
lime = humain / vérifié, cyan = script, corail = legacy (classes `.tone-*`, utilitaires
`text-tone` / `bg-tone` / `border-tone`). Le hero montre la trace d'un passage de l'outil
de diagnostic, avec la porte de validation humaine ; l'étude de cas dessine son pipeline,
où le cadre pointillé marque ce que fait l'IA.

**Principe technique :** les sections sont des composants serveur. Les seules frontières
client sont `Reveal`, qui déclenche les animations à l'entrée dans le viewport, et la
barre de navigation.

## Modifier le contenu

Tout le texte vit dans [`src/lib/data.ts`](src/lib/data.ts) : profil, poste actuel
(`now`), étude de cas (`caseStudy`), projets, site associatif, expériences, compétences,
formation, contact. Le haut du fichier rappelle les règles de rédaction : court, une idée
par bloc ; aucun nom de client ni donnée réelle ; aucun chiffre de gain non mesuré ; la
migration présentée comme un prototype.

Les icônes des projets se choisissent parmi les clés de
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
