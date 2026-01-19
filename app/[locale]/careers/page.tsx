'use client'

import { useTranslations } from 'next-intl'
import { Briefcase, Users, TrendingUp, Heart } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CareersPage() {
  const t = useTranslations('careers')

  const openings = [
    { title: 'Sales Representative', department: 'Sales', location: 'Riyadh, KSA', type: 'Full-time' },
    { title: 'Supply Chain Manager', department: 'Operations', location: 'Jeddah, KSA', type: 'Full-time' },
    { title: 'Quality Control Specialist', department: 'Quality', location: 'Riyadh, KSA', type: 'Full-time' },
    { title: 'Customer Service Agent', department: 'Support', location: 'Remote', type: 'Full-time' },
  ]

  const benefits = [
    { icon: Briefcase, title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
    { icon: Users, title: 'Great Team', description: 'Work with passionate food industry professionals' },
    { icon: TrendingUp, title: 'Growth Opportunities', description: 'Clear career progression paths' },
    { icon: Heart, title: 'Health Benefits', description: 'Comprehensive health insurance' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream to-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            {t('hero.title') || 'Join Our Team'}
          </h1>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            {t('hero.subtitle') || 'Build your career with Saudi Arabia\'s leading food distribution company'}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-olive/10 rounded-full mb-4">
                  <benefit.icon className="text-olive" size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-charcoal-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {openings.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">{job.title}</h3>
                    <div className="flex gap-4 text-sm text-charcoal-600">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Button variant="primary" size="sm">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-olive text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See a Perfect Fit?</h2>
          <p className="text-lg mb-8 opacity-90">Send us your resume and we'll keep you in mind for future opportunities</p>
          <Button variant="secondary" size="lg">
            Send Your Resume
          </Button>
        </div>
      </section>
    </div>
  )
}
