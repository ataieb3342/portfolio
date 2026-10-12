import React from 'react';
import { data } from '@/lib/data';
import { Section } from '../ui/Section';
import { RevealGroup, RevealItem } from '../ui/Reveal';

const groups: { key: keyof typeof data.skills; label: string; note: string; tone: string }[] = [
  { key: 'data', label: 'Data', note: 'Entrepôts, traitements, migrations', tone: 'tone-cyan' },
  { key: 'dev', label: 'IA & développement', note: 'Ce qu’on branche sur la donnée', tone: 'tone-violet' },
  { key: 'tools', label: 'Outillage', note: 'Versionner, tester, déployer', tone: 'tone-lime' },
];

export const SkillsSection: React.FC = () => (
  <Section id="stack" tone="coral" eyebrow="stack" title="Avec quoi je travaille">
    <RevealGroup className="grid gap-4 md:grid-cols-3">
      {groups.map((group) => (
        <RevealItem key={group.key} className={`${group.tone} panel tinted tinted-edge p-6`}>
          <h3 className="text-fg flex items-center gap-2.5 text-lg font-medium">
            <span className="bg-tone h-2 w-2 rounded-full" aria-hidden="true" />
            {group.label}
          </h3>
          <p className="text-muted mt-1 text-sm">{group.note}</p>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {data.skills[group.key].map((skill) => (
              <li key={skill}>
                <span className="tag">{skill}</span>
              </li>
            ))}
          </ul>
        </RevealItem>
      ))}
    </RevealGroup>
  </Section>
);
