import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Analytica Studio – Patrycja Żurawska | AI Product Builder & Consultant';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#f5f0eb',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div style={{ fontSize: 20, color: '#666', fontFamily: 'sans-serif', marginBottom: 24 }}>
          analytica-studio.com
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: '#111',
            fontFamily: 'sans-serif',
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Patrycja Żurawska
        </div>
        <div style={{ fontSize: 32, color: '#444', fontFamily: 'sans-serif', marginBottom: 32 }}>
          AI Product Builder &amp; Consultant
        </div>
        <div style={{ fontSize: 20, color: '#666', fontFamily: 'sans-serif' }}>
          Claude API · n8n · Make.com · BPMN · Next.js · Kraków
        </div>
      </div>
    ),
    { ...size }
  );
}
