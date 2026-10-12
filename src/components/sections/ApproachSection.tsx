import React from 'react';
import { data } from '@/lib/data';
import { Section } from '../ui/Section';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

const { approach } = data;

export const ApproachSection: React.FC = () => (
  <Section id="approche" eyebrow="approche" title={approach.title} lead={approach.lead}>
    <RevealGroup>
      <ol className="grid gap-px overflow-hidden rounded-[14px] border border-[color:var(--rule)] bg-[color:var(--rule)] md:grid-cols-2">
        {approach.principles.map((principle, index) => (
          <RevealItem as="li" key={principle.title} className="bg-surface p-6 md:p-8">
            <div className="flex items-center justify-between">
              <span className="text-accent grid h-9 w-9 place-items-center rounded-lg border border-[color:var(--rule)]">
                <Icon name={principle.icon} className="h-4.5 w-4.5" />
              </span>
              <span className="folio text-faint!">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="text-h3 mt-5">{principle.title}</h3>
            <p className="text-muted mt-3 leading-relaxed">{principle.body}</p>
          </RevealItem>
        ))}
      </ol>
    </RevealGroup>
  </Section>
);
