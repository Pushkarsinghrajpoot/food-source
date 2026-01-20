'use client'

import Link from "next/link"
import Image from "next/image"
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight, CheckCircle2, Star, TrendingUp, Package, Truck, Shield, Users, Clock, Award } from "lucide-react"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import { products as productData } from "@/data/products"

export default function Home() {
  const t = useTranslations('home')
  const locale = useLocale()
  const features = [
    { icon: Package, title: t("features.sourcing.title"), description: t("features.sourcing.description") },
    { icon: Shield, title: t("features.certified.title"), description: t("features.certified.description") },
    { icon: TrendingUp, title: t("features.flexible.title"), description: t("features.flexible.description") },
    { icon: Users, title: t("features.manager.title"), description: t("features.manager.description") },
    { icon: Truck, title: t("features.delivery.title"), description: t("features.delivery.description") },
    { icon: Award, title: t("features.pricing.title"), description: t("features.pricing.description") },
  ]

  // Get first 4 products to display on home page
  const featuredProducts = productData.slice(0, 4)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-cream to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-sm font-medium text-olive bg-olive/10 px-4 py-2 rounded-full">
                  {t("hero.badge")}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-charcoal">
                {t("hero.title")}{" "}
                <span className="text-olive">{t("hero.titleHighlight")}</span>
              </h1>
              <p className="text-lg sm:text-xl text-charcoal-600 leading-relaxed">
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/${locale}/quote`}>
                  <Button variant="primary" size="lg" className="group">
                    {t("hero.requestQuote")}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
                <Link href={`/${locale}/products`}>
                  <Button variant="secondary" size="lg">
                    {t("hero.viewProducts")}
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 pt-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-olive" size={20} />
                  <span className="text-sm font-medium text-charcoal-700">{t("hero.years")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-olive" size={20} />
                  <span className="text-sm font-medium text-charcoal-700">{t("hero.sfda")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-olive" size={20} />
                  <span className="text-sm font-medium text-charcoal-700">{t("hero.nextDay")}</span>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl">
              <Image
                src="/hero.png"
                alt={t("hero.imageAlt")}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-olive/20 to-terracotta/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <section className="py-12 bg-charcoal-50">
        <div className="container-custom text-center">
          <p className="text-sm text-charcoal-600 font-medium mb-6">{t("logoMarquee")}</p>
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              {t("features.title")}
            </h2>
            <p className="text-lg sm:text-xl text-charcoal-600 max-w-2xl mx-auto">
              {t("features.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="p-8">
                <feature.icon className="text-olive mb-4" size={40} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-charcoal mb-3">{feature.title}</h3>
                <p className="text-charcoal-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              {t("products.title")}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-6 flex-wrap">
              <button className="px-4 sm:px-5 md:px-6 py-2 rounded-full bg-olive text-white font-medium text-sm sm:text-base">{t("products.filterAll")}</button>
              <button className="px-4 sm:px-5 md:px-6 py-2 rounded-full hover:bg-white transition-colors font-medium text-charcoal-700 text-sm sm:text-base">{t("products.filterOlives")}</button>
              <button className="px-4 sm:px-5 md:px-6 py-2 rounded-full hover:bg-white transition-colors font-medium text-charcoal-700 text-sm sm:text-base">{t("products.filterCheeses")}</button>
              <button className="px-4 sm:px-5 md:px-6 py-2 rounded-full hover:bg-white transition-colors font-medium text-charcoal-700 text-sm sm:text-base">{t("products.filterPickles")}</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} hover className="overflow-hidden">
                <div className="aspect-square bg-cream-300 relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-olive bg-olive/10 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-semibold text-charcoal mt-3 mb-2">{product.name}</h3>
                  <p className="text-sm text-charcoal-600 mb-4">{product.origin} • {t("products.premiumQuality")}</p>
                  <Link href={`/${locale}/products/${product.id}`} className="text-olive font-medium text-sm hover:underline inline-flex items-center">
                    {t("products.viewDetails")} <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              {t("howItWorks.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-olive">1</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-charcoal mb-3">{t("howItWorks.step1.title")}</h3>
              <p className="text-charcoal-600">{t("howItWorks.step1.description")}</p>
            </div>
            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-olive">2</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-charcoal mb-3">{t("howItWorks.step2.title")}</h3>
              <p className="text-charcoal-600">{t("howItWorks.step2.description")}</p>
            </div>
            {/* Step 3 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-olive">3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-charcoal mb-3">{t("howItWorks.step3.title")}</h3>
              <p className="text-charcoal-600">{t("howItWorks.step3.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <Card className="max-w-4xl mx-auto p-12 text-center">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="text-gold fill-gold" size={24} />
              ))}
            </div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif text-charcoal mb-8 leading-relaxed">
              "{t("testimonial.quote")}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-olive/20 flex items-center justify-center">
                <Users size={32} className="text-olive" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-charcoal">{t("testimonial.name")}</p>
                <p className="text-sm text-charcoal-600">{t("testimonial.position")}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding bg-gradient-to-r from-olive to-olive-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-lg sm:text-xl opacity-90 mb-8">
            {t("cta.subtitle")}
          </p>
          <Link href={`/${locale}/quote`}>
            <Button className="bg-white text-olive hover:bg-cream-100" size="lg">
              {t("cta.button")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
