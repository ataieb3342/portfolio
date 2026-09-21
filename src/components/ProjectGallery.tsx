'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { Icon } from './ui/Icon';

interface ProjectGalleryProps {
  screenshots: string[];
  projectTitle: string;
  iframeUrl?: string;
}

/** Carrousel de captures, navigable au clavier (← / →). */
export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  screenshots,
  projectTitle,
  iframeUrl,
}) => {
  const [index, setIndex] = useState(0);
  // Ratio réel de la capture affichée. Les captures ne sont pas en 16:9
  // (plutôt 2:1) : un cadre fixe les encadrerait de bandes vides.
  const [ratio, setRatio] = useState(2);
  const reduced = useReducedMotion();
  const total = screenshots.length;

  // Changer de projet remet le carrousel au début : l'index précédent
  // pourrait dépasser la taille du nouveau tableau. Ajustement pendant le
  // rendu plutôt que dans un effet — cf. « You Might Not Need an Effect ».
  const key = screenshots.join('|');
  const [renderedKey, setRenderedKey] = useState(key);
  if (key !== renderedKey) {
    setRenderedKey(key);
    setIndex(0);
  }

  const go = useCallback(
    (delta: number) => setIndex((prev) => (prev + delta + total) % total),
    [total]
  );

  useEffect(() => {
    if (total < 2) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, total]);

  if (iframeUrl) {
    return (
      <div className="relative aspect-video w-full overflow-hidden border border-[color:var(--rule)] bg-bg">
        <iframe
          src={iframeUrl}
          title={projectTitle}
          className="h-full w-full border-0"
          allowFullScreen
          loading="lazy"
        />
        <span className="note text-accent absolute top-3 right-3 flex items-center gap-2 bg-bg/85 px-3 py-1.5">
          <span className="bg-accent h-1 w-1 rounded-full" />
          Interactif
        </span>
      </div>
    );
  }

  if (total === 0) return null;

  return (
    <div>
      <div
        style={{ aspectRatio: ratio }}
        className="relative w-full overflow-hidden border border-[color:var(--rule)] bg-bg"
        role="group"
        aria-roledescription="carrousel"
        aria-label={`Captures d'écran — ${projectTitle}`}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Image
              src={screenshots[index]}
              alt={`${projectTitle} — capture ${index + 1} sur ${total}`}
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-contain"
              priority={index === 0}
              onLoad={(event) => {
                const img = event.currentTarget;
                if (img.naturalWidth && img.naturalHeight) {
                  setRatio(img.naturalWidth / img.naturalHeight);
                }
              }}
            />
          </motion.div>
        </AnimatePresence>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Capture précédente"
              className="text-fg hover:text-accent-soft bg-bg/70 absolute top-1/2 left-3 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center backdrop-blur-sm transition-colors"
            >
              <Icon name="chevronLeft" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Capture suivante"
              className="text-fg hover:text-accent-soft bg-bg/70 absolute top-1/2 right-3 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center backdrop-blur-sm transition-colors"
            >
              <Icon name="chevronRight" className="h-5 w-5" />
            </button>

            <span className="note bg-bg/70 absolute top-3 right-3 px-3 py-1 backdrop-blur-sm">
              {index + 1} / {total}
            </span>
          </>
        )}
      </div>

      {/* Pastilles de navigation */}
      {total > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {screenshots.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Afficher la capture ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-accent' : 'w-1.5 bg-[color:var(--rule-strong)] hover:bg-muted'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
