import { ImageResponse } from 'next/og';
import { data } from '@/lib/data';
import { site } from '@/lib/site';

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const BG = '#0b0c0b';
const FG = '#eceee8';
const MUTED = '#a2a99f';
const RULE = 'rgba(236,238,232,0.12)';
const ACCENT = '#c4f25a';

/**
 * Récupère une police Google en TrueType — satori ne lit pas le WOFF2 que
 * l'API renvoie aux navigateurs récents, d'où l'agent utilisateur générique.
 *
 * L'aperçu social ne vaut pas de faire échouer une construction : si une
 * police manque, satori se rabat sur les autres.
 */
async function googleFont(family: string, query: string, weight: 400 | 500 | 600) {
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

/** Les deux familles de la page : la linéale et la chasse fixe. */
async function fonts() {
  const loaded = await Promise.all([
    googleFont('Geist', 'Geist:wght@600', 600),
    googleFont('Geist', 'Geist:wght@400', 400),
    googleFont('Geist Mono', 'Geist+Mono:wght@500', 500),
  ]);
  return loaded.filter((f) => f !== null);
}

/** Aperçu social généré à la construction (LinkedIn, Slack…). */
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
          justifyContent: 'space-between',
          background: BG,
          backgroundImage: `radial-gradient(${RULE} 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px',
          color: FG,
          padding: '64px 72px',
          fontFamily: 'Geist, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontFamily: 'Geist Mono, monospace',
            fontSize: 24,
            color: MUTED,
          }}
        >
          <div style={{ display: 'flex', width: 14, height: 14, borderRadius: 7, background: ACCENT }} />
          {`${data.now.role} chez ${data.now.company} · ${data.now.place}`}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ fontSize: 112, fontWeight: 600, letterSpacing: -5, lineHeight: 1 }}>
            {data.name}
          </div>
          <div style={{ display: 'flex', fontSize: 40, color: MUTED, maxWidth: 980, lineHeight: 1.3 }}>
            Je reprends les traitements data legacy pour qu&apos;on puisse enfin y brancher de
            l&apos;IA.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: `1px solid ${RULE}`,
            paddingTop: 28,
            fontFamily: 'Geist Mono, monospace',
            fontSize: 22,
            color: MUTED,
          }}
        >
          <div style={{ display: 'flex', color: FG }}>ataieb-dev.fr</div>
          <div style={{ display: 'flex' }}>Transpileurs · Non-régression · Agents IA</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: loaded.length > 0 ? loaded : undefined,
    }
  );
}
