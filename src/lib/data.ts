import { FullData } from '@/types';

export const data: FullData = {
    name: "Adam Taïeb",
    title: "Data engineer · développement full-stack",
    profile: "Data engineer. Cinq mois sur le système d'information décisionnel d'un client : couches datawarehouse et datamart sous Semarchy xDI et Vertica, puis la reprise d'un patrimoine de traitements SAS vers Python — avec l'outil de cartographie du code et l'architecture de non-régression qui rendent la migration vérifiable. Avant, l'alternance au Crédit Agricole : le pipeline Spark de segmentation, et les interfaces qui l'ont mis entre les mains des conseillers. Je tiens les deux bouts, la donnée et l'écran qui la rend utilisable.",
    experiences: [
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
            body: "Build et run des couches datawarehouse et datamart sous Semarchy xDI sur base Vertica. Création de nouvelles tables et de leurs liens, évolution des modèles existants, résolution des incidents de chargement et des anomalies de données, le tout en SQL."
          },
          {
            icon: "code",
            label: "Migration SAS → Python",
            body: "Reprise d'un patrimoine de traitements SAS vers Python sur Vertica. Conception d'un outil interne de parsing et de visualisation du code SAS pour cartographier l'existant, et mise en place d'une architecture de non-régression pour garantir l'iso-résultat à chaque lot migré."
          }
        ],
        highlights: [
          "Outil maison de parsing et de visualisation du code SAS",
          "Architecture de non-régression sur les traitements migrés",
          "Présentations régulières aux parties prenantes"
        ]
      },
      {
        id: "cafc",
        title: "Ingénieur Full-Stack & Data",
        company: "Crédit Agricole Franche-Comté",
        period: "Sept. 2023 - Janv. 2025",
        contract: "Alternance · Master 2",
        summary: "Deux ans à industrialiser la data du marketing bancaire, du modèle Spark jusqu'à l'interface utilisée chaque jour par les conseillers.",
        axes: [
          {
            icon: "code",
            label: "Applications métier full-stack",
            body: "Stratégie data-driven déployée auprès de 50+ collaborateurs • Transformation organisationnelle Marketing • Interfaces décisionnelles ouvertes à 400 conseillers (React/PHP/SQL Server)"
          },
          {
            icon: "chart",
            label: "Data & MLOps",
            body: "Pipeline ML industrialisé (Spark) pour segmentation stratégique • Modèles de scoring en production • Datamart centralisé (15 tables), +50% d'efficacité analytique"
          }
        ],
        testimonial: {
          quote: "Adam a réalisé une excellente alternance avec des apports concrets et pertinents. L'évolution au cours des deux années a été réelle avec une prise de hauteur et une compréhension de l'impact de l'accompagnement métier dans la réussite technique. Fait preuve d'énergie et de conviction pour défendre ses projets.",
          author: "Maître d'apprentissage",
          role: "Responsable Data & Web Development • Service Marketing",
          company: ""
        }
      }
    ],
    education: [
      {
        degree: "Master Informatique - Ingénierie Systèmes & Logiciels",
        school: "Université de Franche-Comté",
        period: "2023 - 2025",
        details: "Alternance au Crédit Agricole FC. Spécialisation en développement logiciel, systèmes distribués et intelligence artificielle."
      },
      {
        degree: "Licence Informatique",
        school: "Université de Franche-Comté",
        period: "2020 - 2023",
        details: "Socle fondamental en conception et développement d'applications, architecture systèmes et réseaux."
      }
    ],
    impacts: [
      { icon: "bolt", title: "Autonomie End-to-End", description: "Capacité à livrer des solutions complètes en autonomie : du modèle ML (Spark) aux APIs (REST) jusqu'à l'interface (React). 3 projets menés de A à Z en production." },
      { icon: "chart", title: "Impact Métier Mesurable", description: "400 conseillers ont accès à l'interface décisionnelle, une centaine s'en servent régulièrement. Pipeline ML en production pour segmentation stratégique. Plateforme alumni avec 200+ tests et double CI/CD." },
      { icon: "layers", title: "Polyvalence Technique", description: "Un périmètre large : Data/ML (Python, Spark, SQL), Full-Stack (React, PHP, Next.js), DevOps (Docker, CI/CD). Adaptation rapide à des environnements legacy complexes." },
    ],
    skills: {
      data: ['Python', 'SQL', 'ETL', 'Machine Learning', 'Spark/Hadoop', 'Vertica', 'Semarchy xDI', 'Datawarehouse & datamart', 'Migration SAS', 'Segmentation client'],
      dev: ['React', 'JavaScript', 'PHP', 'C#', 'ASP.NET', 'APIs REST', 'Architecture logicielle'],
      tools: ['Git', 'Docker', 'SQL Server', 'MySQL', 'Apache', 'Systèmes distribués'],
    },
    whatISeek: {
      title: "Ce que je recherche",
      subtitle: "Data engineer · Dijon et alentours, ou remote · disponible",
      criteria: [
        "Des sujets qui passent en production et servent à quelqu'un, pas des tableaux de bord qu'on regarde une fois.",
        "Tenir un sujet de bout en bout : le modèle de données, le traitement, et l'interface quand il en faut une.",
        "Le legacy ne me rebute pas : migrations, entrepôts existants, SI décisionnel."
      ],
      closingStatement: "Disponible, à Dijon."
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
            id: "strategie-data",
            title: "Pipeline ML & Transformation Data-Driven (Alternance CAFC)",
            shortTitle: "Stratégie Data (CAFC)",
            description: "Contribution à la transformation data du marketing bancaire pendant mon alternance. (1) Développement du pipeline ML (Spark) de segmentation client avec 4 segments stratégiques exposés aux outils métier. (2) Participation aux workshops data avec 50+ collaborateurs Marketing/Comm pour faire adopter une approche data-driven. Projet mené sur 2 ans avec impact réel sur l'organisation.",
            technos: ['Data Strategy', 'Segmentation Client', 'Change Management', 'Workshop Animation', 'Product Thinking', 'Spark', 'ML Pipeline', 'Scoring', 'Big Data'],
            screenshots: [],
            thumbnail: "/cafc-data/figure-segmentation.svg",
            category: "Data Strategy & Leadership",
            strategyDocuments: [
                {
                    type: 'pdf',
                    title: 'Documentation Vulgarisée - Segmentation de Potentiel Dynamique',
                    url: '/cafc-data/documentation-vulgarisée.pdf',
                    description: 'Documentation détaillée du modèle de segmentation : scores MIRE & PNB, 4 segments stratégiques, et méthodologie d\'opérationnalisation'
                },
                {
                    type: 'html',
                    title: 'Présentation - Mieux Cibler, Mieux Performer',
                    url: '/cafc-data/presentation_personas.html',
                    description: 'Présentation interactive expliquant la transformation d\'une approche marketing legacy vers une stratégie data-driven basée sur les personas comportementaux'
                }
            ],
            metrics: {
                scope: "Portefeuille complet clients",
                team: "50+ collaborateurs formés",
                impact: "Langage commun Marketing-Réseau",
                status: "Déployé"
            },
            keyFeatures: [
                {
                    title: "Contexte : Transformation Marketing Data-Driven",
                    content: "Projet d'alternance sur 2 ans pour contribuer à la transformation data du marketing CAFC. Approche en 2 axes complémentaires : (1) Infrastructure technique pour rendre la donnée accessible (pipeline ML, segmentation), (2) Accompagnement métier pour faire adopter les pratiques data-driven (workshops, A/B testing). Mon rôle : développement du pipeline ML, animation des workshops avec les équipes Marketing, industrialisation en production."
                },
                {
                    title: "Axe 1 : Infrastructure Data - Segmentation Stratégique",
                    content: "Pipeline ML (Spark) créant 4 segments stratégiques basés sur le potentiel client : À Entretenir, À Développer, À Stimuler, À Construire. Scores MIRE (détention produits) et PNB (rentabilité vs références) calculés sur l'ensemble du portefeuille. Orchestration automatisée avec détection de dérive et réentraînement intelligent. Exposition via datamart SQL Server pour les outils CRM et BI. Infrastructure technique pérenne rendant la donnée client accessible aux métiers."
                },
                {
                    title: "Axe 2 : Accompagnement Métier - Adoption Data-Driven",
                    content: "Animation de workshops avec les équipes Marketing/Comm/Data pour identifier les profils comportementaux sur chaque cible. Méthodologie 'Analyser → Tester → Capitaliser' pour personnaliser les campagnes. Passage d'une logique '1 cible = 1 message' à '1 cible = analyse data → 2-3 profils → messages adaptés'. A/B testing systématique, mesure ROI. 50+ collaborateurs impliqués dans cette approche."
                },
                {
                    title: "Impact : Infrastructure Technique + Adoption Métier",
                    content: "Projet complet combinant développement technique (pipeline ML Spark, datamart SQL Server) et accompagnement métier (workshops, formation). Résultat : infrastructure data pérenne en production + langage commun Marketing-Réseau + campagnes plus performantes. Apprentissage clé : l'impact technique nécessite l'adoption métier pour être réel."
                }
            ],
            technicalDetails: [
                {
                    title: "[Axe 1] Méthodologie de Calcul des Scores",
                    content: "Étape 1 : Stratification par tranches d'âge (3 ans). Étape 2 : K-means distribué (Spark) dans chaque strate sur features comportementales (CSP, revenu, situation familiale, comportements financiers). Étape 3 : Identification des clients de référence intra-cluster via pondération par poids des univers du sous-segment. Étape 4 : Calcul Score PNB (1-4) = écart au PNB moyen des références pondérées par univers. Étape 5 : Calcul Score MIRE (1-4) = détention produits + diversité univers + usage DAV. Étape 6 : Score combiné (2-8) = MIRE + PNB définit le segment stratégique final."
                },
                {
                    title: "[Axe 1] 4 Segments Stratégiques avec Actions Différenciées",
                    content: "À Entretenir (score ≥8) : clients rentables et engagés, cœur du portefeuille → suivi personnalisé, surveillance churn. À Développer/Stimuler (score ≥4) : clients à potentiel → intensité relationnelle accrue, campagnes ciblées. À Construire (score <4) : clients peu engagés → offres d'entrée de gamme, relance relation. Chaque segment a ses KPIs et sa stratégie propre."
                },
                {
                    title: "[Axe 1] Architecture Technique du Pipeline ML",
                    content: "Workflow Oozie orchestrant : (1) Extraction Teradata + feature engineering, (2) Stratification par âge et repartitionnement Spark optimal, (3) K-means adaptatif par strate avec optimisation nb clusters (elbow + silhouette), (4) Identification références via agrégation pondérée par univers, (5) Calcul distribué scores PNB (comparaison références) et MIRE (détention), (6) Scoring combiné et attribution segment final, (7) Export vers datamart SQL Server. Gestion intelligente : réutilisation modèles sauf dérive démographique >10% ou dégradation silhouette >15%. Monitoring : métriques Spark, distribution clusters, alertes dérive."
                },
                {
                    title: "[Axe 2] Méthodologie 'Analyser' : Workshops Data",
                    content: "Étape 1 : Brainstorming sur les intuitions métier (15 min). Étape 2 : Confrontation aux données réelles - on présente 3-4 prismes comportementaux (digital, financier, relationnel) sur la cible (30 min). Étape 3 : Construction collective de 2-3 profils types avec leurs motivations et angles de communication privilégiés (15 min). Livrable : fiches profils exploitables par la Comm."
                },
                {
                    title: "[Axe 2] Méthodologie 'Tester' : Personnalisation Multi-Leviers",
                    content: "Leviers activés : (1) Ton et émotion (rationnel vs émotionnel, urgent vs sécurisant). (2) Angle d'attaque (bénéfice produit vs solution problème, gain immédiat vs vision long terme). (3) Format et canal (email détaillé vs SMS direct, visuel vs textuel, CTA app vs rdv conseiller). A/B testing systématique pour mesurer l'impact par profil."
                },
                {
                    title: "[Axe 2] Méthodologie 'Capitaliser' : Learning Organisation",
                    content: "Débrief performance après chaque campagne (15 min) : quel profil a le mieux réagi ? Quel message a été le plus efficace ? Surprises ? Formalisation : enrichissement des fiches profils avec tons/angles/canaux efficaces. Réapplication : création de templates par profil, bonnes pratiques documentées, éviter les erreurs déjà testées. Objectif : bibliothèque de connaissances réutilisables."
                }
            ],
            architectureFlow: "Vision Stratégique Data-Driven → [Axe 1] Pipeline ML (Spark) → Datamart → Segments stratégiques exposés aux outils métier | [Axe 2] Workshops Data → Framework 'Analyser → Tester → Capitaliser' → Équipes Marketing → Campagnes personnalisées → Mesure ROI → Learning Organisation",
            disclaimer: "Projet stratégique mené au Crédit Agricole Franche-Comté. Données confidentielles - seules la méthodologie, l'approche stratégique et le framework de transformation sont présentés.",
            relatedProjects: ['p360'],
        },
        {
            id: "p360",
            title: "Parcours 360° - Interface Décisionnelle Full-Stack (Alternance CAFC)",
            shortTitle: "Parcours 360° (CAFC)",
            description: "Interface décisionnelle full-stack développée en alternance, à laquelle 400 conseillers bancaires ont accès. Affiche les segments stratégiques calculés par le pipeline ML. Vue 360° client consolidant historique multi-comptes, scoring digital propriétaire, et intégrations API (Goodays). Stack: React/Next.js (frontend), PHP/SQL Server (backend), Teradata (data). En production depuis 2024.",
            technos: ['React', 'Next.js', 'TypeScript', 'PHP', 'SQL Server', 'Teradata', 'Material-UI'],
            screenshots: [
                "/p360/1.png",
                "/p360/2.png",
                "/p360/3.png",
                "/p360/4.png",
                "/p360/5.png",
                "/p360/6.png",
            ],
            thumbnail: "/p360/figure-interface.svg",
            category: "Full-Stack",
            link: "#",
            metrics: {
                users: "400 conseillers y ont accès",
                activeUsers: "une centaine s'en servent régulièrement",
                status: "Production"
            },
            keyFeatures: [
                {
                    title: "Affichage des Segments Stratégiques",
                    content: "Interface présentant aux conseillers les 4 segments définis par le pipeline ML (À Entretenir, À Développer, À Stimuler, À Construire). Consommation du datamart alimenté par le modèle de segmentation. Visualisation des scores MIRE & PNB pour chaque client avec recommandations d'actions associées."
                },
                {
                    title: "Vue 360° Multi-Comptes",
                    content: "Consolidation des données PP (Particuliers), PM (Professionnels), GP (Groupe de Personnes Privé) et Établissements liés avec déduplication automatique. Historique complet des interactions, détention produits, et comportements digitaux."
                },
                {
                    title: "Scoring Digital Propriétaire",
                    content: "Algorithme de scoring basé sur les usages digitaux réels du client (web, mobile, DAB) pour identifier les leviers d'engagement. Complète la segmentation stratégique avec une dimension comportementale digitale."
                },
                {
                    title: "Intégrations API Métier",
                    content: "Connexion temps réel avec Goodays (satisfaction client) et autres APIs internes pour enrichir le profil client. Architecture découplée avec gestion des habilitations via framework interne."
                }
            ],
            technicalDetails: [
                {
                    title: "Frontend (Export statique Next.js)",
                    content: "Application React/Next.js compilée en export statique et déployée sur Apache (contrainte legacy : no-SSR). Optimisations : virtualisation des listes longues, cache React Query, Material-UI pour l'interface bancaire."
                },
                {
                    title: "Backend PHP + Datamart SQL Server",
                    content: "Classes PHP métier exposant des APIs REST. SQL Server comme datamart décisionnel synchronisé quotidiennement depuis Teradata. Consommation des segments calculés par le pipeline ML Spark. Gestion des habilitations via framework interne."
                },
                {
                    title: "Pipeline de données",
                    content: "Flux ETL nocturne (4h) via procédures stockées pour alimenter le datamart. Intégration des segments stratégiques provenant du modèle de segmentation. API PHP assure la couche d'abstraction entre le frontend et le SI bancaire."
                },
                {
                    title: "Lien avec la Stratégie Data",
                    content: "Ce projet est l'opérationnalisation concrète de la stratégie de segmentation autour d'un cas d'usage métier : la centralisation des actions clients. Les 4 segments (À Entretenir, À Développer, À Stimuler, À Construire) calculés par le pipeline ML sont exposés aux conseillers via cette interface. Permet de passer de la vision stratégique (modèle) à l'action terrain (outil métier quotidien)."
                }
            ],
            architectureFlow: "Pipeline ML (Spark) → Datamart SQL Server (segments + données clients) → PHP REST API → React SPA → 400 conseillers",
            disclaimer: "Données des captures d'écran entièrement simulées (confidentialité bancaire). Interface et fonctionnalités authentiques.",
            relatedProjects: ['strategie-data'],
        },
        {
            id: "vhalumni",
            title: "VH Besançon Alumni - Plateforme Associative Full-Stack (Projet Personnel)",
            shortTitle: "VH Besançon Alumni",
            description: "Plateforme full-stack complète développée en bénévolat pour l'association des anciens élèves de VH Besançon. Blog, annuaire interactif, forum d'annonces, témoignages, authentification sécurisée (NextAuth v5) avec validation admin. Architecture testée (200+ tests unitaires + E2E), double pipeline CI/CD (Vercel + GitHub Actions), monitoring Sentry en production. Stack: Next.js 14, React 19, Sanity CMS, TypeScript.",
            technos: ['Next.js 14', 'TypeScript', 'React 19', 'NextAuth v5', 'Sanity CMS', 'Tailwind CSS', 'Zod', 'Vitest', 'Playwright', 'Sentry', 'Nodemailer', 'Google Drive API', 'GitHub Actions', 'Vercel', 'OVH'],
            screenshots: [
                "/vhalumni/1.png",
                "/vhalumni/2.png",
                "/vhalumni/3.png",
                "/vhalumni/4.png",
                "/vhalumni/5.png",
            ],
            thumbnail: "/vhalumni/figure-plateforme.svg",
            category: "Full-Stack",
            link: "#",
            keyFeatures: [
                {
                    title: "Authentification multi-provider sécurisée",
                    content: "NextAuth v5 avec OAuth et credentials. Workflow de validation admin pour nouveaux membres. Hashing bcrypt, CSRF protection, rate limiting sur endpoints sensibles. Gestion de sessions avec Edge Middleware."
                },
                {
                    title: "Gestion de contenu headless",
                    content: "Sanity CMS avec Studio personnalisé. Schémas structurés pour blog, annuaire, annonces, témoignages. Webhooks temps réel pour synchronisation. Permissions granulaires et validation admin."
                },
                {
                    title: "Suite de tests complète (200+ tests)",
                    content: "Tests unitaires (Vitest) sur validations, utils, emails, rate-limiting, API routes. Tests d'intégration sur parcours utilisateur complet. Tests E2E (Playwright) sur workflows critiques. Code coverage avec V8."
                },
                {
                    title: "Double Pipeline CI/CD",
                    content: "Vercel : tests unitaires (200+ tests) + build Next.js rapide (~1-2 min) sur chaque commit/PR. GitHub Actions : tests unitaires avec coverage + tests E2E Playwright + rapports détaillés (~3-4 min). Quality gate systématique avant déploiement."
                },
                {
                    title: "Monitoring & Analytics en production",
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
                    title: "Tests & Qualité (200+ tests)",
                    content: "Tests unitaires (Vitest) : validations, utils, emails, rate-limiting, logger, API routes. Tests d'intégration : parcours utilisateur complet (inscription → validation → création d'annonce). Tests E2E (Playwright) : workflows critiques avec screenshots on failure. Code coverage V8 avec rapports automatiques."
                },
                {
                    title: "Intégrations externes",
                    content: "Google Drive API pour synchronisation automatique de données newsletter. Nodemailer pour notifications (bienvenue, newsletter, réinitialisation MDP, validation admin). Upload et traitement d'images avec crop interactif (react-easy-crop)."
                },
                {
                    title: "Infrastructure & CI/CD (Double Pipeline)",
                    content: "Pipeline Vercel : 200+ tests unitaires + build Next.js rapide (~1-2 min) sur chaque commit/PR avec déploiement automatique. Pipeline GitHub Actions : tests unitaires avec coverage + tests E2E Playwright + rapports détaillés (~3-4 min) pour validation complète. Preview deployments sur chaque PR. CDN mondial et Edge Functions. DNS personnalisé OVH (vh-besancon-alumni.fr). Disponibilité 99.9% (Vercel SLA)."
                }
            ],
            architectureFlow: "Architecture : Utilisateur → Middleware Edge (auth/logging) → API Routes → Validation Zod → Sanity CMS ←→ Webhooks → Next.js (revalidation) → Vercel Edge (CDN) → DNS OVH → Sentry (monitoring)",
            disclaimer: "Plateforme en production sur vh-besancon-alumni.fr. Solution complète sécurisée, testée et monitorée (200+ tests, double pipeline CI/CD, Sentry APM, Web Vitals). Autonomie complète : de la conception à la mise en production."
        }
    ]
};