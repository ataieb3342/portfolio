'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Apparition au défilement, en amélioration progressive.
 *
 * Le rendu serveur est *visible* : l'état masqué n'est appliqué que si
 * `data-js` est posé sur `<html>` par le script en ligne du layout. Sans
 * JavaScript — ou si le bundle n'arrive jamais — la page reste lisible.
 *
 * Le déclenchement n'utilise pas `IntersectionObserver` : à seuil non nul,
 * un défilement rapide ou un saut d'ancre peut passer d'« entièrement sous
 * l'écran » à « entièrement au-dessus » entre deux échantillonnages, et
 * l'élément n'est alors jamais révélé. On balaie donc les positions à chaque
 * trame utile : tout ce qui est passé sous la ligne de flottaison est révélé,
 * y compris ce qui est déjà remonté hors écran.
 */

/** Fraction de la hauteur d'écran sous laquelle un élément se révèle. */
const TRIGGER = 0.88;

const pending = new Set<HTMLElement>();
let frame = 0;
let listening = false;

function reveal(el: HTMLElement) {
  el.setAttribute('data-shown', '');
  pending.delete(el);
}

function sweep() {
  frame = 0;

  // Toutes les lectures d'abord, toutes les écritures ensuite : on évite de
  // forcer un recalcul de style entre chaque élément.
  const limit = window.innerHeight * TRIGGER;
  const due: HTMLElement[] = [];
  pending.forEach((el) => {
    if (el.getBoundingClientRect().top < limit) due.push(el);
  });
  due.forEach(reveal);

  if (pending.size === 0) stopListening();
}

function schedule() {
  if (frame === 0) frame = requestAnimationFrame(sweep);
}

function startListening() {
  if (listening) return;
  listening = true;
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
}

function stopListening() {
  if (!listening) return;
  listening = false;
  window.removeEventListener('scroll', schedule);
  window.removeEventListener('resize', schedule);
}

function register(el: HTMLElement) {
  // Signale au script en ligne que le filet de sécurité n'a plus lieu d'être.
  (window as unknown as { __reveal?: boolean }).__reveal = true;
  pending.add(el);
  startListening();
  schedule();
}

function unregister(el: HTMLElement) {
  pending.delete(el);
  if (pending.size === 0) stopListening();
}

function useRevealed<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    register(el);
    return () => unregister(el);
  }, []);

  return ref;
}

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

/** Bloc révélé pour lui-même. */
export const Reveal: React.FC<Props> = ({ children, className, id }) => {
  const ref = useRevealed<HTMLDivElement>();

  return (
    <div ref={ref} id={id} className={className} data-reveal>
      {children}
    </div>
  );
};

/**
 * Conteneur qui cadence l'apparition de ses `RevealItem`.
 *
 * C'est le groupe qui est observé, pas chaque enfant : ils entrent donc
 * ensemble, décalés par le `--reveal-delay` que la feuille de style dérive
 * de leur rang.
 */
export const RevealGroup: React.FC<Props> = ({ children, className, id }) => {
  const ref = useRevealed<HTMLDivElement>();

  return (
    <div ref={ref} id={id} className={className} data-reveal-group>
      {children}
    </div>
  );
};

type ItemProps = {
  children: React.ReactNode;
  className?: string;
  /**
   * Élément rendu. À renseigner dans une liste : un `div` posé directement
   * sous `ol` ou `ul` est invalide et casse le comptage des lecteurs d'écran.
   */
  as?: 'div' | 'li';
};

/** Élément cadencé par le `RevealGroup` parent. */
export const RevealItem: React.FC<ItemProps> = ({ children, className, as: Tag = 'div' }) => (
  <Tag className={className} data-reveal-item>
    {children}
  </Tag>
);
