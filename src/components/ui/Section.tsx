import React from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  /** Repère en chasse fixe au-dessus du titre. */
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  /** Ton de la section : colore le repère, les pastilles et les cartes. */
  tone?: 'lime' | 'violet' | 'cyan' | 'coral';
  children: React.ReactNode;
}

/** Coquille de section : repère, titre, chapô, puis le contenu. */
export const Section: React.FC<SectionProps> = ({
  id,
  eyebrow,
  title,
  lead,
  tone = 'lime',
  children,
}) => (
  <section
    id={id}
    className={`section-y rule-t tone-${tone} relative overflow-hidden`}
    aria-labelledby={`${id}-title`}
  >
    <div aria-hidden="true" className="glow bg-tone -top-40 -right-40 h-96 w-96 opacity-[0.08]!" />
    <div className="shell relative">
      <Reveal className="max-w-3xl">
        <p className="folio mb-4 flex items-center gap-2.5">
          <span className="bg-tone h-1.5 w-1.5 rounded-full" aria-hidden="true" />
          {`// ${eyebrow}`}
        </p>
        <h2 id={`${id}-title`} className="text-h2 text-balance">
          {title}
        </h2>
        {lead && <p className="text-lead text-muted mt-4">{lead}</p>}
      </Reveal>

      <div className="mt-10 md:mt-14">{children}</div>
    </div>
  </section>
);
