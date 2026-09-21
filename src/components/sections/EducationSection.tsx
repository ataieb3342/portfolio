import React from 'react';
import { data } from '@/lib/data';
import { Section } from '../ui/Section';
import { RevealGroup, RevealItem } from '../ui/Reveal';

export const EducationSection: React.FC = () => (
  <Section
    id="formation"
    index="05"
    eyebrow="Formation"
    title="Cursus universitaire"
    lead="Informatique à l'Université de Franche-Comté, spécialisation systèmes distribués et intelligence artificielle."
  >
    <RevealGroup>
      <ol className="space-y-10">
        {data.education.map((edu) => (
          <RevealItem key={edu.degree}>
            <li className="rule-t grid gap-3 pt-7 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-10">
              <p className="note pt-1.5">{edu.period}</p>
              <div>
                <h3 className="text-h3 text-balance">{edu.degree}</h3>
                <p className="text-accent-soft mt-2">{edu.school}</p>
                {edu.details && (
                  <p className="text-muted mt-4 max-w-2xl text-sm leading-relaxed">{edu.details}</p>
                )}
              </div>
            </li>
          </RevealItem>
        ))}
      </ol>
    </RevealGroup>
  </Section>
);
