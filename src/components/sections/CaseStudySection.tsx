import React from 'react';
import { data } from '@/lib/data';
import type { PipelineStage } from '@/types';
import { Section } from '../ui/Section';
import { Reveal, RevealGroup, RevealItem } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

const { caseStudy, now } = data;

/** Qui exécute l'étape décide de la couleur : le script en cyan, l'IA en violet, l'humain en lime. */
const STAGE_STYLE: Record<PipelineStage['kind'], { tone: string; frame: string; icon: 'code' | 'sparkles' | 'check' }> = {
  script: { tone: 'tone-cyan', frame: 'border-solid', icon: 'code' },
  ia: { tone: 'tone-violet', frame: 'border-dashed', icon: 'sparkles' },
  humain: { tone: 'tone-lime', frame: 'border-solid', icon: 'check' },
};

/**
 * Flèche entre deux étapes : vers le bas sur mobile, vers la droite sur grand
 * écran. Rendue en `li` masqué, car posée directement dans une liste.
 */
const Arrow: React.FC<{ className?: string }> = ({ className = '' }) => (
  <li aria-hidden="true" role="presentation" className={`text-faint grid place-items-center ${className}`}>
    <Icon name="arrowRight" className="h-4 w-4 rotate-90 lg:rotate-0" />
  </li>
);

/** Le pipeline ticket → dossier → agents → preuves → proposition → humain. */
const Pipeline: React.FC = () => (
  <figure>
    <ol className="grid gap-2 lg:grid-cols-[minmax(0,2fr)_1.5rem_minmax(0,3fr)_1.5rem_minmax(0,1.05fr)]">
      {caseStudy.pipeline.map((stage, stageIndex) => {
        const style = STAGE_STYLE[stage.kind];
        return (
          <React.Fragment key={stage.label}>
            {stageIndex > 0 && <Arrow />}
            <li
              className={`${style.tone} rounded-[4px] border ${style.frame} border-[color:color-mix(in_srgb,var(--tone)_50%,transparent)] p-3`}
            >
              <p className="note text-tone! mb-3 flex items-center gap-2 px-1">
                <Icon name={style.icon} className="h-3.5 w-3.5" />
                {stage.label}
              </p>
              <ol className="grid gap-2 lg:auto-cols-fr lg:grid-flow-col">
                {stage.steps.map((step, stepIndex) => (
                  <React.Fragment key={step.title}>
                    {stepIndex > 0 && <Arrow className="lg:hidden" />}
                    <li className="panel h-full p-3.5">
                      <p className="text-fg font-medium">{step.title}</p>
                      <p className="text-tone mt-0.5 font-mono text-[0.7rem]">{step.by}</p>
                      <p className="text-muted mt-2 text-xs leading-relaxed">{step.detail}</p>
                    </li>
                  </React.Fragment>
                ))}
              </ol>
            </li>
          </React.Fragment>
        );
      })}
    </ol>
  </figure>
);

/** Le poste actuel, raconté par son projet principal. */
export const CaseStudySection: React.FC = () => (
  <Section
    id="diagnostic"
    index={1}
    tone="violet"
    eyebrow={`maintenant · ${now.company.toLowerCase()} · ${now.since.toLowerCase()}`}
    title={caseStudy.title}
    lead={now.context}
  >
    {/* Les règles du jeu */}
    <Reveal className="-mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm md:-mt-6">
      {now.principles.map((principle) => (
        <span key={principle} className="text-fg">
          <span className="text-accent">[✓]</span> {principle}
        </span>
      ))}
    </Reveal>

    {/* Problème → réponse */}
    <RevealGroup className="mt-8 grid gap-5 md:grid-cols-2 md:gap-10">
      <RevealItem className="tone-coral">
        <p className="folio">{'le problème'}</p>
        <p className="text-muted mt-2 leading-relaxed">{caseStudy.problem}</p>
      </RevealItem>
      <RevealItem>
        <p className="folio">{`la réponse · ${caseStudy.role.toLowerCase()}`}</p>
        <p className="text-fg mt-2 leading-relaxed">{caseStudy.solution}</p>
      </RevealItem>
    </RevealGroup>

    <Reveal className="mt-7">
      <Pipeline />
    </Reveal>

    {/* Garde-fous et technique */}
    <Reveal className="tone-lime mt-6 grid gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
      <div>
        <p className="folio">garde-fous</p>
        <ul className="mt-3 space-y-1.5">
          {caseStudy.guardrails.map((guardrail) => (
            <li key={guardrail} className="flex gap-3 text-sm leading-relaxed">
              <span className="text-tone font-mono">[✓]</span>
              {guardrail}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-1.5 md:justify-end">
        {caseStudy.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </Reveal>
  </Section>
);
