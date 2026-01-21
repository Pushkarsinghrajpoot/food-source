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
    <footer style={{ backgroundColor: '#1A1A1A', color: '#F5F5F5' }}>
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>Food Sources</h3>
            <p style={{ color: '#CCCCCC' }}>
              {t('about')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="transition-colors" style={{ color: '#CCCCCC' }}>
                  {navT('home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="transition-colors" style={{ color: '#CCCCCC' }}>
                  {navT('products')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="transition-colors" style={{ color: '#CCCCCC' }}>
                  {navT('about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="transition-colors" style={{ color: '#CCCCCC' }}>
                  {navT('contact')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="transition-colors" style={{ color: '#CCCCCC' }}>
                  {navT('blog')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="transition-colors" style={{ color: '#CCCCCC' }}>
                  {navT('faq')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('productsTitle')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/products?category=olives`} className="transition-colors" style={{ color: '#CCCCCC' }}>
                  {t('olives')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products?category=cheeses`} className="transition-colors" style={{ color: '#CCCCCC' }}>
                  {t('cheeses')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products?category=pickles`} className="transition-colors" style={{ color: '#CCCCCC' }}>
                  {t('pickles')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products?category=labneh`} className="transition-colors" style={{ color: '#CCCCCC' }}>
                  {t('labneh')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2" style={{ color: '#CCCCCC' }}>
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>{t('email')}</span>
              </li>
              <li className="flex items-start gap-2" style={{ color: '#CCCCCC' }}>
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>{t('phone')}</span>
              </li>
              <li className="flex items-start gap-2" style={{ color: '#CCCCCC' }}>
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>{t('address')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid #333333' }}>
          <div className="max-w-md mx-auto text-center mb-8">
            <h4 className="font-semibold text-lg mb-2">{t('newsletter.title') || 'Stay Updated'}</h4>
            <p className="text-sm mb-4" style={{ color: '#999999' }}>{t('newsletter.description') || 'Subscribe to our newsletter for exclusive offers'}</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('newsletter.placeholder') || 'Enter your email'}
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none"
                style={{ 
                  backgroundColor: '#2A2A2A', 
                  border: '1px solid #444444',
                  color: '#F5F5F5'
                }}
                required
                disabled={subscribeStatus === 'loading'}
              />
              <button
                type="submit"
                disabled={subscribeStatus === 'loading'}
                className="px-6 py-2 rounded-lg transition-colors disabled:opacity-50 flex items-center gap-2"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: '#F5F5F5'
                }}
              >
                <Send size={18} />
                {subscribeStatus === 'loading' ? (t('newsletter.subscribing') || 'Subscribing...') : (t('newsletter.subscribe') || 'Subscribe')}
              </button>
            </form>
            {subscribeStatus === 'success' && (
              <p className="text-sm mt-2" style={{ color: 'var(--color-success)' }}>{t('newsletter.success') || 'Successfully subscribed!'}</p>
            )}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8" style={{ borderTop: '1px solid #333333' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: '#999999' }}>&copy; {new Date().getFullYear()} Food Sources. {t('rights')}</p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: '#999999' }}>
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: '#999999' }}>
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: '#999999' }}>
                <Linkedin size={20} />
              </a>
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              <Link href={`/${locale}/careers`} className="transition-colors" style={{ color: '#999999' }}>
                {t('careers')}
              </Link>
              <Link href={`/${locale}/privacy`} className="transition-colors" style={{ color: '#999999' }}>
                {t('privacy')}
              </Link>
              <Link href={`/${locale}/terms`} className="transition-colors" style={{ color: '#999999' }}>
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
