import type { Variants, Transition } from 'framer-motion';

/** Courbe d'accélération commune à toutes les entrées. */
export const easeExpo = [0.16, 1, 0.3, 1] as const;

export const baseTransition: Transition = {
  duration: 0.65,
  ease: easeExpo,
};

/** Apparition depuis le bas — variante par défaut des éléments révélés. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
};

/** Apparition sans déplacement, pour les blocs déjà volumineux. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: baseTransition },
};

/** Apparition latérale, utilisée pour les colonnes secondaires. */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: baseTransition },
};

/** Conteneur cadençant l'entrée de ses enfants. */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Réglage de viewport partagé : on ne rejoue pas l'animation au retour. */
export const viewportOnce = { once: true, amount: 0.25 } as const;
