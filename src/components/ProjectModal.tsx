'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';
import { ProjectData } from '@/types';
import { ProjectGallery } from './ProjectGallery';

interface ProjectModalProps {
    project: ProjectData | null;
    onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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
                                <ProjectGallery
                                    screenshots={project.screenshots}
                                    projectTitle={project.title}
                                    iframeUrl={project.iframeUrl}
                                />
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

                                {/* Métriques (si présentes) */}
                                {project.metrics && (
                                    <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/30 rounded-xl p-5">
                                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                            <span className="text-blue-400">📊</span>
                                            Métriques d'impact
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            {project.metrics.users && (
                                                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/30">
                                                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Utilisateurs</p>
                                                    <p className="text-blue-300 text-lg font-bold">{project.metrics.users}</p>
                                                </div>
                                            )}
                                            {project.metrics.activeUsers && (
                                                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/30">
                                                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Récurrents</p>
                                                    <p className="text-green-300 text-lg font-bold">{project.metrics.activeUsers}</p>
                                                </div>
                                            )}
                                            {project.metrics.status && (
                                                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/30">
                                                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Statut</p>
                                                    <p className="text-purple-300 text-lg font-bold">{project.metrics.status}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Fonctionnalités clés (si présentes) */}
                                {project.keyFeatures && project.keyFeatures.length > 0 && (
                                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                                        <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                                            <span className="text-blue-400">✨</span>
                                            Fonctionnalités clés
                                        </h3>
                                        <div className="space-y-4">
                                            {project.keyFeatures.map((feature, index) => (
                                                <div key={index} className="flex gap-3">
                                                    <div className="shrink-0 w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 font-bold text-sm">
                                                        {index + 1}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold text-blue-300 mb-1">
                                                            {feature.title}
                                                        </h4>
                                                        <p className="text-gray-300 text-sm leading-relaxed">
                                                            {feature.content}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Architecture technique détaillée */}
                                {project.technicalDetails && project.technicalDetails.length > 0 && (
                                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            <span className="text-blue-400">🏗️</span>
                                            Architecture technique
                                        </h3>

                                        <div className="space-y-4">
                                            {project.technicalDetails.map((detail, index) => (
                                                <div key={index}>
                                                    <h4 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                                                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                                        {detail.title}
                                                    </h4>
                                                    <p className="text-gray-300 text-sm leading-relaxed ml-4">
                                                        {detail.content}
                                                    </p>
                                                </div>
                                            ))}

                                            {project.architectureFlow && (
                                                <div className="mt-4 pt-4 border-t border-gray-700">
                                                    <p className="text-gray-400 text-xs italic">
                                                        {project.architectureFlow}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Disclaimer */}
                                {project.disclaimer && (
                                    <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
                                        <p className="text-blue-300 text-sm flex items-start gap-2">
                                            <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>
                                                <strong>Note :</strong> {project.disclaimer}
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
