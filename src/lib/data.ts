import { FullData } from '@/types';

export const data: FullData = {
    name: "Adam Taïeb",
    title: "Data engineer",
    profile: "Data engineer chez Tradim depuis octobre 2026. Je tiens le support de la facturation d'ECOCITO et je reprends en Python les traitements SSIS et les rapports SSRS, avec l'IA pour aller plus vite et pour que d'autres outils puissent ensuite s'y brancher. Avant ça : un SI décisionnel sous Vertica, une migration SAS vers Python, et plus de deux ans au Crédit Agricole, en alternance puis en CDD, entre pipeline Spark et interfaces métier.",
    now: {
      company: "Tradim",
      role: "Data engineer",
      since: "Depuis oct. 2026",
      place: "Dijon",
      context: "Tradim édite ECOCITO, la suite logicielle qui sert aux collectivités et aux opérateurs à gérer et facturer les services de collecte des déchets, d'eau et d'assainissement. Plus de 1 500 sites l'utilisent. J'y travaille sur deux sujets qui se rejoignent : la facturation, et les traitements de données qui l'alimentent.",
      missions: [
        {
          icon: "doc",
          label: "Support",
          title: "Support facturation",
          body: "Je suis le relais technique quand une facturation ne tombe pas juste chez un client : redevance incitative, part fixe et part variable, levées comptées, régularisations.",
          points: [
            "Diagnostic des anomalies de facturation, directement en SQL dans les données du client",
            "Correction ou contournement, puis explication claire au client et aux équipes",
            "Les cas qui reviennent deviennent des requêtes et des contrôles réutilisables",
          ],
          tags: ["SQL Server", "SQL", "Facturation", "Redevance incitative"],
        },
        {
          icon: "code",
          label: "Migration",
          title: "SSIS et SSRS vers Python, avec l'IA",
          body: "Les traitements reposent sur des packages SSIS et des rapports SSRS. Je les reprends en Python, avec l'IA comme outil de migration, pour obtenir du code lisible, testé, et sur lequel on peut brancher de nouveaux usages.",
          points: [
            "Lecture et cartographie des packages SSIS (.dtsx) et des rapports SSRS (.rdl)",
            "Réécriture en Python assistée par LLM, relue et vérifiée par comparaison des sorties",
            "Traitements exposés proprement pour que d'autres outils, y compris de l'IA, s'y branchent",
          ],
          tags: ["Python", "SSIS", "SSRS", "LLM", "Non-régression"],
        },
      ],
    },
    experiences: [
      {
        id: "tradim",
        title: "Data Engineer",
        company: "Tradim",
        period: "Oct. 2026 - aujourd'hui",
        current: true,
        summary: "Support de la facturation ECOCITO et migration des traitements SSIS et SSRS vers Python, avec l'IA.",
        axes: [],
      },
      {
        id: "hara",
        title: "Data Engineer",
        company: "Hara",
        period: "Févr. 2026 - Juin 2026",
        contract: "CDI",
        summary: "Maîtrise d'œuvre sur le système d'information décisionnel d'un client : couches datawarehouse et datamart sous Semarchy xDI et Vertica.",
        axes: [
          {
            icon: "database",
            label: "MOE sur le SID",
            body: "Build et run des couches datawarehouse et datamart sous Semarchy xDI sur base Vertica. Nouvelles tables et leurs liens, évolution des modèles existants, incidents de chargement et anomalies de données, le tout en SQL."
          },
          {
            icon: "code",
            label: "Migration SAS → Python",
            body: "Reprise de traitements SAS vers Python sur Vertica. Un outil interne de parsing et de visualisation du code SAS pour cartographier l'existant, et une architecture de non-régression pour garantir l'iso-résultat à chaque lot migré."
          }
        ],
        highlights: [
          "Outil maison de parsing et de visualisation du code SAS",
          "Architecture de non-régression sur les traitements migrés",
        ]
      },
      {
        id: "cafc",
        title: "Ingénieur Full-Stack & Data",
        company: "Crédit Agricole Franche-Comté",
        period: "Sept. 2023 - Déc. 2025",
        contract: "Alternance puis CDD",
        summary: "Alternance de septembre 2023 à août 2025, prolongée par un CDD jusqu'en décembre. Plus de deux ans à industrialiser la data du marketing bancaire, du modèle Spark jusqu'à l'interface utilisée par les conseillers.",
        axes: [
          {
            icon: "code",
            label: "Applications métier",
            body: "Interfaces décisionnelles ouvertes à 400 conseillers, en React sur un back PHP et SQL Server. En parallèle, une cinquantaine de collaborateurs du Marketing accompagnés vers des décisions appuyées sur la donnée."
          },
          {
            icon: "chart",
            label: "Data & MLOps",
            body: "Pipeline de segmentation client industrialisé sous Spark, modèles de scoring passés en production, et un datamart centralisé de quinze tables pour les analyses du service."
          }
        ],
        testimonial: {
          quote: "Adam a réalisé une excellente alternance avec des apports concrets et pertinents. L'évolution au cours des deux années a été réelle avec une prise de hauteur et une compréhension de l'impact de l'accompagnement métier dans la réussite technique.",
          author: "Maître d'apprentissage",
          role: "Responsable Data & Web Development, service Marketing",
          company: ""
        }
      }
    ],
    education: [
      {
        degree: "Master Informatique, Ingénierie Systèmes & Logiciels",
        school: "Université de Franche-Comté",
        period: "2023 - 2025",
        details: "En alternance au Crédit Agricole Franche-Comté."
      },
      {
        degree: "Licence Informatique",
        school: "Université de Franche-Comté",
        period: "2020 - 2023",
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
      lead: "Avec les outils d'aujourd'hui, produire du code ou une démo ne prend plus que quelques heures. Ça ne suffit plus à créer de la valeur. Elle vient de ce qu'il y a autour : comprendre le besoin, cadrer, vérifier, et livrer quelque chose qui tient en production.",
      principles: [
        {
          icon: "target",
          title: "Le métier d'abord",
          body: "Une facture fausse, c'est un usager mal facturé et une collectivité qui appelle. Avant de toucher à un traitement, je comprends ce qu'il calcule et pour qui. C'est la partie que l'IA ne fait pas à ma place.",
        },
        {
          icon: "sparkles",
          title: "L'IA comme accélérateur, pas comme pilote",
          body: "Je m'en sers pour démêler un package SSIS touffu, cartographier l'existant, proposer une réécriture en Python. Je garde la main sur l'architecture et sur chaque ligne qui part en production.",
        },
        {
          icon: "check",
          title: "La preuve plutôt que la démo",
          body: "Un traitement migré n'est terminé que lorsque ses sorties sont identiques à l'ancien. Les tests de non-régression comptent plus que la vitesse de réécriture : c'est ce qui rend une migration rapide sans danger.",
        },
        {
          icon: "layers",
          title: "Des briques sur lesquelles on branche",
          body: "Un traitement en Python, versionné et testé, peut être appelé par une API, par une automatisation ou par un assistant IA. L'objectif n'est pas seulement de remplacer l'ancien, c'est de rendre la donnée utilisable par ce qui vient après.",
        },
      ],
    },
};
