'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import type { ProjectData, ProjectMetrics } from '@/types';
import { ProjectGallery } from './ProjectGallery';
import { Icon, type IconName } from './ui/Icon';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  allProjects?: ProjectData[];
  onProjectChange?: (project: ProjectData) => void;
}

/** Libellés des métriques, dans l'ordre d'affichage. */
const METRIC_LABELS: [keyof ProjectMetrics, string][] = [
  ['scope', 'Périmètre'],
  ['users', 'Utilisateurs'],
  ['activeUsers', 'Récurrents'],
  ['team', 'Équipe'],
  ['impact', 'Impact'],
  ['status', 'Statut'],
];

const DOC_ICONS: Record<string, IconName> = { pdf: 'doc', html: 'globe', link: 'link' };

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  allProjects,
  onProjectChange,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusTo = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  // Référence toujours à jour, pour garder l'effet ci-dessous dépendant du
  // seul `project` : `onClose` change d'identité à chaque rendu du parent.
  const closeRef = useRef(onClose);
  useEffect(() => {
    closeRef.current = onClose;
  });

  /*
   * Clavier, verrou de scroll et focus.
   *
   * L'écoute est posée sur `window` : un handler React sur le conteneur ne
   * reçoit Échap que si le focus se trouve déjà dans la modale.
   */
  useEffect(() => {
    if (!project) return;

    restoreFocusTo.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const raf = requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLElement>('[data-autofocus]')?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeRef.current();
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;

      // Maintient le focus à l'intérieur de la modale.
      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null
      );
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const current = document.activeElement;

      if (!panelRef.current.contains(current)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (event.shiftKey && current === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && current === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      restoreFocusTo.current?.focus?.();
    };
  }, [project]);

  const metrics = project?.metrics
    ? METRIC_LABELS.filter(([key]) => project.metrics?.[key]).map(
        ([key, label]) => [label, project.metrics![key]!] as const
      )
    : [];

  const related =
    project?.relatedProjects && allProjects
      ? project.relatedProjects
          .map((id) => allProjects.find((p) => p.id === id))
          .filter((p): p is ProjectData => Boolean(p))
      : [];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-bg/92 p-4 backdrop-blur-sm sm:p-6"
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-titre"
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 16 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-surface flex max-h-[92svh] w-full max-w-4xl flex-col overflow-hidden border border-[color:var(--rule-strong)]"
          >
            {/* En-tête */}
            <header className="rule-b flex shrink-0 items-start justify-between gap-4 px-6 py-6 md:px-10">
              <div className="min-w-0">
                <p className="note mb-3">{project.category}</p>
                <h2 id="modal-titre" className="text-h3 text-balance">
                  {project.title}
                </h2>
              </div>
              <button
                type="button"
                data-autofocus
                onClick={onClose}
                aria-label="Fermer"
                className="text-muted hover:text-accent-soft shrink-0 transition-colors"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
            </header>

            {/* Corps */}
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
              <div className="space-y-12 px-6 py-9 md:px-10 md:py-12">
                {project.screenshots.length > 0 && (
                  <ProjectGallery
                    screenshots={project.screenshots}
                    projectTitle={project.shortTitle}
                    iframeUrl={project.iframeUrl}
                  />
                )}

                {/* Documents joints */}
                {project.strategyDocuments && project.strategyDocuments.length > 0 && (
                  <section>
                    <h3 className="note mb-6">Documentation</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {project.strategyDocuments.map((doc) => (
                        <a
                          key={doc.url}
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group rule-t hover:border-accent/60 flex flex-col pt-6 transition-colors"
                        >
                          <span className="text-accent">
                            <Icon name={DOC_ICONS[doc.type] ?? 'doc'} className="h-5 w-5" />
                          </span>
                          <h4 className="text-fg mt-4 display text-xl text-balance">{doc.title}</h4>
                          {doc.description && (
                            <p className="text-muted mt-2 text-sm leading-relaxed">
                              {doc.description}
                            </p>
                          )}
                          <span className="note text-accent mt-auto flex items-center gap-2 pt-5">
                            Ouvrir
                            <Icon
                              name="arrowUpRight"
                              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </span>
                        </a>
                      ))}
                    </div>
                  </section>
                )}

                {/* Présentation */}
                <section>
                  <h3 className="note mb-5">Le projet</h3>
                  <p className="text-muted leading-relaxed">{project.description}</p>
                </section>

                {/* Métriques */}
                {metrics.length > 0 && (
                  <section>
                    <h3 className="note mb-6">Impact</h3>
                    <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                      {metrics.map(([label, value]) => (
                        <div key={label} className="rule-t pt-4">
                          <dt className="note">
                            {label}
                          </dt>
                          <dd className="text-fg mt-2 display text-xl">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                )}

                {/* Points clés */}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <section>
                    <h3 className="note mb-6">Points clés</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {project.keyFeatures.map((feature, index) => (
                        <article
                          key={feature.title}
                          className="rule-t pt-6"
                        >
                          <div className="flex items-baseline gap-3">
                            <span className="folio">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <h4 className="text-fg display text-xl text-balance">{feature.title}</h4>
                          </div>
                          <p className="text-muted mt-3 text-sm leading-relaxed">
                            {feature.content}
                          </p>
                        </article>
                      ))}
                    </div>
                  </section>
                )}

                {/* Détails techniques */}
                {project.technicalDetails && project.technicalDetails.length > 0 && (
                  <section>
                    <h3 className="note mb-6">Architecture & méthodologie</h3>
                    <div className="space-y-7">
                      {project.technicalDetails.map((detail) => (
                        <div key={detail.title} className="rule-t pt-5">
                          <h4 className="note text-fg">{detail.title}</h4>
                          <p className="text-muted mt-2 text-sm leading-relaxed">
                            {detail.content}
                          </p>
                        </div>
                      ))}
                    </div>

                    {project.architectureFlow && (
                      <p className="text-faint bg-bg mt-8 p-5 font-mono text-xs leading-relaxed">
                        {project.architectureFlow}
                      </p>
                    )}
                  </section>
                )}

                {/* Technologies */}
                {project.technos.length > 0 && (
                  <section>
                    <h3 className="note mb-6">Technologies</h3>
                    <ul className="flex flex-wrap items-baseline">
                      {project.technos.map((techno) => (
                        <li key={techno}>
                          <span className="tag">{techno}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Projets liés */}
                {related.length > 0 && onProjectChange && (
                  <section>
                    <h3 className="note mb-6">Projet lié</h3>
                    <div className="space-y-3">
                      {related.map((linked) => (
                        <button
                          key={linked.id}
                          type="button"
                          onClick={() => onProjectChange(linked)}
                          className="group rule-t hover:border-accent/60 flex w-full items-center gap-5 pt-5 text-left transition-colors"
                        >
                          <span className="text-accent shrink-0">
                            <Icon name="link" className="h-5 w-5" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="note block">
                              {linked.category}
                            </span>
                            <span className="text-fg group-hover:text-accent-soft mt-1.5 block display text-xl transition-colors">
                              {linked.shortTitle}
                            </span>
                          </span>
                          <Icon
                            name="arrowRight"
                            className="text-accent h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                          />
                        </button>
                      ))}
                    </div>
                  </section>
                )}

                {/* Mention */}
                {project.disclaimer && (
                  <p className="text-muted border-accent/50 flex items-start gap-3 border-l-2 pl-5 text-sm leading-relaxed">
                    <Icon name="info" className="text-accent mt-0.5 h-4.5 w-4.5 shrink-0" />
                    <span>{project.disclaimer}</span>
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
