import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { data } from '@/lib/data';
import { site } from '@/lib/site';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: `Portfolio ${site.name}`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    'data engineer',
    'Tradim',
    'ECOCITO',
    'SSIS',
    'SSRS',
    'Python',
    'migration',
    'IA',
    'LLM',
    'SQL Server',
    'Dijon',
    'portfolio',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    locale: site.locale,
    url: site.url,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0b0c0b' },
    { media: '(prefers-color-scheme: light)', color: '#f6f7f3' },
  ],
  colorScheme: 'dark light',
};

/** Données structurées Schema.org pour les moteurs de recherche. */
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: data.name,
  url: site.url,
  jobTitle: site.role,
  email: `mailto:${data.contact.email}`,
  telephone: data.contact.phone,
  image: `${site.url}/profil.jpg`,
  description: data.profile,
  sameAs: [data.contact.linkedin, data.contact.github],
  homeLocation: {
    '@type': 'Place',
    address: { '@type': 'PostalAddress', addressLocality: 'Dijon', addressCountry: 'FR' },
  },
  worksFor: { '@type': 'Organization', name: data.now.company },
  alumniOf: data.education.map((edu) => ({
    '@type': 'EducationalOrganization',
    name: edu.school,
  })),
  knowsAbout: [...data.skills.data, ...data.skills.dev, ...data.skills.tools],
};

/**
 * Autorise l'état masqué des blocs révélés au défilement.
 *
 * En ligne et synchrone : il s'exécute avant le premier rendu, donc sans
 * clignotement, et il n'existe pas s'il n'y a pas de JavaScript — c'est
 * précisément ce qui garde la page lisible dans ce cas. Le minuteur est le
 * filet de sécurité du cas intermédiaire : scripts actifs mais bundle jamais
 * arrivé. Voir components/ui/Reveal.tsx.
 */
const revealBootstrap = `(function(){var d=document.documentElement;d.setAttribute('data-js','');
setTimeout(function(){if(!window.__reveal)d.removeAttribute('data-js')},2500)})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // `data-js` est posé par le script ci-dessous avant l'hydratation : React
    // verrait sinon un attribut qu'il n'a pas rendu côté serveur.
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootstrap }} />
      </head>
      <body className="antialiased">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-200 focus:rounded-full focus:border focus:border-accent focus:bg-surface focus:px-4 focus:py-2.5 focus:text-sm focus:text-fg"
        >
          Aller au contenu
        </a>

        <Nav />
        <main id="contenu">{children}</main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
