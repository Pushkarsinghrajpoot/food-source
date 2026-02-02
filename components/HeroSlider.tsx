'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLocale } from 'next-intl'

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

const slides: Slide[] = [
  {
    id: 1,
    badge: 'Premium Mediterranean Products',
    headline: 'Wholesale Mediterranean Ingredients for Saudi Arabia\'s Finest Kitchens',
    subtext: 'Partner with 500+ restaurants, hotels, and catering companies. Premium olives, cheeses, and pickles delivered fresh.',
    ctaText: 'Open Business Account',
    ctaLink: '/onboarding',
    productText: 'View All Products',
    productLink: '/products',
    productImage: '/hero.png',
    bgGradient: 'from-emerald-900 to-slate-900'
  },
  {
    id: 2,
    badge: 'B2B Food Distribution',
    headline: 'Direct Sourcing from Mediterranean Family Producers',
    subtext: 'Authentic ingredients sourced from Greece, Spain, Morocco & Turkey. SFDA certified with next-day delivery across KSA.',
    ctaText: 'Start Partnering',
    ctaLink: '/onboarding',
    productText: 'Our Story',
    productLink: '/about',
    productImage: '/All products/premium feta cheese/premium_feta_cheese_3.png',
    bgGradient: 'from-amber-900 to-slate-900'
  },
  {
    id: 3,
    badge: 'Trusted Since 2015',
    headline: 'Your Strategic Partner for Quality Food Ingredients',
    subtext: 'Competitive wholesale pricing, flexible payment terms, and dedicated account managers for your business success.',
    ctaText: 'Get Started',
    ctaLink: '/onboarding',
    productText: 'Contact Sales',
    productLink: '/contact',
    productImage: '/All products/kalmata olives/kalmata_olives_3.png',
    bgGradient: 'from-lime-900 to-slate-900'
  }
]

export default function HeroSlider() {
  const locale = useLocale()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

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
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex items-center">
        <div className="max-w-4xl py-32">
          
          {/* Badge - Animated */}
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in">
            <span className="text-sm uppercase tracking-wider font-semibold text-amber-400">
              {slide.badge}
            </span>
          </div>
          
          {/* Headline - Animated */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight text-white mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {slide.headline}
          </h1>
          
          {/* Subtext - Animated */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-12 max-w-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
              <button className="group px-8 py-4 rounded-full font-semibold text-lg transition-all border-2 border-white/40 hover:bg-white/20 hover:border-white text-white flex items-center gap-2 justify-center backdrop-blur-sm">
                {slide.productText}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </Link>
          </div>
          
          {/* Stats - Animated */}
          <div className="flex items-center gap-8 pt-6 border-t border-white/20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, monospace' }}>500+</div>
              <div className="text-xs text-gray-300 uppercase tracking-wide">Partners</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, monospace' }}>8+</div>
              <div className="text-xs text-gray-300 uppercase tracking-wide">Years</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, monospace' }}>24hrs</div>
              <div className="text-xs text-gray-300 uppercase tracking-wide">Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
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
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <div className="flex gap-1">
              <div className="w-1 h-4 rounded-full bg-white" />
              <div className="w-1 h-4 rounded-full bg-white" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
