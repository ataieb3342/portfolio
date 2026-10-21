import Image from 'next/image';
import React from 'react';
import { data } from '@/lib/data';
import { domaine } from '@/lib/site';
import { Section } from '../ui/Section';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

const SITE_TONES = ['tone-lime', 'tone-coral'];

/** Les sites que je maintiens, avec ce qui montre qu'ils servent. */
export const SitesSection: React.FC = () => (
  <Section
    id="projets"
    eyebrow="projets"
    title="Des sites en production, dont des gens se servent"
    lead="En dehors du travail, je conçois, j'héberge et je maintiens des sites associatifs. Les projets menés en entreprise sont dans le parcours."
  >
    <RevealGroup className="grid gap-4 md:grid-cols-2">
      {data.sites.map((site, index) => (
        <RevealItem
          key={site.id}
          className={`${SITE_TONES[index % SITE_TONES.length]} panel tinted tinted-edge flex h-full flex-col overflow-hidden`}
        >
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
            aria-hidden="true"
            className="bg-surface-2 relative block aspect-16/10 overflow-hidden"
          >
            <Image
              src={site.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 620px"
              className="object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
            />
          </a>

          <div className="flex flex-1 flex-col p-6 md:p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
              <h3 className="text-h3">{site.name}</h3>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-tone inline-flex items-center gap-2 font-mono text-xs"
              >
                <span className="pulse" aria-hidden="true" />
                {domaine(site.url)}
                <Icon
                  name="arrowUpRight"
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <p className="text-fg mt-2 text-sm">{site.context}</p>
            <p className="text-muted mt-3 leading-relaxed">{site.body}</p>

            <dl className="mt-6 grid grid-cols-2 gap-4">
              {site.usage.map((figure) => (
                <div key={figure.label} className="rule-t pt-3">
                  <dt className="sr-only">{figure.label}</dt>
                  <dd>
                    <span className="text-tone block text-4xl leading-none font-medium tracking-tight">
                      {figure.value}
                    </span>
                    <span className="note mt-2 block">{figure.label}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="mt-6 space-y-2.5">
              {site.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed">
                  <Icon name="check" className="text-tone mt-0.5 h-4 w-4 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
              {site.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  </Section>
);
