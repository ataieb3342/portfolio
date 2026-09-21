import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ExperienceHighlight } from '@/components/sections/ExperienceHighlight';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ApprocheImpact } from '@/components/sections/ApprocheImpact';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceHighlight />
      <ProjectsSection />
      <ApprocheImpact />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
