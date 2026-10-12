'use client';

import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { navLinks, site } from '@/lib/site';
import { Icon } from './ui/Icon';

/**
 * Bandeau de tête translucide. Il marque la section courante et la
 * progression de lecture d'un filet couleur accent.
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
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        scrolled || open ? 'rule-b bg-bg/85' : 'bg-transparent'
      }`}
    >
      <motion.div
        aria-hidden="true"
        style={{ scaleX: reduced ? 0 : progress }}
        className="bg-accent absolute inset-x-0 bottom-0 h-px origin-left"
      />

      <nav className="shell flex h-16 items-center justify-between gap-6" aria-label="Navigation principale">
        <a href="#top" className="text-fg flex shrink-0 items-center gap-2.5 whitespace-nowrap">
          <span className="bg-fg text-bg grid h-7 w-7 place-items-center rounded-md font-mono text-xs font-semibold">
            AT
          </span>
          <span className="font-medium">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                    isActive ? 'bg-surface-2 text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="text-fg hover:text-accent transition-colors md:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="rule-t md:hidden"
          >
            <ul className="shell flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.href} className="rule-b last:border-b-0">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-fg block py-4 text-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
