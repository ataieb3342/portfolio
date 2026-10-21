import { FullData } from '@/types';

export const data: FullData = {
    name: "Adam Taïeb",
    title: "Data engineer",
    profile: "Data engineer chez Tradim depuis octobre 2026. Je tiens le support de la facturation d'ECOCITO et je reprends en Python les traitements SSIS et les rapports SSRS, avec l'IA pour aller plus vite et pour que d'autres outils puissent ensuite s'y brancher. Avant ça : un SI décisionnel sous Vertica, une migration SAS vers Python, et plus de deux ans au Crédit Agricole, en alternance puis en CDD, entre pipeline Spark et interfaces métier. À côté, je conçois et maintiens deux sites associatifs en ligne, dont des gens se servent.",
    now: {
      company: "Tradim",
      role: "Data engineer",
      since: "Depuis oct. 2026",
      place: "Dijon",
      context: "Tradim édite ECOCITO, la suite logicielle qui sert aux collectivités et aux opérateurs à gérer et facturer les services de collecte des déchets, d'eau et d'assainissement. Plus de 1 500 sites l'utilisent. J'y travaille sur deux sujets qui se rejoignent : la facturation, et les traitements de données qui l'alimentent.",
      missions: [
        {
          icon: "doc",
          label: "Support N2",
          title: "Support facturation, niveau 2",
          body: "Les clients ouvrent des tickets sur la facturation ECOCITO. Quand ça devient technique, c'est pour moi : il faut trouver d'où vient le problème, le réparer et répondre.",
          points: [
            "Diagnostic dans les données et les traitements, souvent directement en SQL",
            "Correction, puis réponse claire au client",
            "Quand c'est un bug, une procédure précise pour les développeurs",
          ],
          tags: ["Support N2", "SQL Server", "SQL", "Facturation"],
        },
        {
          icon: "code",
          label: "Migration",
          title: "SSIS et SSRS vers Python, avec l'IA",
          body: "Les traitements reposent sur des packages SSIS et des rapports SSRS. Je les reprends en Python, avec l'IA comme outil de migration, pour obtenir du code lisible, testé, et sur lequel on peut brancher de nouveaux usages.",
          link: { href: "#approche", label: "Voir la méthode, étape par étape" },
          tags: ["Python", "SSIS", "SSRS", "LLM", "Non-régression"],
        },
      ],
    },
    experiences: [
      {
        id: "hara",
        title: "Data Engineer",
        company: "Hara",
        period: "Févr. 2026 - Juin 2026",
        contract: "CDI",
        summary: "Maîtrise d'œuvre sur le SI décisionnel d'un client : datawarehouse et datamart sous Semarchy xDI et Vertica, en build comme en run. Puis la reprise de traitements SAS en Python.",
        highlights: [
          "Outil maison de parsing et de visualisation du code SAS",
          "Architecture de non-régression, lot par lot",
        ]
      },
      {
        id: "cafc",
        title: "Ingénieur Full-Stack & Data",
        company: "Crédit Agricole Franche-Comté",
        period: "Sept. 2023 - Déc. 2025",
        contract: "Alternance puis CDD",
        summary: "La data du marketing bancaire, du modèle Spark jusqu'à l'interface utilisée par les conseillers. Alternance de septembre 2023 à août 2025, puis CDD jusqu'en décembre.",
        highlights: [
          "Pipeline de segmentation Spark en production",
          "Interface React ouverte à 400 conseillers",
          "Une cinquantaine de personnes du Marketing accompagnées",
        ],
        testimonial: {
          quote: "Adam a réalisé une excellente alternance avec des apports concrets et pertinents. L'évolution au cours des deux années a été réelle avec une prise de hauteur et une compréhension de l'impact de l'accompagnement métier dans la réussite technique.",
          author: "Maître d'apprentissage",
          role: "Responsable Data & Web Development, service Marketing",
          company: ""
        }
      }
    ],
    sites: [
      {
        id: "vhalumni",
        name: "VH Besançon Alumni",
        url: "https://www.vh-besancon-alumni.fr",
        context: "L'association des anciens élèves du lycée Victor Hugo de Besançon.",
        body: "Je l'ai conçu, et je le développe et le maintiens bénévolement depuis octobre 2025. Les lycéens y cherchent des anciens par matière ou par ville, les membres publient annonces et témoignages, et le bureau administre tout depuis le site.",
        usage: [
          { value: "100", label: "comptes inscrits" },
          { value: "20", label: "articles publiés" },
        ],
        points: [
          "Migration de Sanity vers PostgreSQL, vérifiée type de donnée par type de donnée avant la bascule du 21 octobre 2026",
          "Permissions testées : 23 actions d'administration rejouées avec quatre profils, dont un jeton falsifié",
          "334 tests unitaires et 36 scénarios de bout en bout",
        ],
        image: "/projets/vhalumni.jpg",
        tags: ["Next.js 16", "TypeScript", "PostgreSQL", "Drizzle", "Vercel"],
      },
      {
        id: "lfi-dijon",
        name: "LFI Dijon Centre",
        url: "https://lfi-dijon.fr",
        context: "Le groupe d'action de La France insoumise du centre de Dijon.",
        body: "Je l'ai conçu, je l'héberge et je le maintiens ; deux autres bénévoles contribuent au code. Les militants y tiennent l'agenda, les comptes rendus des apéros thématiques et les articles.",
        usage: [
          { value: "53", label: "publications en ligne" },
          { value: "24", label: "rendez-vous en octobre" },
        ],
        points: [
          "Une attaque par saturation le 16 octobre 2026 : journaux analysés, correctifs en ligne une douzaine d'heures plus tard",
          "Mesure d'audience côté serveur, sans cookie ni adresse IP conservée",
          "Serveur que j'administre : Docker, Caddy, déploiement continu et sauvegardes scriptées",
        ],
        image: "/projets/lfi-dijon.jpg",
        tags: ["SvelteKit", "TypeScript", "SQLite", "Docker", "Linux"],
      },
    ],
    education: [
      {
        degree: "Licence puis Master Informatique",
        school: "Université de Franche-Comté",
        period: "2020 - 2025",
        details: "Master Ingénierie Systèmes & Logiciels, en alternance au Crédit Agricole."
      }
    ],
    skills: {
      data: ['Python', 'SQL', 'SQL Server', 'SSIS', 'SSRS', 'Vertica', 'Semarchy xDI', 'Spark', 'Datawarehouse & datamart', 'Migration de traitements'],
      dev: ['LLM & IA générative', 'APIs REST', 'React', 'Next.js', 'TypeScript', 'PHP', 'C#'],
      tools: ['Git', 'Docker', 'CI/CD', 'Tests de non-régression'],
    },
    contact: {
      phone: "+33 7.69.21.42.26",
      email: "contact@ataieb-dev.fr",
      portfolio: "https://www.ataieb-dev.fr",
      linkedin: "https://linkedin.com/in/ataieb3342",
      github: "https://github.com/ataieb3342",
    },
    approach: {
      title: "L'IA écrit vite. Ce qui compte, c'est de savoir quoi lui faire écrire, et de prouver que c'est juste.",
      lead: "Concrètement, une migration se fait en cinq étapes. L'IA intervient à chacune, mais aucune ne repose seulement sur elle.",
      steps: [
        {
          title: "Analyse préalable",
          body: "Comprendre ce que fait le traitement et pour qui : sources, sorties, règles métier, dépendances, fréquence. C'est là qu'on découpe en lots et qu'on décide par où commencer.",
          ai: "Résume l'existant et la documentation. Les règles métier, elles, se valident avec les gens qui s'en servent.",
        },
        {
          title: "Script de parsing",
          body: "Un package SSIS ou un rapport SSRS, c'est du XML. Un script le lit et en sort une carte : flux, requêtes SQL, transformations, dépendances. On sait exactement ce qu'il faut reproduire.",
          ai: "Aide à écrire le parseur et explique les requêtes les plus touffues.",
        },
        {
          title: "Réécriture en Python",
          body: "Lot par lot, à partir de la carte. Du code lisible, découpé et versionné, pas une traduction ligne à ligne de l'ancien.",
          ai: "Propose la réécriture. Je relis, je restructure, je garde la main sur l'architecture.",
        },
        {
          title: "Non-régression",
          body: "L'ancien et le nouveau tournent sur les mêmes données, et on compare les sorties jusqu'à l'iso-résultat. Tant qu'il reste un écart, le lot n'est pas fini.",
          ai: "Génère des cas de test et aide à expliquer les écarts.",
        },
        {
          title: "Bascule et branchements",
          body: "Mise en production, puis arrêt de l'ancien traitement. Une fois en Python, il peut être appelé par une API, une automatisation ou un agent IA.",
          ai: "Des agents peuvent s'y brancher. Au support, par exemple : répondre au client sur un ticket, ou préparer la procédure de correction pour les développeurs.",
        },
      ],
    },
};
