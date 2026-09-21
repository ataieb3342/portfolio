import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Bricolage_Grotesque } from 'next/font/google';
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

/** Grotesque à graisse variable, réservé aux titres. */
const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
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
    'full-stack',
    'machine learning',
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'Spark',
    'portfolio',
    'Vertica',
    'Semarchy xDI',
    'Dijon',
    'alternance Crédit Agricole',
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
  themeColor: '#f4f1e8',
  colorScheme: 'light',
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
  hasOccupation: data.experiences.map((experience) => ({
    '@type': 'Occupation',
    name: experience.title,
    hiringOrganization: { '@type': 'Organization', name: experience.company },
  })),
  alumniOf: data.education.map((edu) => ({
    '@type': 'EducationalOrganization',
    name: edu.school,
  })),
  knowsAbout: [...data.skills.data, ...data.skills.dev, ...data.skills.tools],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable}`}>
      <body className="grain antialiased">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-200 focus:border focus:border-accent focus:bg-surface focus:px-4 focus:py-2.5 focus:font-mono focus:text-sm focus:text-fg"
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
