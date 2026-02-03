'use client'

import Link from "next/link"
import Image from "next/image"
import { useTranslations, useLocale } from 'next-intl'
import { Heart, Target, Award, Users, TrendingUp, Globe, CheckCircle } from "lucide-react"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import teamTranslations from "@/data/teamTranslations.json"

export default function AboutPage() {
  const t = useTranslations('about')
  const locale = useLocale()
  const values = [
    { icon: Award, title: t('values.quality.title'), description: t('values.quality.description') },
    { icon: Heart, title: t('values.integrity.title'), description: t('values.integrity.description') },
    { icon: Users, title: t('values.partnership.title'), description: t('values.partnership.description') },
    { icon: TrendingUp, title: t('values.innovation.title'), description: t('values.innovation.description') },
    { icon: Globe, title: t('values.sustainability.title'), description: t('values.sustainability.description') },
    { icon: CheckCircle, title: t('values.excellence.title'), description: t('values.excellence.description') },
  ]

  const timeline = [
    { year: "2015", title: t('timeline.2015.title'), description: t('timeline.2015.description') },
    { year: "2017", title: t('timeline.2017.title'), description: t('timeline.2017.description') },
    { year: "2019", title: t('timeline.2019.title'), description: t('timeline.2019.description') },
    { year: "2021", title: t('timeline.2021.title'), description: t('timeline.2021.description') },
    { year: "2023", title: t('timeline.2023.title'), description: t('timeline.2023.description') },
    { year: "2024", title: t('timeline.2024.title'), description: t('timeline.2024.description') },
  ]

  const team = [
    { 
      name: locale === 'ar' ? teamTranslations.team[0].name : "Omar Al-Saud", 
      title: locale === 'ar' ? teamTranslations.team[0].title : "Founder & CEO", 
      bio: locale === 'ar' ? teamTranslations.team[0].bio : "20+ years in food distribution with a passion for Mediterranean cuisine",
      image: "https://res.cloudinary.com/dnijbboek/image/upload/v1768900292/omar_al-saud_bakve4.jpg"
    },
    { 
      name: locale === 'ar' ? teamTranslations.team[1].name : "Sarah Hassan", 
      title: locale === 'ar' ? teamTranslations.team[1].title : "Head of Operations", 
      bio: locale === 'ar' ? teamTranslations.team[1].bio : "Expert in supply chain management and quality assurance",
      image: "https://res.cloudinary.com/dnijbboek/image/upload/v1768900464/sarah_hassan_gkfbjm.jpg"
    },
    { 
      name: locale === 'ar' ? teamTranslations.team[2].name : "Michel Dubois", 
      title: locale === 'ar' ? teamTranslations.team[2].title : "Chief Product Officer", 
      bio: locale === 'ar' ? teamTranslations.team[2].bio : "Sourcing specialist with deep connections in Mediterranean regions",
      image: "https://res.cloudinary.com/dnijbboek/image/upload/v1768900473/Michel_dubois_ukpmid.jpg"
    },
  ]

  return (
    <div className="pt-18">
      {/* Hero Section - Cinematic with Gradient */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&q=80"
            alt={t('hero.imageAlt')}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-bg-tertiary) 100%)', opacity: 0.95 }} />
        <div className="max-w-container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="inline-block px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold mb-8" style={{ backgroundColor: 'var(--color-gold-light)', color: 'var(--color-gold)', border: '1px solid var(--color-gold)' }}>
            {t('hero.badge')}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight" style={{ color: 'var(--color-text-on-primary)' }}>
            {t('hero.title')}
          </h1>
          <p className="text-2xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-on-primary)', opacity: 0.9 }}>
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Introduction - Large Text Block */}
      <section className="py-32" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <blockquote className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-16" style={{ color: 'var(--color-text-primary)' }}>
            "{t('intro.quote')}"
          </blockquote>
          
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            <p>
              {t('intro.paragraph1')}
            </p>
            <p>
              {t('intro.paragraph2')}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline - Visual Journey */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20" style={{ color: 'var(--color-text-primary)' }}>
            {t('timeline.title')}
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-16">
            {timeline.map((milestone, index) => (
              <div key={index} className={`flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="text-5xl font-bold mb-4 text-orange-600" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>{milestone.title}</h3>
                  <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>{milestone.description}</p>
                </div>
                <div className="w-1 relative bg-emerald-200">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-orange-600" />
                </div>
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission - Side-by-Side Cards */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl p-12 shadow-md" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
              <Target size={48} className="mb-6 text-emerald-600" />
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>{t('vision.title')}</h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {t('vision.description')}
              </p>
            </div>
            <div className="rounded-3xl p-12 shadow-md" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
              <Heart size={48} className="mb-6 text-emerald-600" />
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>{t('mission.title')}</h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {t('mission.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Icon Grid */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20" style={{ color: 'var(--color-text-primary)' }}>
            {t('values.title')}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-transform hover:scale-110 bg-emerald-100">
                  <value.icon size={32} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>{value.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6" style={{ color: 'var(--color-text-primary)' }}>
            {t('team.title')}
          </h2>
          <p className="text-xl text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            {t('team.subtitle')}
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="object-cover grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>{member.name}</h3>
                <p className="text-sm font-semibold mb-3 text-orange-600">{member.title}</p>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Story - Full-Width Feature */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-bg-tertiary) 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/daeyqeofn/image/upload/v1770034901/cheese_2_y3nhsz.jpg"
                alt={t('sourcing.imageAlt')}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {t('sourcing.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-gray-300">
                {t('sourcing.description')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-gray-300">{t('sourcing.greece')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-gray-300">{t('sourcing.morocco')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-gray-300">{t('sourcing.spain')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-gray-300">{t('sourcing.turkey')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            {t('cta.subtitle')}
          </p>
          <Link href={`/${locale}/onboarding`}>
            <button className="px-12 py-5 rounded-full font-bold text-lg transition-all hover:shadow-2xl hover:-translate-y-1 bg-orange-600 text-white">
              {t('cta.button')}
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
