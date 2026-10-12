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
      lead: "Avec les outils d'aujourd'hui, produire du code ou une démo ne prend plus que quelques heures. Ça ne suffit plus à créer de la valeur. Elle vient de ce qu'il y a autour : comprendre le besoin, cadrer, vérifier, et livrer quelque chose qui tient en production.",
      principles: [
        {
          icon: "code",
          title: "Deuxième migration en un an",
          body: "Du SAS chez Hara, du SSIS et du SSRS chez Tradim. Les langages changent, le réflexe reste : cartographier avant de réécrire. Pour SAS, j'avais construit un outil qui parse et visualise le code. Avec l'IA, cette lecture de l'existant va beaucoup plus vite.",
        },
        {
          icon: "target",
          title: "Je vois où ça casse",
          body: "Le support facturation me met du côté où les erreurs arrivent : chez le client, sur une facture. Quand je migre un traitement, je sais quels calculs ne doivent jamais bouger, et ce que coûte un écart.",
        },
        {
          icon: "layers",
          title: "La donnée et l'écran",
          body: "Au Crédit Agricole, j'ai fait le pipeline Spark de segmentation et l'interface React ouverte à 400 conseillers. J'en ai gardé l'habitude de penser un traitement jusqu'à la personne qui s'en sert au bout.",
        },
        {
          icon: "sparkles",
          title: "Faire adopter, pas seulement livrer",
          body: "J'ai accompagné une cinquantaine de personnes du Marketing vers des décisions appuyées sur la donnée. L'IA, c'est pareil : un outil branché qui n'est pas adopté par les équipes ne change rien.",
        },
      ],
    },
};
