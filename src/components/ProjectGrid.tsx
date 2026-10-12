'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import type { ProjectData } from '@/types';
import { data } from '@/lib/data';
import { RevealGroup, RevealItem } from './ui/Reveal';
import { Icon } from './ui/Icon';
import { ProjectModal } from './ProjectModal';

/** Sommaire des projets : une carte par projet, le détail en modale. */
export const ProjectGrid: React.FC = () => {
  const [selected, setSelected] = useState<ProjectData | null>(null);

  return (
    <>
      <RevealGroup>
        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.projects.map((project) => {
            // À défaut de capture, la vignette : une figure au même format.
            const illustration = project.screenshots[0] ?? project.thumbnail;

            return (
              <RevealItem as="li" key={project.id} className="h-full">
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  aria-label={`Voir le détail du projet ${project.shortTitle}`}
                  className="panel group hover:border-accent flex h-full w-full flex-col p-4 text-left transition-colors duration-300"
                >
                  {/* Visuel */}
                  <span className="bg-surface-2 relative block aspect-16/10 w-full overflow-hidden rounded-lg">
                    <Image
                      src={illustration}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 46vw, 380px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </span>

                  <span className="note mt-5">{project.category}</span>

                  <h3 className="text-h3 mt-1.5">
                    {project.shortTitle}
                  </h3>

                  <p className="text-muted mt-2.5 line-clamp-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <span className="mt-4 flex flex-wrap gap-1.5">
                    {project.technos.slice(0, 4).map((techno) => (
                      <span key={techno} className="tag">
                        {techno}
                      </span>
                    ))}
                    {project.technos.length > 4 && (
                      <span className="tag text-faint">+{project.technos.length - 4}</span>
                    )}
                  </span>

                  <span className="text-accent mt-auto flex items-center gap-2 pt-5 text-sm">
                    Lire le détail
                    <Icon
                      name="arrowRight"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </button>
              </RevealItem>
            );
          })}
        </ol>
      </RevealGroup>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
        allProjects={data.projects}
        onProjectChange={setSelected}
      />
    </>
  );
};
