import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import BentoCard from '@/components/BentoCard';
import { Check } from 'lucide-react';
import FaqAccordion from './FaqAccordion';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'prices' });
  const prefix = params.locale === 'en' ? '' : `/${params.locale}`;
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
    alternates: {
      canonical: `https://analyticastudio.pl${prefix}/cennik`,
      languages: {
        'en': 'https://analyticastudio.pl/cennik',
        'pl': 'https://analyticastudio.pl/pl/cennik',
        'no': 'https://analyticastudio.pl/no/cennik',
      },
    },
  };
}

export default async function PricesPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'prices' });
  const prefix = params.locale === 'en' ? '' : `/${params.locale}`;

  const tiers = [
    {
      name: t('starter'),
      price: t('starterPrice'),
      features: [t('starterF1'), t('starterF2'), t('starterF3')],
      highlighted: false,
      bgColor: 'white' as const,
      plan: 'starter',
    },
    {
      name: t('pro'),
      price: t('proPrice'),
      badge: t('proBadge'),
      features: [t('proF1'), t('proF2'), t('proF3')],
      highlighted: true,
      bgColor: 'lavender' as const,
      plan: 'pro',
    },
    {
      name: t('premium'),
      price: t('premiumPrice'),
      features: [t('premiumF1'), t('premiumF2'), t('premiumF3'), t('premiumF4')],
      highlighted: false,
      bgColor: 'white' as const,
      plan: 'premium',
    },
  ];

  const faqs = [
    { q: t('faq1Q'), a: t('faq1A') },
    { q: t('faq2Q'), a: t('faq2A') },
    { q: t('faq3Q'), a: t('faq3A') },
    { q: t('faq4Q'), a: t('faq4A') },
    { q: t('faq5Q'), a: t('faq5A') },
  ];

  return (
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

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-stretch">
        {tiers.map((tier, i) => (
          <BentoCard
            key={i}
            bgColor={tier.bgColor}
            delay={i * 0.1}
            className={`relative flex flex-col h-full ${tier.highlighted ? 'md:scale-105' : ''}`}
          >
            {tier.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium bg-white shadow-md text-[#1A1A1A] whitespace-nowrap">
                {tier.badge}
              </div>
            )}
            <div className="text-center flex flex-col flex-1">
              <h3 className="text-2xl font-bold mb-2 text-[#1A1A1A]">{tier.name}</h3>
              <p
                className="text-3xl font-bold mb-6 text-[#1A1A1A]"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {tier.price}
              </p>
              <div className="space-y-3 mb-6 text-left flex-1">
                {tier.features.map((f, fi) => (
                  <div key={fi} className="flex items-start gap-2">
                    <Check
                      size={18}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: tier.highlighted ? '#1A1A1A' : '#888' }}
                    />
                    <span className="text-sm" style={{ color: tier.highlighted ? '#1A1A1A' : '#888' }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href={`${prefix}/kontakt?plan=${tier.plan}`}
                className={`block w-full py-3 rounded-full font-medium transition-all hover:scale-[1.02] mt-auto ${
                  tier.highlighted
                    ? 'bg-[#1A1A1A] text-white hover:bg-[#333]'
                    : 'bg-white border border-gray-200 text-[#1A1A1A] hover:bg-gray-50'
                }`}
              >
                {t('choosePlan')}
              </Link>
            </div>
          </BentoCard>
        ))}
      </div>

      {/* Monthly care banner */}
      <div className="rounded-3xl p-8 text-center mb-12" style={{ backgroundColor: '#C8E6C9' }}>
        <p className="text-lg font-medium mb-4 text-[#1A1A1A]">{t('monthlyBanner')}</p>
        <Link
          href={`${prefix}/kontakt`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white rounded-full font-medium hover:bg-[#333] transition-all hover:scale-105 group"
        >
          {t('notSure')}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <h3
          className="text-center mb-8"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: 700,
            color: '#1A1A1A',
          }}
        >
          {t('faqTitle')}
        </h3>
        <BentoCard>
          <FaqAccordion faqs={faqs} />
        </BentoCard>
      </div>
    </div>
  );
}
