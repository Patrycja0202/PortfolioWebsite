import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Analytica Studio – Patrycja Żurawska',
    template: '%s | Analytica Studio',
  },
  description: 'AI Product Builder & Consultant. I turn business processes into smart digital products — websites, automations, and AI-powered apps.',
  metadataBase: new URL('https://analytica-studio.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: ['pl_PL', 'nb_NO'],
    siteName: 'Analytica Studio',
    title: 'Analytica Studio – Patrycja Żurawska | AI Product Builder',
    description: 'AI Product Builder & Consultant. Websites, automations, and AI-powered apps.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Analytica Studio – AI Product Builder' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Analytica Studio – Patrycja Żurawska | AI Product Builder',
    description: 'AI Product Builder & Consultant. Websites, automations, and AI-powered apps.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  keywords: ['AI Product Builder', 'BPMN', 'Next.js', 'n8n', 'Make.com', 'Process Automation', 'Claude API', 'GPT-4', 'Analytica Studio', 'Patrycja Żurawska'],
};

const provider = { '@type': 'Person', name: 'Patrycja Żurawska', url: 'https://analytica-studio.com' };

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': ['Person', 'LocalBusiness'],
    name: 'Patrycja Żurawska',
    alternateName: 'Analytica Studio',
    jobTitle: 'AI Product Builder & Consultant',
    url: 'https://analytica-studio.com',
    sameAs: [
      'https://github.com/patrycjazurawska',
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
    name: 'AI Chatbot Development',
    provider,
    areaServed: 'Worldwide',
    url: 'https://analytica-studio.com/oferta',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Process Automation with n8n and Make.com',
    provider,
    areaServed: 'Worldwide',
    url: 'https://analytica-studio.com/oferta',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'BPMN Process Analysis',
    provider,
    areaServed: 'Worldwide',
    url: 'https://analytica-studio.com/oferta',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Next.js Website Development',
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
