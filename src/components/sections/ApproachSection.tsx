import React from 'react';
import { data } from '@/lib/data';
import { Section } from '../ui/Section';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

const { approach } = data;

/** Du legacy (corail) au branché (lime), comme la coloration du hero. */
const TONES = ['tone-coral', 'tone-coral', 'tone-cyan', 'tone-cyan', 'tone-lime'];

/** La méthode de migration, étape par étape, avec la part de l'IA à chacune. */
export const ApproachSection: React.FC = () => (
  <Section id="approche" tone="violet" eyebrow="méthode" title={approach.title} lead={approach.lead}>
    <RevealGroup>
      <ol className="relative space-y-3">
        {approach.steps.map((step, index) => (
          <RevealItem
            as="li"
            key={step.title}
            className={`${TONES[index % TONES.length]} panel tinted grid gap-5 p-5 md:grid-cols-[4.5rem_minmax(0,1.2fr)_minmax(0,1fr)] md:items-start md:gap-8 md:p-7`}
          >
            <span className="display text-tone text-5xl leading-none md:text-6xl">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div>
              <h3 className="text-h3">{step.title}</h3>
              <p className="text-muted mt-2.5 leading-relaxed">{step.body}</p>
            </div>

            <div className="tone-violet rounded-xl border border-[color:color-mix(in_srgb,var(--tone)_30%,transparent)] bg-[color:color-mix(in_srgb,var(--tone)_8%,transparent)] p-4">
              <p className="note text-tone! flex items-center gap-2">
                <Icon name="sparkles" className="h-3.5 w-3.5" />
                Ce que fait l&apos;IA
              </p>
              <p className="text-fg mt-2 text-sm leading-relaxed">{step.ai}</p>
            </div>
          </RevealItem>
        ))}
      </ol>
    </RevealGroup>
  </Section>
);
