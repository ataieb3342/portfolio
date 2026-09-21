'use client';

import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { navLinks, site } from '@/lib/site';
import { Icon } from './ui/Icon';

/**
 * Bandeau de tête : discret, en mono, aligné sur la grille de la revue.
 * Il marque la section courante d'un filet couleur accent.
 */
export const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    // On suit l'ensemble des sections visibles : sans cela, revenir en haut
    // de page laisserait le dernier lien surligné.
    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        setActive(ids.find((id) => visible.has(id)) ?? '');
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={`bg-bg fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'rule-b shadow-[0_1px_12px_rgba(20,19,15,0.08)]' : ''
      }`}
    >
      <motion.div
        aria-hidden="true"
        style={{ scaleX: reduced ? 0 : progress }}
        className="bg-accent absolute inset-x-0 top-0 h-px origin-left"
      />

      <nav className="shell flex h-16 items-center justify-between gap-6" aria-label="Navigation principale">
        <a href="#top" className="text-fg hover:text-accent shrink-0 text-lg whitespace-nowrap transition-colors">
          <span className="display">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link, i) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`note whitespace-nowrap transition-colors hover:text-fg ${isActive ? 'text-fg' : ''}`}
                >
                  <span className={isActive ? 'text-accent' : 'text-accent/50'}>
                    {String(i + 1).padStart(2, '0')}
                  </span>{' '}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <a href="/cv.pdf" download className="note link-rule hidden sm:inline-block">
            CV
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="text-fg hover:text-accent transition-colors lg:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-bg/97 rule-t backdrop-blur-md lg:hidden"
          >
            <ul className="shell flex flex-col py-2">
              {navLinks.map((link, i) => (
                <li key={link.href} className="rule-b">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-fg flex items-baseline gap-4 py-4 text-lg"
                  >
                    <span className="folio">{String(i + 1).padStart(2, '0')}</span>
                    <span className="display">{link.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/cv.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="note text-pop flex items-center gap-2 py-5"
                >
                  <Icon name="download" className="h-4 w-4" />
                  Télécharger le CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
