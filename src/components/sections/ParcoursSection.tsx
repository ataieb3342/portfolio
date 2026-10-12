import React from 'react';
import { data } from '@/lib/data';
import type { ExperienceData } from '@/types';
import { Section } from '../ui/Section';
import { RevealGroup, RevealItem } from '../ui/Reveal';

const Entry: React.FC<{ experience: ExperienceData }> = ({ experience }) => (
  <>
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <h3 className="text-h3">{experience.company}</h3>
      <span className="text-muted">{experience.title}</span>
      {experience.contract && <span className="tag">{experience.contract}</span>}
      {experience.current && (
        <span className="tag border-accent! text-accent!">
          <span className="pulse mr-2 h-1.5! w-1.5!" aria-hidden="true" />
          En poste
        </span>
      )}
    </div>

    <p className="text-muted mt-3 max-w-2xl leading-relaxed">{experience.summary}</p>

    {experience.axes.length > 0 && (
      <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8">
        {experience.axes.map((axis) => (
          <div key={axis.label}>
            <h4 className="note text-fg">{axis.label}</h4>
            <p className="text-muted mt-2 text-sm leading-relaxed">{axis.body}</p>
          </div>
        ))}
      </div>
    )}

    {experience.highlights && experience.highlights.length > 0 && (
      <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-1.5">
        {experience.highlights.map((highlight) => (
          <li key={highlight} className="text-muted flex items-baseline gap-2 text-sm">
            <span aria-hidden="true" className="text-accent">
              +
            </span>
            {highlight}
          </li>
        ))}
      </ul>
    )}

    {experience.testimonial && (
      <figure className="panel mt-7 p-5 md:p-6">
        <blockquote className="text-fg leading-relaxed">
          « {experience.testimonial.quote} »
        </blockquote>
        <figcaption className="note mt-4 normal-case! tracking-normal!">
          {experience.testimonial.author}, {experience.testimonial.role}
        </figcaption>
      </figure>
    )}
  </>
);

/** Une ligne de la frise : dates en marge, contenu à droite, un point sur le fil. */
const Row: React.FC<{ period: string; current?: boolean; children: React.ReactNode }> = ({
  period,
  current,
  children,
}) => (
  <RevealItem
    as="li"
    className="relative grid gap-2 pb-12 pl-7 last:pb-0 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10 md:pl-0"
  >
    <span
      aria-hidden="true"
      className={`absolute top-1.5 left-0 h-2.5 w-2.5 rounded-full border-2 md:left-[calc(10rem+1.25rem-5px)] ${
        current ? 'border-accent bg-accent' : 'bg-bg border-[color:var(--rule-strong)]'
      }`}
    />
    <p className="note pt-0.5 normal-case! tracking-normal!">{period}</p>
    <div className="md:pl-10">{children}</div>
  </RevealItem>
);

export const ParcoursSection: React.FC = () => (
  <Section
    id="parcours"
    eyebrow="parcours"
    title="Toujours de la donnée, souvent de l'existant à reprendre"
    lead="Entrepôts, migrations, interfaces métier : trois postes où il a fallu comprendre ce qui tournait déjà avant de le faire évoluer."
  >
    <RevealGroup>
      <ol className="relative">
        {/* Le fil de la frise */}
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[4px] w-px bg-[color:var(--rule)] md:left-[calc(10rem+1.25rem)]"
        />

        {data.experiences.map((experience) => (
          <Row key={experience.id} period={experience.period} current={experience.current}>
            <Entry experience={experience} />
          </Row>
        ))}

        {data.education.map((edu) => (
          <Row key={edu.degree} period={edu.period}>
            <h3 className="text-fg text-lg font-medium">{edu.degree}</h3>
            <p className="text-muted mt-1 text-sm">
              {edu.school}
              {edu.details && ` · ${edu.details}`}
            </p>
          </Row>
        ))}
      </ol>
    </RevealGroup>
  </Section>
);
