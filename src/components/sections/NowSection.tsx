import React from 'react';
import { data } from '@/lib/data';
import { Section } from '../ui/Section';
import { Reveal, RevealGroup, RevealItem } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

const { now } = data;

/** Schéma de la migration : de l'existant aux usages qu'on y branche. */
const MigrationFlow: React.FC = () => (
  <Reveal className="panel mt-4 p-5 md:p-7">
    <p className="note">Le chemin d&apos;un traitement</p>
    <ol className="mt-5 grid gap-3 md:grid-cols-4 md:gap-0">
      {now.flow.map((step, index) => {
        const last = index === now.flow.length - 1;
        return (
          <li key={step.label} className="relative flex md:block">
            <div
              className={`flex-1 rounded-xl border p-4 ${
                last
                  ? 'border-accent bg-[color:color-mix(in_srgb,var(--color-accent)_8%,transparent)]'
                  : 'bg-surface-2 border-[color:var(--rule)] md:mr-8'
              }`}
            >
              <p className={`folio ${last ? '' : 'text-faint!'}`}>
                {String(index + 1).padStart(2, '0')} · {step.label}
              </p>
              <ul className="mt-3 space-y-1.5">
                {step.items.map((item) => (
                  <li key={item} className="text-fg text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {!last && (
              <Icon
                name="arrowRight"
                className="text-faint absolute top-1/2 right-1.5 hidden h-5 w-5 -translate-y-1/2 md:block"
              />
            )}
          </li>
        );
      })}
    </ol>
  </Reveal>
);

export const NowSection: React.FC = () => (
  <Section
    id="maintenant"
    eyebrow={`maintenant · ${now.since.toLowerCase()}`}
    title={
      <>
        Chez {now.company}, entre la facturation et les traitements qui l&apos;alimentent
      </>
    }
    lead={now.context}
  >
    <RevealGroup className="grid gap-4 md:grid-cols-2">
      {now.missions.map((mission) => (
        <RevealItem key={mission.title} className="panel flex h-full flex-col p-6 md:p-7">
          <div className="flex items-center gap-3">
            <span className="text-accent grid h-9 w-9 place-items-center rounded-lg border border-[color:var(--rule)]">
              <Icon name={mission.icon} className="h-4.5 w-4.5" />
            </span>
            <span className="note">{mission.label}</span>
          </div>

          <h3 className="text-h3 mt-5">{mission.title}</h3>
          <p className="text-muted mt-3 leading-relaxed">{mission.body}</p>

          <ul className="mt-5 space-y-2.5">
            {mission.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed">
                <Icon name="check" className="text-accent mt-0.5 h-4 w-4 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
            {mission.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </RevealItem>
      ))}
    </RevealGroup>

    <MigrationFlow />
  </Section>
);
