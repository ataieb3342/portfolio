import React from 'react';
import { data } from '@/lib/data';
import { navLinks, site } from '@/lib/site';
import { Icon } from './ui/Icon';

export const Footer: React.FC = () => (
  <footer className="rule-t">
    <div className="shell grid gap-8 py-12 md:grid-cols-[1.4fr_1fr] md:gap-12">
      <div>
        <p className="display text-2xl">{data.name}</p>
        <p className="note mt-2">{site.role}</p>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-8">
        <nav aria-label="Navigation de pied de page">
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="note hover:text-fg transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#top" className="note link-rule inline-flex items-center gap-2">
          Haut de page
          <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>

    <div className="shell rule-t note flex flex-wrap justify-between gap-4 py-5">
      <span>© {new Date().getFullYear()} {data.name}</span>
      <span>Next.js · TypeScript · Tailwind CSS</span>
    </div>
  </footer>
);
