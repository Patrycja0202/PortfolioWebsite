import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Analytica Studio – Patrycja Żurawska',
    template: '%s | Analytica Studio',
  },
  description: 'AI Product Builder & Consultant. I turn business processes into smart digital products — websites, automations, and AI-powered apps.',
  metadataBase: new URL('https://analyticastudio.pl'),
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
