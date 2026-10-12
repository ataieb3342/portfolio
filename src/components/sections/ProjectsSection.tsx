import React from 'react';
import { Section } from '../ui/Section';
import { ProjectGrid } from '../ProjectGrid';

export const ProjectsSection: React.FC = () => (
  <Section
    id="projets"
    eyebrow="projets"
    title="Quelques projets menés de bout en bout"
    lead="Un pipeline de segmentation en production, l'interface qui l'expose aux conseillers, et une plateforme associative complète."
  >
    <ProjectGrid />
  </Section>
);
