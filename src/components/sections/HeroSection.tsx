import Image from 'next/image';
import React from 'react';
import { data } from '@/lib/data';
import { Reveal, RevealGroup, RevealItem } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

/** Compétences mises en avant sous le portrait, sans dupliquer la section Stack. */
const enTete = ['Vertica', 'Semarchy xDI', 'Python', 'SQL', 'Spark', 'React'];

export const HeroSection: React.FC = () => (
  <section id="top" className="relative pt-16">
    {/* Bandeau plein, placé SOUS la barre de navigation : la nav garde son
        fond clair et son texte sombre reste lisible au chargement. */}
    <div className="block-ink">
      <div className="shell note flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2.5 text-bg!">
        <span>Portfolio — 2026</span>
        <span className="hidden sm:inline">Dijon · Remote</span>
        <span className="flex items-center gap-2">
          <span className="bg-pop inline-block h-1.5 w-1.5 rounded-full" />
          Disponible
        </span>
      </div>
    </div>

    <div className="shell pt-10 pb-12 md:pt-14 md:pb-16">
      <div className="hero-grid">
        <RevealGroup>
          <RevealItem>
            <p className="folio mb-4">00 — Profil</p>
          </RevealItem>

          <RevealItem>
            <h1 className="text-display">{data.name}</h1>
          </RevealItem>

          <RevealItem>
            <p className="display text-accent mt-3 text-xl md:text-2xl">{data.title}</p>
          </RevealItem>

          <RevealItem>
            <p className="text-lead text-muted mt-6 max-w-2xl">{data.profile}</p>
          </RevealItem>

          <RevealItem>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${data.contact.email}`}
                className="block-pop group inline-flex items-center gap-2.5 px-5 py-3 text-sm font-semibold"
              >
                Me contacter
                <Icon
                  name="arrowRight"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="/cv.pdf"
                download
                className="border-accent text-accent hover:bg-accent inline-flex items-center gap-2.5 border px-5 py-3 text-sm font-semibold transition-colors hover:text-[color:var(--color-bg)]"
              >
                <Icon name="download" className="h-4 w-4" />
                Curriculum vitæ
              </a>

              <a href="#projets" className="note link-rule px-1 py-3">
                Voir les projets
              </a>
            </div>
          </RevealItem>
        </RevealGroup>

        {/* Colonne d'appoint : portrait puis bloc de faits, pour ne pas laisser de vide */}
        <Reveal className="order-first h-full wide:order-none">
          {/*
            Sous 900px : portrait et bloc d'outils en ligne, sur toute la
            largeur — empilés, ils laisseraient la moitié de la ligne vide.
            Au-dessus : colonne pleine hauteur, le portrait absorbe l'espace
            que le bloc d'outils ne consomme pas.
          */}
          <div className="relative flex h-full gap-4 wide:flex-col wide:gap-0">
            <div className="relative aspect-25/28 w-32 shrink-0 overflow-hidden sm:w-44 wide:aspect-auto wide:w-full wide:min-h-64 wide:flex-1">
              <Image
                src="/profil.jpg"
                alt={`Portrait de ${data.name}`}
                fill
                sizes="(max-width: 900px) 176px, (max-width: 1280px) 30vw, 352px"
                className="object-cover object-[50%_22%]"
                priority
              />
            </div>

            <div className="block min-w-0 flex-1 self-start p-4 wide:mt-3 wide:flex-none wide:self-auto">
              <p className="note text-faint">Outils du moment</p>
              <ul className="mt-2.5 flex flex-wrap gap-1.5">
                {enTete.map((outil) => (
                  <li key={outil}>
                    <span className="tag">{outil}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
