'use client';

import React from 'react';
import { data } from '@/lib/data';
import { HeroSection } from '@/components/sections/HeroSection';
import { ExperienceHighlight } from '@/components/sections/ExperienceHighlight';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ApprocheImpact } from '@/components/sections/ApprocheImpact';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { WhatISeekSection } from '@/components/sections/WhatISeekSection';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900">
            <HeroSection />
            <ExperienceHighlight />
            <ProjectsSection />
            <ApprocheImpact />
            <SkillsSection />
            <WhatISeekSection />

            <footer className="py-8 px-6 bg-gray-950 text-center border-t border-gray-800">
                <p className="text-gray-500 text-sm">
                    © 2025 {data.name} • {data.title}
                </p>
            </footer>
        </div>
    );
}

export default Home;
