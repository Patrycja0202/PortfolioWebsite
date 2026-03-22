'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'pl', label: 'PL' },
  { code: 'no', label: 'NO' },
] as const;

const locales = ['en', 'pl', 'no'];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const getLocalePath = (newLocale: string) => {
    const segments = pathname.split('/');
    let pathWithoutLocale = pathname;

    if (segments[1] && locales.includes(segments[1])) {
      pathWithoutLocale = '/' + segments.slice(2).join('/');
    }

    const base = pathWithoutLocale || '/';
    return newLocale === 'en' ? base : `/${newLocale}${base === '/' ? '' : base}`;
  };

  const handleSwitch = (newLocale: string) => {
    window.location.href = getLocalePath(newLocale);
  };

  return (
    <div className="flex items-center gap-1" aria-label="Language switcher">
      {languages.map((lang) => {
        const isActive = locale === lang.code;
        return (
          <button
            key={lang.code}
            onClick={() => handleSwitch(lang.code)}
            aria-label={`Switch to ${lang.label}`}
            className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
              isActive ? 'bg-[#1A1A1A] text-white' : 'text-[#888] hover:text-[#1A1A1A]'
            }`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
