'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Send } from 'lucide-react'
import { useState } from 'react'

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('footer')
  const navT = useTranslations('nav')
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribeStatus('loading')
    
    // Simulate API call - replace with actual newsletter API
    setTimeout(() => {
      setSubscribeStatus('success')
      setEmail('')
      setTimeout(() => setSubscribeStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-olive">Food Sources</h3>
            <p className="text-charcoal-300">
              {t('about')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-charcoal-300 hover:text-olive transition-colors">
                  {navT('home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="text-charcoal-300 hover:text-olive transition-colors">
                  {navT('products')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-charcoal-300 hover:text-olive transition-colors">
                  {navT('about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-charcoal-300 hover:text-olive transition-colors">
                  {navT('contact')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="text-charcoal-300 hover:text-olive transition-colors">
                  {navT('faq')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('productsTitle')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/products?category=olives`} className="text-charcoal-300 hover:text-olive transition-colors">
                  {t('olives')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products?category=cheese`} className="text-charcoal-300 hover:text-olive transition-colors">
                  {t('cheeses')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products?category=pickles`} className="text-charcoal-300 hover:text-olive transition-colors">
                  {t('pickles')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products?category=labneh`} className="text-charcoal-300 hover:text-olive transition-colors">
                  {t('labneh')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-charcoal-300">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>{t('email')}</span>
              </li>
              <li className="flex items-start gap-2 text-charcoal-300">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>{t('phone')}</span>
              </li>
              <li className="flex items-start gap-2 text-charcoal-300">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>{t('address')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-charcoal-700 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center mb-8">
            <h4 className="font-semibold text-lg mb-2">{t('newsletter.title') || 'Stay Updated'}</h4>
            <p className="text-charcoal-400 text-sm mb-4">{t('newsletter.description') || 'Subscribe to our newsletter for exclusive offers'}</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('newsletter.placeholder') || 'Enter your email'}
                className="flex-1 px-4 py-2 rounded-lg bg-charcoal-800 border border-charcoal-600 text-white placeholder-charcoal-500 focus:outline-none focus:border-olive"
                required
                disabled={subscribeStatus === 'loading'}
              />
              <button
                type="submit"
                disabled={subscribeStatus === 'loading'}
                className="px-6 py-2 bg-olive text-white rounded-lg hover:bg-olive-600 transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                <Send size={18} />
                {subscribeStatus === 'loading' ? (t('newsletter.subscribing') || 'Subscribing...') : (t('newsletter.subscribe') || 'Subscribe')}
              </button>
            </form>
            {subscribeStatus === 'success' && (
              <p className="text-olive text-sm mt-2">{t('newsletter.success') || 'Successfully subscribed!'}</p>
            )}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-charcoal-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-charcoal-400 text-sm">&copy; {new Date().getFullYear()} Food Sources. {t('rights')}</p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-olive transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-olive transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-olive transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              <Link href={`/${locale}/careers`} className="text-charcoal-400 hover:text-olive transition-colors">
                {t('careers')}
              </Link>
              <Link href={`/${locale}/privacy`} className="text-charcoal-400 hover:text-olive transition-colors">
                {t('privacy')}
              </Link>
              <Link href={`/${locale}/terms`} className="text-charcoal-400 hover:text-olive transition-colors">
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
