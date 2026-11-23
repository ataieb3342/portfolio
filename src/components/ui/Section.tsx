import React from 'react';
import type { Tone } from '@/types';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  /** Numéro de l'entrée, affiché « §1 ». */
  index: number;
  /** Intitulé court de l'entrée, en chasse fixe. */
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  /** Ton de la section : colore le repère et les marques. */
  tone?: Tone;
  children: React.ReactNode;
}

/**
 * Coquille de section, mise en page comme une entrée de journal : un repère
 * numéroté suivi d'un filet, le titre, le chapô, puis le contenu.
 */
export const Section: React.FC<SectionProps> = ({
  id,
  index,
  eyebrow,
  title,
  lead,
  tone = 'lime',
  children,
}) => (
  <section id={id} className={`section-y tone-${tone}`} aria-labelledby={`${id}-title`}>
    <div className="shell">
      <Reveal>
        <p className="entry">
          <span className="text-tone">§{index}</span>
          <span>{eyebrow}</span>
        </p>
        <div className="max-w-3xl">
          <h2 id={`${id}-title`} className="text-h2 mt-4 text-balance">
            {title}
          </h2>
          {lead && <p className="text-lead text-muted mt-3">{lead}</p>}
        </div>
      </Reveal>

      <div className="mt-7 md:mt-8">{children}</div>
    </div>
  </section>
);
