'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import React from 'react';
import { fadeUp, stagger, viewportOnce } from '@/lib/animations';

type Props = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  /** Retard supplémentaire, en secondes. */
  delay?: number;
  id?: string;
};

/**
 * Révèle son contenu à l'entrée dans le viewport.
 *
 * C'est la seule frontière client de la page : les sections restent des
 * composants serveur et passent leur markup ici via `children`.
 * Si l'utilisateur a demandé moins d'animations, on rend un simple `div`.
 */
export const Reveal: React.FC<Props> = ({ children, className, variants = fadeUp, delay = 0, id }) => {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

/** Conteneur qui cadence l'apparition de ses `RevealItem`. */
export const RevealGroup: React.FC<Props> = ({ children, className, variants = stagger, id }) => {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

/** Élément animé par le `RevealGroup` parent. */
export const RevealItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}> = ({ children, className, variants = fadeUp }) => {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
};
