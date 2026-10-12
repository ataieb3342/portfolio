import React from 'react';
import { data } from '@/lib/data';
import { Section } from '../ui/Section';
import { RevealGroup, RevealItem } from '../ui/Reveal';

const groups: { key: keyof typeof data.skills; label: string; note: string }[] = [
  { key: 'data', label: 'Data', note: 'Entrepôts, traitements, migrations' },
  { key: 'dev', label: 'IA & développement', note: 'Ce qu’on branche sur la donnée' },
  { key: 'tools', label: 'Outillage', note: 'Versionner, tester, déployer' },
];

export const SkillsSection: React.FC = () => (
  <Section id="stack" eyebrow="stack" title="Avec quoi je travaille">
    <RevealGroup className="grid gap-4 md:grid-cols-3">
      {groups.map((group) => (
        <RevealItem key={group.key} className="panel p-6">
          <h3 className="text-fg text-lg font-medium">{group.label}</h3>
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
