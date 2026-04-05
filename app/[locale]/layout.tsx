import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const locales = ['pl', 'no', 'en'];
const baseUrl = 'https://analytica-studio.com';

const provider = { '@type': 'Person', name: 'Patrycja Żurawska', url: baseUrl };

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': ['Person', 'LocalBusiness'],
    name: 'Patrycja Żurawska',
    alternateName: 'Analytica Studio',
    jobTitle: 'AI Product Consultant',
    url: baseUrl,
    sameAs: [
      'https://github.com/Patrycja0202',
      'https://www.linkedin.com/in/patrycja-zurawska-businessanalyst/',
    ],
    knowsAbout: ['Claude API', 'AI Product Development', 'Business Analysis', 'Process Automation', 'n8n', 'Make.com', 'BPMN', 'Next.js', 'React'],
    address: { '@type': 'PostalAddress', addressLocality: 'Kraków', addressCountry: 'PL' },
    areaServed: 'Worldwide',
    priceRange: 'PLN 2500 – PLN 10000+',
    email: 'patrycjazurawska@hotmail.com',
    image: `${baseUrl}/og-image.png`,
  },
  { '@context': 'https://schema.org', '@type': 'Service', name: 'AI Chatbot i asystent biznesowy', provider, areaServed: 'Worldwide', url: `${baseUrl}/oferta` },
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Automatyzacja procesów – n8n i Make.com', provider, areaServed: 'Worldwide', url: `${baseUrl}/oferta` },
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Analiza procesów BPMN', provider, areaServed: 'Worldwide', url: `${baseUrl}/oferta` },
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Strony internetowe Next.js', provider, areaServed: 'Worldwide', url: `${baseUrl}/oferta` },
];

type LocaleMeta = {
  title: string;
  description: string;
  keywords: string[];
  ogLocale: string;
};

const metaByLocale: Record<string, LocaleMeta> = {
  en: {
    title: 'Patrycja Żurawska – AI Product Consultant | Analytica Studio',
    description:
      'AI Product Consultant based in Kraków, Poland. Remote worldwide. Claude API developer specialising in AI product development and process automation.',
    keywords: [
      'AI consultant Poland',
      'Claude API developer',
      'AI product consultant remote',
      'Patrycja Żurawska',
      'Analytica Studio',
      'AI product development',
      'process automation',
    ],
    ogLocale: 'en_US',
  },
  pl: {
    title: 'Patrycja Żurawska – Konsultant AI | Analytica Studio',
    description:
      'Konsultant AI z Krakowa. Wdrożenie Claude API, automatyzacja AI i produkty cyfrowe. Praca zdalna na całym świecie.',
    keywords: [
      'konsultant AI',
      'wdrożenie Claude',
      'automatyzacja AI',
      'Patrycja Żurawska',
      'Analytica Studio',
      'produkty AI',
      'analiza biznesowa',
    ],
    ogLocale: 'pl_PL',
  },
  no: {
    title: 'Patrycja Żurawska – AI Konsulent | Analytica Studio',
    description:
      'AI konsulent fra Kraków, Polen. Fjernarbeid over hele verden. Spesialist på Claude API og kunstig intelligens.',
    keywords: [
      'AI konsulent',
      'Claude API Norge',
      'kunstig intelligens konsulent',
      'Patrycja Żurawska',
      'Analytica Studio',
      'AI produktutvikling',
    ],
    ogLocale: 'nb_NO',
  },
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = locales.includes(params.locale) ? params.locale : 'en';
  const m = metaByLocale[locale];
  const canonicalUrl = locale === 'en' ? baseUrl : `${baseUrl}/${locale}`;

  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: baseUrl,
        pl: `${baseUrl}/pl`,
        no: `${baseUrl}/no`,
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: canonicalUrl,
      siteName: 'Analytica Studio',
      type: 'website',
      locale: m.ogLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen" style={{ backgroundColor: '#F5F2EE' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
