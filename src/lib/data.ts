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
            shortTitle: "Vue 360° Client",
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
            link: "#"
        },
    ]
};
