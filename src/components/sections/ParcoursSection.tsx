import React from 'react';
import { data } from '@/lib/data';
import { Section } from '../ui/Section';
import { Reveal, RevealGroup, RevealItem } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

/** Une ligne du parcours : dates en marge, contenu à droite. */
const Row: React.FC<{ period: string; children: React.ReactNode }> = ({ period, children }) => (
  <RevealItem as="li" className="rule-t grid gap-1 py-4 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10">
    <p className="note text-tone! pt-1 normal-case! tracking-normal!">{period}</p>
    <div>{children}</div>
  </RevealItem>
);

export const ParcoursSection: React.FC = () => (
  <Section id="parcours" index={3} tone="cyan" eyebrow="parcours" title="Avant Tradim">
    <RevealGroup>
      <ol>
        {data.experiences.map((experience) => (
          <Row key={experience.id} period={experience.period}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-fg text-lg font-medium">{experience.company}</h3>
              <span className="text-muted">{experience.title}</span>
              {experience.contract && <span className="tag">{experience.contract}</span>}
            </div>
            <p className="text-muted mt-1.5 leading-relaxed">{experience.summary}</p>

            {experience.testimonial && (
              <figure className="tone-violet mt-4 border-l-2 border-[color:var(--tone)] pl-5">
                <blockquote className="text-fg leading-relaxed">« {experience.testimonial.quote} »</blockquote>
                <figcaption className="note mt-3 normal-case! tracking-normal!">
                  {experience.testimonial.author}, {experience.testimonial.role}
                </figcaption>
              </figure>
            )}
          </Row>
        ))}

        {data.education.map((edu) => (
          <Row key={edu.degree} period={edu.period}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-fg text-lg font-medium">{edu.degree}</h3>
              <span className="text-muted">
                {edu.school}
                {edu.details && `, ${edu.details}`}
              </span>
            </div>
            {edu.thesis && (
              <a
                href={edu.thesis.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-tone mt-2 inline-flex items-center gap-2 text-sm"
              >
                <Icon name="doc" className="h-4 w-4" />
                {edu.thesis.title} (PDF)
                <Icon
                  name="arrowUpRight"
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            )}
          </Row>
        ))}
      </ol>
    </RevealGroup>

    <Reveal className="rule-t grid gap-3 pt-4 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10">
      <p className="note pt-1">Stack</p>
      <ul className="flex flex-wrap gap-1.5">
        {data.skills.map((skill) => (
          <li key={skill}>
            <span className="tag">{skill}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  </Section>
);
