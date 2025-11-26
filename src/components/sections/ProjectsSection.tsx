'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { ProjectData } from '@/types';
import { data } from '@/lib/data';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { ProjectModal } from '../ProjectModal';

export const ProjectsSection: React.FC = () => {
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
                        className="text-4xl font-bold text-center mb-6 text-white"
                    >
                        Projets Récents
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
                    >
                        Découvrez mes réalisations récentes en développement full-stack et data engineering
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
                                className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-blue-500/20"
                                onClick={() => setSelectedProject(project)}
                                whileHover={{ y: -10, scale: 1.02 }}
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

                                    {/* Icône d'œil au centre au hover */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-blue-600 rounded-full p-4 shadow-2xl transform group-hover:scale-110 transition-transform">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                    </div>

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

                                    <div className="w-full mt-2 flex items-center justify-center gap-2 bg-blue-600 group-hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-md group-hover:shadow-lg group-hover:shadow-blue-500/50">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <span>Voir les détails</span>
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
