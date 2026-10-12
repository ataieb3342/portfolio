import React from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  /** Repère en chasse fixe au-dessus du titre. */
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  children: React.ReactNode;
}

/** Coquille de section : repère, titre, chapô, puis le contenu. */
export const Section: React.FC<SectionProps> = ({ id, eyebrow, title, lead, children }) => (
  <section id={id} className="section-y rule-t relative" aria-labelledby={`${id}-title`}>
    <div className="shell">
      <Reveal className="max-w-3xl">
        <p className="folio mb-4">{`// ${eyebrow}`}</p>
        <h2 id={`${id}-title`} className="text-h2 text-balance">
          {title}
        </h2>
        {lead && <p className="text-lead text-muted mt-4">{lead}</p>}
      </Reveal>

      <div className="mt-10 md:mt-14">{children}</div>
    </div>
  </section>
);
