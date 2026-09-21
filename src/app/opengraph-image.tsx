import { ImageResponse } from 'next/og';
import { data } from '@/lib/data';
import { site } from '@/lib/site';

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Aperçu social généré à la construction (LinkedIn, Twitter, Slack…). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#100e0b',
          backgroundImage:
            'radial-gradient(800px circle at 10% -15%, rgba(201,123,74,0.22), transparent 62%)',
          padding: 72,
          color: '#ede6da',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 52,
              height: 52,
              borderRadius: 14,
              border: '1px solid rgba(237,230,218,0.2)',
              background: 'rgba(201,123,74,0.18)',
              color: '#e3a47a',
              fontSize: 20,
              letterSpacing: 1,
            }}
          >
            AT
          </div>
          <div style={{ fontSize: 22, color: '#a79e90', letterSpacing: 4, textTransform: 'uppercase' }}>
            Portfolio
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
            {data.name}
          </div>
          <div style={{ fontSize: 38, color: '#e3a47a', letterSpacing: -1 }}>{site.role}</div>
          <div style={{ fontSize: 26, color: '#a79e90', maxWidth: 900, lineHeight: 1.45 }}>
            Datawarehouse et datamart · Migration SAS vers Python · Pipeline Spark de
            segmentation
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(237,230,218,0.16)',
            paddingTop: 28,
            fontSize: 24,
            color: '#7a7266',
          }}
        >
          <div style={{ display: 'flex' }}>ataieb-dev.fr</div>
          <div style={{ display: 'flex' }}>Vertica · Semarchy xDI · Python · Spark</div>
        </div>
      </div>
    ),
    size
  );
}
