'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

interface NavigationProps {
  locale: string;
}

export default function Navigation({ locale }: NavigationProps) {
  const pathname = usePathname()
  const t = useTranslations('nav')
  const [isOpen, setIsOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)

  const switchLocale = (newLocale: string) => {
    // Get current path without locale prefix
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    // Navigate to same path with new locale using full page reload
    const newPath = `/${newLocale}${pathWithoutLocale}`
    window.location.href = newPath
  }

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/products`, label: t('products') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ]

  return (
    <nav 
      className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 shadow-sm"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href={`/${locale}`} className="relative w-40 h-12">
            <Image
              src="/main-logo.png"
              alt="Food Sources"
              fill
              className="object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: 'var(--color-text-secondary)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Open Account Button */}
            <Link
              href={`/${locale}/onboarding`}
              className="px-6 py-3 rounded-full transition-all font-semibold hover:shadow-lg hover:-translate-y-0.5 bg-orange-600 text-white"
            >
              {t('openAccount')}
            </Link>
            
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 font-medium transition-colors"
                style={{ color: 'var(--color-text-secondary)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
              >
                <Globe size={18} />
                <span>{locale === 'en' ? 'English' : 'العربية'}</span>
                <ChevronDown size={16} />
              </button>
              
              {langDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-40 rounded-lg py-2 z-50 shadow-lg"
                  style={{ 
                    backgroundColor: 'var(--color-surface)', 
                    border: '1px solid var(--color-border)' 
                  }}
                >
                  <button
                    onClick={() => switchLocale('en')}
                    className={`w-full px-4 py-2 text-left transition-colors ${
                      locale === 'en' 
                        ? 'font-semibold' 
                        : ''
                    }`}
                    style={{
                      backgroundColor: locale === 'en' ? 'var(--color-primary-light)' : 'transparent',
                      color: locale === 'en' ? 'var(--color-primary)' : 'var(--color-text-secondary)'
                    }}
                    onMouseEnter={(e) => {
                      if (locale !== 'en') e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)'
                    }}
                    onMouseLeave={(e) => {
                      if (locale !== 'en') e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    English
                  </button>
                  <button
                    onClick={() => switchLocale('ar')}
                    className={`w-full px-4 py-2 text-left transition-colors ${
                      locale === 'ar' 
                        ? 'font-semibold' 
                        : ''
                    }`}
                    style={{
                      backgroundColor: locale === 'ar' ? 'var(--color-primary-light)' : 'transparent',
                      color: locale === 'ar' ? 'var(--color-primary)' : 'var(--color-text-secondary)'
                    }}
                    onMouseEnter={(e) => {
                      if (locale !== 'ar') e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)'
                    }}
                    onMouseLeave={(e) => {
                      if (locale !== 'ar') e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="transition-colors"
              style={{ color: 'var(--color-text-primary)' }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block font-medium transition-colors"
                style={{ color: 'var(--color-text-secondary)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Open Account Button */}
            <Link
              href={`/${locale}/onboarding`}
              className="block px-6 py-3 rounded-full transition-all font-semibold text-center bg-orange-600 text-white"
              onClick={() => setIsOpen(false)}
            >
              {t('openAccount')}
            </Link>
            
            {/* Mobile Language Selector */}
            <div className="pt-4 mt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
              <p className="text-xs mb-2 px-2" style={{ color: 'var(--color-text-muted)' }}>Language / اللغة</p>
              <button
                onClick={() => { switchLocale('en'); setIsOpen(false); }}
                className={`block w-full text-left px-2 py-2 rounded transition-colors ${
                  locale === 'en' ? 'font-semibold' : ''
                }`}
                style={{
                  backgroundColor: locale === 'en' ? 'var(--color-primary-light)' : 'transparent',
                  color: locale === 'en' ? 'var(--color-primary)' : 'var(--color-text-secondary)'
                }}
              >
                English
              </button>
              <button
                onClick={() => { switchLocale('ar'); setIsOpen(false); }}
                className={`block w-full text-left px-2 py-2 rounded transition-colors ${
                  locale === 'ar' ? 'font-semibold' : ''
                }`}
                style={{
                  backgroundColor: locale === 'ar' ? 'var(--color-primary-light)' : 'transparent',
                  color: locale === 'ar' ? 'var(--color-primary)' : 'var(--color-text-secondary)'
                }}
              >
                العربية (Arabic)
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
