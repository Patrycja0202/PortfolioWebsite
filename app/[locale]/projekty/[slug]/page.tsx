import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { projectsDetail } from '@/lib/projectsData';

interface Props {
  params: { locale: string; slug: string };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = params;
  const project = projectsDetail[slug];
  if (!project) notFound();

  const t = await getTranslations({ locale, namespace: 'projects' });
  const prefix = locale === 'en' ? '' : `/${locale}`;

  // @ts-ignore – nested keys accessed dynamically
  const detail = t.raw('projectDetail')[slug];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back */}
      <Link
        href={`${prefix}/projekty`}
        className="inline-flex items-center gap-2 text-sm text-[#888] hover:text-[#1A1A1A] transition-colors mb-10"
      >
        ← {locale === 'pl' ? 'Wróć do projektów' : locale === 'no' ? 'Tilbake til prosjekter' : 'Back to projects'}
      </Link>

      {/* Hero image */}
      <div className="w-full aspect-video rounded-3xl overflow-hidden mb-10">
        <img
          src={project.coverImage}
          alt={project.client}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap gap-6 mb-10 pb-10 border-b border-[#E8E4DE]">
        {project.client && <div>
          <p className="text-xs uppercase tracking-widest text-[#aaa] mb-1">
            {locale === 'pl' ? 'Klient' : locale === 'no' ? 'Klient' : 'Client'}
          </p>
          <p className="font-semibold text-[#1A1A1A]">{project.client}</p>
        </div>}
        <div>
          <p className="text-xs uppercase tracking-widest text-[#aaa] mb-1">
            {locale === 'pl' ? 'Typ' : locale === 'no' ? 'Type' : 'Type'}
          </p>
          <p className="font-semibold text-[#1A1A1A]">{project.type}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-[#aaa] mb-1">
            {locale === 'pl' ? 'Rok' : locale === 'no' ? 'År' : 'Year'}
          </p>
          <p className="font-semibold text-[#1A1A1A]">{project.year}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-[#aaa] mb-1">Tech</p>
          <p className="font-semibold text-[#1A1A1A]">{project.tech.join(', ')}</p>
        </div>
        {project.liveUrl && <div className="ml-auto flex items-end">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors"
          >
            {t('openWebsite')}
          </a>
        </div>}
      </div>

      {/* Overview */}
      <p className="text-[#444] leading-relaxed text-lg mb-12">{detail.overview}</p>

      {/* Process */}
      <h2
        className="mb-6"
        style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#1A1A1A' }}
      >
        {detail.processTitle}
      </h2>
      <ol className="space-y-4 mb-14">
        {(detail.process as string[]).map((step: string, i: number) => (
          <li key={i} className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A1A1A] text-white text-sm font-bold flex items-center justify-center">
              {i + 1}
            </span>
            <p className="text-[#444] leading-relaxed pt-1">{step}</p>
          </li>
        ))}
      </ol>

      {/* Result */}
      <div className="bg-[#F5F2EE] rounded-2xl p-8 mb-14">
        <p className="text-sm uppercase tracking-widest text-[#888] mb-2">
          {locale === 'pl' ? 'Efekt' : locale === 'no' ? 'Resultat' : 'Result'}
        </p>
        <p className="text-[#1A1A1A] leading-relaxed font-medium">{detail.result}</p>
      </div>

      {/* Screenshot gallery */}
      <h2
        className="mb-6"
        style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#1A1A1A' }}
      >
        {locale === 'pl' ? 'Screeny' : locale === 'no' ? 'Skjermbilder' : 'Screenshots'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
        {project.images.map((src, i) => (
          <div key={i} className={`rounded-2xl overflow-hidden ${i === 0 ? 'sm:col-span-2' : ''}`}>
            <img src={src} alt={`Screenshot ${i + 1}`} className="w-full object-cover aspect-video" />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center border-t border-[#E8E4DE] pt-12">
        <p className="text-[#888] mb-6">
          {locale === 'pl'
            ? 'Chcesz podobną stronę dla swojej firmy?'
            : locale === 'no'
            ? 'Vil du ha en lignende nettside for din bedrift?'
            : 'Want a similar website for your business?'}
        </p>
        <Link
          href={`${prefix}/kontakt`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A1A1A] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors"
        >
          {locale === 'pl' ? 'Porozmawiajmy →' : locale === 'no' ? 'La oss snakke →' : "Let's talk →"}
        </Link>
      </div>
    </div>
  );
}
