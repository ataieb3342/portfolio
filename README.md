# Portfolio — Adam Taïeb

Portfolio d'Adam Taïeb, ingénieur data chez Tradim : poste actuel, méthode, projets, parcours et stack.

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
│   ├── sections/            # Hero, Maintenant, Approche, Parcours, Stack, Contact
│   └── ui/                  # Section, Reveal, Icon
├── lib/
│   ├── data.ts              # Tout le contenu éditorial (poste, approche, expériences…)
│   └── site.ts              # URL canonique, navigation
└── types/index.ts
```

**Parti pris graphique :** un poste de travail data, avec du caractère. Fond sombre par
défaut, clair si le système le demande (`prefers-color-scheme`). Quatre tons — lime,
violet, cyan, corail — utilisés comme une coloration syntaxique : legacy en corail, IA
en violet, le code migré en cyan, ce qui est vivant en lime. Chaque section pose son ton
(`tone` sur `Section`, classes `.tone-*`), repris par les pastilles, les cartes teintées
et les utilitaires `text-tone` / `bg-tone` / `border-tone`. Le hero montre le métier
en code : un traitement SSIS converti en .NET par le transpileur.

**Principe technique :** les sections sont des composants serveur. Les seules frontières
client sont `Reveal`, qui déclenche les animations à l'entrée dans le viewport, et la
barre de navigation.

## Modifier le contenu

Tout le texte vit dans [`src/lib/data.ts`](src/lib/data.ts) : profil, poste actuel
(`now` : contexte et missions), approche, expériences, compétences,
formation, contact. Aucun contenu n'est codé en
dur dans les composants.

Les icônes des missions et de l'approche se choisissent parmi les clés de
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
