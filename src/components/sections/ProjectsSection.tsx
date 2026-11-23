import Image from 'next/image';
import React from 'react';
import { data } from '@/lib/data';
import { domaine } from '@/lib/site';
import { Section } from '../ui/Section';
import { Reveal, RevealGroup, RevealItem } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

const Tags: React.FC<{ tags: string[] }> = ({ tags }) => (
  <div className="flex flex-wrap gap-1.5">
    {tags.map((tag) => (
      <span key={tag} className="tag">
        {tag}
      </span>
    ))}
  </div>
);

/** Les autres chantiers chez Tradim, puis le site associatif. */
export const ProjectsSection: React.FC = () => (
  <Section
    id="projets"
    index={2}
    tone="coral"
    eyebrow="projets"
    title="Comprendre le legacy, puis préparer son remplacement"
  >
    <RevealGroup className="grid gap-4 md:grid-cols-2">
      {data.projects.map((project) => (
        <RevealItem
          key={project.id}
          className={`tone-${project.tone} panel tinted-edge flex h-full flex-col p-6 md:p-7`}
        >
          <div className="flex items-center gap-3">
            <span className="chip">
              <Icon name={project.icon} className="h-4.5 w-4.5" />
            </span>
            <span className="note text-tone!">{project.label}</span>
            {project.status && (
              <span className="border-tone text-tone ml-auto rounded-[3px] border border-dashed px-2 py-0.5 font-mono text-[0.68rem]">
                statut : {project.status.toLowerCase()}
              </span>
            )}
          </div>
          <h3 className="text-h3 mt-5 text-balance">{project.title}</h3>
          <p className="text-muted mt-3 leading-relaxed">{project.body}</p>
          <div className="mt-auto pt-6">
            <Tags tags={project.tags} />
          </div>
        </RevealItem>
      ))}
    </RevealGroup>

    {/* À côté : le site associatif, en carte compacte */}
    {data.sites.map((site) => (
      <Reveal
        key={site.id}
        className="tone-lime panel tinted-edge mt-4 grid overflow-hidden sm:grid-cols-[14rem_minmax(0,1fr)]"
      >
        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className="bg-surface-2 relative block aspect-16/10 overflow-hidden sm:aspect-auto"
        >
          <Image src={site.image} alt="" fill sizes="(max-width: 640px) 100vw, 224px" className="object-cover object-top" />
        </a>
        <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:gap-8">
          <div className="min-w-0 flex-1">
            <p className="note text-tone!">À côté</p>
            <h3 className="text-fg mt-2 text-lg font-medium">{site.name}</h3>
            <p className="text-muted mt-1.5 text-sm leading-relaxed">{site.body}</p>
            <div className="mt-4">
              <Tags tags={site.tags} />
            </div>
          </div>
          <div className="flex shrink-0 items-end justify-between gap-6 md:flex-col md:items-end">
            <p className="md:text-right">
              <span className="text-tone block text-3xl leading-none font-medium tracking-tight">
                {site.figure.value}
              </span>
              <span className="note mt-1.5 block">{site.figure.label}</span>
            </p>
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
        </div>
      </Reveal>
    ))}
  </Section>
);
