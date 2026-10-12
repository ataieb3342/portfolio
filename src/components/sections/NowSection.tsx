import React from 'react';
import { data } from '@/lib/data';
import { Section } from '../ui/Section';
import { Reveal, RevealGroup, RevealItem } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

const { now } = data;

/** Un ton par étape, les mêmes que la coloration du hero : legacy, IA, Python, usages. */
const STEP_TONES = ['tone-coral', 'tone-violet', 'tone-cyan', 'tone-lime'];
const MISSION_TONES = ['tone-coral', 'tone-violet'];

/** Schéma de la migration : de l'existant aux usages qu'on y branche. */
const MigrationFlow: React.FC = () => (
  <Reveal className="panel mt-4 p-5 md:p-7">
    <p className="note">Le chemin d&apos;un traitement</p>
    <ol className="mt-5 grid gap-3 md:grid-cols-4 md:gap-0">
      {now.flow.map((step, index) => {
        const last = index === now.flow.length - 1;
        return (
          <li key={step.label} className={`${STEP_TONES[index]} relative flex md:block`}>
            <div
              className={`tinted bg-surface-2 border-tone flex-1 rounded-xl border p-4 ${
                last ? '' : 'md:mr-8'
              }`}
              style={{ borderColor: 'color-mix(in srgb, var(--tone) 40%, transparent)' }}
            >
              <p className="folio">
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
      {now.missions.map((mission, index) => (
        <RevealItem
          key={mission.title}
          className={`${MISSION_TONES[index % MISSION_TONES.length]} panel tinted tinted-edge flex h-full flex-col p-6 md:p-7`}
        >
          <div className="flex items-center gap-3">
            <span className="chip">
              <Icon name={mission.icon} className="h-4.5 w-4.5" />
            </span>
            <span className="note text-tone!">{mission.label}</span>
          </div>

          <h3 className="text-h3 mt-5">{mission.title}</h3>
          <p className="text-muted mt-3 leading-relaxed">{mission.body}</p>

          <ul className="mt-5 space-y-2.5">
            {mission.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed">
                <Icon name="check" className="text-tone mt-0.5 h-4 w-4 shrink-0" />
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
