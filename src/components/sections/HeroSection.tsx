import Image from 'next/image';
import React from 'react';
import { data } from '@/lib/data';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { GitHubIcon, Icon, LinkedInIcon } from '../ui/Icon';

export const HeroSection: React.FC = () => (
  <section id="top" className="relative overflow-hidden pt-16">
    <div aria-hidden="true" className="dots pointer-events-none absolute inset-0" />

    <div className="shell relative pt-14 pb-16 md:pt-24 md:pb-24">
      <RevealGroup className="grid items-end gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
        <div>
          <RevealItem>
            <p className="note inline-flex items-center gap-3 normal-case! tracking-normal!">
              <span className="pulse" aria-hidden="true" />
              <span>
                {data.now.role} chez <span className="text-fg">{data.now.company}</span> ·{' '}
                {data.now.place}
              </span>
            </p>
          </RevealItem>

          <RevealItem>
            <h1 className="text-display mt-6">{data.name}</h1>
          </RevealItem>

          <RevealItem>
            <p className="text-h3 text-muted mt-6 max-w-2xl font-normal text-balance">
              Je reprends des traitements de données <span className="text-fg">legacy</span> en{' '}
              <span className="text-fg">Python</span>, et je fais en sorte qu&apos;on puisse y
              brancher de l&apos;<span className="text-accent">IA</span>.
            </p>
          </RevealItem>

          <RevealItem>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={`mailto:${data.contact.email}`} className="btn btn-primary group">
                M&apos;écrire
                <Icon
                  name="arrowRight"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
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
          </RevealItem>
        </div>

        <RevealItem className="order-first md:order-none">
          <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-[color:var(--rule)] md:h-56 md:w-48">
            <Image
              src="/profil.jpg"
              alt={`Portrait de ${data.name}`}
              fill
              sizes="(max-width: 768px) 96px, 192px"
              className="object-cover object-[50%_22%]"
              priority
            />
          </div>
        </RevealItem>
      </RevealGroup>
    </div>
  </section>
);
