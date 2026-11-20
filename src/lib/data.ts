import { FullData } from '@/types';

/*
 * Tout le contenu éditorial du site.
 *
 * Règles de rédaction :
 * - court : une idée par bloc, une ou deux phrases ;
 * - aucun nom de collectivité, de client ou de collègue, aucune donnée réelle ;
 * - aucun chiffre de gain tant qu'il n'a pas été mesuré ;
 * - la migration est un prototype : ne jamais la présenter comme livrée.
 */
export const data: FullData = {
  name: "Adam Taïeb",
  pitch:
    "Arrivé sans connaître le domaine, j'ai construit en quelques semaines les outils pour le maîtriser, puis pour préparer son remplacement.",
  profile:
    "Ingénieur outillage IA & systèmes legacy chez Tradim, à Dijon. Des agents Claude Code sous garde-fous pour diagnostiquer la facturation des collectivités, la rétro-ingénierie de SSIS et SSRS, et un prototype de migration vérifié par golden master. L'IA propose, l'humain décide.",

  now: {
    company: "Tradim",
    since: "Depuis oct. 2026",
    place: "Dijon",
    context:
      "Tradim édite ECOCITO, le logiciel avec lequel des collectivités françaises facturent la collecte des déchets à leurs usagers, jusqu'aux flux comptables vers le Trésor public. Un système legacy (SQL Server, SSIS, SSRS) où chaque erreur finit sur une facture.",
    principles: ["L'IA propose, l'humain décide", "Lecture seule par défaut", "Prouver avant d'affirmer"],
  },

  caseStudy: {
    title: "Un outil qui diagnostique les tickets de facturation, sans jamais toucher à la prod",
    role: "Pilote et seul développeur",
    problem:
      "Chaque ticket demandait de fouiller à la main la base de la collectivité, ses packages SSIS et ses rapports SSRS.",
    solution:
      "Des agents Claude Code prouvent la cause par des requêtes en base, puis proposent une correction et un brouillon de réponse. Un collègue relit et décide.",
    pipeline: [
      {
        kind: "script",
        label: "Sans IA",
        steps: [
          { title: "Ticket", by: "API Freshdesk", detail: "Récupéré en lecture seule" },
          { title: "Dossier", by: "Script", detail: "Base, packages et rapports de la collectivité" },
        ],
      },
      {
        kind: "ia",
        label: "Agents IA · lecture seule",
        steps: [
          { title: "Agents", by: "Claude Code", detail: "Un socle commun, une consigne par agent" },
          { title: "Preuves", by: "Requêtes SQL", detail: "La cause démontrée en base" },
          { title: "Proposition", by: "Brouillon", detail: "Correction avant / après et réponse au client" },
        ],
      },
      {
        kind: "humain",
        label: "Décision",
        steps: [{ title: "Collègue", by: "Humain", detail: "Relit, corrige, décide" }],
      },
    ],
    guardrails: [
      "Base en lecture seule : SELECT uniquement, ROLLBACK, requêtes journalisées",
      "L'IA n'écrit jamais dans le code de prod, la base ou l'outil de tickets",
      "Publier un rapport demande deux clics humains",
    ],
    tags: ["Python", "Claude Code", "MCP", "SQL Server", "SSIS", "SSRS"],
  },

  projects: [
    {
      id: "retro",
      icon: "layers",
      tone: "coral",
      label: "Rétro-ingénierie",
      title: "Rendre lisible un parc SSIS et SSRS",
      body: "Des parseurs de packages SSIS et de rapports SSRS, exposés à l'IA par un serveur MCP : ce qui s'exécute vraiment, et où se calcule chaque règle de facturation.",
      tags: ["Python", "SSIS", "SSRS", "MCP"],
    },
    {
      id: "migration",
      icon: "code",
      tone: "cyan",
      label: "Migration",
      status: "Prototype",
      title: "Un seul moteur .NET à la place de 240 traitements copiés",
      body: "Un moteur réglé par collectivité et vérifié par golden master : chaque ligne de facture réelle de l'année doit être expliquée avant toute bascule.",
      tags: [".NET", "C#", "Golden master"],
    },
  ],

  sites: [
    {
      id: "vhalumni",
      name: "VH Besançon Alumni",
      url: "https://www.vh-besancon-alumni.fr",
      body: "Le site de l'association des anciens élèves du lycée Victor Hugo de Besançon, que je conçois et maintiens bénévolement.",
      figure: { value: "100", label: "comptes inscrits" },
      image: "/projets/vhalumni.jpg",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
    },
  ],

  experiences: [
    {
      id: "hara",
      title: "Data Engineer",
      company: "Hara",
      period: "Févr. - juin 2026",
      contract: "CDI",
      summary:
        "SI décisionnel sous Vertica, puis migration de SAS vers Python par transpileur et non-régression.",
    },
    {
      id: "cafc",
      title: "Ingénieur Full-Stack & Data",
      company: "Crédit Agricole Franche-Comté",
      period: "2023 - 2025",
      contract: "Alternance puis CDD",
      summary:
        "Segmentation client sous Spark, et une vue client 360° ouverte à 700+ conseillers.",
      testimonial: {
        quote:
          "Adam a réalisé une excellente alternance avec des apports concrets et pertinents. L'évolution au cours des deux années a été réelle avec une prise de hauteur et une compréhension de l'impact de l'accompagnement métier dans la réussite technique.",
        author: "Maître d'apprentissage",
        role: "Responsable Data & Web Development, service Marketing",
      },
    },
  ],

  education: [
    {
      degree: "Master Informatique",
      school: "Université de Franche-Comté",
      period: "2020 - 2025",
      details: "en alternance",
      thesis: { title: "Lire le mémoire", url: "/memoire-m2-adam-taieb.pdf" },
    },
  ],

  skills: [
    "Claude Code",
    "Agents IA",
    "MCP",
    "Python",
    "SQL Server",
    "SSIS",
    "SSRS",
    "C# & .NET",
    "TypeScript",
    "Next.js",
    "Spark",
    "Git",
    "Docker",
  ],

  contact: {
    phone: "+33 7.69.21.42.26",
    email: "contact@ataieb-dev.fr",
    portfolio: "https://www.ataieb-dev.fr",
    linkedin: "https://linkedin.com/in/ataieb3342",
    github: "https://github.com/ataieb3342",
  },
};
