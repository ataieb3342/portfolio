import React from 'react';
import { data } from '@/lib/data';
import { Section } from '../ui/Section';
import { RevealGroup, RevealItem } from '../ui/Reveal';

export const ApprocheImpact: React.FC = () => (
  <Section
    id="approche"
    index="03"
    eyebrow="Méthode"
    title="Transformer un besoin métier en solution opérationnelle"
    lead="Trois constantes dans ma façon de travailler, vérifiables sur chacun des projets ci-dessus."
  >
    <RevealGroup>
      <ol className="space-y-12">
        {data.impacts.map((impact, index) => (
          <RevealItem key={impact.title}>
            <li className="rule-t grid gap-4 pt-7 md:grid-cols-[3.5rem_minmax(0,1fr)] md:gap-8">
              <span className="folio pt-1">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-h3">{impact.title}</h3>
                <p className="text-muted mt-3 max-w-2xl leading-relaxed">{impact.description}</p>
              </div>
            </li>
          </RevealItem>
        ))}
      </ol>
    </RevealGroup>
  </Section>
);
