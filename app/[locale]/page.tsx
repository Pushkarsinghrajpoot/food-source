'use client'

import Link from "next/link"
import Image from "next/image"
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight, CheckCircle2, Star, TrendingUp, Package, Truck, Shield, Users, Clock, Award } from "lucide-react"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"

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

  const products = [
    { name: t("products.product1.name"), origin: t("products.product1.origin"), category: t("products.product1.category"), image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80" },
    { name: t("products.product2.name"), origin: t("products.product2.origin"), category: t("products.product2.category"), image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80" },
    { name: t("products.product3.name"), origin: t("products.product3.origin"), category: t("products.product3.category"), image: "https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?w=400&q=80" },
    { name: t("products.product4.name"), origin: t("products.product4.origin"), category: t("products.product4.category"), image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&q=80" },
  ]

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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-charcoal">
                {t("hero.title")}{" "}
                <span className="text-olive">{t("hero.titleHighlight")}</span>
              </h1>
              <p className="text-xl text-charcoal-600 leading-relaxed">
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
              <div className="flex items-center gap-8 pt-4">
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
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?w=800&q=80"
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
          <div className="flex items-center justify-center gap-12 flex-wrap opacity-50">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-12 bg-charcoal-200 rounded" />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              {t("features.title")}
            </h2>
            <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              {t("products.title")}
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <button className="px-6 py-2 rounded-full bg-olive text-white font-medium">{t("products.filterAll")}</button>
              <button className="px-6 py-2 rounded-full hover:bg-white transition-colors font-medium text-charcoal-700">{t("products.filterOlives")}</button>
              <button className="px-6 py-2 rounded-full hover:bg-white transition-colors font-medium text-charcoal-700">{t("products.filterCheeses")}</button>
              <button className="px-6 py-2 rounded-full hover:bg-white transition-colors font-medium text-charcoal-700">{t("products.filterPickles")}</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card key={index} hover className="overflow-hidden">
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
                  <Link href={`/${locale}/products`} className="text-olive font-medium text-sm hover:underline inline-flex items-center">
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              {t("howItWorks.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-olive">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-charcoal mb-3">{t("howItWorks.step1.title")}</h3>
              <p className="text-charcoal-600">{t("howItWorks.step1.description")}</p>
            </div>
            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-olive">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-charcoal mb-3">{t("howItWorks.step2.title")}</h3>
              <p className="text-charcoal-600">{t("howItWorks.step2.description")}</p>
            </div>
            {/* Step 3 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-olive">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-charcoal mb-3">{t("howItWorks.step3.title")}</h3>
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
            <blockquote className="text-2xl md:text-3xl font-serif text-charcoal mb-8 leading-relaxed">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-xl opacity-90 mb-8">
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
