'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

interface ProjectGalleryProps {
  screenshots: string[];
  projectTitle: string;
  iframeUrl?: string;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ screenshots, projectTitle, iframeUrl }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    };

    // Si iframeUrl est fourni, afficher l'iframe au lieu des screenshots
    if (iframeUrl) {
        return (
            <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-2xl bg-gray-950 border border-gray-700">
                <iframe
                    src={iframeUrl}
                    title={projectTitle}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Projet interactif
                </div>
            </div>
        );
    }

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
};
