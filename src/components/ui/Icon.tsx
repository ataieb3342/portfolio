import React from 'react';

/**
 * Jeu d'icônes au trait remplaçant les emojis utilisés jusqu'ici.
 * Tracé unique, 24×24, `currentColor` : elles héritent de la couleur du texte.
 */
const paths = {
  mail: 'M3 8.5 10.9 13.76a2 2 0 0 0 2.2 0L21 8.5M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z',
  phone:
    'M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .95.68l1.5 4.5a1 1 0 0 1-.51 1.2l-2.25 1.13a11 11 0 0 0 5.52 5.52l1.13-2.26a1 1 0 0 1 1.2-.5l4.5 1.5a1 1 0 0 1 .68.94V19a2 2 0 0 1-2 2h-1C9.72 21 3 14.28 3 6V5Z',
  download: 'M12 3v12m0 0-4-4m4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2',
  arrowRight: 'M5 12h14m0 0-6-6m6 6-6 6',
  arrowUpRight: 'M7 17 17 7m0 0H8m9 0v9',
  chevronLeft: 'm15 19-7-7 7-7',
  chevronRight: 'm9 5 7 7-7 7',
  close: 'M6 18 18 6M6 6l12 12',
  menu: 'M4 7h16M4 12h16M4 17h16',
  check: 'm5 13 4 4L19 7',
  eye: 'M2.46 12A10.5 10.5 0 0 1 12 5.5 10.5 10.5 0 0 1 21.54 12 10.5 10.5 0 0 1 12 18.5 10.5 10.5 0 0 1 2.46 12Z',
  info: 'M12 16v-4m0-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  link: 'M10 13a5 5 0 0 0 7.07 0l3-3A5 5 0 0 0 13 3l-1.5 1.5M14 11a5 5 0 0 0-7.07 0l-3 3A5 5 0 0 0 11 21l1.5-1.5',
  globe: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-18 0h18M12 3c2.5 2.4 3.9 5.6 3.9 9s-1.4 6.6-3.9 9c-2.5-2.4-3.9-5.6-3.9-9S9.5 5.4 12 3Z',
  // Thématiques
  bolt: 'm13 3-9 11h7l-1 7 9-11h-7l1-7Z',
  chart: 'M4 20V10m6 10V4m6 16v-7m5 7H3',
  layers: 'm12 3 9 5-9 5-9-5 9-5Zm9 9-9 5-9-5m18 4-9 5-9-5',
  database:
    'M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3Zm0 0v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3',
  code: 'm8 6-6 6 6 6m8-12 6 6-6 6M14 4l-4 16',
  wrench:
    'M14.7 6.3a4 4 0 0 0 5.2 5.2l-8.6 8.6a2.5 2.5 0 0 1-3.5-3.5l8.6-8.6a4 4 0 0 0-5.2-5.2l3 3-2.1 2.1-3-3a4 4 0 0 0 5.6 1.4Z',
  cap: 'M12 4 2 9l10 5 10-5-10-5Zm-6 7.5V17c0 1.66 2.69 3 6 3s6-1.34 6-3v-5.5',
  target:
    'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
  sparkles: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Zm7 8 .9 2.4 2.1.6-2.1.9L19 17l-.9-2.1-2.1-.9 2.1-.6L19 11Z',
  blueprint: 'M3 7h18M3 7v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7M3 7l2-3h14l2 3M9 12h6m-6 4h3',
  doc: 'M14 3v5a1 1 0 0 0 1 1h5M7 21h10a2 2 0 0 0 2-2V8.83a1 1 0 0 0-.29-.7l-4.84-4.84a1 1 0 0 0-.7-.29H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z',
} as const;

export type IconName = keyof typeof paths;

/** Icônes composées de plusieurs tracés — rendues à part. */
const multiPath: Partial<Record<IconName, React.ReactNode>> = {
  eye: (
    <>
      <path d="M2.46 12A10.5 10.5 0 0 1 12 5.5 10.5 10.5 0 0 1 21.54 12 10.5 10.5 0 0 1 12 18.5 10.5 10.5 0 0 1 2.46 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  /** Épaisseur du trait, 1.6 par défaut. */
  weight?: number;
}

export const Icon: React.FC<IconProps> = ({ name, weight = 1.6, className = 'w-5 h-5', ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={weight}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...rest}
  >
    {multiPath[name] ?? <path d={paths[name]} />}
  </svg>
);

/* ----- Logos de marque (tracés pleins, hors grille au trait) ----- */

export const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = 'w-5 h-5',
  ...rest
}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...rest}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export const GitHubIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = 'w-5 h-5',
  ...rest
}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...rest}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.41-4.03-1.41-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
  </svg>
);
