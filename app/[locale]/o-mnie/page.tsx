import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { Brain, Bot, Globe, Globe2, Settings, ClipboardList, BookOpen } from 'lucide-react';
import BentoCard from '@/components/BentoCard';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'about' });
  const prefix = params.locale === 'en' ? '' : `/${params.locale}`;
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
    alternates: {
      canonical: `https://analyticastudio.pl${prefix}/o-mnie`,
      languages: {
        'en': 'https://analyticastudio.pl/o-mnie',
        'pl': 'https://analyticastudio.pl/pl/o-mnie',
        'no': 'https://analyticastudio.pl/no/o-mnie',
      },
    },
  };
}

const certs = [
  { name: 'CPRE – Requirements Engineering', meta: 'IREB · Jan 2025' },
  { name: 'Professional Scrum Master PSM1', meta: 'Scrum.org · Apr 2024' },
  { name: 'Google UX Design', meta: 'Google · Coursera' },
  { name: 'Clinical Data Modelling', meta: 'Better · Mar 2026' },
  { name: 'openEHR Technical Course', meta: 'Better · Feb 2026' },
  { name: 'UX Design Fundamentals', meta: 'IBM · May 2024' },
];

const bioChips = [
  '3+ yrs Enterprise BPMN',
  'Healthcare · openEHR',
  '4 Languages',
  'Claude API · GPT-4 · n8n',
  'Remote Worldwide',
];

const skills = [
  'Claude API', 'GPT-4', 'n8n', 'Make.com', 'AI Chatbots', 'Process Automation',
  'BPMN', 'Product Ownership', 'openEHR', 'Next.js', 'React', 'TypeScript',
  'Figma', 'UX Research', 'Scrum', 'SQL', 'UML', 'Agile', 'Power Query',
];

export default async function AboutPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'about' });
  const prefix = params.locale === 'en' ? '' : `/${params.locale}`;

  const pillars = [
    { icon: Brain, title: t('pillar1Title'), desc: t('pillar1Desc') },
    { icon: Bot, title: t('pillar2Title'), desc: t('pillar2Desc') },
    { icon: Globe, title: t('pillar3Title'), desc: t('pillar3Desc') },
  ];

  const builds = [
    { icon: Bot, title: t('build1Title'), tools: t('build1Tools'), desc: t('build1Desc'), color: undefined },
    { icon: Globe2, title: t('build2Title'), tools: t('build2Tools'), desc: t('build2Desc'), color: 'lavender' as const },
    { icon: Settings, title: t('build3Title'), tools: t('build3Tools'), desc: t('build3Desc'), color: 'mint' as const },
    { icon: ClipboardList, title: t('build4Title'), tools: t('build4Tools'), desc: t('build4Desc'), color: undefined },
  ];

  const roles = [
    { title: t('role1Title'), period: t('role1Period'), desc: t('role1Desc'), tag: t('role1Tag') },
    { title: t('role2Title'), period: t('role2Period'), desc: t('role2Desc'), tag: t('role2Tag') },
  ];

  const education = [
    { title: t('edu1'), sub: t('edu1Sub'), desc: t('edu1Desc') },
    { title: t('edu2'), sub: t('edu2Sub'), desc: t('edu2Desc') },
    { title: t('edu3'), sub: t('edu3Sub'), desc: t('edu3Desc') },
    { title: t('edu4'), sub: t('edu4Sub') },
  ];

  const languages = [
    { code: 'PL', label: t('lang1') },
    { code: 'EN', label: t('lang2') },
    { code: 'NO', label: t('lang3') },
    { code: 'ES', label: t('lang4') },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page title */}
      <h2
        className="mb-8"
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 800,
          color: '#1A1A1A',
        }}
      >
        {t('pageTitle')}
      </h2>

      {/* Hero: profile + bio — equal height via grid stretch */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6" style={{ alignItems: 'stretch' }}>
        <BentoCard className="md:col-span-1 !flex !flex-col">
          <div className="flex flex-col items-center text-center flex-1 justify-center py-2">
            <div className="w-32 h-32 rounded-3xl overflow-hidden mb-4 bg-[#F5F2EE] ring-4 ring-white shadow-md">
              <Image
                src="/images/patrycja.png"
                alt="Patrycja Żurawska"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold mb-1 text-[#1A1A1A]">Patrycja Żurawska</h3>
            <p className="text-xs text-[#888] mb-0.5">Founder · Analytica Studio</p>
            <p className="text-xs text-[#888] mb-4">Kraków, Poland · remote worldwide</p>
            <a
              href="https://www.linkedin.com/in/patrycja-zurawska-businessanalyst/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[#1A1A1A] text-white hover:bg-[#333] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </BentoCard>

        <BentoCard bgColor="lavender" delay={0.1} className="md:col-span-2 !flex !flex-col">
          <div className="flex flex-col h-full">
            <p className="text-[#1A1A1A] leading-relaxed flex-1" style={{ fontSize: '17px' }}>
              {t('bio')}
            </p>
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/30">
              {bioChips.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/50 text-[#1A1A1A]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </BentoCard>
      </div>

      {/* 3 pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {pillars.map((p, i) => (
          <BentoCard key={i} delay={0.1 + i * 0.08}>
            <div className="mb-3">
              <p.icon size={22} strokeWidth={1.6} className="text-[#1A1A1A]" />
            </div>
            <h4 className="font-bold mb-1 text-[#1A1A1A] text-sm leading-snug">{p.title}</h4>
            <p className="text-sm text-[#888] leading-snug">{p.desc}</p>
          </BentoCard>
        ))}
      </div>

      {/* What I build — 2×2 grid */}
      <h3
        className="mb-4"
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
          fontWeight: 700,
          color: '#1A1A1A',
        }}
      >
        {t('whatIBuildTitle')}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {builds.map((b, i) => (
          <BentoCard key={i} bgColor={b.color} delay={0.1 + i * 0.06}>
            <div className="mb-3">
              <b.icon size={22} strokeWidth={1.6} className="text-[#1A1A1A]" />
            </div>
            <h4 className="font-bold mb-0.5 text-sm text-[#1A1A1A]">{b.title}</h4>
            <p className="text-xs font-mono text-[#888] mb-2">{b.tools}</p>
            <p className="text-sm text-[#888] leading-relaxed">{b.desc}</p>
          </BentoCard>
        ))}
      </div>

      {/* Work experience */}
      <h3
        className="mb-4"
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
          fontWeight: 700,
          color: '#1A1A1A',
        }}
      >
        {t('experience')}
      </h3>
      <div className="mb-6">
        <BentoCard bgColor="lavender" delay={0.15}>
          <div className="space-y-5">
            {roles.map((role, i) => (
              <div key={i} className="relative pl-5 border-l-2 border-white/40">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-white shadow" />
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <p className="font-semibold text-sm text-[#1A1A1A]">{role.title}</p>
                  {role.tag && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/60 text-[#1A1A1A]/70 font-medium">
                      {role.tag}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#1A1A1A]/60 mb-1">{role.period}</p>
                <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </BentoCard>
      </div>

      {/* Certifications + Book */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <BentoCard delay={0.2} className="md:col-span-2">
          <h4 className="font-bold text-base mb-4 text-[#1A1A1A]">{t('certTitle')}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-3">
            {certs.map((cert, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-[#F5F2EE] border border-[#e8e3dc]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-0.5">{cert.name}</p>
                <p className="text-xs text-[#888]">{cert.meta}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#888] italic">{t('certMore')}</p>
        </BentoCard>

        <BentoCard bgColor="lavender" delay={0.25}>
          <div className="mb-3">
            <BookOpen size={22} strokeWidth={1.6} className="text-[#1A1A1A]" />
          </div>
          <h4 className="font-bold text-base mb-2 text-[#1A1A1A]">{t('bookTitle')}</h4>
          <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">{t('bookDesc')}</p>
        </BentoCard>
      </div>

      {/* Education + Languages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <BentoCard delay={0.3} className="md:col-span-2">
          <h4 className="font-bold text-base mb-4 text-[#1A1A1A]">{t('eduTitle')}</h4>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="relative pl-5 border-l-2 border-[#C9B8F0]">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#C9B8F0]" />
                <p className="font-semibold text-sm text-[#1A1A1A] mb-0.5">{edu.title}</p>
                <p className="text-xs text-[#888] mb-0.5">{edu.sub}</p>
                {edu.desc && <p className="text-xs text-[#888]">{edu.desc}</p>}
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard delay={0.35}>
          <h4 className="font-bold text-base mb-3 text-[#1A1A1A]">{t('langTitle')}</h4>
          <div className="space-y-2.5">
            {languages.map((lang, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-8 h-5 rounded text-[10px] font-bold tracking-wide bg-[#1A1A1A] text-white">
                  {lang.code}
                </span>
                <span className="text-sm text-[#1A1A1A]">{lang.label}</span>
              </div>
            ))}
          </div>
        </BentoCard>
      </div>

      {/* CTA banner */}
      <div className="rounded-3xl p-8 mb-8 text-center" style={{ backgroundColor: '#C9B8F0' }}>
        <Link
          href={`${prefix}/kontakt`}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#1A1A1A] text-white font-semibold text-lg hover:bg-[#333] transition-colors"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {t('ctaText')}
        </Link>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full text-sm font-medium bg-white shadow-card text-[#1A1A1A]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
