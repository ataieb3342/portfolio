import React from 'react';
import { data } from '@/lib/data';
import { Reveal, RevealGroup, RevealItem } from '../ui/Reveal';
import { GitHubIcon, Icon, LinkedInIcon } from '../ui/Icon';

export const ContactSection: React.FC = () => (
  <section id="contact" className="section-y rule-t relative overflow-hidden" aria-labelledby="contact-title">
    <div className="shell relative">
      <div>
        <Reveal>
          <p className="folio mb-5">06 — Suite</p>
          <div className="grid items-start gap-5 md:grid-cols-[1.5fr_1fr] md:gap-12">
            <h2 id="contact-title" className="text-h2 text-balance">
              {data.whatISeek.title}
            </h2>
            <p className="note md:pt-3">{data.whatISeek.subtitle}</p>
          </div>
        </Reveal>

        {/* Critères */}
        <RevealGroup className="mt-10">
          <ol className="grid gap-4 md:grid-cols-3">
            {data.whatISeek.criteria.map((criterion, index) => (
              <RevealItem as="li" key={criterion} className="block h-full p-5">
                <span className="folio">{String(index + 1).padStart(2, '0')}</span>
                <p className="text-fg mt-3 leading-snug">{criterion}</p>
              </RevealItem>
            ))}
          </ol>
        </RevealGroup>

        {/* Conclusion et coordonnées */}
        <Reveal className="rule-t mt-12 pt-10">
          <p className="text-h3 max-w-2xl display">{data.whatISeek.closingStatement}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
            <a
              href={`mailto:${data.contact.email}`}
              className="group text-fg inline-flex items-center gap-3 text-xl md:text-2xl"
            >
              <span className="link-rule">{data.contact.email}</span>
              <Icon
                name="arrowRight"
                className="text-accent h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href={`tel:${data.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="note link-rule"
            >
              {data.contact.phone}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-7">
            <a
              href={data.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="note text-muted hover:text-accent-soft inline-flex items-center gap-2.5 transition-colors"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={data.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="note text-muted hover:text-accent-soft inline-flex items-center gap-2.5 transition-colors"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
