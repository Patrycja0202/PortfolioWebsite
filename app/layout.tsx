import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Analytica Studio – Konsultant AI | Wdrożenia Claude API | Polska',
    template: '%s | Analytica Studio',
  },
  description:
    'Analytica Studio – AI Product Consulting dla firm. Praktyczne wdrożenia Claude API, automatyzacja procesów i produkty AI. Patrycja Żurawska, Kraków. Praca zdalna, klienci PL i międzynarodowi.',
  metadataBase: new URL('https://analytica-studio.com'),
  alternates: {
    canonical: 'https://analytica-studio.com',
    languages: {
      pl: 'https://analytica-studio.com/pl',
      en: 'https://analytica-studio.com',
      no: 'https://analytica-studio.com/no',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    alternateLocale: ['en_GB', 'nb_NO'],
    siteName: 'Analytica Studio',
    title: 'Analytica Studio – Konsultant AI | Wdrożenia Claude API',
    description:
      'Praktyczne wdrożenia AI dla firm. Nie PowerPoint – działające produkty. BA + PO + PM w jednej osobie.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Analytica Studio – AI Product Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Analytica Studio – Konsultant AI | Polska',
    description: 'Praktyczne wdrożenia AI dla firm. Claude API, automatyzacja, produkty AI.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  keywords: [
    'konsultant AI',
    'wdrożenie AI dla firm',
    'Claude API Polska',
    'automatyzacja procesów AI',
    'AI product consultant',
    'BPMN',
    'Next.js',
    'n8n',
    'Make.com',
    'Analytica Studio',
    'Patrycja Żurawska',
  ],
};

const provider = { '@type': 'Person', name: 'Patrycja Żurawska', url: 'https://analytica-studio.com' };

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': ['Person', 'LocalBusiness'],
    name: 'Patrycja Żurawska',
    alternateName: 'Analytica Studio',
    jobTitle: 'AI Product Consultant',
    url: 'https://analytica-studio.com',
    sameAs: [
      'https://github.com/Patrycja0202',
      'https://www.linkedin.com/in/patrycja-zurawska-businessanalyst/',
    ],
    knowsAbout: ['Claude API', 'AI Product Development', 'Business Analysis', 'Process Automation', 'n8n', 'Make.com', 'BPMN', 'Next.js', 'React'],
    address: { '@type': 'PostalAddress', addressLocality: 'Kraków', addressCountry: 'PL' },
    areaServed: 'Worldwide',
    priceRange: 'PLN 2500 – PLN 10000+',
    email: 'patrycjazurawska@hotmail.com',
    image: 'https://analytica-studio.com/og-image.png',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Chatbot i asystent biznesowy',
    provider,
    areaServed: 'Worldwide',
    url: 'https://analytica-studio.com/oferta',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Automatyzacja procesów – n8n i Make.com',
    provider,
    areaServed: 'Worldwide',
    url: 'https://analytica-studio.com/oferta',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Analiza procesów BPMN',
    provider,
    areaServed: 'Worldwide',
    url: 'https://analytica-studio.com/oferta',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Strony internetowe Next.js',
    provider,
    areaServed: 'Worldwide',
    url: 'https://analytica-studio.com/oferta',
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
