'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer() {
  const t = useTranslations('nav');
  const tf = useTranslations('footer');
  const locale = useLocale();
  const prefix = locale === 'en' ? '' : `/${locale}`;

  const navLinks = [
    { href: `${prefix}/`, label: t('home') },
    { href: `${prefix}/o-mnie`, label: t('about') },
    { href: `${prefix}/projekty`, label: t('projects') },
    { href: `${prefix}/oferta`, label: t('offer') },
    { href: `${prefix}/cennik`, label: t('prices') },
    { href: `${prefix}/kontakt`, label: t('contact') },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3
              className="font-bold text-lg mb-2 text-[#1A1A1A]"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Analytica Studio
            </h3>
            <p className="text-sm text-[#888]">{tf('tagline')}</p>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-3 text-[#1A1A1A]">
              {tf('navigation')}
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#888] hover:text-[#1A1A1A] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-3 text-[#1A1A1A]">
              {tf('contact')}
            </h4>
            <div className="flex flex-col gap-3 mb-4">
              <a
                href="https://www.linkedin.com/in/patrycja-zurawska-businessanalyst/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#888] hover:text-[#1A1A1A] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/patrycjazurawska"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#888] hover:text-[#1A1A1A] transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:patrycjazurawska@hotmail.com"
                className="text-sm text-[#888] hover:text-[#1A1A1A] transition-colors"
              >
                patrycjazurawska@hotmail.com
              </a>
            </div>
            <LanguageSwitcher />
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-[#888]">{tf('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
