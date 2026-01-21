'use client'

import Link from "next/link"
import Image from "next/image"
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight, CheckCircle2, Star, TrendingUp, Package, Truck, Shield, Users, Clock, Award } from "lucide-react"
import { useState } from "react"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import ProductMarquee from "@/components/ProductMarquee"
import { products as productData } from "@/data/products"

export default function Home() {
  const t = useTranslations('home')
  const locale = useLocale()
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const features = [
    { icon: Package, title: t("features.sourcing.title"), description: t("features.sourcing.description") },
    { icon: Shield, title: t("features.certified.title"), description: t("features.certified.description") },
    { icon: TrendingUp, title: t("features.flexible.title"), description: t("features.flexible.description") },
    { icon: Users, title: t("features.manager.title"), description: t("features.manager.description") },
    { icon: Truck, title: t("features.delivery.title"), description: t("features.delivery.description") },
    { icon: Award, title: t("features.pricing.title"), description: t("features.pricing.description") },
  ]

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? productData.slice(0, 4) 
    : productData.filter(product => product.category === selectedCategory).slice(0, 4)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%)' }}>
        <div className="container-custom h-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Left Column - Content (45%) */}
            <div className="lg:col-span-5 space-y-6 lg:space-y-8 z-10">
              {/* Eyebrow with badges */}
              <div className="flex items-center gap-3 flex-wrap">
                <span 
                  className="text-xs uppercase tracking-wider font-semibold"
                  style={{ color: 'var(--color-text-muted)', letterSpacing: '2px' }}
                >
                  PREMIUM QUALITY
                </span>
                <span 
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ 
                    backgroundColor: 'rgba(61, 90, 61, 0.15)',
                    color: 'var(--color-primary)'
                  }}
                >
                  WHOLESALE PRICES
                </span>
              </div>
              
              {/* Main Headline */}
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ 
                  color: 'var(--color-text-primary)',
                  fontFamily: 'Playfair Display, serif'
                }}
              >
                Premium Mediterranean Ingredients for Your Kitchen
              </h1>
              
              {/* Subheadline */}
              <p 
                className="text-lg sm:text-xl leading-relaxed max-w-xl"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Supplying Saudi Arabia's finest hotels & restaurants with artisanal olives, cheeses, and pickles
              </p>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-6 flex-wrap pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }} />
                  <span className="text-sm font-semibold" style={{ color: 'var(--color-text-secondary)' }}>8+ Years</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }} />
                  <span className="text-sm font-semibold" style={{ color: 'var(--color-text-secondary)' }}>500+ Partners</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }} />
                  <span className="text-sm font-semibold" style={{ color: 'var(--color-text-secondary)' }}>Next-Day Delivery</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href={`/${locale}/quote`}>
                  <Button variant="primary" size="lg" className="w-full sm:w-auto group rounded-full">
                    Request Quote
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
                <Link href={`/${locale}/products`}>
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto rounded-full">
                    View Products
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Column - Animated Product Showcase (55%) */}
            <div className="lg:col-span-7 relative h-[400px] lg:h-[600px]">
              <ProductMarquee />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2" style={{ borderColor: 'var(--color-border)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }} />
          </div>
        </div>
      </section>


      {/* Logo Marquee */}
      <section className="py-12" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="container-custom text-center">
          <p className="text-sm font-medium mb-6" style={{ color: 'var(--color-text-secondary)' }}>{t("logoMarquee")}</p>
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 flex-wrap opacity-60">
            <img src="/trusted-partners/almarai-logo.png" alt="Almarai" className="h-8 sm:h-10 md:h-12 object-contain" />
            <img src="/trusted-partners/almunajem.png" alt="Almunajem" className="h-8 sm:h-10 md:h-12 object-contain" />
            <img src="/trusted-partners/nadec.png" alt="Nadec" className="h-8 sm:h-10 md:h-12 object-contain" />
            <img src="/trusted-partners/sadafco.png" alt="Sadafco" className="h-8 sm:h-10 md:h-12 object-contain" />
            <img src="/trusted-partners/savola.png" alt="Savola" className="h-8 sm:h-10 md:h-12 object-contain" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
              {t("features.title")}
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              {t("features.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="p-8">
                <feature.icon className="mb-4" size={40} strokeWidth={1.5} style={{ color: 'var(--color-primary)' }} />
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>{feature.title}</h3>
                <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
              {t("products.title")}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-6 flex-wrap">
              <button 
                onClick={() => setSelectedCategory('all')}
                className="px-4 sm:px-5 md:px-6 py-2 rounded-full transition-all font-medium text-sm sm:text-base"
                style={{
                  backgroundColor: selectedCategory === 'all' ? 'var(--color-primary)' : 'transparent',
                  color: selectedCategory === 'all' ? 'var(--color-text-on-primary)' : 'var(--color-text-secondary)',
                  border: `1px solid ${selectedCategory === 'all' ? 'var(--color-primary)' : 'var(--color-border)'}`
                }}
              >
                {t("products.filterAll")}
              </button>
              <button 
                onClick={() => setSelectedCategory('olives')}
                className="px-4 sm:px-5 md:px-6 py-2 rounded-full transition-all font-medium text-sm sm:text-base"
                style={{
                  backgroundColor: selectedCategory === 'olives' ? 'var(--color-primary)' : 'transparent',
                  color: selectedCategory === 'olives' ? 'var(--color-text-on-primary)' : 'var(--color-text-secondary)',
                  border: `1px solid ${selectedCategory === 'olives' ? 'var(--color-primary)' : 'var(--color-border)'}`
                }}
              >
                {t("products.filterOlives")}
              </button>
              <button 
                onClick={() => setSelectedCategory('cheeses')}
                className="px-4 sm:px-5 md:px-6 py-2 rounded-full transition-all font-medium text-sm sm:text-base"
                style={{
                  backgroundColor: selectedCategory === 'cheeses' ? 'var(--color-primary)' : 'transparent',
                  color: selectedCategory === 'cheeses' ? 'var(--color-text-on-primary)' : 'var(--color-text-secondary)',
                  border: `1px solid ${selectedCategory === 'cheeses' ? 'var(--color-primary)' : 'var(--color-border)'}`
                }}
              >
                {t("products.filterCheeses")}
              </button>
              <button 
                onClick={() => setSelectedCategory('pickles')}
                className="px-4 sm:px-5 md:px-6 py-2 rounded-full transition-all font-medium text-sm sm:text-base"
                style={{
                  backgroundColor: selectedCategory === 'pickles' ? 'var(--color-primary)' : 'transparent',
                  color: selectedCategory === 'pickles' ? 'var(--color-text-on-primary)' : 'var(--color-text-secondary)',
                  border: `1px solid ${selectedCategory === 'pickles' ? 'var(--color-primary)' : 'var(--color-border)'}`
                }}
              >
                {t("products.filterPickles")}
              </button>
            </div>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} hover className="overflow-hidden">
                  <div className="aspect-square relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)' }}>
                      {product.category}
                    </span>
                    <h3 className="text-lg font-semibold mt-3 mb-2" style={{ color: 'var(--color-text-primary)' }}>{product.name}</h3>
                    <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>{product.origin} • {t("products.premiumQuality")}</p>
                    <Link href={`/${locale}/products/${product.id}`} className="font-medium text-sm hover:underline inline-flex items-center" style={{ color: 'var(--color-primary)' }}>
                      {t("products.viewDetails")} <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>No products found in this category.</p>
              <button 
                onClick={() => setSelectedCategory('all')}
                className="mt-4 font-medium hover:underline"
                style={{ color: 'var(--color-primary)' }}
              >
                View all products
              </button>
            </div>
          )}
          <div className="text-center mt-12">
            <Link href={`/${locale}/products`}>
              <Button variant="primary" size="lg">
                {t("products.browseCatalog")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
              {t("howItWorks.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <span className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>1</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>{t("howItWorks.step1.title")}</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>{t("howItWorks.step1.description")}</p>
            </div>
            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <span className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>2</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>{t("howItWorks.step2.title")}</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>{t("howItWorks.step2.description")}</p>
            </div>
            {/* Step 3 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <span className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>{t("howItWorks.step3.title")}</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>{t("howItWorks.step3.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container-custom">
          <Card className="max-w-4xl mx-auto p-12 text-center">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={24} style={{ color: '#B8965A', fill: '#B8965A' }} />
              ))}
            </div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif mb-8 leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
              "{t("testimonial.quote")}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <Users size={32} style={{ color: 'var(--color-primary)' }} />
              </div>
              <div className="text-left">
                <p className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>{t("testimonial.name")}</p>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{t("testimonial.position")}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding" style={{ background: 'linear-gradient(to right, var(--color-primary), var(--color-primary-hover))' }}>
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--color-text-on-primary)' }}>
            {t("cta.title")}
          </h2>
          <p className="text-lg sm:text-xl opacity-90 mb-8" style={{ color: 'var(--color-text-on-primary)' }}>
            {t("cta.subtitle")}
          </p>
          <Link href={`/${locale}/quote`}>
            <Button variant="secondary" size="lg">
              {t("cta.button")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
