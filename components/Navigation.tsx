'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useState } from 'react'

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
    { href: `/${locale}/faq`, label: t('faq') },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-soft z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href={`/${locale}`} className="text-2xl font-bold text-olive">
            Food Sources
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-charcoal-700 hover:text-olive transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Quote Button */}
            <Link
              href={`/${locale}/quote`}
              className=" px-6 py-2.5 bg-terracotta text-white rounded-lg hover:bg-olive-600 transition-colors font-medium"
            >
              {t('requestQuote')}
            </Link>
            
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 text-charcoal-700 hover:text-olive transition-colors font-medium"
              >
                <Globe size={18} />
                <span>{locale === 'en' ? 'English' : 'العربية'}</span>
                <ChevronDown size={16} />
              </button>
              
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-charcoal-100 py-2 z-50">
                  <button
                    onClick={() => switchLocale('en')}
                    className={`w-full px-4 py-2 text-left hover:bg-cream transition-colors ${
                      locale === 'en' ? 'bg-cream text-olive font-semibold' : 'text-charcoal-700'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => switchLocale('ar')}
                    className={`w-full px-4 py-2 text-left hover:bg-cream transition-colors ${
                      locale === 'ar' ? 'bg-cream text-olive font-semibold' : 'text-charcoal-700'
                    }`}
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>
          </div>

          <button
            className="md:hidden text-charcoal-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-charcoal-700 hover:text-olive transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="border-t border-charcoal-100 pt-4 mt-4">
              <p className="text-xs text-charcoal-500 mb-2 px-2">Language / اللغة</p>
              <button
                onClick={() => { switchLocale('en'); setIsOpen(false); }}
                className={`block w-full text-left px-2 py-2 rounded transition-colors ${
                  locale === 'en' ? 'bg-cream text-olive font-semibold' : 'text-charcoal-700 hover:bg-cream'
                }`}
              >
                English
              </button>
              <button
                onClick={() => { switchLocale('ar'); setIsOpen(false); }}
                className={`block w-full text-left px-2 py-2 rounded transition-colors ${
                  locale === 'ar' ? 'bg-cream text-olive font-semibold' : 'text-charcoal-700 hover:bg-cream'
                }`}
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
