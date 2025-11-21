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
      { icon: "🚀", title: "Autonomie & Leadership", description: "3 projets menés de la conception au déploiement en production" },
      { icon: "📈", title: "Impact Métier", description: "Solutions utilisées par 100+ conseillers quotidiennement" },
      { icon: "🤝", title: "Approche Collaborative", description: "Synergie avec les équipes métier et techniques pour aligner data, APIs et interfaces" },
    ],
    skills: {
      data: ['Python', 'SQL', 'ETL', 'Machine Learning', 'Spark/Hadoop', 'Segmentation client'],
      dev: ['React', 'JavaScript', 'PHP', 'C#', 'ASP.NET', 'APIs REST', 'Architecture logicielle'],
      tools: ['Git', 'Docker', 'SQL Server', 'MySQL', 'Apache', 'Systèmes distribués'],
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
            description: "Conception et développement complet (full-stack) d'une interface utilisateur pour les conseillers bancaires, offrant une vue 360° et dynamique de la 'ligne de vie' du client (historique des interactions, usages digitaux, scoring de potentiel...). Objectif : optimiser la prise de décision et la personnalisation de la relation client.",
            technos: ['React', 'TypeScript', 'PHP', 'SQL Server', 'Figma (UX/UI)'],
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
            technicalDetails: [
                {
                    title: "Frontend (Export statique Next.js)",
                    content: "Application React compilée en export static via Next.js, déployée sur un serveur Apache. Choix technique imposé par des contraintes legacy : pas de SSR (Server-Side Rendering), uniquement du rendu côté client."
                },
                {
                    title: "Backend (Classes PHP + SQL Server)",
                    content: "Classes PHP métier qui requêtent directement un SQL Server. Ces classes exposent des APIs REST consommées par le frontend. Le SQL Server joue le rôle de datamart décisionnel."
                },
                {
                    title: "Flux de données (Teradata → SQL Server)",
                    content: "Le SQL Server est alimenté quotidiennement à 4h du matin depuis un Teradata (entrepôt de données principal). Cette synchronisation est orchestrée via des procédures stockées SQL qui assurent la fraîcheur des données pour les conseillers."
                }
            ],
            architectureFlow: "🔄 Schéma : Teradata (source) → SQL Server (datamart) → PHP (API) → React (UI)",
            disclaimer: "Les données affichées dans les captures d'écran sont entièrement simulées pour des raisons de confidentialité bancaire. L'interface et les fonctionnalités présentées sont authentiques."
        },
        {
            id: "vhalumni",
            title: "VH Besançon Alumni - Plateforme Alumni",
            shortTitle: "VH Besançon Alumni",
            description: "Plateforme complète pour l'association des anciens élèves de VH Besançon. Intègre un blog, un annuaire interactif, un forum d'annonces, et un espace témoignages pour faciliter la mise en réseau entre anciens élèves, nouveaux étudiants et personnel.",
            technos: ['Next.js', 'TypeScript', 'Sanity CMS', 'Vercel', 'OVH'],
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
            technicalDetails: [
                {
                    title: "Frontend (Next.js avec App Router)",
                    content: "Application React construite avec Next.js 14+ utilisant l'App Router pour une navigation optimale. Rendu côté serveur (SSR) et génération statique (SSG) pour des performances maximales et un SEO optimisé. Interface responsive adaptée mobile-first."
                },
                {
                    title: "CMS Headless (Sanity.io)",
                    content: "Sanity CMS comme back-office pour la gestion de contenu. Studio personnalisé permettant aux administrateurs de gérer facilement le blog, l'annuaire des membres, les annonces et les témoignages. Schémas de données structurés avec validation."
                },
                {
                    title: "Déploiement et Infrastructure",
                    content: "Déploiement continu sur Vercel avec intégration GitHub (push to deploy). Nom de domaine personnalisé géré via OVH avec configuration DNS. CDN mondial pour une latence minimale. Preview deployments automatiques pour chaque pull request."
                },
                {
                    title: "Fonctionnalités Principales",
                    content: "Blog avec système de catégories et tags • Annuaire interactif avec recherche et filtres • Forum d'annonces (emplois, événements) • Espace témoignages d'anciens élèves • Système de profils membres • Newsletter et notifications."
                }
            ],
            architectureFlow: "🔄 Schéma : Sanity CMS (contenu) → Next.js (SSR/SSG) → Vercel (CDN) → OVH (DNS)",
            disclaimer: "Plateforme accessible en ligne sur vh-besancon-alumni.fr"
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
