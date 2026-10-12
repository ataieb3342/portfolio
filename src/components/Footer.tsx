import React from 'react';
import { data } from '@/lib/data';
import { site } from '@/lib/site';

export const Footer: React.FC = () => (
  <footer className="rule-t">
    <div className="shell note flex flex-wrap items-center justify-between gap-4 py-8 normal-case! tracking-normal!">
      <span>
        © {new Date().getFullYear()} {data.name} · {site.role}
      </span>
      <a href="#top" className="link-rule">
        Haut de page ↑
      </a>
    </div>
  </footer>
);
