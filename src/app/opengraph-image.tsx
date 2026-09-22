import { ImageResponse } from 'next/og';
import { data } from '@/lib/data';
import { site } from '@/lib/site';

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const CREAM = '#f4f1e8';
const INK = '#14130f';
const MUTED = '#55514a';
const PINE = '#0f4c4a';
const POP = '#ff4d1f';

/**
 * Même monogramme que le favicon, à l'identique — les deux sont souvent vus
 * côte à côte, dans l'onglet et dans l'aperçu partagé. Satori ne compose pas
 * de SVG en ligne, d'où le passage par une image encodée.
 */
const monogram = `data:image/svg+xml;base64,${Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="14" fill="${PINE}"/>
    <path transform="translate(0,-4)" fill="${CREAM}" fill-rule="evenodd" d="M27.5 13H36.5L58 51H47L42.76 43.5H21.24L17 51H6Z M32 24.5L38.51 36H25.49Z"/>
    <rect x="6" y="52.5" width="52" height="4.5" fill="${POP}"/>
  </svg>`
).toString('base64')}`;

/**
 * Récupère une police Google en TrueType — satori ne lit pas le WOFF2 que
 * l'API renvoie aux navigateurs récents, d'où l'agent utilisateur générique.
 *
 * L'aperçu social ne vaut pas de faire échouer une construction : si une
 * police manque, satori se rabat sur les autres.
 */
async function googleFont(family: string, query: string, weight: 400 | 500 | 800) {
  try {
    const css = await fetch(`https://fonts.googleapis.com/css2?family=${query}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    }).then((r) => r.text());

    const url = css.match(/src: url\((https:\/\/[^)]+\.ttf)\)/)?.[1];
    if (!url) return null;

    const data = await fetch(url).then((r) => r.arrayBuffer());
    return { name: family, data, weight, style: 'normal' as const };
  } catch {
    return null;
  }
}

/**
 * Les trois familles de la page : le grotesque pour le nom, la linéale pour
 * le texte courant, la chasse fixe pour le bandeau et les étiquettes.
 */
async function fonts() {
  const loaded = await Promise.all([
    googleFont('Bricolage Grotesque', 'Bricolage+Grotesque:opsz,wght@12..96,800', 800),
    googleFont('Geist', 'Geist:wght@400', 400),
    googleFont('Geist Mono', 'Geist+Mono:wght@500', 500),
  ]);
  return loaded.filter((f) => f !== null);
}

/** Aperçu social généré à la construction (LinkedIn, Twitter, Slack…). */
export default async function OpengraphImage() {
  const loaded = await fonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: CREAM,
          color: INK,
          fontFamily: 'Geist, sans-serif',
        }}
      >
        {/* Bandeau de tête, repris de la page */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: PINE,
            color: CREAM,
            padding: '20px 64px',
            fontFamily: 'Geist Mono, monospace',
            fontSize: 20,
            letterSpacing: 4,
          }}
        >
          <div style={{ display: 'flex' }}>PORTFOLIO — 2026</div>
          <div style={{ display: 'flex' }}>DIJON · REMOTE</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: POP }}>
            <div style={{ display: 'flex', width: 10, height: 10, background: POP, borderRadius: 5 }} />
            DISPONIBLE
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flexGrow: 1,
            padding: '56px 64px 44px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 32 }}>
            <img src={monogram} width={92} height={92} alt="" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, paddingTop: 2 }}>
              <div
                style={{
                  fontFamily: 'Bricolage Grotesque, sans-serif',
                  fontSize: 92,
                  fontWeight: 800,
                  letterSpacing: -4,
                  lineHeight: 1,
                }}
              >
                {data.name}
              </div>
              <div style={{ fontSize: 36, color: PINE, letterSpacing: -1 }}>{site.role}</div>
            </div>
          </div>

          <div style={{ fontSize: 27, color: MUTED, maxWidth: 950, lineHeight: 1.45 }}>
            Datawarehouse et datamart sous Semarchy xDI et Vertica · Migration SAS vers Python ·
            Pipeline Spark de segmentation, et les interfaces qui l&apos;exposent
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: `1px solid rgba(20,19,15,0.18)`,
              paddingTop: 26,
              fontSize: 23,
              color: MUTED,
            }}
          >
            <div style={{ display: 'flex', color: INK }}>ataieb-dev.fr</div>
            <div style={{ display: 'flex', fontFamily: 'Geist Mono, monospace', fontSize: 20 }}>
              Vertica · Semarchy xDI · Python · Spark · React
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: loaded.length > 0 ? loaded : undefined,
    }
  );
}
