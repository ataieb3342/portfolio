import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { CaseStudySection } from '@/components/sections/CaseStudySection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ParcoursSection } from '@/components/sections/ParcoursSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CaseStudySection />
      <ProjectsSection />
      <ParcoursSection />
      <ContactSection />
    </>
  );
}
