import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ProjectsClient from './ProjectsClient';

const base = 'https://analytica-studio.com';
const ogLocaleMap: Record<string, string> = { en: 'en_US', pl: 'pl_PL', no: 'nb_NO' };

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'projects' });
  const { locale } = params;
  const canonical = locale === 'en' ? `${base}/projekty` : `${base}/${locale}/projekty`;
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
    alternates: {
      canonical,
      languages: { en: `${base}/projekty`, pl: `${base}/pl/projekty`, no: `${base}/no/projekty` },
    },
    openGraph: { title: t('metaTitle'), description: t('metaDesc'), url: canonical, locale: ogLocaleMap[locale] ?? 'en_US' },
  };
}

export default async function ProjectsPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'projects' });
  const { locale } = params;
  const homeUrl = locale === 'en' ? base : `${base}/${locale}`;
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: locale === 'pl' ? 'Start' : locale === 'no' ? 'Hjem' : 'Home', item: homeUrl },
      { '@type': 'ListItem', position: 2, name: locale === 'pl' ? 'Projekty' : locale === 'no' ? 'Prosjekter' : 'Projects', item: `${homeUrl}/projekty` },
    ],
  };

  const projects = [
    {
      title: t('project1Title'),
      description: t('project1Desc'),
      tags: ['AI Apps', 'Automation'],
      image: '/screenshots/ai-onboarding/n8n-workflow.png',
      slug: 'ai-onboarding',
    },
    {
      title: t('project2Title'),
      description: t('project2Desc'),
      tags: ['BPMN'],
      image: '/screenshots/bpmn/analysis.png',
      slug: 'bpmn-logistyka',
    },
    {
      title: t('project4Title'),
      description: t('project4Desc'),
      tags: ['Automation'],
      image: '/screenshots/make-reporting/dashboard.png',
      slug: 'make-reporting',
    },
    {
      title: t('project5Title'),
      description: t('project5Desc'),
      tags: ['Web Dev'],
      image: '/screenshots/stork/hero.png',
      slug: 'stork',
    },
    {
      title: t('project6Title'),
      description: t('project6Desc'),
      tags: ['Web Dev'],
      image: '/screenshots/craft-cafe/hero.png',
      slug: 'craft-cafe',
    },
  ];

  const filterLabels = {
    All: t('all'),
    'AI Apps': t('filterAI'),
    Automation: t('filterAutomation'),
    'Web Dev': t('filterWeb'),
    BPMN: t('filterBPMN'),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <ProjectsClient
      pageTitle={t('pageTitle')}
      seeMoreLabel={t('seeMore')}
      visitProjectLabel={t('visitProject')}
      filterLabels={filterLabels}
      projects={projects}
      locale={params.locale}
    />
    </>
  );
}
