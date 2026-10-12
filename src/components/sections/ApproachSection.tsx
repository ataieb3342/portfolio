import React from 'react';
import { data } from '@/lib/data';
import { Section } from '../ui/Section';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

const { approach } = data;

const TONES = ['tone-coral', 'tone-violet', 'tone-lime', 'tone-cyan'];

export const ApproachSection: React.FC = () => (
  <Section id="approche" tone="violet" eyebrow="approche" title={approach.title} lead={approach.lead}>
    <RevealGroup>
      <ol className="grid gap-px overflow-hidden rounded-[14px] border border-[color:var(--rule)] bg-[color:var(--rule)] md:grid-cols-2">
        {approach.principles.map((principle, index) => (
          <RevealItem
            as="li"
            key={principle.title}
            className={`${TONES[index % TONES.length]} bg-surface tinted group relative overflow-hidden p-6 md:p-8`}
          >
            <span
              aria-hidden="true"
              className="text-tone pointer-events-none absolute -right-2 -bottom-8 display text-[7rem] leading-none font-semibold opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.16]"
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="chip">
              <Icon name={principle.icon} className="h-4.5 w-4.5" />
            </span>
            <h3 className="text-h3 mt-5">{principle.title}</h3>
            <p className="text-muted mt-3 leading-relaxed">{principle.body}</p>
          </RevealItem>
        ))}
      </ol>
    </RevealGroup>
  </Section>
);
