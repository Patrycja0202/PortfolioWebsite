'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const prefix = locale === 'en' ? '' : `/${locale}`;

  const navLinks = [
    { href: `${prefix}/`, label: t('home') },
    { href: `${prefix}/o-mnie`, label: t('about') },
    { href: `${prefix}/projekty`, label: t('projects') },
    { href: `${prefix}/oferta`, label: t('offer') },
    { href: `${prefix}/cennik`, label: t('prices') },
    { href: `${prefix}/kontakt`, label: t('contact') },
  ];

  const isActive = (href: string) => {
    if (href === `${prefix}/` || href === '/') {
      return pathname === href || pathname === `${prefix}`;
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={`${prefix}/`}
            className="font-bold text-xl text-[#1A1A1A]"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Analytica Studio
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-[#1A1A1A] hover:text-[#888] transition-colors pb-1"
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1A1A1A] rounded-full"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href={`${prefix}/kontakt`}
              className="hidden sm:block px-5 py-2.5 bg-[#1A1A1A] text-white rounded-full text-sm font-semibold hover:bg-[#333] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:scale-105"
            >
              {t('bookCall')}
            </Link>
            <button
              className="md:hidden p-2 text-[#1A1A1A]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-[#1A1A1A] text-white'
                      : 'text-[#1A1A1A] hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={`${prefix}/kontakt`}
                className="mt-2 px-4 py-2.5 bg-[#1A1A1A] text-white rounded-full text-sm font-medium text-center hover:bg-[#333] transition-colors"
              >
                {t('bookCall')}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
