'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

interface Slide {
  id: number
  badge: string
  headline: string
  subtext: string
  ctaText: string
  ctaLink: string
  productText: string
  productLink: string
  productImage: string
  bgGradient: string
}

export default function HeroSlider() {
  const locale = useLocale()
  const t = useTranslations('hero')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const slides = [
    {
      id: 1,
      badge: t('slide1.badge'),
      headline: t('slide1.headline'),
      subtext: t('slide1.subtext'),
      ctaText: t('slide1.openAccount'),
      ctaLink: '/onboarding',
      productText: t('slide1.viewOlives'),
      productLink: '/products?category=olives',
      productImage: '/All products/kalmata olives/kalmata_olives_3.png',
      bgGradient: 'from-emerald-900 to-slate-900'
    },
    {
      id: 2,
      badge: t('slide2.badge'),
      headline: t('slide2.headline'),
      subtext: t('slide2.subtext'),
      ctaText: t('slide2.openAccount'),
      ctaLink: '/onboarding',
      productText: t('slide2.viewCheese'),
      productLink: '/products?category=cheeses',
      productImage: '/All products/premium feta cheese/premium_feta_cheese_3.png',
      bgGradient: 'from-amber-900 to-slate-900'
    },
    {
      id: 3,
      badge: t('slide3.badge'),
      headline: t('slide3.headline'),
      subtext: t('slide3.subtext'),
      ctaText: t('slide3.openAccount'),
      ctaLink: '/onboarding',
      productText: t('slide3.viewPickles'),
      productLink: '/products?category=pickles',
      productImage: '/All products/mixed mediterrean pickles/mixed_mediterrean_pickles_3.jpg',
      bgGradient: 'from-lime-900 to-slate-900'
    }
  ]

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [isPaused])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }

  const slide = slides[currentSlide]

  return (
    <div 
      className="relative w-full min-h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0">
        <Image
          src={slide.productImage}
          alt={slide.headline}
          fill
          className="object-cover transition-transform duration-[20000ms] ease-out scale-105 hover:scale-110"
          sizes="100vw"
          priority
        />
        {/* Theme-aware Overlay */}
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(to right, var(--color-primary), var(--color-bg-tertiary))',
          opacity: 0.88
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex items-center">
        <div className="max-w-4xl py-32">
          
          {/* Badge - Animated */}
          <div className="inline-block px-5 py-2 rounded-full backdrop-blur-md mb-8 animate-fade-in" style={{ backgroundColor: 'var(--color-gold-light)', border: '1px solid var(--color-gold)' }}>
            <span className="text-sm uppercase tracking-wider font-semibold" style={{ color: 'var(--color-gold)' }}>
              {slide.badge}
            </span>
          </div>
          
          {/* Headline - Animated */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-8 animate-fade-in" style={{ color: 'var(--color-text-on-primary)', animationDelay: '0.2s' }}>
            {slide.headline}
          </h1>
          
          {/* Subtext - Animated */}
          <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl animate-fade-in" style={{ color: 'var(--color-text-on-primary)', opacity: 0.9, animationDelay: '0.4s' }}>
            {slide.subtext}
          </p>
          
          {/* Buttons - Animated */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link href={`/${locale}${slide.ctaLink}`}>
              <button className="group px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-2xl hover:-translate-y-1 hover:scale-105 bg-orange-600 text-white flex items-center gap-2 justify-center">
                {slide.ctaText}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </Link>
            <Link href={`/${locale}${slide.productLink}`}>
              <button className="group px-8 py-4 rounded-full font-semibold text-lg transition-all border-2 flex items-center gap-2 justify-center backdrop-blur-sm" style={{ borderColor: 'rgba(255, 255, 255, 0.4)', color: 'var(--color-text-on-primary)' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'; }}>
                {slide.productText}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </Link>
          </div>
          
          {/* Stats - Animated */}
          <div className="flex items-center gap-8 pt-6 animate-fade-in" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', animationDelay: '0.8s' }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Space Grotesk, monospace', color: 'var(--color-text-on-primary)' }}>500+</div>
              <div className="text-xs uppercase tracking-wide" style={{ color: 'var(--color-text-on-primary)', opacity: 0.8 }}>{t('stats.partners')}</div>
            </div>
            <div className="w-px h-12" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}></div>
            <div>
              <div className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Space Grotesk, monospace', color: 'var(--color-text-on-primary)' }}>8+</div>
              <div className="text-xs uppercase tracking-wide" style={{ color: 'var(--color-text-on-primary)', opacity: 0.8 }}>{t('stats.years')}</div>
            </div>
            <div className="w-px h-12" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}></div>
            <div>
              <div className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Space Grotesk, monospace', color: 'var(--color-text-on-primary)' }}>24hrs</div>
              <div className="text-xs uppercase tracking-wide" style={{ color: 'var(--color-text-on-primary)', opacity: 0.8 }}>{t('stats.delivery')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full backdrop-blur-sm flex items-center justify-center transition-all"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'var(--color-text-on-primary)' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full backdrop-blur-sm flex items-center justify-center transition-all"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'var(--color-text-on-primary)' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
      >
        <ChevronRight size={24} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="transition-all duration-300 hover:scale-110"
            style={{
              width: currentSlide === index ? '40px' : '12px',
              height: '12px',
              borderRadius: '999px',
              backgroundColor: currentSlide === index ? '#FFFFFF' : 'rgba(255, 255, 255, 0.3)',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>

      {/* Pause Indicator */}
      {isPaused && (
        <div className="absolute top-8 right-8 z-20">
          <div className="w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <div className="flex gap-1">
              <div className="w-1 h-4 rounded-full" style={{ backgroundColor: 'var(--color-text-on-primary)' }} />
              <div className="w-1 h-4 rounded-full" style={{ backgroundColor: 'var(--color-text-on-primary)' }} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
