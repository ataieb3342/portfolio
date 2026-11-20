import React from 'react';
import { data } from '@/lib/data';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { GitHubIcon, Icon, LinkedInIcon } from '../ui/Icon';

export const ContactSection: React.FC = () => (
  <Section
    id="contact"
    index={4}
    tone="lime"
    eyebrow="contact"
    title="De l'IA sur un système critique, un legacy à faire parler, ou juste envie d'échanger ?"
  >
    <Reveal>
      <a
        href={`mailto:${data.contact.email}`}
        className="group text-fg inline-flex items-center gap-3 font-mono text-lg md:text-2xl"
      >
        <span className="text-tone" aria-hidden="true">
          &gt;
        </span>
        <span className="link-rule">{data.contact.email}</span>
        <Icon
          name="arrowRight"
          className="text-tone h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          <LinkedInIcon className="h-4 w-4" />
          LinkedIn
        </a>
        <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          <GitHubIcon className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </Reveal>
  </Section>
);
