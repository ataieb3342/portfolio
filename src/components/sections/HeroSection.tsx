import Image from 'next/image';
import React from 'react';
import { data } from '@/lib/data';
import { Reveal } from '../ui/Reveal';
import { GitHubIcon, Icon, LinkedInIcon } from '../ui/Icon';

type Actor = 'script' | 'ia' | 'humain';

/** Une étape de la trace, sans horodatage : on ne suggère aucune durée. */
const steps: { actor: Actor; step: string; result: string }[] = [
  { actor: 'script', step: 'ticket', result: 'lu · lecture seule' },
  { actor: 'script', step: 'dossier', result: 'préparé · sans IA' },
  { actor: 'ia', step: 'agents', result: 'socle + consignes' },
  { actor: 'ia', step: 'preuve', result: 'SELECT … ROLLBACK' },
  { actor: 'ia', step: 'proposition', result: 'avant / après' },
];

const MARK: Record<Actor, { sign: string; className: string; label: string }> = {
  script: { sign: '·', className: 'text-cyan', label: 'script' },
  ia: { sign: '◆', className: 'text-violet', label: 'IA' },
  humain: { sign: '■', className: 'text-accent', label: 'humain' },
};

/** La trace d'un passage de l'outil de diagnostic, avec la porte humaine en sortie. */
const Trace: React.FC = () => (
  <figure className="panel font-mono text-[0.75rem] leading-relaxed sm:text-[0.8rem]">
    <figcaption className="rule-b text-faint flex justify-between gap-4 px-4 py-2.5 sm:px-5">
      <span>trace · diagnostic d&apos;un ticket</span>
      <span>exemple</span>
    </figcaption>

    <ol className="px-4 py-3 sm:px-5">
      {steps.map((s, i) => (
        <li key={s.step} className="grid grid-cols-[1.75rem_1rem_minmax(0,6.5rem)_minmax(0,1fr)] gap-x-2 py-0.5">
          <span className="text-faint">{String(i + 1).padStart(2, '0')}</span>
          <span className={MARK[s.actor].className} aria-label={MARK[s.actor].label}>
            {MARK[s.actor].sign}
          </span>
          <span className="text-fg">{s.step}</span>
          <span className="text-muted truncate">{s.result}</span>
        </li>
      ))}
    </ol>

    {/* La porte : rien ne sort sans un humain */}
    <div className="tone-lime border-tone mx-4 mb-3 grid grid-cols-[1.75rem_1rem_minmax(0,6.5rem)_minmax(0,1fr)] gap-x-2 rounded-[3px] border border-dashed px-0 py-2 sm:mx-5">
      <span className="text-faint pl-2">06</span>
      <span className="text-tone" aria-label="humain">
        ■
      </span>
      <span className="text-tone">HUMAIN</span>
      <span className="text-fg">relit, décide · 2 clics</span>
    </div>

    <p className="rule-t flex justify-between gap-4 px-4 py-2.5 sm:px-5">
      <span className="text-muted">écrit en production par l&apos;IA</span>
      <span className="text-accent">0</span>
    </p>
  </figure>
);

export const HeroSection: React.FC = () => (
  <section id="top" className="pt-16">
    <div className="shell grid items-center gap-10 pt-8 pb-10 md:pt-12 md:pb-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-14">
      <Reveal>
        <p className="entry">
          <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-[3px]">
            <Image
              src="/profil.jpg"
              alt={`Portrait de ${data.name}`}
              fill
              sizes="24px"
              className="object-cover object-[50%_22%]"
              priority
            />
          </span>
          <span>
            {data.now.company} · {data.now.place}
          </span>
          <span className="pulse" aria-hidden="true" />
        </p>

        <h1 className="text-display mt-6">{data.name}</h1>
        <p className="text-fg mt-4 font-mono text-sm tracking-tight md:text-base">
          <span className="text-violet">outillage IA</span> &amp; <span className="text-coral">systèmes legacy</span>
          <span className="text-faint"> · facturation publique</span>
        </p>

        <p className="text-lead text-muted mt-5 max-w-xl">{data.pitch}</p>
        <p className="text-lead text-fg mt-3 max-w-xl">
          L&apos;IA <span className="text-violet">propose</span>, l&apos;humain{' '}
          <span className="text-accent">décide</span>.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a href="#diagnostic" className="btn btn-primary group">
            Lire le diagnostic
            <Icon
              name="arrowRight"
              className="h-4 w-4 rotate-90 transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
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

      <Reveal className="min-w-0">
        <Trace />
        <p className="note mt-3 normal-case! tracking-normal!">
          <span className="text-cyan">·</span> script &nbsp; <span className="text-violet">◆</span> IA, en lecture
          seule &nbsp; <span className="text-accent">■</span> humain · aucune donnée réelle
        </p>
      </Reveal>
    </div>
  </section>
);
