import React from 'react';
import { data } from '@/lib/data';
import { Section } from '../ui/Section';
import { RevealGroup, RevealItem } from '../ui/Reveal';

const groups: { key: keyof typeof data.skills; label: string; note: string }[] = [
  { key: 'data', label: 'Data & ML', note: 'Du jeu de données brut au modèle en production' },
  { key: 'dev', label: 'Développement', note: 'Back, front et conception applicative' },
  { key: 'tools', label: 'Outils & DevOps', note: 'Versionner, conteneuriser, déployer' },
];

export const SkillsSection: React.FC = () => (
  <Section
    id="stack"
    index="04"
    eyebrow="Compétences"
    title="Stack technique"
    lead="Un périmètre large assumé : je préfère comprendre toute la chaîne que maîtriser une seule couche."
  >
    <RevealGroup>
      <dl className="space-y-10">
        {groups.map((group) => (
          <RevealItem key={group.key}>
            <div className="rule-t grid gap-3 pt-7 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10">
              <div>
                <dt className="text-fg text-lg">{group.label}</dt>
                <p className="note mt-1.5 normal-case">{group.note}</p>
              </div>
              <dd className="flex flex-wrap items-baseline">
                {data.skills[group.key].map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          </RevealItem>
        ))}
      </dl>
    </RevealGroup>
  </Section>
);
