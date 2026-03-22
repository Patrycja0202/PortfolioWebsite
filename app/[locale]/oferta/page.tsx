import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'offer' });
  const prefix = params.locale === 'en' ? '' : `/${params.locale}`;
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
    alternates: {
      canonical: `https://analyticastudio.pl${prefix}/oferta`,
      languages: {
        'en': 'https://analyticastudio.pl/oferta',
        'pl': 'https://analyticastudio.pl/pl/oferta',
        'no': 'https://analyticastudio.pl/no/oferta',
      },
    },
  };
}

// ── SVG icons ──────────────────────────────────────────────────────────────

function IconGlobe({ color = '#1A1A1A' }: { color?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
    </svg>
  );
}

function IconGear({ color = '#1A1A1A' }: { color?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}

function IconDiagram({ color = '#1A1A1A' }: { color?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="6" height="4" rx="1" />
      <rect x="15" y="3" width="6" height="4" rx="1" />
      <rect x="9" y="17" width="6" height="4" rx="1" />
      <path d="M6 7v3a1 1 0 001 1h10a1 1 0 001-1V7M12 11v6" />
    </svg>
  );
}

function IconChart({ color = '#1A1A1A' }: { color?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

function Bullet({ accent = '#C9B8F0' }: { accent?: string }) {
  return (
    <span
      className="flex-shrink-0 mt-[5px]"
      style={{
        width: 6,
        height: 6,
        borderRadius: 1,
        backgroundColor: accent,
        display: 'inline-block',
      }}
    />
  );
}

export default async function OfferPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'offer' });
  const prefix = params.locale === 'en' ? '' : `/${params.locale}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* ── Page heading ── */}
      <div className="mb-12">
        <h1
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800,
            color: '#1A1A1A',
            lineHeight: 1.15,
          }}
          className="mb-3"
        >
          {t('pageTitle')}
        </h1>
        <p className="text-base text-[#888] max-w-2xl">{t('pageSubtitle')}</p>
      </div>

      {/* ── Service cards 2×2 grid — equal height rows ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20" style={{ alignItems: 'stretch' }}>

        {/* Card 1 – Web & AI (lavender) */}
        <div
          className="rounded-3xl p-7 flex flex-col"
          style={{ backgroundColor: '#EDE7FF', minHeight: 0 }}
        >
          <div className="mb-4 p-2.5 rounded-xl w-fit" style={{ backgroundColor: '#C9B8F0' }}>
            <IconGlobe color="#4A1A99" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">{t('card1Title')}</h3>
          <p className="text-sm mb-5 text-[#555] leading-relaxed">{t('card1Desc')}</p>
          <div className="space-y-2.5 flex-1">
            {(['card1F1', 'card1F2', 'card1F3', 'card1F4'] as const).map((k) => (
              <div key={k} className="flex items-start gap-2.5">
                <Bullet accent="#7C5CBF" />
                <span className="text-sm text-[#1A1A1A] leading-snug">{t(k)}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-5 border-t border-black/10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#7C5CBF] mb-1.5">{t('card1Stack')}</p>
            <p className="text-sm text-[#333]">Next.js · React · TypeScript · Tailwind · Claude · Vercel</p>
          </div>
        </div>

        {/* Card 2 – Process Automation (warm white) */}
        <div
          className="rounded-3xl p-7 flex flex-col"
          style={{ backgroundColor: '#FAFAF8', minHeight: 0 }}
        >
          <div className="mb-4 p-2.5 rounded-xl w-fit" style={{ backgroundColor: '#E8F5E9' }}>
            <IconGear color="#1B5E20" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">{t('card2Title')}</h3>
          <p className="text-sm mb-5 text-[#555] leading-relaxed">{t('card2Desc')}</p>
          <div className="space-y-2.5 flex-1">
            {(['card2F1', 'card2F2', 'card2F3', 'card2F4', 'card2F5', 'card2F6'] as const).map((k) => (
              <div key={k} className="flex items-start gap-2.5">
                <Bullet accent="#4CAF50" />
                <span className="text-sm text-[#1A1A1A] leading-snug">{t(k)}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-5 border-t border-black/10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#2E7D32] mb-1.5">{t('card2Stack')}</p>
            <p className="text-sm text-[#333]">{t('card2StackValue')}</p>
          </div>
        </div>

        {/* Card 3 – BPMN (warm white) */}
        <div
          className="rounded-3xl p-7 flex flex-col"
          style={{ backgroundColor: '#FAFAF8', minHeight: 0 }}
        >
          <div className="mb-4 p-2.5 rounded-xl w-fit" style={{ backgroundColor: '#FFF3E0' }}>
            <IconDiagram color="#E65100" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">{t('card3Title')}</h3>
          <p className="text-sm mb-5 text-[#555] leading-relaxed">{t('card3Desc')}</p>
          <div className="space-y-2.5 flex-1">
            {(['card3F1', 'card3F2', 'card3F3', 'card3F4'] as const).map((k) => (
              <div key={k} className="flex items-start gap-2.5">
                <Bullet accent="#E65100" />
                <span className="text-sm text-[#1A1A1A] leading-snug">{t(k)}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-5 border-t border-black/10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E65100] mb-1.5">{t('card3Stack')}</p>
            <p className="text-sm text-[#333]">{t('card3StackValue')}</p>
          </div>
        </div>

        {/* Card 4 – Automation Analysis (mint) */}
        <div
          className="rounded-3xl p-7 flex flex-col"
          style={{ backgroundColor: '#E8F5E9', minHeight: 0 }}
        >
          <div className="mb-4 p-2.5 rounded-xl w-fit" style={{ backgroundColor: '#C8E6C9' }}>
            <IconChart color="#1B5E20" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">{t('card4Title')}</h3>
          <p className="text-sm mb-5 text-[#1A1A1A]/70 leading-relaxed">{t('card4Desc')}</p>
          <div className="space-y-2.5 flex-1">
            {(['card4F1', 'card4F2', 'card4F3', 'card4F4'] as const).map((k) => (
              <div key={k} className="flex items-start gap-2.5">
                <Bullet accent="#2E7D32" />
                <span className="text-sm text-[#1A1A1A] leading-snug">{t(k)}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-5 border-t border-black/10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#2E7D32] mb-1.5">{t('card4Approach')}</p>
            <p className="text-sm text-[#333]">{t('card4ApproachValue')}</p>
          </div>
        </div>
      </div>

      {/* ── How collaboration works ── */}
      <div className="rounded-3xl bg-white px-6 py-12 mb-20">
        <h2
          className="mb-12"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 700,
            color: '#1A1A1A',
          }}
        >
          {t('howTitle')}
        </h2>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Dashed connector — desktop only */}
          <div
            className="hidden md:block absolute top-5 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px"
            style={{ borderTop: '1px dashed #D1D5DB', zIndex: 0 }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {[
              { step: '1', title: t('step1Title'), desc: t('step1Desc'), color: '#C9B8F0', textColor: '#4A1A99' },
              { step: '2', title: t('step2Title'), desc: t('step2Desc'), color: '#C9B8F0', textColor: '#4A1A99' },
              { step: '3', title: t('step3Title'), desc: t('step3Desc'), color: '#C9B8F0', textColor: '#4A1A99' },
              { step: '4', title: t('step4Title'), desc: t('step4Desc'), color: '#C8E6C9', textColor: '#1B5E20' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: s.color, color: s.textColor }}
                >
                  {s.step}
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] mb-2">{s.title}</h4>
                  <p className="text-sm text-[#666] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div
        className="rounded-3xl px-8 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        style={{ backgroundColor: '#1C1C1C' }}
      >
        <div>
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-2"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {t('ctaTitle')}
          </h2>
          <p className="text-[#999] text-sm md:whitespace-nowrap">{t('ctaSub')}</p>
        </div>
        <Link
          href={`${prefix}/kontakt`}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#1A1A1A] rounded-full font-semibold text-sm hover:bg-[#f0f0f0] transition-all hover:scale-105 whitespace-nowrap flex-shrink-0 group"
        >
          {t('ctaBtn')}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

    </div>
  );
}
