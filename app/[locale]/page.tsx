import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import BentoCard from '@/components/BentoCard';
import HeroHeadline from '@/components/HeroHeadline';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'home' });
  return {
    title: 'Analytica Studio – Patrycja Żurawska',
    description: t('subtext'),
  };
}

const tools = [
  { label: 'Claude', bg: '#D4EDFF', color: '#0A4A7A' },
  { label: 'Next.js', bg: '#1A1A1A', color: '#FFFFFF' },
  { label: 'Figma', bg: '#FFE5D0', color: '#7A3B00' },
  { label: 'n8n', bg: '#E8F5E9', color: '#1B5E20' },
  { label: 'Vercel', bg: '#F5F5F5', color: '#1A1A1A' },
  { label: 'Notion', bg: '#F0EBE3', color: '#1A1A1A' },
  { label: 'Make.com', bg: '#EDE7FF', color: '#4A1A99' },
];

export default async function HomePage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'home' });
  const prefix = params.locale === 'en' ? '' : `/${params.locale}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Patrycja Żurawska',
    jobTitle: 'AI Product Builder & System Analyst',
    url: 'https://analyticastudio.pl',
    sameAs: ['https://linkedin.com/in/patrycja-zurawska'],
    address: { '@type': 'PostalAddress', addressLocality: 'Kraków', addressCountry: 'PL' },
    worksFor: { '@type': 'Organization', name: 'Analytica Studio' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 md:pb-12">

        {/* ── Section 1: Hero Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">

          {/* Card 1 – Hero intro */}
          <div className="md:col-span-7">
            <BentoCard className="h-full flex flex-col justify-between min-h-[440px]">
              <div>
                {/* Availability badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
                  style={{ backgroundColor: '#D4EDDA', color: '#1A1A1A' }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                  {t('availableBadge')}
                </div>

                <HeroHeadline headline={t('headline')} />

                <p className="text-base mb-6 text-[#888] leading-relaxed">
                  {t('subtext')}
                </p>

                <ul className="space-y-2 mb-6">
                  {(['bullet1', 'bullet2', 'bullet3', 'bullet4'] as const).map((key) => (
                    <li key={key} className="flex items-center gap-2 text-sm text-[#1A1A1A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9B8F0] flex-shrink-0" />
                      {t(key)}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`${prefix}/kontakt`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white rounded-full font-medium hover:bg-[#333] transition-all hover:scale-105 w-fit group"
              >
                {t('cta')}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </BentoCard>
          </div>

          {/* Right column – profile + services merged */}
          <div className="md:col-span-5">
            <BentoCard bgColor="lavender" delay={0.1} className="h-full flex flex-col">
              {/* Profile */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-24 h-24 rounded-2xl overflow-hidden mb-3 bg-white/60">
                  <Image
                    src="/images/patrycja.png"
                    alt="Patrycja Żurawska"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                <h3 className="font-bold text-base mb-0.5 text-[#1A1A1A]">Patrycja Żurawska</h3>
                <p className="text-xs mb-2 text-[#555]">{t('location')}</p>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/70 text-[#1A1A1A]">
                  {t('badge')}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-black/10 mb-4" />

              {/* Services */}
              <p className="text-xs font-bold mb-3 uppercase tracking-wide text-[#1A1A1A]">
                {t('servicesLabel')}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  'AI Chatbots',
                  'Process Automation',
                  'BPMN Analysis',
                  'Next.js Websites',
                  'n8n & Make.com',
                  'Requirements Engineering',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/70 text-[#1A1A1A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-black/10 mb-4" />

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/60">
                  <span className="text-2xl font-bold text-[#1A1A1A]">3+</span>
                  <span className="text-xs text-[#666] mt-0.5 leading-tight">{t('statYears')}</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/60">
                  <span className="text-2xl font-bold text-[#1A1A1A]">4</span>
                  <span className="text-xs text-[#666] mt-0.5 leading-tight">{t('statLanguages')}</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/60">
                  <span className="text-2xl font-bold text-[#1A1A1A]">10+</span>
                  <span className="text-xs text-[#666] mt-0.5 leading-tight">{t('statProjects')}</span>
                </div>
              </div>
            </BentoCard>
          </div>
        </div>

        {/* ── Section 2: Tech Stack Strip ── */}
        <div className="mb-6">
          <BentoCard bgColor="mint" delay={0.2}>
            <p className="text-xs font-bold mb-5 uppercase tracking-wide text-[#1A1A1A]">
              {t('techStackLabel')}
            </p>
            <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
              {tools.map((tool) => (
                <div
                  key={tool.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full flex-shrink-0 transition-transform hover:scale-105 cursor-default"
                  style={{ backgroundColor: tool.bg, color: tool.color }}
                >
                  <span className="text-sm font-semibold whitespace-nowrap">{tool.label}</span>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>

        {/* ── Section 3: Testimonials ── */}
        <div className="rounded-3xl bg-[#EDE7FF]/40 px-6 py-8 mb-6">
          <p className="text-xs font-bold uppercase tracking-wide text-[#7C5CBF] mb-1">
            {t('testimonialsLabel')}
          </p>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">
            {t('testimonialsHeading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {([1, 2, 3] as const).map((n, i) => (
              <BentoCard key={n} delay={0.3 + i * 0.1}>
                <div className="flex flex-col gap-3">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-[#555]">
                    {t(`testimonial${n}`)}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-[#1A1A1A]">
                      {t(`testimonial${n}Author`)}
                    </p>
                    <p className="text-xs text-[#888]">{t(`testimonial${n}Role`)}</p>
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>

        {/* ── Section 4: CTA Banner ── */}
        <div className="rounded-3xl bg-[#1A1A1A] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
              {t('ctaBannerTitle')}
            </h2>
            <p className="text-[#aaa] text-sm">
              {t('ctaBannerSub')}
            </p>
          </div>
          <Link
            href={`${prefix}/kontakt`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1A1A1A] rounded-full font-semibold hover:bg-[#f0f0f0] transition-all hover:scale-105 whitespace-nowrap group flex-shrink-0"
          >
            {t('ctaBannerBtn')}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

      </div>

      {/* ── Mobile sticky CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 px-4 pb-4 pt-2 bg-gradient-to-t from-white via-white/95 to-transparent">
        <Link
          href={`${prefix}/kontakt`}
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#1A1A1A] text-white rounded-full font-semibold text-sm hover:bg-[#333] transition-all"
        >
          {t('mobileCta')}
        </Link>
      </div>
    </>
  );
}
