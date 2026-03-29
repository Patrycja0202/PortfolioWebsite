import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ProjectsClient from './ProjectsClient';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'projects' });
  return { title: t('metaTitle'), description: t('metaDesc') };
}

export default async function ProjectsPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'projects' });

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
    <ProjectsClient
      pageTitle={t('pageTitle')}
      seeMoreLabel={t('seeMore')}
      visitProjectLabel={t('visitProject')}
      filterLabels={filterLabels}
      projects={projects}
      locale={params.locale}
    />
  );
}
