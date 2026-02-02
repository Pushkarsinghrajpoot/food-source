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
    <div className="pt-18">
      {/* Hero Section - Cinematic with Gradient */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B3A2F 0%, #0F1419 100%)' }}>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&q=80"
            alt="Mediterranean landscape"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="inline-block px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold mb-8" style={{ backgroundColor: 'rgba(201, 169, 97, 0.2)', color: '#C9A961', border: '1px solid rgba(201, 169, 97, 0.3)' }}>
            About Food Sources
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight text-white">
            Our Story
          </h1>
          <p className="text-2xl max-w-3xl mx-auto text-gray-300">
            Bringing Mediterranean excellence to Saudi Arabia since 2015
          </p>
        </div>
      </section>

      {/* Introduction - Large Text Block */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <blockquote className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-16 text-gray-900">
            "We believe exceptional ingredients are the foundation of memorable dining experiences."
          </blockquote>
          
          <div className="space-y-6 text-lg leading-relaxed text-gray-600">
            <p>
              Founded in 2015, Food Sources Trading Co. was born from a simple observation: Saudi Arabia's finest restaurants deserved access to the same premium Mediterranean ingredients found in Europe's best kitchens.
            </p>
            <p>
              Today, we're proud to partner with over 500 businesses across the Kingdom, delivering authentic olives, artisan cheeses, and traditional pickles sourced directly from family producers in Greece, Spain, Morocco, and Turkey.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline - Visual Journey */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900">
            Our Journey
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-16">
            {timeline.map((milestone, index) => (
              <div key={index} className={`flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="text-5xl font-bold mb-4 text-orange-600" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{milestone.title}</h3>
                  <p className="text-lg text-gray-600">{milestone.description}</p>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-3xl p-12 shadow-md">
              <Target size={48} className="mb-6 text-emerald-600" />
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                To be the most trusted partner for premium food distribution in the region.
              </p>
            </div>
            <div className="bg-gray-50 rounded-3xl p-12 shadow-md">
              <Heart size={48} className="mb-6 text-emerald-600" />
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                To provide Saudi businesses with premium ingredients and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Icon Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900">
            What Drives Us
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-transform hover:scale-110 bg-emerald-100">
                  <value.icon size={32} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            The People Behind Food Sources
          </h2>
          <p className="text-xl text-center mb-16 max-w-2xl mx-auto text-gray-600">
            Our experienced team is dedicated to bringing you the finest Mediterranean products
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 bg-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="object-cover grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                <p className="text-sm font-semibold mb-3 text-orange-600">{member.title}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Story - Full-Width Feature */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #1B3A2F 0%, #0F1419 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm">
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                From Farm to Kitchen
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-gray-300">
                We personally visit every supplier to ensure quality standards are met. Our partnerships with Mediterranean producers span generations, ensuring authentic flavors and sustainable practices.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-gray-300">Greece</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-gray-300">Morocco</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-gray-300">Spain</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-gray-300">Turkey</span>
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
            Let's Write the Next Chapter Together
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Partner with a team that's as passionate about quality as you are.
          </p>
          <Link href={`/${locale}/onboarding`}>
            <button className="px-12 py-5 rounded-full font-bold text-lg transition-all hover:shadow-2xl hover:-translate-y-1 bg-orange-600 text-white">
              Become a Partner
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
