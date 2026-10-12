import React from 'react';
import { data } from '@/lib/data';
import { Section } from '../ui/Section';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

const { now } = data;

const MISSION_TONES = ['tone-coral', 'tone-violet'];

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

          {mission.points && (
            <ul className="mt-5 space-y-2.5">
              {mission.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed">
                  <Icon name="check" className="text-tone mt-0.5 h-4 w-4 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

          {mission.link && (
            <a href={mission.link.href} className="group text-tone mt-5 inline-flex items-center gap-2 text-sm font-medium">
              {mission.link.label}
              <Icon
                name="arrowRight"
                className="h-4 w-4 rotate-90 transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          )}

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
  </Section>
);
