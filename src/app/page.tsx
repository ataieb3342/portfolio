import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { Ticker } from '@/components/sections/Ticker';
import { NowSection } from '@/components/sections/NowSection';
import { ParcoursSection } from '@/components/sections/ParcoursSection';
import { ApproachSection } from '@/components/sections/ApproachSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Ticker />
      <NowSection />
      <ApproachSection />
      <ParcoursSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
