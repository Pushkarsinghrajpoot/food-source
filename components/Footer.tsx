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
    <footer className="bg-slate-900">
      <div className="max-w-container mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Food Sources</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Premium Mediterranean ingredients for Saudi Arabia's finest kitchens since 2015.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-white">PRODUCTS</h4>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/products?category=olives`} className="text-sm transition-colors hover:text-white text-gray-400">
                  Olives
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products?category=cheeses`} className="text-sm transition-colors hover:text-white text-gray-400">
                  Cheeses
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products?category=pickles`} className="text-sm transition-colors hover:text-white text-gray-400">
                  Pickles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-white">COMPANY</h4>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/about`} className="text-sm transition-colors hover:text-white text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/careers`} className="text-sm transition-colors hover:text-white text-gray-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-sm transition-colors hover:text-white text-gray-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-white">PARTNERSHIP</h4>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/onboarding`} className="text-sm transition-colors hover:text-white text-gray-400">
                  Open Account
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-sm transition-colors hover:text-white text-gray-400">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="text-sm transition-colors hover:text-white text-gray-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-white">CONTACT</h4>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400">
                Riyadh HQ
              </li>
              <li>
                <a href="tel:+966XXXXXXX" className="text-sm transition-colors hover:text-white text-gray-400">
                  +966 XX XXX XXXX
                </a>
              </li>
              <li>
                <a href="mailto:contact@foodsources.com.sa" className="text-sm transition-colors hover:text-white text-gray-400">
                  contact@foodsources.com.sa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Food Sources  |  <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors text-gray-400">Privacy</Link>  |  <Link href={`/${locale}/terms`} className="hover:text-white transition-colors text-gray-400">Terms</Link>
            </p>
            
            <div className="flex items-center gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white opacity-60 hover:opacity-100 transition-opacity">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white opacity-60 hover:opacity-100 transition-opacity">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white opacity-60 hover:opacity-100 transition-opacity">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
