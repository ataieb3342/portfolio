import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { NowSection } from '@/components/sections/NowSection';
import { ParcoursSection } from '@/components/sections/ParcoursSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <NowSection />
      <ParcoursSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
