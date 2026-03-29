export interface ProjectDetail {
  slug: string;
  liveUrl: string;
  coverImage: string;
  images: string[];
  tags: string[];
  year: string;
  client: string;
  type: string;
  tech: string[];
}

export const projectsDetail: Record<string, ProjectDetail> = {
  'bpmn-logistyka': {
    slug: 'bpmn-logistyka',
    liveUrl: '',
    coverImage: '/screenshots/bpmn/analysis.png',
    images: [
      '/screenshots/bpmn/analysis.png',
    ],
    tags: ['BPMN'],
    year: '2026',
    client: '',
    type: 'Analiza i optymalizacja procesów',
    tech: ['BPMN 2.0', 'Visio', 'n8n', 'WMS API', 'OR-Tools'],
  },
  'make-reporting': {
    slug: 'make-reporting',
    liveUrl: '',
    coverImage: '/screenshots/make-reporting/dashboard.png',
    images: [
      '/screenshots/make-reporting/dashboard.png',
    ],
    tags: ['Automation'],
    year: '2026',
    client: '',
    type: 'Automatyzacja raportowania',
    tech: ['Make.com', 'Google Sheets', 'Xero', 'Airtable', 'Slack', 'Notion'],
  },
  'ai-onboarding': {
    slug: 'ai-onboarding',
    liveUrl: '',
    coverImage: '/screenshots/ai-onboarding/n8n-workflow.png',
    images: [
      '/screenshots/ai-onboarding/n8n-workflow.png',
      '/screenshots/ai-onboarding/email-output.png',
      '/screenshots/ai-onboarding/dashboard.png',
    ],
    tags: ['AI Apps', 'Automation'],
    year: '2025',
    client: 'SaaS Agency – internal tool',
    type: 'Automatyzacja procesów',
    tech: ['n8n', 'Claude API', 'HubSpot', 'Notion', 'Slack'],
  },
  stork: {
    slug: 'stork',
    liveUrl: '/projects/stork/index.html',
    coverImage: '/screenshots/stork/hero.png',
    images: [
      '/screenshots/stork/hero.png',
      '/screenshots/stork/kalkulator.png',
      '/screenshots/stork/cennik.png',
      '/screenshots/stork/portfolio.png',
    ],
    tags: ['Web Dev'],
    year: '2025',
    client: 'Sebastian – Stork Wykończenia',
    type: 'Strona firmowa',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  'craft-cafe': {
    slug: 'craft-cafe',
    liveUrl: '/projects/craft-cafe/index.html',
    coverImage: '/screenshots/craft-cafe/hero.png',
    images: [
      '/screenshots/craft-cafe/hero.png',
      '/screenshots/craft-cafe/menu.png',
      '/screenshots/craft-cafe/workshops.png',
      '/screenshots/craft-cafe/booking.png',
      '/screenshots/craft-cafe/about.png',
    ],
    tags: ['Web Dev'],
    year: '2025',
    client: 'Craft Café Kazimierz',
    type: 'Strona dla kawiarni',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
};
