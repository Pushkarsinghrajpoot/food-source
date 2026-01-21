'use client'

import Link from "next/link"
import Image from "next/image"
import { useTranslations, useLocale } from 'next-intl'
import { Heart, Target, Award, Users, TrendingUp, Globe, CheckCircle } from "lucide-react"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"

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
      name: "Omar Al-Saud", 
      title: "Founder & CEO", 
      bio: "20+ years in food distribution with a passion for Mediterranean cuisine",
      image: "https://res.cloudinary.com/dnijbboek/image/upload/v1768900292/omar_al-saud_bakve4.jpg"
    },
    { 
      name: "Sarah Hassan", 
      title: "Head of Operations", 
      bio: "Expert in supply chain management and quality assurance",
      image: "https://res.cloudinary.com/dnijbboek/image/upload/v1768900464/sarah_hassan_gkfbjm.jpg"
    },
    { 
      name: "Michel Dubois", 
      title: "Chief Product Officer", 
      bio: "Sourcing specialist with deep connections in Mediterranean regions",
      image: "https://res.cloudinary.com/dnijbboek/image/upload/v1768900473/Michel_dubois_ukpmid.jpg"
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden" style={{ background: 'linear-gradient(to bottom right, var(--color-primary-light), var(--color-bg-secondary))' }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&q=80"
            alt={t('hero.imageAlt')}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: 'var(--color-text-primary)' }}>
              {t('hero.title')}
            </h1>
            <p className="text-2xl leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <blockquote className="text-3xl md:text-4xl font-serif leading-relaxed" style={{ color: 'var(--color-primary)' }}>
                "{t('intro.quote')}"
              </blockquote>
            </div>
            <div className="space-y-4 leading-relaxed text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              <p>
                {t('intro.paragraph1')}
              </p>
              <p>
                {t('intro.paragraph2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>{t('timeline.title')}</h2>
            <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>{t('timeline.subtitle')}</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            {timeline.map((milestone, index) => (
              <div key={index} className={`flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="inline-block px-4 py-2 rounded-full font-bold mb-3" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-on-primary)' }}>
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{milestone.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>{milestone.description}</p>
                </div>
                <div className="w-4 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }} />
                  {index !== timeline.length - 1 && (
                    <div className="absolute top-4 bottom-0 left-1/2 -translate-x-1/2 w-0.5" style={{ backgroundColor: 'var(--color-primary)', opacity: 0.3 }} />
                  )}
                </div>
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-12" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-on-primary)' }}>
              <Target size={48} className="mb-6" />
              <h2 className="text-3xl font-bold mb-4">{t('vision.title')}</h2>
              <p className="text-lg leading-relaxed opacity-95">
                {t('vision.description')}
              </p>
            </Card>
            <Card className="p-12" style={{ border: '2px solid var(--color-border)' }}>
              <Heart size={48} className="mb-6" style={{ color: 'var(--color-primary)' }} />
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>{t('mission.title')}</h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {t('mission.description')}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>{t('values.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                  <value.icon size={32} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>{value.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>{t('team.title')}</h2>
            <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>{t('team.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square relative" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>{member.name}</h3>
                  <p className="text-sm font-medium mb-3" style={{ color: 'var(--color-primary)' }}>{member.title}</p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>{t('certifications.title')}</h2>
            <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>{t('certifications.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[t('certifications.sfda'), t('certifications.halal'), t('certifications.iso'), t('certifications.quality')].map((cert, index) => (
              <Card key={index} className="p-6 text-center">
                <Award className="mx-auto mb-3" size={40} style={{ color: 'var(--color-primary)' }} />
                <p className="font-semibold text-sm" style={{ color: 'var(--color-text-primary)' }}>{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text-on-primary)' }}>
            {t('cta.title')}
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-text-on-primary)' }}>
            {t('cta.subtitle')}
          </p>
          <Link href={`/${locale}/contact`}>
            <Button 
              variant="secondary" 
              size="lg" 
              className="group transition-all duration-300"
              style={{ 
                backgroundColor: 'var(--color-surface)', 
                color: 'var(--color-primary)',
                border: '2px solid var(--color-primary)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                e.currentTarget.style.color = 'var(--color-text-on-primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                e.currentTarget.style.color = 'var(--color-primary)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {t('cta.button')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
