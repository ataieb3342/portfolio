import React from 'react';
import { data } from '@/lib/data';
import type { ExperienceData } from '@/types';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';

const ExperienceEntry: React.FC<{ experience: ExperienceData; first: boolean }> = ({
  experience,
  first,
}) => (
  <article className={first ? '' : 'rule-t pt-14 md:pt-20'}>
    <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
      <h3 className="text-h3">
        {experience.title}
        <span className="text-faint"> — </span>
        <span className="text-accent-soft">{experience.company}</span>
      </h3>
      <p className="note shrink-0">
        {experience.period} · {experience.contract}
      </p>
    </div>

    <p className="text-muted mt-5 max-w-2xl leading-relaxed">{experience.summary}</p>

    {/* Volets du poste, en colonnes de texte séparées par un filet */}
    <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
      {experience.axes.map((axis) => (
        <div key={axis.label} className="rule-t pt-6">
          <h4 className="note text-fg">{axis.label}</h4>
          <p className="text-muted mt-4 text-sm leading-relaxed">{axis.body}</p>
        </div>
      ))}
    </div>

    {experience.highlights && experience.highlights.length > 0 && (
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
        {experience.highlights.map((highlight) => (
          <li key={highlight} className="text-muted flex items-baseline gap-2.5 text-sm">
            <span aria-hidden="true" className="text-accent">
              +
            </span>
            {highlight}
          </li>
        ))}
      </ul>
    )}

    {/* Recommandation, traitée comme une citation de revue */}
    {experience.testimonial && (
      <figure className="border-accent/50 mt-12 border-l-2 pl-7">
        <blockquote className="text-fg text-xl leading-snug italic md:text-2xl">
          {experience.testimonial.quote}
        </blockquote>
        <figcaption className="note mt-5">
          {experience.testimonial.author} — {experience.testimonial.role}
        </figcaption>
      </figure>
    )}
  </article>
);

export const ExperienceHighlight: React.FC = () => (
  <Section
    id="experience"
    index="01"
    eyebrow="Parcours"
    title="Du décisionnel bancaire à la migration de patrimoine data"
    lead="Deux postes, la même constante : comprendre le métier avant de toucher au modèle, et livrer jusqu'en production."
  >
    <div className="space-y-14 md:space-y-20">
      {data.experiences.map((experience, index) => (
        <Reveal key={experience.id}>
          <ExperienceEntry experience={experience} first={index === 0} />
        </Reveal>
      ))}
    </div>
  </Section>
);
