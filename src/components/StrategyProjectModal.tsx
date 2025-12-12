'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';
import { ProjectData } from '@/types';

interface StrategyProjectModalProps {
    project: ProjectData | null;
    onClose: () => void;
    allProjects?: ProjectData[];
    onProjectClick?: (project: ProjectData) => void;
}

export const StrategyProjectModal: React.FC<StrategyProjectModalProps> = ({ project, onClose, allProjects, onProjectClick }) => {
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
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20 rounded-2xl shadow-2xl border border-purple-500/30 w-full max-w-7xl max-h-[95vh] overflow-hidden flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header avec gradient */}
                    <div className="sticky top-0 bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40 backdrop-blur-md border-b border-purple-500/30 px-6 py-5 flex justify-between items-start z-20 shrink-0">
                        <div className="flex-1 min-w-0 pr-4">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="inline-flex items-center bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border border-purple-500/30">
                                    {project.category}
                                </span>
                                {project.metrics?.status && (
                                    <span className="inline-flex items-center bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold border border-green-500/30">
                                        ✓ {project.metrics.status}
                                    </span>
                                )}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-2">
                                {project.title}
                            </h2>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-purple-800/30 rounded-lg shrink-0 border border-transparent hover:border-purple-500/30"
                            aria-label="Fermer"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Contenu scrollable */}
                    <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-gray-900">
                        <div className="p-6 md:p-8 space-y-8">

                            {/* Documents Stratégiques - Hero Section */}
                            {project.strategyDocuments && project.strategyDocuments.length > 0 && (
                                <div className="space-y-4">
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                                            <span className="text-3xl">📚</span>
                                            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                                Documentation & Présentation
                                            </span>
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            Explorez les documents détaillant la stratégie et la méthodologie
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                                        {project.strategyDocuments.map((doc, index) => (
                                            <motion.a
                                                key={index}
                                                href={doc.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="group relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 hover:from-purple-900/45 hover:to-blue-900/45 border-2 border-purple-500/40 rounded-2xl p-6 transition-colors duration-200"
                                            >
                                                {/* Icon large */}
                                                <div className="mb-4">
                                                    <div className="inline-flex w-16 h-16 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-2xl items-center justify-center text-5xl border border-purple-500/30">
                                                        {doc.type === 'pdf' && '📄'}
                                                        {doc.type === 'html' && '🌐'}
                                                        {doc.type === 'link' && '🔗'}
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="space-y-3">
                                                    <h4 className="text-xl font-bold text-white leading-tight">
                                                        {doc.title}
                                                    </h4>
                                                    {doc.description && (
                                                        <p className="text-gray-300 text-sm leading-relaxed">
                                                            {doc.description}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* CTA */}
                                                <div className="flex items-center gap-2 mt-6 text-purple-300 font-semibold">
                                                    <span>Ouvrir le document</span>
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </div>

                                                {/* Decorative corner */}
                                                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-400/30 rounded-tr-lg"></div>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Divider */}
                            <div className="flex items-center gap-4 max-w-6xl mx-auto">
                                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                                <span className="text-purple-400 text-sm font-semibold">DÉTAILS DU PROJET</span>
                                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                            </div>

                            <div className="space-y-8 max-w-6xl mx-auto">
                                {/* Métriques */}
                                {project.metrics && (
                                    <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                                            <span className="text-purple-400">📊</span>
                                            Impact & Métriques
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                            {project.metrics.scope && (
                                                <div className="bg-gray-800/60 rounded-xl p-4 border border-purple-500/20">
                                                    <p className="text-purple-300 text-xs uppercase tracking-wide mb-2 font-semibold">Périmètre</p>
                                                    <p className="text-white text-lg font-bold">{project.metrics.scope}</p>
                                                </div>
                                            )}
                                            {project.metrics.team && (
                                                <div className="bg-gray-800/60 rounded-xl p-4 border border-blue-500/20">
                                                    <p className="text-blue-300 text-xs uppercase tracking-wide mb-2 font-semibold">Équipe</p>
                                                    <p className="text-white text-lg font-bold">{project.metrics.team}</p>
                                                </div>
                                            )}
                                            {project.metrics.impact && (
                                                <div className="bg-gray-800/60 rounded-xl p-4 border border-green-500/20">
                                                    <p className="text-green-300 text-xs uppercase tracking-wide mb-2 font-semibold">Impact</p>
                                                    <p className="text-white text-lg font-bold">{project.metrics.impact}</p>
                                                </div>
                                            )}
                                            {project.metrics.status && (
                                                <div className="bg-gray-800/60 rounded-xl p-4 border border-purple-500/20">
                                                    <p className="text-purple-300 text-xs uppercase tracking-wide mb-2 font-semibold">Statut</p>
                                                    <p className="text-white text-lg font-bold">{project.metrics.status}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Fonctionnalités clés */}
                                {project.keyFeatures && project.keyFeatures.length > 0 && (
                                    <div className="bg-gray-800/30 rounded-2xl p-6 border border-purple-500/20">
                                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                            <span className="text-purple-400">✨</span>
                                            Points Clés
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            {project.keyFeatures.map((feature, index) => (
                                                <div key={index} className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-xl p-5 hover:border-purple-400/40 transition-all">
                                                    <h4 className="font-bold text-purple-300 mb-3 text-lg">
                                                        {feature.title}
                                                    </h4>
                                                    <p className="text-gray-300 text-sm leading-relaxed">
                                                        {feature.content}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Détails techniques */}
                                {project.technicalDetails && project.technicalDetails.length > 0 && (
                                    <div className="bg-gray-800/30 rounded-2xl p-6 border border-purple-500/20">
                                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                            <span className="text-purple-400">🔍</span>
                                            Méthodologie Détaillée
                                        </h3>
                                        <div className="space-y-5">
                                            {project.technicalDetails.map((detail, index) => (
                                                <div key={index} className="border-l-4 border-purple-500/50 pl-5 py-2">
                                                    <h4 className="font-bold text-purple-300 mb-2 text-base">
                                                        {detail.title}
                                                    </h4>
                                                    <p className="text-gray-300 text-sm leading-relaxed">
                                                        {detail.content}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {project.architectureFlow && (
                                            <div className="mt-6 pt-6 border-t border-purple-500/20">
                                                <p className="text-purple-300 text-sm italic leading-relaxed">
                                                    {project.architectureFlow}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Technologies */}
                                {project.technos && project.technos.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                            <span className="text-purple-400">🛠️</span>
                                            Compétences & Technologies
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technos.map((techno, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1.5 bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 text-purple-200 rounded-lg text-sm font-medium hover:border-purple-400/50 transition-colors"
                                                >
                                                    {techno}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Projets liés */}
                                {project.relatedProjects && project.relatedProjects.length > 0 && allProjects && onProjectClick && (
                                    <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-700/30 rounded-xl p-6">
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            <span className="text-purple-400">🔗</span>
                                            Projets liés
                                        </h3>
                                        <div className="grid grid-cols-1 gap-4">
                                            {project.relatedProjects.map((relatedId) => {
                                                const relatedProject = allProjects.find((p) => p.id === relatedId);
                                                if (!relatedProject) return null;
                                                return (
                                                    <button
                                                        key={relatedId}
                                                        onClick={() => onProjectClick(relatedProject)}
                                                        className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-purple-500 rounded-lg p-4 transition-all duration-300 text-left group"
                                                    >
                                                        <div className="flex items-start gap-4">
                                                            <div className="shrink-0 w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 group-hover:bg-purple-600/30 transition-colors">
                                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                                </svg>
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <div className="flex items-center gap-2 mb-1">
                                                                    <span className="text-xs font-bold uppercase tracking-wide text-purple-400">
                                                                        {relatedProject.category}
                                                                    </span>
                                                                </div>
                                                                <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors mb-1">
                                                                    {relatedProject.shortTitle}
                                                                </h4>
                                                                <p className="text-gray-400 text-sm line-clamp-2">
                                                                    {relatedProject.description}
                                                                </p>
                                                            </div>
                                                            <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* Disclaimer */}
                                {project.disclaimer && (
                                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-5">
                                        <p className="text-blue-200 text-sm flex items-start gap-3">
                                            <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>
                                                <strong className="text-blue-100">Note :</strong> {project.disclaimer}
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
};
