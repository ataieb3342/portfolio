'use client'; 

import { motion, Variants, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useCallback, useEffect } from 'react';

// --- Définition des types pour les données ---
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

interface FullData {
  name: string;
  title: string;
  profile: string;
  experience: ExperienceData;
  impacts: ImpactData[];
  skills: SkillsData;
  contact: ContactData;
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
    }
};

// --- Définition des variantes d'animation ---

// 1. Transition de Page (Section complète)
const pageVariants: Variants = {
  // Le Fade Out est rapide et sort sans mouvement
  hidden: { 
    opacity: 0, 
    transition: { 
      duration: 0.3, // Plus court pour la sortie
      ease: "easeOut" 
    } 
  },
  // Le Fade In est plus long et prêt à commencer l'animation du contenu
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.5, // Plus long pour l'entrée
      ease: "easeIn" 
    } 
  },
};

// 2. Conteneur pour le Staggering (utilisé pour Hero, Impacts, Skills)
// Déclenche l'animation des enfants après un petit délai pour laisser la page s'installer
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4, // Délai après l'apparition de la page
      staggerChildren: 0.1,
    },
  },
};

// 3. Animation des Éléments (Titres, cartes, liens)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  },
};

// 4. Animation pour les éléments centraux qui ne sont pas stagger (comme ExperienceBox)
const centerBlockVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.4, // Délai après l'apparition de la page
            duration: 0.7,
            ease: "easeOut"
        }
    }
};

// --- Hook de Logique de Défilement ---
interface UseFullPageScrollProps {
    totalSections: number;
    delay?: number; 
    initialIndex?: number;
}

const useFullPageScroll = ({ totalSections, delay = 1000, initialIndex = 0 }: UseFullPageScrollProps) => {
    const [activeIndex, setActiveIndex] = useState(initialIndex);
    const [isScrolling, setIsScrolling] = useState(false);

    const handleScroll = useCallback((event: WheelEvent) => {
        // Bloque le scroll si une transition est en cours (anti-rebond)
        if (isScrolling) return;

        const direction = event.deltaY > 0 ? 1 : -1;
        let nextIndex = activeIndex + direction;

        if (nextIndex < 0) {
            nextIndex = 0;
        } else if (nextIndex >= totalSections) {
            nextIndex = totalSections - 1;
        }

        if (nextIndex !== activeIndex) {
            setIsScrolling(true); 
            setActiveIndex(nextIndex);
            
            setTimeout(() => {
                setIsScrolling(false);
            }, delay);
        }

    }, [activeIndex, isScrolling, totalSections, delay]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        window.addEventListener('wheel', handleScroll);

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('wheel', handleScroll);
        };
    }, [handleScroll]);

    return { activeIndex, setActiveIndex };
};

// --- Composants de section (Mise à jour des animations internes) ---

// Hero Section
const HeroSection: React.FC = () => (
    <motion.section 
        className="pt-32 pb-24 px-6 bg-gray-900 overflow-hidden min-h-screen flex items-center"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
    >
      <div className="container mx-auto max-w-6xl text-white">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            className="flex-1"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Tous les enfants utilisent les variantes itemVariants */}
            <motion.div variants={itemVariants} className="inline-block mb-4">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                Disponible • En recherche active
              </span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
              {data.name}
            </motion.h1>
            <motion.p variants={itemVariants} className="text-3xl text-blue-300 font-light mb-6">
              {data.title}
            </motion.p>
            <motion.p variants={itemVariants} className="text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              {data.profile}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={containerVariants} // Utilise containerVariants pour stagger les boutons
              initial="hidden"
              animate="visible"
            >
              <motion.a 
                variants={itemVariants}
                href={`mailto:${data.contact.email}`} 
                className="bg-blue-600 text-white px-10 py-4 rounded-xl hover:bg-blue-700 transition font-bold shadow-2xl shadow-blue-500/50"
              >
                Me contacter
              </motion.a>
              <motion.a 
                variants={itemVariants}
                href="cv.pdf" 
                className="border-2 border-gray-600 text-gray-300 px-10 py-4 rounded-xl hover:bg-gray-800 hover:border-blue-500 transition font-medium"
              >
                Télécharger mon CV
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative hidden md:block"
            initial={{ scale: 0.5, opacity: 0, rotate: 10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.7, duration: 0.8, type: "spring", stiffness: 100 }} // Délai plus long
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
    </motion.section>
);

// Experience Highlight Section
const ExperienceHighlight: React.FC = () => (
    <motion.section 
        className="py-20 px-6 bg-gray-50 min-h-screen flex items-center"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
            variants={itemVariants} 
            className="text-4xl font-bold text-center mb-12 text-gray-900"
        >
            Expérience Clé
        </motion.h2>
        <motion.div 
          className="bg-white rounded-3xl shadow-2xl border border-blue-100 p-10 md:p-16 transform transition-transform duration-500"
          variants={centerBlockVariants} // Utilise la variante de bloc central
          initial="hidden"
          animate="visible"
        >
          {/* Les éléments internes peuvent utiliser des itemVariants, mais appliqués directement */}
          <motion.div 
            variants={containerVariants}
            className="flex items-start gap-4 mb-8"
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
              ACTUEL
            </motion.div>
            <motion.div>
              <motion.h3 variants={itemVariants} className="text-3xl font-extrabold text-slate-900">{data.experience.title}</motion.h3>
              <motion.p variants={itemVariants} className="text-xl text-blue-600 font-medium">{data.experience.company} • {data.experience.period}</motion.p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-10 border-t border-slate-200 pt-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-3xl text-blue-600">⚡</span> Applications métier full-stack
              </h4>
              <p className="text-slate-700 leading-relaxed">
                {data.experience.appHighlights}
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-3xl text-blue-600">📊</span> Data & MLOps
              </h4>
              <p className="text-slate-700 leading-relaxed">
                {data.experience.dataHighlights}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
);

// Approche & Impact Section
const ApprocheImpact: React.FC = () => (
    <motion.section 
        className="py-20 px-6 bg-white min-h-screen flex items-center"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-4 text-slate-900">Approche & Impact</motion.h2>
        <motion.p variants={itemVariants} className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Ma valeur ajoutée : transformer un besoin métier en solution complète et opérationnelle.
        </motion.p>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {data.impacts.map((impact, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 shadow-lg"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-blue-500/30">
                <span className="text-3xl">{impact.icon}</span>
              </div>
              <h3 className="font-bold text-2xl mb-3 text-slate-900">{impact.title}</h3>
              <p className="text-slate-700 leading-relaxed">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
);
  
// Compétences Section
const SkillsSection: React.FC = () => (
    <motion.section 
        className="py-20 px-6 bg-gray-50 min-h-screen flex items-center"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16 text-slate-900">Stack Technique Complète</motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Data & ML */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
            <h3 className="font-extrabold text-2xl mb-5 text-blue-600 border-b pb-3 border-blue-100">Data & ML</h3>
            <div className="flex flex-wrap gap-3">
              {data.skills.data.map((skill: string) => (
                <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Développement */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
            <h3 className="font-extrabold text-2xl mb-5 text-blue-600 border-b pb-3 border-blue-100">Développement</h3>
            <div className="flex flex-wrap gap-3">
              {data.skills.dev.map((skill: string) => (
                <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Outils & DevOps */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
            <h3 className="font-extrabold text-2xl mb-5 text-blue-600 border-b pb-3 border-blue-100">Outils & DevOps</h3>
            <div className="flex flex-wrap gap-3">
              {data.skills.tools.map((skill: string) => (
                <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
);

// Contact Section
const ContactSection: React.FC = () => (
    <motion.section 
        id="contact" 
        className="py-24 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 min-h-screen flex items-center"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2 variants={itemVariants} className="text-5xl font-extrabold mb-6 text-white">Discutons de votre projet</motion.h2>
        <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Vous cherchez un profil polyvalent capable de prendre en charge des projets 
          de bout en bout ? Contactez-moi.
        </motion.p>
        
        <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
          <motion.a 
            variants={itemVariants}
            href={`mailto:${data.contact.email}`} 
            className="bg-blue-500 text-white px-8 py-4 rounded-xl hover:bg-blue-600 transition font-bold shadow-2xl shadow-blue-500/50 inline-flex items-center gap-3 text-lg"
          >
            <span>📧</span> {data.contact.email}
          </motion.a>
          <motion.a 
            variants={itemVariants}
            href={`tel:${data.contact.phone.replace(/[^0-9+]/g, '')}`} 
            className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition font-bold shadow-2xl inline-flex items-center gap-3 text-lg"
          >
            <span>📱</span> {data.contact.phone}
          </motion.a>
        </motion.div>
        
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex justify-center gap-6 mt-10">
          <motion.a 
            variants={itemVariants}
            href={data.contact.linkedin} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition font-medium text-lg"
          >
            LinkedIn
          </motion.a>
          <span className="text-gray-600">•</span>
          <motion.a 
            variants={itemVariants}
            href={data.contact.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition font-medium text-lg"
          >
            GitHub
          </motion.a>
          <span className="text-gray-600">•</span>
          <motion.a 
            variants={itemVariants}
            href={data.contact.portfolio} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition font-medium text-lg"
          >
            Portfolio
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
);


// --- Composant principal Conteneur ---
const Home: React.FC = () => {
    const sections = [
        <HeroSection key="hero" />,
        <ExperienceHighlight key="experience" />,
        <ApprocheImpact key="impacts" />,
        <SkillsSection key="skills" />,
        <ContactSection key="contact" />,
    ];

    const { activeIndex, setActiveIndex } = useFullPageScroll({ totalSections: sections.length });
    const CurrentSection = sections[activeIndex];

    return (
        <div className="relative h-screen w-screen overflow-hidden bg-white">
            
            {/* AnimatePresence gère la transition de l'ancienne section vers la nouvelle */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex} 
                    className="absolute inset-0 w-full h-full"
                >
                    {CurrentSection}
                </motion.div>
            </AnimatePresence>
            
            {/* Navigation latérale (Points d'ancrage) */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
                {sections.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === activeIndex ? 'bg-blue-600 w-4 h-4' : 'bg-gray-400 hover:bg-gray-500'
                        }`}
                        aria-label={`Aller à la section ${index + 1}`}
                    />
                ))}
            </div>
            
            <footer className="absolute bottom-0 w-full py-2 px-6 bg-gray-900 text-center border-t border-gray-700 z-40">
                <p className="text-gray-500 text-sm">
                    © 2024 {data.name} • {data.title}
                </p>
            </footer>
        </div>
    );
}

export default Home;