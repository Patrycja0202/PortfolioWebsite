import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const locales = ['pl', 'no', 'en'];

export const metadata: Metadata = {
  title: 'Analytica Studio – Patrycja Żurawska',
  description: 'AI Product Builder & Consultant. I turn business processes into smart digital products.',
  alternates: {
    canonical: 'https://analyticastudio.pl',
    languages: {
      'en': 'https://analyticastudio.pl',
      'pl': 'https://analyticastudio.pl/pl',
      'no': 'https://analyticastudio.pl/no',
    },
  },
};

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
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
