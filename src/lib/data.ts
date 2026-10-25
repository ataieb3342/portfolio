import { FullData } from '@/types';

export const data: FullData = {
    name: "Adam Taïeb",
    title: "Ingénieur data",
    profile: "Ingénieur data chez Tradim depuis octobre 2026. Je reprends les traitements data legacy pour qu'on puisse enfin y brancher de l'IA, des APIs et des automatisations : des transpileurs maison automatisent la conversion (SAS vers Python chez Hara, SSIS et SSRS vers .NET chez Tradim), et un framework de non-régression garantit des résultats identiques. Chez Tradim, je branche aussi des agents IA sur le support de la facturation. Avant ça : un SI décisionnel sous Vertica, et plus de deux ans au Crédit Agricole, en alternance puis en CDD, entre pipeline Spark et interfaces métier. À côté, je conçois et maintiens deux sites associatifs en ligne, dont des gens se servent.",
    now: {
      company: "Tradim",
      role: "Ingénieur data",
      since: "Depuis oct. 2026",
      place: "Dijon",
      context: "Tradim édite ECOCITO, la suite logicielle qui sert aux collectivités et aux opérateurs à gérer et facturer les services de collecte des déchets, d'eau et d'assainissement. Plus de 1 500 sites l'utilisent. J'y travaille sur deux sujets qui se rejoignent : la facturation, et les traitements de données qui l'alimentent.",
      missions: [
        {
          icon: "code",
          label: "Migration",
          title: "SSIS et SSRS vers .NET, par transpileur",
          body: "Les traitements reposent sur des packages SSIS et des rapports SSRS. Un transpileur maison les convertit en .NET, intégré à l'architecture existante, et un framework de non-régression vérifie que les sorties restent identiques.",
          link: { href: "#approche", label: "Voir la méthode, étape par étape" },
          tags: [".NET", "C#", "SSIS", "SSRS", "Transpileur", "Non-régression"],
        },
        {
          icon: "sparkles",
          label: "Agents IA",
          title: "Des agents IA sur le support facturation",
          body: "Les clients ouvrent des tickets sur la facturation ECOCITO. J'outille l'équipe qui les traite : des agents IA préparent le diagnostic, la réponse et la correction, et l'équipe valide.",
          points: [
            "Diagnostic accéléré dans les données et les traitements",
            "Réponse au client préparée par l'agent, relue par l'équipe",
            "Correction assistée quand c'est possible, sinon une procédure précise pour les développeurs",
          ],
          tags: ["Agents IA", "LLM", "SQL Server", "Facturation"],
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
        summary: "Maîtrise d'œuvre sur le SI décisionnel d'un client : datawarehouse et datamart sous Semarchy xDI et Vertica, en build comme en run. Puis la migration de traitements SAS vers Python.",
        highlights: [
          "Transpileur SAS → Python intégré à l'architecture du client",
          "Framework de non-régression, lot par lot",
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
          "Segmentation client sous Spark, utilisée par le Marketing pour cibler ses campagnes",
          "Application de vue client 360° ouverte à 700+ conseillers",
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
        details: "Master Ingénierie Systèmes & Logiciels, en alternance au Crédit Agricole.",
        thesis: {
          title: "Conception et développement d'un écosystème data bancaire moderne",
          subtitle: "De la collecte à la valorisation des données clients",
          date: "Juin 2025",
          summary: "Le mémoire tiré de l'alternance au Crédit Agricole Franche-Comté : comment transformer les données bancaires en outils d'aide à la décision, pour le Marketing comme pour les conseillers.",
          points: [
            "Deux segmentations complémentaires sous Spark : l'une vise la précision, avec le potentiel de chaque client calculé par stratification d'âge puis K-means ; l'autre vise l'interprétation, avec des personas dont le Marketing peut se servir",
            "Parcours 360° : l'application qui met ces données entre les mains des conseillers, sur une infrastructure héritée (Apache, PHP, SQL Server)",
            "Un déploiement mesuré dans les journaux d'usage : consultations quotidiennes multipliées par trois une fois les conseillers accompagnés",
          ],
          url: "/memoire-m2-adam-taieb.pdf",
        }
      }
    ],
    skills: {
      data: ['Python', 'SQL', 'SQL Server', 'SSIS', 'SSRS', 'SAS', 'Vertica', 'Semarchy xDI', 'Spark', 'Datawarehouse & datamart', 'Migration de traitements'],
      dev: ['C# & .NET', 'LLM & agents IA', 'APIs REST', 'React', 'Next.js', 'TypeScript', 'PHP'],
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
      title: "Le transpileur convertit. La non-régression prouve.",
      lead: "La méthode que j'ai appliquée chez Hara pour migrer des traitements SAS vers Python, et que je reprends chez Tradim pour passer SSIS et SSRS en .NET. Cinq étapes, outillées de bout en bout : l'IA intervient à chacune, mais aucune ne repose seulement sur elle.",
      steps: [
        {
          title: "Analyse préalable",
          body: "Comprendre ce que fait le traitement et pour qui : sources, sorties, règles métier, dépendances. On découpe en lots et on choisit par où commencer.",
          ai: "Résume l'existant et la documentation. Les règles métier, elles, se valident avec les gens qui s'en servent.",
        },
        {
          title: "Parsing",
          body: "Un package SSIS ou un rapport SSRS, c'est du XML ; un programme SAS, du code à analyser. Le parseur en sort une carte des flux, requêtes et dépendances : on sait exactement quoi convertir.",
          ai: "Aide à écrire le parseur et explique les requêtes les plus touffues.",
        },
        {
          title: "Transpilation",
          body: "Le transpileur génère le code cible à partir de la carte : Python pour SAS, .NET pour SSIS et SSRS, intégré à l'architecture en place (accès aux bases, environnement d'exécution). Le même outil traite tous les lots.",
          ai: "Aide à écrire les règles de conversion et à traiter les cas que le transpileur ne couvre pas encore. Je relis tout ce qu'elle produit.",
        },
        {
          title: "Non-régression",
          body: "Le framework fait tourner l'ancien et le nouveau sur les mêmes données et compare les sorties. Tant qu'elles diffèrent, le lot n'est pas fini.",
          ai: "Génère des cas de test et aide à expliquer les écarts.",
        },
        {
          title: "Bascule et branchements",
          body: "Mise en production, arrêt de l'ancien traitement. Le traitement converti peut ensuite être appelé par une API, une automatisation ou un agent IA.",
          ai: "Des agents peuvent s'y brancher. Au support, par exemple : préparer la réponse au client sur un ticket, ou la procédure de correction pour les développeurs.",
        },
      ],
    },
};
