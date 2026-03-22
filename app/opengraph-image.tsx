import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Analytica Studio – Patrycja Żurawska | AI Product Builder';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F5F2EE',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: '#4ade80',
            }}
          />
          <span style={{ fontSize: 18, color: '#555', fontFamily: 'sans-serif' }}>
            Available for work
          </span>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: '#1A1A1A',
            fontFamily: 'sans-serif',
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          AI Product Builder
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#555',
            fontFamily: 'sans-serif',
            marginBottom: 48,
          }}
        >
          Patrycja Żurawska · Analytica Studio
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {['Claude API', 'Next.js', 'n8n', 'BPMN', 'Make.com'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '8px 20px',
                borderRadius: 99,
                background: '#C9B8F0',
                color: '#1A1A1A',
                fontSize: 18,
                fontFamily: 'sans-serif',
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
