'use client';

import { useState } from 'react';
import Link from 'next/link';
import BentoCard from '@/components/BentoCard';

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon?: string;
  image?: string;
  slug?: string;
}

type FilterKey = 'All' | 'AI Apps' | 'Automation' | 'Web Dev' | 'BPMN';

interface Props {
  pageTitle: string;
  seeMoreLabel: string;
  visitProjectLabel: string;
  filterLabels: Record<FilterKey, string>;
  projects: Project[];
  locale: string;
}

const FILTER_KEYS: FilterKey[] = ['All', 'AI Apps', 'Automation', 'Web Dev', 'BPMN'];

// SVG icons per project tag
function ProjectIcon({ tags }: { tags: string[] }) {
  if (tags.includes('AI Apps')) {
    return (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7C5CBF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2V4a2 2 0 012-2z" />
        <path d="M12 16a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2v-2a2 2 0 012-2z" />
        <path d="M4 10a2 2 0 012-2h2a2 2 0 010 4H6a2 2 0 01-2-2z" />
        <path d="M16 10a2 2 0 012-2h2a2 2 0 010 4h-2a2 2 0 01-2-2z" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    );
  }
  if (tags.includes('BPMN')) {
    return (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E65100" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="6" height="4" rx="1" />
        <rect x="15" y="3" width="6" height="4" rx="1" />
        <rect x="9" y="17" width="6" height="4" rx="1" />
        <path d="M6 7v3a1 1 0 001 1h10a1 1 0 001-1V7M12 11v6" />
      </svg>
    );
  }
  if (tags.includes('Automation')) {
    return (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    );
  }
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

export default function ProjectsClient({ pageTitle, seeMoreLabel, visitProjectLabel, filterLabels, projects, locale }: Props) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('All');
  const prefix = locale === 'en' ? '' : `/${locale}`;

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1
        className="mb-8"
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 800,
          color: '#1A1A1A',
        }}
      >
        {pageTitle}
      </h1>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-3 mb-12" role="group" aria-label="Filter projects">
        {FILTER_KEYS.map((key) => (
          <button
            key={key}
            onClick={() => setActiveFilter(key)}
            aria-pressed={activeFilter === key}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === key
                ? 'bg-[#1A1A1A] text-white'
                : 'bg-white text-[#1A1A1A] hover:bg-gray-100'
            }`}
          >
            {filterLabels[key]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((project, i) => (
          <BentoCard key={i} delay={i * 0.1}>
            <div className="aspect-video rounded-2xl mb-4 overflow-hidden bg-gradient-to-br from-[#C9B8F0]/20 to-[#C8E6C9]/20 flex items-center justify-center">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <ProjectIcon tags={project.tags} />
              )}
            </div>
            <h2 className="text-xl font-bold mb-2 text-[#1A1A1A]">{project.title}</h2>
            <p className="text-sm mb-4 text-[#888] leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-[#F5F2EE] text-[#1A1A1A]">
                  {filterLabels[tag as FilterKey] ?? tag}
                </span>
              ))}
            </div>
            <Link
              href={project.slug ? `${prefix}/projekty/${project.slug}` : `${prefix}/kontakt`}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] group"
            >
              {seeMoreLabel}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </BentoCard>
        ))}
      </div>
    </div>
  );
}
