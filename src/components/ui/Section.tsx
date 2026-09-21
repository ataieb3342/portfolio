import React from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  /** Numéro de section, affiché avec l'intitulé. */
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  children: React.ReactNode;
}

/**
 * Coquille de section. L'en-tête occupe toute la largeur sur deux colonnes —
 * titre à gauche, chapô à droite — pour ne pas laisser la ligne à moitié vide.
 */
export const Section: React.FC<SectionProps> = ({ id, index, eyebrow, title, lead, children }) => (
  <section id={id} className="section-y rule-t relative" aria-labelledby={`${id}-title`}>
    <div className="shell">
      <Reveal>
        <p className="folio mb-5">
          {index} — {eyebrow}
        </p>

        <div className="grid items-start gap-5 md:grid-cols-[1.5fr_1fr] md:gap-12">
          <h2 id={`${id}-title`} className="text-h2 text-balance">
            {title}
          </h2>
          {lead && <p className="text-lead text-muted md:pt-2">{lead}</p>}
        </div>
      </Reveal>

      <div className="mt-10 md:mt-12">{children}</div>
    </div>
  </section>
);
