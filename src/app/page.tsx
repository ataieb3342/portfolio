'use client'; 

import { motion, Variants, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// --- Définition des types ---
interface ContactData {
  phone: string;
  email: string;
  portfolio: string;
  linkedin: string;
  github: string;
}

interface ExperienceData {
  title: string;
  company: string;
  period: string;
  appHighlights: string;
  dataHighlights: string;
}

interface ImpactData {
  icon: string;
  title: string;
  description: string;
}

interface SkillsData {
  data: string[];
  dev: string[];
  tools: string[];
}

interface ProjectData {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  technos: string[];
  screenshots: string[];
  thumbnail: string;
  category: string;
  link?: string;
}

interface FullData {
  name: string;
  title: string;
  profile: string;
  experience: ExperienceData;
  impacts: ImpactData[];
  skills: SkillsData;
  contact: ContactData;
  projects: ProjectData[];
}

// --- Données du CV ---
const data: FullData = {
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
      data: ['Python', 'SQL', 'ETL', 'Machine Learning', 'Spark/Hadoop', 'Segmentation client', 'Feature Engineering'], 
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

// --- Variantes d'animation simplifiées ---
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// --- Composant Carrousel Projets (optimisé pour 1920x1080) ---
const ProjectGallery: React.FC<{ screenshots: string[], projectTitle: string }> = ({ screenshots, projectTitle }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    };

    return (
        <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-2xl bg-gray-950 border border-gray-700">
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={currentIndex}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <Image
                        src={screenshots[currentIndex]}
                        alt={`${projectTitle} - Capture ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        priority={currentIndex === 0}
                    />
                </motion.div>
            </AnimatePresence>

            {screenshots.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 bg-black/60 hover:bg-blue-600 rounded-full transition-all duration-200 text-white backdrop-blur-sm hover:scale-110"
                        aria-label="Image précédente"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 bg-black/60 hover:bg-blue-600 rounded-full transition-all duration-200 text-white backdrop-blur-sm hover:scale-110"
                        aria-label="Image suivante"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
                        {screenshots.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'w-8 bg-blue-500'
                                        : 'w-1.5 bg-white/40 hover:bg-white/60'
                                }`}
                                aria-label={`Afficher l'image ${index + 1}`}
                            />
                        ))}
                    </div>

                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {currentIndex + 1} / {screenshots.length}
                    </div>
                </>
            )}
        </div>
    );
}

// --- Composant Modal Projet (refonte complète) ---
const ProjectModal: React.FC<{
    project: ProjectData | null;
    onClose: () => void
}> = ({ project, onClose }) => {
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [project]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-7xl max-h-[95vh] overflow-hidden flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="sticky top-0 bg-gray-900/98 backdrop-blur-md border-b border-gray-700/50 px-6 py-4 flex justify-between items-start z-20 shrink-0">
                        <div className="flex-1 min-w-0 pr-4">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="inline-flex items-center bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    {project.category}
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white truncate">{project.title}</h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800/80 rounded-lg shrink-0"
                            aria-label="Fermer"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Contenu scrollable */}
                    <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
                        <div className="p-6 md:p-8 space-y-8">
                            {/* Galerie d'images en pleine largeur */}
                            <div className="w-full">
                                <ProjectGallery screenshots={project.screenshots} projectTitle={project.title} />
                            </div>

                            {/* Contenu principal */}
                            <div className="space-y-6 max-w-5xl mx-auto">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                        <span className="text-blue-400">📋</span>
                                        Description du projet
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-base">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Architecture technique détaillée */}
                                {project.id === 'p360' && (
                                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            <span className="text-blue-400">🏗️</span>
                                            Architecture technique
                                        </h3>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                                    Frontend (Export statique Next.js)
                                                </h4>
                                                <p className="text-gray-300 text-sm leading-relaxed ml-4">
                                                    Application React compilée en <code className="bg-gray-900 px-2 py-0.5 rounded text-blue-300">export static</code> via Next.js,
                                                    déployée sur un serveur Apache. Choix technique imposé par des contraintes legacy :
                                                    pas de SSR (Server-Side Rendering), uniquement du rendu côté client.
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                                    Backend (Classes PHP + SQL Server)
                                                </h4>
                                                <p className="text-gray-300 text-sm leading-relaxed ml-4">
                                                    Classes PHP métier qui requêtent directement un <strong>SQL Server</strong>.
                                                    Ces classes exposent des APIs REST consommées par le frontend.
                                                    Le SQL Server joue le rôle de datamart décisionnel.
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                                    Flux de données (Teradata → SQL Server)
                                                </h4>
                                                <p className="text-gray-300 text-sm leading-relaxed ml-4">
                                                    Le SQL Server est alimenté quotidiennement à <strong>4h du matin</strong> depuis
                                                    un <strong>Teradata</strong> (entrepôt de données principal).
                                                    Cette synchronisation est orchestrée via des <strong>procédures stockées SQL</strong>
                                                    qui assurent la fraîcheur des données pour les conseillers.
                                                </p>
                                            </div>

                                            <div className="mt-4 pt-4 border-t border-gray-700">
                                                <p className="text-gray-400 text-xs italic">
                                                    🔄 Schéma : Teradata (source) → SQL Server (datamart) → PHP (API) → React (UI)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Disclaimer données simulées */}
                                {project.id === 'p360' && (
                                    <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
                                        <p className="text-blue-300 text-sm flex items-start gap-2">
                                            <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>
                                                <strong>Note de confidentialité :</strong> Les données affichées dans les captures d&apos;écran sont entièrement simulées
                                                pour des raisons de confidentialité bancaire. L&apos;interface et les fonctionnalités présentées sont authentiques.
                                            </span>
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

// --- SECTIONS ---

// Hero Section
const HeroSection: React.FC = () => (
    <section className="px-6 py-32 bg-gray-900 overflow-hidden">
      <div className="container mx-auto max-w-6xl text-white">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="inline-block mb-8 md:mb-4">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                Disponible • En recherche active
              </span>
            </motion.div>

            <div className="md:hidden flex justify-center mb-8">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-40 h-40 border-4 border-blue-500 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-gray-700"
                >
                    <Image
                        src="/profil.jpg"
                        width={160}
                        height={160}
                        alt={data.name}
                        className="object-cover w-full h-full"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "https://placehold.co/160x160/1f2937/ffffff?text=Adam+Taïeb";
                            e.currentTarget.className = "object-contain w-full h-full p-6";
                        }}
                    />
                </motion.div>
            </div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
              {data.name}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-2xl md:text-3xl text-blue-300 font-light mb-6">
              {data.title}
            </motion.p>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              {data.profile}
            </motion.p>
            <motion.div className="flex flex-wrap gap-4" variants={staggerContainer}>
              <motion.a
                variants={fadeIn}
                href={`mailto:${data.contact.email}`}
                className="bg-blue-600 text-white px-10 py-4 rounded-xl hover:bg-blue-700 transition font-bold shadow-lg"
              >
                Me contacter
              </motion.a>
              <motion.a
                variants={fadeIn}
                href="cv.pdf"
                className="border-2 border-gray-600 text-gray-300 px-10 py-4 rounded-xl hover:bg-gray-800 hover:border-blue-500 transition font-medium"
              >
                Télécharger mon CV
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-96 h-96 border-4 border-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 overflow-hidden bg-gray-700">
                <Image
                    src="/profil.jpg"
                    width={256}
                    height={256}
                    alt={data.name}
                    className="object-cover w-full h-full"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/256x256/1f2937/ffffff?text=Adam+Taïeb";
                        e.currentTarget.className = "object-contain w-full h-full p-8";
                    }}
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
);

// Experience Highlight Section
const ExperienceHighlight: React.FC = () => (
    <section className="px-6 py-20 bg-gray-800 text-gray-200">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12 text-white"
        >
            Expérience Clé
        </motion.h2>
        <motion.div
          className="bg-gray-900 rounded-3xl shadow-2xl border border-gray-700 p-10 md:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
              ACTUEL
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-white">
                {data.experience.title}
              </h3>
              <p className="text-xl text-blue-400 font-medium">
                {data.experience.company} • {data.experience.period}
              </p>
            </div>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-10 border-t border-gray-700 pt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <h4 className="font-bold text-xl text-white mb-4 flex items-center gap-3">
                <span className="text-3xl text-blue-400">⚡</span> Applications métier full-stack
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {data.experience.appHighlights}
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h4 className="font-bold text-xl text-white mb-4 flex items-center gap-3">
                <span className="text-3xl text-blue-400">📊</span> Data & MLOps
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {data.experience.dataHighlights}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
);

// Projects Showcase Section
const ProjectsSection: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    return (
        <>
            <section className="px-6 py-20 bg-gray-900 text-gray-200">
                <div className="container mx-auto max-w-7xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-center mb-6 text-white"
                    >
                        Projets Phares
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
                    >
                        Découvrez mes réalisations les plus significatives en développement full-stack et data engineering
                    </motion.p>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        {data.projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={fadeIn}
                                className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition cursor-pointer shadow-xl"
                                onClick={() => setSelectedProject(project)}
                                whileHover={{ y: -8 }}
                            >
                                <div className="relative h-64 overflow-hidden bg-gray-950">
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.shortTitle}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = "https://placehold.co/400x300/1f2937/3b82f6?text=" + encodeURIComponent(project.shortTitle);
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                    <div className="absolute top-4 left-4">
                                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                        {project.shortTitle}
                                    </h3>
                                    <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technos.slice(0, 3).map((techno) => (
                                            <span key={techno} className="bg-gray-700/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                                                {techno}
                                            </span>
                                        ))}
                                        {project.technos.length > 3 && (
                                            <span className="text-gray-500 text-xs px-2 py-1">
                                                +{project.technos.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                                        <span>Voir les détails</span>
                                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </>
    );
};

// Approche & Impact Section
const ApprocheImpact: React.FC = () => (
    <section className="px-6 py-20 bg-gray-800 text-gray-200">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4 text-white"
        >
          Approche & Impact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
        >
          Ma valeur ajoutée : transformer un besoin métier en solution complète et opérationnelle.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {data.impacts.map((impact, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-gray-900 p-8 rounded-2xl border-2 border-blue-600/30 shadow-xl hover:border-blue-600/60 transition"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-3xl">{impact.icon}</span>
              </div>
              <h3 className="font-bold text-2xl mb-3 text-white">{impact.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
);
  
// Compétences Section
const SkillsSection: React.FC = () => (
    <section className="px-6 py-20 bg-gray-900 text-gray-200">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Stack Technique Complète
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeIn}
            className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl hover:border-blue-600/50 transition"
          >
            <h3 className="font-extrabold text-2xl mb-5 text-blue-400 border-b pb-3 border-gray-700">Data & ML</h3>
            <div className="flex flex-wrap gap-3">
              {data.skills.data.map((skill: string) => (
                <span
                  key={skill}
                  className="bg-gray-700 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl hover:border-blue-600/50 transition"
          >
            <h3 className="font-extrabold text-2xl mb-5 text-blue-400 border-b pb-3 border-gray-700">Développement</h3>
            <div className="flex flex-wrap gap-3">
              {data.skills.dev.map((skill: string) => (
                <span
                  key={skill}
                  className="bg-gray-700 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl hover:border-blue-600/50 transition"
          >
            <h3 className="font-extrabold text-2xl mb-5 text-blue-400 border-b pb-3 border-gray-700">Outils & DevOps</h3>
            <div className="flex flex-wrap gap-3">
              {data.skills.tools.map((skill: string) => (
                <span
                  key={skill}
                  className="bg-gray-700 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
);

// Contact Section
const ContactSection: React.FC = () => (
    <section className="px-6 py-20 bg-gradient-to-tr from-gray-900 to-gray-950">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-6 text-white"
        >
          Discutons de votre projet
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Vous cherchez un profil polyvalent capable de prendre en charge des projets
          de bout en bout ? Contactez-moi.
        </motion.p>

        <motion.div
            className="flex flex-wrap justify-center gap-6 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
          <motion.a
            variants={fadeIn}
            href={`mailto:${data.contact.email}`}
            className="bg-blue-500 text-white px-8 py-4 rounded-xl hover:bg-blue-600 transition font-bold shadow-lg inline-flex items-center gap-3 text-lg"
          >
            <span>📧</span> {data.contact.email}
          </motion.a>
          <motion.a
            variants={fadeIn}
            href={`tel:${data.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="bg-gray-200 text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-300 transition font-bold shadow-lg inline-flex items-center gap-3 text-lg"
          >
            <span>📱</span> {data.contact.phone}
          </motion.a>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.a
            variants={fadeIn}
            href={data.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition font-medium text-lg"
          >
            LinkedIn
          </motion.a>
          <span className="text-gray-600">•</span>
          <motion.a
            variants={fadeIn}
            href={data.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition font-medium text-lg"
          >
            GitHub
          </motion.a>
          <span className="text-gray-600">•</span>
          <motion.a
            variants={fadeIn}
            href={data.contact.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition font-medium text-lg"
          >
            Portfolio
          </motion.a>
        </motion.div>
      </div>
    </section>
);

// --- Composant principal ---
const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900">
            <HeroSection />
            <ExperienceHighlight />
            <ProjectsSection />
            <ApprocheImpact />
            <SkillsSection />
            <ContactSection />
            
            <footer className="py-8 px-6 bg-gray-950 text-center border-t border-gray-800">
                <p className="text-gray-500 text-sm">
                    © 2025 {data.name} • {data.title}
                </p>
            </footer>
        </div>
    );
}

export default Home;