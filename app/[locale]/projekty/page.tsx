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
      icon: '🤖',
    },
    {
      title: t('project2Title'),
      description: t('project2Desc'),
      tags: ['BPMN'],
      icon: '📊',
    },
    {
      title: t('project3Title'),
      description: t('project3Desc'),
      tags: ['Web Dev'],
      icon: '🌐',
    },
    {
      title: t('project4Title'),
      description: t('project4Desc'),
      tags: ['Automation'],
      icon: '⚙️',
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
      filterLabels={filterLabels}
      projects={projects}
      locale={params.locale}
    />
  );
}
