'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Button from '@/components/ui/Button'

interface Slide {
  id: number
  badgeKey: string
  discountKey?: string
  headlineKey: string
  subtextKey: string
  ctaKey: string
  ctaLink: string
  productKey: string
  productLink: string
  productImage: string
  backgroundLight: string
  backgroundDark: string
}

const slides = [
  {
    id: 1,
    badgeKey: 'slide1.badge',
    discountKey: 'slide1.discount',
    headlineKey: 'slide1.headline',
    subtextKey: 'slide1.subtext',
    ctaKey: 'requestQuote',
    ctaLink: '/quote',
    productKey: 'viewOlives',
    productLink: '/products?category=olives',
    productImage: '/All products/kalmata olives/kalmata_olives_3.png',
    backgroundLight: '#F5F7FA',
    backgroundDark: '#0F1419'
  },
  {
    id: 2,
    badgeKey: 'slide2.badge',
    discountKey: 'slide2.discount',
    headlineKey: 'slide2.headline',
    subtextKey: 'slide2.subtext',
    ctaKey: 'requestQuote',
    ctaLink: '/quote',
    productKey: 'viewCheese',
    productLink: '/products?category=cheeses',
    productImage: '/All products/premium feta cheese/premium_feta_cheese_3.png',
    backgroundLight: '#FAF8F5',
    backgroundDark: '#141210'
  },
  {
    id: 3,
    badgeKey: 'slide3.badge',
    discountKey: 'slide3.discount',
    headlineKey: 'slide3.headline',
    subtextKey: 'slide3.subtext',
    ctaKey: 'requestQuote',
    ctaLink: '/quote',
    productKey: 'viewPickles',
    productLink: '/products?category=pickles',
    productImage: '/All products/mixed mediterrean pickles/mixed_mediterrean_pickles_3.jpg',
    backgroundLight: '#F0F7F4',
    backgroundDark: '#0D1412'
  }
]

export default function HeroSlider() {
  const locale = useLocale()
  const t = useTranslations('hero')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000) // Auto-advance every 5 seconds

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

  const currentSlideData = slides[currentSlide]

  return (
    <div 
      className={`relative w-full h-full min-h-[600px] lg:min-h-[700px] overflow-hidden slide-${currentSlide + 1}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, var(--color-bg-primary) 0%, transparent 50%, var(--color-bg-secondary) 100%)'
        }}
      />

      {/* Slide Content */}
      <div className="relative h-full container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[600px] lg:min-h-[700px] py-12 lg:py-20">
          
          {/* Left Column - Text Content (40%) */}
          <div className="lg:col-span-5 space-y-6 lg:space-y-8 z-10">
            {/* Badge */}
            <div className="flex items-center gap-3 flex-wrap">
              <span 
                className="text-xs uppercase tracking-wider font-semibold"
                style={{ 
                  color: 'var(--color-text-muted)', 
                  letterSpacing: '1.5px',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                {t(currentSlideData.badgeKey)}
              </span>
              {currentSlideData.discountKey && (
                <span 
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ 
                    backgroundColor: 'var(--discount-bg)',
                    color: 'var(--discount-text)'
                  }}
                >
                  {t(currentSlideData.discountKey)}
                </span>
              )}
            </div>
            
            {/* Headline */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ 
                color: 'var(--color-text-primary)',
                fontFamily: 'Playfair Display, serif',
                lineHeight: '1.1'
              }}
            >
              {t(currentSlideData.headlineKey)}
            </h1>
            
            {/* Subtext */}
            <p 
              className="text-lg sm:text-xl leading-relaxed max-w-xl"
              style={{ 
                color: 'var(--color-text-secondary)',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              {t(currentSlideData.subtextKey)}
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/${locale}${currentSlideData.ctaLink}`}>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="group rounded-full inline-flex items-center gap-2"
                  style={{
                    backgroundColor: 'var(--cta-bg)',
                    color: 'var(--cta-text)',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  {t(currentSlideData.ctaKey)}
                  <ArrowRight 
                    className="group-hover:translate-x-1 transition-transform" 
                    size={20} 
                  />
                </Button>
              </Link>
              <Link href={`/${locale}${currentSlideData.productLink}`}>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="group rounded-full inline-flex items-center gap-2"
                  style={{
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  {t(currentSlideData.productKey)}
                  <ArrowRight 
                    className="group-hover:translate-x-1 transition-transform" 
                    size={20} 
                  />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Column - Product Image (60%) */}
          <div className="lg:col-span-7 relative h-[300px] lg:h-[500px] flex items-center justify-center">
            <div 
              className="relative w-full h-full max-w-md lg:max-w-lg transition-all duration-500"
              style={{
                transform: 'rotate(-5deg) translateY(-20px)',
                filter: 'var(--product-shadow)'
              }}
            >
              <Image
                src={currentSlideData.productImage}
                alt={t(currentSlideData.headlineKey)}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                priority
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-20" style={{ backgroundColor: 'var(--color-primary)' }} />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full opacity-15" style={{ backgroundColor: 'var(--color-accent)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-8 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="transition-all duration-300 hover:scale-110"
            style={{
              width: currentSlide === index ? '32px' : '12px',
              height: '12px',
              borderRadius: '999px',
              backgroundColor: currentSlide === index ? 'var(--dot-active)' : 'var(--dot-inactive)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              if (currentSlide !== index) {
                e.currentTarget.style.backgroundColor = 'var(--dot-hover)'
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = currentSlide === index ? 'var(--dot-active)' : 'var(--dot-inactive)'
            }}
          />
        ))}
      </div>

      {/* Pause Indicator */}
      {isPaused && (
        <div className="absolute top-8 right-8 z-20">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-surface)', opacity: 0.8 }}
          >
            <div className="flex gap-1">
              <div className="w-1 h-4 rounded-full" style={{ backgroundColor: 'var(--color-text-primary)' }} />
              <div className="w-1 h-4 rounded-full" style={{ backgroundColor: 'var(--color-text-primary)' }} />
            </div>
          </div>
        </div>
      )}

      {/* Theme-specific CSS variables */}
      <style jsx global>{`
        :root {
          /* Light theme defaults */
          --hero-bg: #F5F7FA;
          --discount-bg: #E8F5E8;
          --discount-text: #22C55E;
          --price-color: #DC2626;
          --cta-bg: #06B6D4;
          --cta-text: white;
          --dot-active: #1A1A1A;
          --dot-inactive: #CCCCCC;
          --dot-hover: #666666;
          --product-shadow: drop-shadow(0 20px 40px rgba(0,0,0,0.1));
        }
        
        [data-theme="dark"] {
          /* Dark theme overrides */
          --hero-bg: #0F1419;
          --discount-bg: #1B3D1C;
          --discount-text: #7DA47D;
          --price-color: #EF4444;
          --cta-bg: #22D3EE;
          --cta-text: #0F1419;
          --dot-active: #F5F5F5;
          --dot-inactive: #4B5563;
          --dot-hover: #9CA3AF;
          --product-shadow: drop-shadow(0 20px 60px rgba(0,0,0,0.4)) drop-shadow(0 0 30px rgba(125,164,125,0.2));
        }
        
        /* Slide-specific backgrounds */
        .slide-1 { --hero-bg: var(--slide-1-bg); }
        .slide-2 { --hero-bg: var(--slide-2-bg); }
        .slide-3 { --hero-bg: var(--slide-3-bg); }
        
        :root .slide-1 { --slide-1-bg: #F5F7FA; }
        :root .slide-2 { --slide-2-bg: #FAF8F5; }
        :root .slide-3 { --slide-3-bg: #F0F7F4; }
        
        [data-theme="dark"] .slide-1 { --slide-1-bg: #0F1419; }
        [data-theme="dark"] .slide-2 { --slide-2-bg: #141210; }
        [data-theme="dark"] .slide-3 { --slide-3-bg: #0D1412; }
      `}</style>
    </div>
  )
}
