import React from 'react';
import { Section } from '../ui/Section';
import { ProjectGrid } from '../ProjectGrid';

export const ProjectsSection: React.FC = () => (
  <Section
    id="projets"
    index="02"
    eyebrow="Réalisations"
    title="Trois projets menés de bout en bout"
    lead="Un pipeline ML en production, l'interface qui l'expose aux conseillers, et une plateforme associative complète."
  >
    <ProjectGrid />
  </Section>
);
