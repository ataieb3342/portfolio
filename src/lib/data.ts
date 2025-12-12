import { FullData } from '@/types';

export const data: FullData = {
    name: "Adam Taïeb",
    title: "Ingénieur Data & Développement Full-Stack",
    profile: "Ingénieur polyvalent spécialisé dans la conception de solutions complètes, de la data à l'application. Expertise dans l'adaptation au contexte technique existant et la livraison de solutions robustes en production.",
    experience: {
      title: "Ingénieur Full-Stack & Data",
      company: "Crédit Agricole Franche-Comté",
      period: "Sept 2023 - Présent",
      appHighlights: "Interfaces décisionnelles (React) utilisées par 100+ conseillers • Backend Python/PHP • Architecture SQL Server + APIs REST",
      dataHighlights: "Industrialisation de modèles de scoring • Pipelines données pour segmentation client • Datamart centralisé (15 tables), +50% d'efficacité analytique"
    },
    impacts: [
      { icon: "🚀", title: "Autonomie & Leadership", description: "Pilotage end-to-end de projets stratégiques data et full-stack en autonomie complète" },
      { icon: "📈", title: "Impact Métier", description: "Impact direct sur les décisions commerciales de 100+ conseillers via outils décisionnels et analytics" },
      { icon: "🤝", title: "Approche Collaborative", description: "Synergie avec les équipes métier et techniques pour aligner data, APIs et interfaces" },
    ],
    skills: {
      data: ['Python', 'SQL', 'ETL', 'Machine Learning', 'Spark/Hadoop', 'Segmentation client'],
      dev: ['React', 'JavaScript', 'PHP', 'C#', 'ASP.NET', 'APIs REST', 'Architecture logicielle'],
      tools: ['Git', 'Docker', 'SQL Server', 'MySQL', 'Apache', 'Systèmes distribués'],
    },
    whatISeek: {
      title: "Ce que je recherche",
      subtitle: "Un environnement où technique et métier se rencontrent, où je peux :",
      criteria: [
        "Comprendre un vrai problème métier et concevoir une solution complète",
        "Avoir de l'autonomie sur mes sujets, du besoin à la livraison",
        "Travailler avec une équipe exigeante mais bienveillante",
        "Apprendre chaque jour et partager en retour"
      ],
      motivators: {
        title: "Ce qui me motive :",
        items: [
          "Simplifier des problèmes complexes",
          "Moderniser des architectures existantes",
          "Transformer la donnée en valeur métier"
        ]
      },
      limits: {
        title: "J'apprécie particulièrement :",
        items: [
          "L'autonomie et la confiance",
          "Une vision claire et partagée",
          "Une tech au service du métier"
        ]
      },
      closingStatement: "Si vous cherchez quelqu'un qui pense produit autant que code, qui aime architecturer autant qu'implémenter, et pour qui livrer rime avec impact — parlons-en.",
      shortVersion: "Je ne cherche pas un poste, mais un problème complexe à résoudre. Un environnement où l'autonomie est réelle, la technique sert le métier, et où je peux concevoir et livrer des solutions de bout en bout — de la data à l'interface."
    },
    contact: {
      phone: "+33 7.69.21.42.26",
      email: "contact@ataieb-dev.fr",
      portfolio: "https://www.ataieb-dev.fr",
      linkedin: "https://linkedin.com/in/ataieb3342",
      github: "https://github.com/ataieb3342",
    },
    projects: [
        {
            id: "p360",
            title: "Ligne de vie client - Interface Décisionnelle",
            shortTitle: "Parcours 360° (CAFC)",
            description: "Interface décisionnelle utilisée par 400+ conseillers bancaires. Vue 360° consolidant historique client multi-comptes, scoring digital propriétaire et intégrations API métier (Goodays). Solution full-stack déployée en production.",
            technos: ['React', 'Next.js', 'TypeScript', 'PHP', 'SQL Server', 'Teradata', 'Material-UI'],
            screenshots: [
                "/p360/1.png",
                "/p360/2.png",
                "/p360/3.png",
                "/p360/4.png",
                "/p360/5.png",
                "/p360/6.png",
            ],
            thumbnail: "/p360/p360.svg",
            category: "Full-Stack",
            link: "#",
            metrics: {
                users: "400+ conseillers",
                activeUsers: "~100 récurrents",
                status: "Production"
            },
            keyFeatures: [
                {
                    title: "🎯 Consolidation multi-comptes",
                    content: "Agrégation des données PP (Particuliers), PM (Professionnels), GP (Groupe de Personnes Privé) et Établissements liés avec déduplication automatique."
                },
                {
                    title: "📊 Scoring digital propriétaire",
                    content: "Algorithme de scoring basé sur les usages digitaux réels du client (web, mobile, DAB) pour identifier les leviers d'engagement."
                },
                {
                    title: "🔌 Intégrations API métier",
                    content: "Connexion temps réel avec Goodays (satisfaction client) et autres APIs internes pour enrichir le profil client."
                },
                {
                    title: "🔍 Recherche instantanée",
                    content: "Moteur de recherche multi-critères avec debouncing sur nom, prénom, SIREN, numéro de compte. Historique des recherches récentes en cache local."
                }
            ],
            technicalDetails: [
                {
                    title: "Frontend (Export statique Next.js)",
                    content: "Application React/Next.js compilée en export statique et déployée sur Apache (contrainte legacy : no-SSR). Optimisations : virtualisation des listes longues, cache React Query, Material-UI pour l'interface bancaire."
                },
                {
                    title: "Backend PHP + Datamart SQL Server",
                    content: "Classes PHP métier exposant des APIs REST. SQL Server comme datamart décisionnel synchronisé quotidiennement depuis Teradata. Gestion des habilitations via framework interne."
                },
                {
                    title: "Pipeline de données",
                    content: "Flux ETL nocturne (4h) via procédures stockées pour alimenter le datamart. API PHP assure la couche d'abstraction entre le frontend et le SI bancaire."
                }
            ],
            architectureFlow: "🔄 Teradata (DWH) → SQL Server (Datamart) → PHP REST API → React SPA",
            disclaimer: "Données des captures d'écran entièrement simulées (confidentialité bancaire). Interface et fonctionnalités authentiques."
        },
        {
            id: "vhalumni",
            title: "VH Besançon Alumni - Plateforme Alumni Full-Stack Enterprise",
            shortTitle: "VH Besançon Alumni",
            description: "Plateforme full-stack complète pour l'association des anciens élèves de VH Besançon. Intègre blog, annuaire interactif, forum d'annonces, témoignages, et système d'authentification sécurisé avec workflow de validation admin. Architecture testée (192 tests) et monitorée en production avec double pipeline CI/CD.",
            technos: ['Next.js 14', 'TypeScript', 'React 19', 'NextAuth v5', 'Sanity CMS', 'Tailwind CSS', 'Zod', 'Vitest', 'Playwright', 'Sentry', 'Nodemailer', 'Google Drive API', 'GitHub Actions', 'Vercel', 'OVH'],
            screenshots: [
                "/vhalumni/1.png",
                "/vhalumni/2.png",
                "/vhalumni/3.png",
                "/vhalumni/4.png",
                "/vhalumni/5.png",
            ],
            thumbnail: "/vhalumni/vhalumni.png",
            category: "Full-Stack",
            link: "#",
            metrics: {
                users: "Membres VH Besançon",
                activeUsers: "Production",
                status: "27 API endpoints • 192 tests • ~2500 lignes backend"
            },
            keyFeatures: [
                {
                    title: "🔐 Authentification multi-provider sécurisée",
                    content: "NextAuth v5 avec OAuth et credentials. Workflow de validation admin pour nouveaux membres. Hashing bcrypt, CSRF protection, rate limiting sur endpoints sensibles. Gestion de sessions avec Edge Middleware."
                },
                {
                    title: "📝 Gestion de contenu headless",
                    content: "Sanity CMS avec Studio personnalisé. Schémas structurés pour blog, annuaire, annonces, témoignages. Webhooks temps réel pour synchronisation. Permissions granulaires et validation admin."
                },
                {
                    title: "✅ Suite de tests complète (192 tests)",
                    content: "Tests unitaires (Vitest) sur validations, utils, emails, rate-limiting, API routes. Tests d'intégration sur parcours utilisateur complet. Tests E2E (Playwright) sur workflows critiques. Code coverage avec V8."
                },
                {
                    title: "🔄 Double Pipeline CI/CD",
                    content: "Vercel : tests unitaires (192 tests) + build Next.js rapide (~1-2 min) sur chaque commit/PR. GitHub Actions : tests unitaires avec coverage + tests E2E Playwright + rapports détaillés (~3-4 min). Quality gate systématique avant déploiement."
                },
                {
                    title: "📊 Monitoring & Analytics en production",
                    content: "Sentry APM intégré (client/server/edge) pour tracking des erreurs. Logging structuré avec correlation IDs. Web Vitals monitoring. Dashboard analytics avec Recharts. Lighthouse score >90."
                }
            ],
            technicalDetails: [
                {
                    title: "Backend & API (27+ endpoints REST)",
                    content: "Architecture API Routes Next.js (~2500 lignes). Validation robuste avec Zod sur tous les endpoints. Rate limiting pour protection contre les abus. Webhooks Sanity pour synchronisation temps réel. CRON jobs automatisés (newsletter quotidienne, vérification alumni hebdomadaire)."
                },
                {
                    title: "Frontend SSR/SSG Hybride",
                    content: "Next.js 14 avec App Router. SSR/SSG selon le type de contenu. Middleware Edge personnalisé gérant l'authentification, redirections et traçabilité des requêtes. Interface responsive mobile-first avec Tailwind CSS 4."
                },
                {
                    title: "Sécurité & Robustesse",
                    content: "NextAuth v5 multi-provider. Hashing bcrypt pour mots de passe. CSRF protection native Next.js. Rate limiting sur endpoints sensibles (login, register, forgot-password). Validation stricte Zod côté client et serveur. Middleware de sécurité avec gestion de sessions."
                },
                {
                    title: "Tests & Qualité (192 tests)",
                    content: "Tests unitaires (Vitest) : validations, utils, emails, rate-limiting, logger, API routes. Tests d'intégration : parcours utilisateur complet (inscription → validation → création d'annonce). Tests E2E (Playwright) : workflows critiques avec screenshots on failure. Code coverage V8 avec rapports automatiques."
                },
                {
                    title: "Intégrations externes",
                    content: "Google Drive API pour synchronisation automatique de données newsletter. Nodemailer pour notifications (bienvenue, newsletter, réinitialisation MDP, validation admin). Upload et traitement d'images avec crop interactif (react-easy-crop)."
                },
                {
                    title: "Infrastructure & CI/CD (Double Pipeline)",
                    content: "Pipeline Vercel : 192 tests unitaires + build Next.js rapide (~1-2 min) sur chaque commit/PR avec déploiement automatique. Pipeline GitHub Actions : tests unitaires avec coverage + tests E2E Playwright + rapports détaillés (~3-4 min) pour validation complète. Preview deployments sur chaque PR. CDN mondial et Edge Functions. DNS personnalisé OVH (vh-besancon-alumni.fr). Disponibilité 99.9% (Vercel SLA)."
                }
            ],
            architectureFlow: "🔄 Architecture : Utilisateur → Middleware Edge (auth/logging) → API Routes → Validation Zod → Sanity CMS ←→ Webhooks → Next.js (revalidation) → Vercel Edge (CDN) → DNS OVH → Sentry (monitoring)",
            disclaimer: "Plateforme en production sur vh-besancon-alumni.fr. Solution complète sécurisée, testée et monitorée (192 tests, double pipeline CI/CD, Sentry APM, Web Vitals). Autonomie complète : de la conception à la mise en production."
        },
        {
            id: "ml-dashboard",
            title: "API de Prédiction Immobilière - FastAPI & TensorFlow",
            shortTitle: "ML API Immobilière",
            description: "API de machine learning déployée sur Hugging Face Spaces, servant un modèle TensorFlow entraîné sur 300 000+ transactions immobilières. Architecture microservices avec frontend Next.js et backend FastAPI pour des prédictions temps réel.",
            technos: ['FastAPI', 'TensorFlow', 'Hugging Face', 'Docker', 'Next.js', 'TypeScript', 'Python', 'Machine Learning', 'REST API'],
            screenshots: [
                "/ml-dashboard/architecture.svg", // Diagramme architecture
            ],
            thumbnail: "/ml-dashboard/hf-logo.svg", // Logo HF
            category: "Machine Learning & DevOps",
            iframeUrl: "/projects/ml-dashboard",
            technicalDetails: [
                {
                    title: "Architecture Microservices",
                    content: "Backend FastAPI conteneurisé avec Docker, déployé sur Hugging Face Spaces. Frontend Next.js hébergé sur Vercel. Séparation claire des responsabilités : API dédiée au ML, frontend à l'UX. Communication via REST API."
                },
                {
                    title: "FastAPI & TensorFlow en Production",
                    content: "API haute performance avec documentation automatique Swagger/OpenAPI. Modèle TensorFlow chargé au démarrage via tf.saved_model. Endpoint /predict avec validation Pydantic. Gestion CORS pour les requêtes cross-origin."
                },
                {
                    title: "Déploiement Hugging Face Spaces",
                    content: "Infrastructure Dockerisée avec build automatisé. Configuration via requirements.txt et Dockerfile. Logs en temps réel et scaling automatique. URL publique avec SSL intégré."
                },
                {
                    title: "Pipeline ML Industriel",
                    content: "Entraînement sur données data.gouv.fr → Export SavedModel → Déploiement API → Intégration frontend. Normalisation des features conservée côté serveur. Statistiques de training intégrées à l'API."
                }
            ],
            architectureFlow: "🔄 Architecture : Data.gouv.fr → Python Training → TensorFlow SavedModel → FastAPI (HF Spaces) → Next.js (Vercel) → Client",
            disclaimer: "Modèle démonstration - Prédictions à titre éducatif. Stack 100% production-ready.",
        }
    ]
};
