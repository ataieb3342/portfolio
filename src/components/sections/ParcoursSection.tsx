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
            <span aria-hidden="true" className="text-tone">
              +
            </span>
            {highlight}
          </li>
        ))}
      </ul>
    )}

    {experience.testimonial && (
      <figure className="panel tinted tinted-edge relative mt-7 overflow-hidden p-5 md:p-7">
        <span
          aria-hidden="true"
          className="text-tone pointer-events-none absolute -top-4 right-4 font-serif text-[7rem] leading-none opacity-25"
        >
          “
        </span>
        <blockquote className="text-fg relative text-lg leading-relaxed">
          {experience.testimonial.quote}
        </blockquote>
        <figcaption className="note mt-4 normal-case! tracking-normal!">
          {experience.testimonial.author}, {experience.testimonial.role}
        </figcaption>
      </figure>
    )}
  </>
);

/** Un ton par poste, du plus récent au plus ancien. */
const EXPERIENCE_TONES = ['tone-lime', 'tone-violet', 'tone-coral'];

/** Une ligne de la frise : dates en marge, contenu à droite, un point sur le fil. */
const Row: React.FC<{
  period: string;
  current?: boolean;
  tone?: string;
  children: React.ReactNode;
}> = ({ period, current, tone = '', children }) => (
  <RevealItem
    as="li"
    className={`${tone} relative grid gap-2 pb-12 pl-7 last:pb-0 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10 md:pl-0`}
  >
    <span
      aria-hidden="true"
      className={`absolute top-1.5 left-0 h-2.5 w-2.5 rounded-full border-2 md:left-[calc(10rem+1.25rem-5px)] ${
        current
          ? 'border-tone bg-tone shadow-[0_0_0_5px_color-mix(in_srgb,var(--tone)_20%,transparent)]'
          : tone
            ? 'border-tone bg-bg'
            : 'bg-bg border-[color:var(--rule-strong)]'
      }`}
    />
    <p className={`note pt-0.5 normal-case! tracking-normal! ${tone ? 'text-tone!' : ''}`}>{period}</p>
    <div className="md:pl-10">{children}</div>
  </RevealItem>
);

export const ParcoursSection: React.FC = () => (
  <Section
    id="parcours"
    tone="cyan"
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

        {data.experiences.map((experience, index) => (
          <Row
            key={experience.id}
            period={experience.period}
            current={experience.current}
            tone={EXPERIENCE_TONES[index % EXPERIENCE_TONES.length]}
          >
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
