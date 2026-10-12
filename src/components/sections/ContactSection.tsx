import React from 'react';
import { data } from '@/lib/data';
import { Reveal } from '../ui/Reveal';
import { GitHubIcon, Icon, LinkedInIcon } from '../ui/Icon';

export const ContactSection: React.FC = () => (
  <section id="contact" className="section-y rule-t relative" aria-labelledby="contact-title">
    <div className="shell">
      <Reveal className="panel relative overflow-hidden p-7 md:p-12">
        <div aria-hidden="true" className="dots pointer-events-none absolute inset-0" />

        <div className="relative">
          <p className="folio mb-4">{'// contact'}</p>
          <h2 id="contact-title" className="text-h2 max-w-2xl text-balance">
            Une question sur une migration, un traitement, ou juste envie d&apos;en parler ?
          </h2>

          <a
            href={`mailto:${data.contact.email}`}
            className="group text-fg mt-8 inline-flex items-center gap-3 text-xl md:text-3xl"
          >
            <span className="link-rule">{data.contact.email}</span>
            <Icon
              name="arrowRight"
              className="text-accent h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 md:h-6 md:w-6"
            />
          </a>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={data.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={data.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
