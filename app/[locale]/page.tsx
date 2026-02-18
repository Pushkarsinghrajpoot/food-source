'use client'

import Link from "next/link"
import Image from "next/image"
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight, CheckCircle2, Package, Truck, Shield, Users, Award, TrendingUp, FileCheck } from "lucide-react"
import HeroSlider from "@/components/HeroSlider"

export default function Home() {
  const t = useTranslations('home')
  const locale = useLocale()

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Trusted By - Logo Bar */}
      <section className="py-12" style={{ backgroundColor: 'var(--color-bg-primary)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-center text-sm font-semibold uppercase tracking-wider mb-8" style={{ color: 'var(--color-text-tertiary)' }}>{t('logoMarquee')}</p>
          <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all">
            <img src="https://res.cloudinary.com/daeyqeofn/image/upload/v1771440368/0_lfkiig.png" alt="Partner 1" className="h-10 md:h-12 object-contain" />
            <img src="https://res.cloudinary.com/daeyqeofn/image/upload/v1771440368/altaeib_d5y5mw.png" alt="Altaeib" className="h-10 md:h-12 object-contain" />
            <img src="https://res.cloudinary.com/daeyqeofn/image/upload/v1771440368/laziza_kso1hc.png" alt="Laziza" className="h-10 md:h-12 object-contain" />
            <img src="https://res.cloudinary.com/daeyqeofn/image/upload/v1771440368/joud_dn6yrr.png" alt="Joud" className="h-10 md:h-12 object-contain" />
            <img src="https://res.cloudinary.com/daeyqeofn/image/upload/v1771440368/wexford_mcf6zq.png" alt="Wexford" className="h-10 md:h-12 object-contain" />
            <img src="https://res.cloudinary.com/daeyqeofn/image/upload/v1771440368/muratbey_ci8k33.png" alt="Muratbey" className="h-10 md:h-12 object-contain" />
          </div>
        </div>
      </section>

      {/* Who We Serve - Industries */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>{t('features.title')}</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>{t('features.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1" style={{ backgroundColor: 'var(--color-surface)' }}>
              <div className="text-5xl mb-4">🏨</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{t('features.sourcing.title')}</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{t('features.sourcing.description')}</p>
            </div>
            
            <div className="rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1" style={{ backgroundColor: 'var(--color-surface)' }}>
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{t('features.certified.title')}</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{t('features.certified.description')}</p>
            </div>
            
            <div className="rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1" style={{ backgroundColor: 'var(--color-surface)' }}>
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{t('features.flexible.title')}</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{t('features.flexible.description')}</p>
            </div>
            
            <div className="rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1" style={{ backgroundColor: 'var(--color-surface)' }}>
              <div className="text-5xl mb-4">🏪</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{t('features.manager.title')}</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{t('features.manager.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories - Card Grid */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
              {t('products.title')}
            </h2>
            <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>{t('products.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href={`/${locale}/products?category=olives`}>
              <div className="group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl cursor-pointer" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="h-80 relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                  <Image
                    src="/All products/kalmata olives/kalmata_olives_3.png"
                    alt="Premium Mediterranean Olives"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{t('products.filterOlives')}</h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--color-text-tertiary)' }}>{t('products.product1.category')} • {t('products.filterAll')}</p>
                  <span className="inline-flex items-center gap-2 font-semibold text-orange-600">
                    {t('products.viewDetails')} <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>

            <Link href={`/${locale}/products?category=cheeses`}>
              <div className="group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl cursor-pointer" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="h-80 relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                  <Image
                    src="/All products/premium feta cheese/premium_feta_cheese_3.png"
                    alt="Premium Mediterranean Cheese"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{t('products.filterCheeses')}</h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--color-text-tertiary)' }}>{t('products.product2.category')} • {t('products.filterAll')}</p>
                  <span className="inline-flex items-center gap-2 font-semibold text-orange-600">
                    {t('products.viewDetails')} <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>

            <Link href={`/${locale}/products?category=pickles`}>
              <div className="group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl cursor-pointer" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="h-80 relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                  <Image
                    src="/All products/mixed mediterrean pickles/mixed_mediterrean_pickles_3.jpg"
                    alt="Premium Mediterranean Pickles"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{t('products.filterPickles')}</h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--color-text-tertiary)' }}>{t('products.product3.category')} • {t('products.filterAll')}</p>
                  <span className="inline-flex items-center gap-2 font-semibold text-orange-600">
                    {t('products.viewDetails')} <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t('cta.title')}</h2>
            <p className="text-xl text-gray-300">{t('cta.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{t('features.pricing.title')}</h3>
              <p className="text-gray-300 mb-4">{t('features.pricing.description')}</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• {t('features.pricing.bullet1')}</li>
                <li>• {t('features.pricing.bullet2')}</li>
                <li>• {t('features.pricing.bullet3')}</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{t('features.delivery.title')}</h3>
              <p className="text-gray-300 mb-4">{t('features.delivery.description')}</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• {t('features.delivery.bullet1')}</li>
                <li>• {t('features.delivery.bullet2')}</li>
                <li>• {t('features.delivery.bullet3')}</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl mb-4">👤</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{t('features.manager.title')}</h3>
              <p className="text-gray-300 mb-4">{t('features.manager.description')}</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• {t('features.manager.bullet1')}</li>
                <li>• {t('features.manager.bullet2')}</li>
                <li>• {t('features.manager.bullet3')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Split Layout */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
              <Image
                src="/hero.png"
                alt="Premium Mediterranean Food Products"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                {t('howItWorks.title')}
              </h2>
              <p className="text-xl mb-12" style={{ color: 'var(--color-text-secondary)' }}>{t('howItWorks.subtitle')}</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-100">
                    <CheckCircle2 size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>{t('features.sourcing.title')}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{t('features.sourcing.description')}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-100">
                    <Shield size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>{t('features.certified.title')}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{t('features.certified.description')}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-100">
                    <Truck size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>{t('features.delivery.title')}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{t('features.delivery.description')}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-100">
                    <TrendingUp size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>{t('features.flexible.title')}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{t('features.flexible.description')}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-100">
                    <Users size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>{t('features.manager.title')}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{t('features.manager.description')}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-100">
                    <Award size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>{t('features.pricing.title')}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{t('features.pricing.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Timeline */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
              {t('howItWorks.title')}
            </h2>
            <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>{t('howItWorks.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="text-center space-y-6">
              <div className="relative inline-block">
                <span className="text-8xl font-light opacity-10 absolute -top-4 left-1/2 -translate-x-1/2 text-gray-300" style={{ fontFamily: 'Space Grotesk, monospace' }}>01</span>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto relative z-10 bg-orange-100">
                  <FileCheck size={32} className="text-orange-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>{t('howItWorks.step1.title')}</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>{t('howItWorks.step1.description')}</p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="relative inline-block">
                <span className="text-8xl font-light opacity-10 absolute -top-4 left-1/2 -translate-x-1/2 text-gray-300" style={{ fontFamily: 'Space Grotesk, monospace' }}>02</span>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto relative z-10 bg-orange-100">
                  <CheckCircle2 size={32} className="text-orange-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>{t('howItWorks.step2.title')}</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>{t('howItWorks.step2.description')}</p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="relative inline-block">
                <span className="text-8xl font-light opacity-10 absolute -top-4 left-1/2 -translate-x-1/2 text-gray-300" style={{ fontFamily: 'Space Grotesk, monospace' }}>03</span>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto relative z-10 bg-orange-100">
                  <Package size={32} className="text-orange-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>{t('howItWorks.step3.title')}</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>{t('howItWorks.step3.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: 'var(--color-text-primary)' }}>{t('testimonial.title')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8 shadow-md" style={{ backgroundColor: 'var(--color-surface)' }}>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg italic mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                "{t('testimonial.quote')}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-xl">👨‍🍳</div>
                <div>
                  <p className="font-bold" style={{ color: 'var(--color-text-primary)' }}>{t('testimonial.name')}</p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{t('testimonial.position')}</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl p-8 shadow-md" style={{ backgroundColor: 'var(--color-surface)' }}>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg italic mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                "We switched to Food Sources last year and haven't looked back. The pricing is competitive and the Mediterranean products are authentic."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-xl">👩‍💼</div>
                <div>
                  <p className="font-bold" style={{ color: 'var(--color-text-primary)' }}>Sara Al-Ghamdi</p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Owner, La Petite Maison Jeddah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner - Full Width Bold */}
      <section className="py-32" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-bg-tertiary) 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--color-text-on-primary)' }}>
                {t('cta.title')}
              </h2>
              <p className="text-xl mb-8" style={{ color: 'var(--color-text-on-primary)', opacity: 0.9 }}>
                {t('cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/${locale}/onboarding`}>
                  <button className="px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-2xl hover:-translate-y-1 bg-orange-600 text-white">
                    {t('cta.button')}
                  </button>
                </Link>
                <Link href={`/${locale}/contact`}>
                  <button className="px-8 py-4 rounded-full font-semibold text-lg transition-all border-2 hover:bg-white/10" style={{ borderColor: 'rgba(255, 255, 255, 0.3)', color: 'var(--color-text-on-primary)' }}>
                    {t('cta.talkToSales')}
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="backdrop-blur-sm rounded-2xl p-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-on-primary)' }}>{t('cta.whatYouGet')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <span style={{ color: 'var(--color-text-on-primary)', opacity: 0.9 }}>{t('cta.benefits.manager')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <span style={{ color: 'var(--color-text-on-primary)', opacity: 0.9 }}>{t('cta.benefits.payment')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <span style={{ color: 'var(--color-text-on-primary)', opacity: 0.9 }}>{t('cta.benefits.delivery')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <span style={{ color: 'var(--color-text-on-primary)', opacity: 0.9 }}>{t('cta.benefits.pricing')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <span style={{ color: 'var(--color-text-on-primary)', opacity: 0.9 }}>{t('cta.benefits.certified')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
