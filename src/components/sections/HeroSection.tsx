import Image from 'next/image';
import React from 'react';
import { data } from '@/lib/data';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { GitHubIcon, Icon, LinkedInIcon } from '../ui/Icon';

/* Coloration syntaxique de la carte de code, sur les tons du site. */
const K: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-violet">{children}</span>
);
const F: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-cyan">{children}</span>
);
const S: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-accent">{children}</span>
);
const C: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-faint">{children}</span>
);
const D: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-coral">{children}</span>
);

/** Ce que fait le poste, dit en code : un traitement SSIS converti en .NET par le transpileur. */
const CodeCard: React.FC = () => (
  <div className="panel relative w-full overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
    <div className="rule-b flex items-center gap-2 px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      <span className="text-faint ml-3 font-mono text-xs">Facturation.cs</span>
      <span className="tone-violet chip ml-auto h-auto! w-auto! rounded-full! px-2 py-0.5 font-mono text-[0.65rem]">
        généré depuis SSIS
      </span>
    </div>
    <pre className="overflow-x-auto px-4 py-4 font-mono text-[0.74rem] leading-[1.75] sm:px-5 sm:text-[0.8rem]">
      <code>
        <C>{'// ex-Facturation.dtsx, transpilé'}</C>
        {'\n'}
        <D>[Traitement</D>(Source = <S>&quot;ECOCITO&quot;</S>)<D>]</D>
        {'\n'}
        <K>public</K> <F>Factures</F> <F>Facturer</F>(<F>Periode</F> periode)
        {'\n'}
        {'{'}
        {'\n'}
        {'    '}<K>var</K> levees = <F>LireLevees</F>(periode);
        {'\n'}
        {'    '}<K>return</K> <F>AppliquerGrille</F>(levees);
        {'\n'}
        {'} '}<C>{'// → API · IA · automatisations'}</C>
      </code>
    </pre>
    <div className="rule-t flex items-center gap-2.5 px-4 py-2.5 font-mono text-[0.7rem] sm:px-5">
      <Icon name="check" className="text-accent h-3.5 w-3.5" />
      <span className="text-muted">
        non-régression : <span className="text-accent">identique</span> à la sortie SSIS
      </span>
    </div>
  </div>
);

export const HeroSection: React.FC = () => (
  <section id="top" className="relative overflow-hidden pt-16">
    <div aria-hidden="true" className="dots pointer-events-none absolute inset-0" />
    <div aria-hidden="true" className="glow bg-accent -top-24 -left-32 h-[28rem] w-[28rem]" />
    <div aria-hidden="true" className="glow bg-violet top-40 -right-24 h-[26rem] w-[26rem]" />

    <div className="shell relative pt-12 pb-16 md:pt-20 md:pb-24">
      <RevealGroup className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
        <div>
          <RevealItem>
            <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--rule)] bg-surface/60 py-1.5 pr-4 pl-1.5 backdrop-blur">
              <span className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src="/profil.jpg"
                  alt={`Portrait de ${data.name}`}
                  fill
                  sizes="32px"
                  className="object-cover object-[50%_22%]"
                  priority
                />
              </span>
              <span className="text-sm">
                {data.now.role} chez <span className="text-fg font-medium">{data.now.company}</span>
                <span className="text-faint"> · {data.now.place}</span>
              </span>
              <span className="pulse" aria-hidden="true" />
            </div>
          </RevealItem>

          <RevealItem>
            <h1 className="text-display text-gradient mt-7 pb-2">{data.name}</h1>
          </RevealItem>

          <RevealItem>
            <p className="text-h3 text-muted mt-5 max-w-xl font-normal text-balance">
              Je reprends les traitements data <span className="text-coral">legacy</span> pour
              qu&apos;on puisse enfin y brancher de l&apos;<span className="text-violet">IA</span>,
              des <span className="text-cyan">APIs</span> et des{' '}
              <span className="text-accent">automatisations</span>.
            </p>
          </RevealItem>

          <RevealItem>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={`mailto:${data.contact.email}`} className="btn btn-accent group">
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

        <RevealItem className="min-w-0 lg:rotate-[0.6deg]">
          <CodeCard />
        </RevealItem>
      </RevealGroup>
    </div>
  </section>
);
