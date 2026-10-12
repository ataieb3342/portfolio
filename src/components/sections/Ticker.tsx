import React from 'react';

/** Les mots du métier, en bandeau qui défile, colorés comme une coloration syntaxique. */
const words: [string, string][] = [
  ['SSIS → Python', 'text-cyan'],
  ['SSRS', 'text-violet'],
  ['Facturation', 'text-coral'],
  ['SQL Server', 'text-fg'],
  ['LLM', 'text-accent'],
  ['Non-régression', 'text-cyan'],
  ['ECOCITO', 'text-violet'],
  ['Support N2', 'text-coral'],
  ['Agents IA', 'text-violet'],
  ['APIs', 'text-fg'],
  ['Automatisations', 'text-accent'],
];

const Row: React.FC<{ hidden?: boolean }> = ({ hidden }) => (
  <ul className="flex shrink-0 items-center" aria-hidden={hidden}>
    {words.map(([word, color]) => (
      <li key={word} className="flex items-center">
        <span className={`${color} px-6 text-lg font-medium tracking-tight whitespace-nowrap md:text-xl`}>
          {word}
        </span>
        <span className="text-faint" aria-hidden="true">
          ✦
        </span>
      </li>
    ))}
  </ul>
);

export const Ticker: React.FC = () => (
  <div className="marquee-wrap rule-t bg-surface overflow-hidden py-5">
    <div className="marquee">
      <Row />
      <Row hidden />
    </div>
  </div>
);
