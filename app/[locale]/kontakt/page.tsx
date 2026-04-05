import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Mail } from 'lucide-react';
import { Suspense } from 'react';
import BentoCard from '@/components/BentoCard';
import ContactForm from '@/components/ContactForm';

const base = 'https://analytica-studio.com';

const contactMeta = {
  en: {
    title: 'Contact | Book a Free 30-Min Call with Patrycja – Analytica Studio',
    description: 'Get in touch with Patrycja Żurawska — book a free 30-minute call about your AI project, automation, or website. No commitment required.',
    ogLocale: 'en_US',
  },
  pl: {
    title: 'Kontakt | Umów bezpłatną rozmowę z Patrycją – Analytica Studio',
    description: 'Skontaktuj się z Patrycją Żurawską — umów bezpłatną 30-minutową rozmowę o projekcie AI, automatyzacji lub stronie internetowej. Bez zobowiązań.',
    ogLocale: 'pl_PL',
  },
  no: {
    title: 'Kontakt | Bestill gratis samtale med Patrycja – Analytica Studio',
    description: 'Ta kontakt med Patrycja Żurawska — bestill en gratis 30-minutters samtale om AI-prosjektet, automatiseringen eller nettsiden din. Ingen forpliktelser.',
    ogLocale: 'nb_NO',
  },
};

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as keyof typeof contactMeta;
  const m = contactMeta[locale] ?? contactMeta.en;
  const canonical = locale === 'en' ? `${base}/kontakt` : `${base}/${locale}/kontakt`;

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical,
      languages: {
        en: `${base}/kontakt`,
        pl: `${base}/pl/kontakt`,
        no: `${base}/no/kontakt`,
      },
    },
    openGraph: { title: m.title, description: m.description, url: canonical, locale: m.ogLocale },
  };
}

export default async function ContactPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'contact' });
  const { locale } = params;
  const homeUrl = locale === 'en' ? base : `${base}/${locale}`;
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: locale === 'pl' ? 'Start' : locale === 'no' ? 'Hjem' : 'Home', item: homeUrl },
      { '@type': 'ListItem', position: 2, name: locale === 'pl' ? 'Kontakt' : locale === 'no' ? 'Kontakt' : 'Contact', item: `${homeUrl}/kontakt` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2
        className="mb-4 text-center"
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 800,
          color: '#1A1A1A',
        }}
      >
        {t('pageTitle')}
      </h2>
      <p className="text-center text-lg mb-12 text-[#888]">{t('subtitle')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Info card */}
        <BentoCard>
          <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">{t('infoTitle')}</h3>
          <p className="mb-8 text-[#888] leading-relaxed">{t('infoText')}</p>

          <div className="space-y-4">
            <a
              href="mailto:patrycja.analytica@gmail.com"
              className="flex items-center gap-3 p-4 rounded-xl hover:bg-[#F5F2EE] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#C9B8F0] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={20} className="text-[#1A1A1A]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#888]">Email</p>
                <p className="font-medium text-[#1A1A1A]">patrycja.analytica@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/patrycja-zurawska-businessanalyst/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl hover:bg-[#F5F2EE] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#C8E6C9] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-[#1A1A1A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-[#888]">LinkedIn</p>
                <p className="font-medium text-[#1A1A1A]">Patrycja Żurawska</p>
              </div>
            </a>
          </div>
        </BentoCard>

        {/* Form card */}
        <BentoCard delay={0.1}>
          <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">{t('formTitle')}</h3>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </BentoCard>
      </div>

      {/* Banner */}
      <div className="rounded-3xl p-12 text-center" style={{ backgroundColor: '#C9B8F0' }}>
        <p
          className="text-2xl font-bold mb-2 text-[#1A1A1A]"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {t('bannerTitle')}
        </p>
        <p className="text-[#1A1A1A]/80 mb-8">{t('bannerSub')}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200">
            <span>📍</span>
            <span className="text-sm font-medium text-[#1A1A1A]">Cracow, Poland</span>
          </div>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{ backgroundColor: '#D4EDDA', color: '#1A1A1A' }}
          >
            <span className="w-2 h-2 rounded-full bg-green-600 pulse-dot" />
            {t('available')}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
