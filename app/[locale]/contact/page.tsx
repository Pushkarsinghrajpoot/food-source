'use client'

import { useState } from "react"
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from "lucide-react"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Card from "@/components/ui/Card"

export default function ContactPage() {
  const t = useTranslations('contact')
  const locale = useLocale()
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: '',
    city: '',
    inquiryType: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('loading')
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
    }, 1500)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16" style={{ background: 'linear-gradient(to bottom right, var(--color-bg-secondary), var(--color-bg-tertiary))' }}>
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Let's Start Your Partnership
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Open an account or get in touch with our team
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card hover className="p-8 text-center" style={{ border: '2px solid var(--color-primary)', backgroundColor: 'var(--color-primary-light)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-primary)' }}>
                <Mail size={32} style={{ color: 'white' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>Open Account</h3>
              <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>Start your partnership application</p>
              <Link href={`/${locale}/onboarding`} className="inline-block">
                <button className="px-6 py-2 rounded-lg transition-colors font-medium"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                >
                  Start →
                </button>
              </Link>
            </Card>

            <Card hover className="p-8 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-accent-light)' }}>
                <Phone size={32} style={{ color: 'var(--color-accent)' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{t('callUs.title')}</h3>
              <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>{t('callUs.hours')}</p>
              <a href="tel:+966XXXXXXXX" className="font-semibold text-lg hover:underline" style={{ color: 'var(--color-primary)' }}>
                +966 XX XXX XXXX
              </a>
            </Card>

            <Card hover className="p-8 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                <MessageCircle size={32} style={{ color: '#16a34a' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{t('whatsapp.title')}</h3>
              <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>{t('whatsapp.subtitle')}</p>
              <button 
                onClick={() => window.open('https://wa.me/966XXXXXXXXX?text=' + encodeURIComponent('Hello, I would like to inquire about your products and services.'), '_blank')}
                className="px-6 py-2 rounded-lg transition-colors font-medium"
                style={{ backgroundColor: '#16a34a', color: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#15803d'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#16a34a'}
              >
                {t('whatsapp.button')}
              </button>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>{t('form.title')}</h2>
                <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                  {t('form.subtitle')}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="mt-1" size={20} style={{ color: 'var(--color-primary)' }} />
                  <div>
                    <p className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>{t('form.officeHours')}</p>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{t('form.officeHoursWeekdays')}</p>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{t('form.officeHoursWeekend')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-1" size={20} style={{ color: 'var(--color-primary)' }} />
                  <div>
                    <p className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>{t('form.email')}</p>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>contact@foodsources.com.sa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitStatus === 'success' ? (
                <div className="rounded-lg p-8 text-center" style={{ backgroundColor: 'var(--color-surface)', boxShadow: 'var(--shadow-md)' }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                    <Send size={32} style={{ color: '#16a34a' }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>{t('success.title')}</h3>
                  <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>{t('success.message')}</p>
                  <Button onClick={() => setSubmitStatus('idle')} variant="primary">
                    {t('success.button')}
                  </Button>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label={`${t('form.businessName')} *`}
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                    required
                  />
                  <Input
                    label={`${t('form.contactPerson')} *`}
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label={`${t('form.email')} *`}
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Input
                    label={`${t('form.phone')} *`}
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>{t('form.businessType')}</label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-text-primary)',
                        border: '1px solid var(--color-border)'
                      }}
                    >
                      <option value="">{t('form.selectType')}</option>
                      <option value="hotel">{t('businessTypes.hotel')}</option>
                      <option value="restaurant">{t('businessTypes.restaurant')}</option>
                      <option value="cafe">{t('businessTypes.cafe')}</option>
                      <option value="catering">{t('businessTypes.catering')}</option>
                      <option value="retail">{t('businessTypes.retail')}</option>
                      <option value="other">{t('businessTypes.other')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>{t('form.city')}</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-text-primary)',
                        border: '1px solid var(--color-border)'
                      }}
                    >
                      <option value="">{t('form.selectCity')}</option>
                      <option value="riyadh">{t('cities.riyadh')}</option>
                      <option value="jeddah">{t('cities.jeddah')}</option>
                      <option value="dammam">{t('cities.dammam')}</option>
                      <option value="other">{t('cities.other')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>{t('form.inquiryType')}</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: 'var(--color-surface)',
                      color: 'var(--color-text-primary)',
                      border: '1px solid var(--color-border)'
                    }}
                  >
                    <option value="">{t('form.selectInquiry')}</option>
                    <option value="pricing">{t('inquiryTypes.pricing')}</option>
                    <option value="product">{t('inquiryTypes.product')}</option>
                    <option value="partnership">{t('inquiryTypes.partnership')}</option>
                    <option value="support">{t('inquiryTypes.support')}</option>
                    <option value="other">{t('inquiryTypes.other')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>{t('form.message')}</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 resize-none"
                    style={{
                      backgroundColor: 'var(--color-surface)',
                      color: 'var(--color-text-primary)',
                      border: '1px solid var(--color-border)'
                    }}
                    placeholder={t('form.messagePlaceholder')}
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="consent" className="mt-1" required />
                  <label htmlFor="consent" className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {t('form.consent')}
                  </label>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  <Send size={20} className="mr-2" />
                  {t('form.submit')}
                </Button>

                <p className="text-xs text-center" style={{ color: 'var(--color-text-muted)' }}>
                  {t('form.privacy')}
                </p>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>{t('locations.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                  <MapPin size={24} style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{t('locations.riyadh.title')}</h3>
                  <p className="mb-4" style={{ color: 'var(--color-text-secondary)', whiteSpace: 'pre-line' }}>
                    {t('locations.riyadh.address')}
                  </p>
                  <p className="text-sm mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                    <strong>{t('locations.riyadh.phone')}:</strong> +966 XX XXX XXXX
                  </p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    <strong>{t('locations.riyadh.hours')}:</strong> {t('locations.riyadh.hoursValue')}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                  <MapPin size={24} style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{t('locations.jeddah.title')}</h3>
                  <p className="mb-4" style={{ color: 'var(--color-text-secondary)', whiteSpace: 'pre-line' }}>
                    {t('locations.jeddah.address')}
                  </p>
                  <p className="text-sm mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                    <strong>{t('locations.riyadh.phone')}:</strong> +966 XX XXX XXXX
                  </p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    <strong>{t('locations.riyadh.hours')}:</strong> {t('locations.riyadh.hoursValue')}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Google Maps */}
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.8486139658!2d46.8660674!3d24.6104515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fa6e2fabc3c55:0x4779c1e161dd963a!2s%D8%B4%D8%B1%D9%83%D8%A9+%D9%85%D8%B5%D8%A7%D8%AF%D8%B1+%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85%E2%80%AD!5e0!3m2!1sen!2ssa!4v1705781234567!5m2!1sen!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Food Sources Location Map"
            />
          </div>
        </div>
      </section>

      {/* Additional Contacts */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container-custom">
          <Card className="p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--color-text-primary)' }}>{t('otherInquiries.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{t('otherInquiries.careers')}</p>
                <a href="mailto:careers@foodsources.com.sa" className="hover:underline" style={{ color: 'var(--color-primary)' }}>
                  careers@foodsources.com.sa
                </a>
              </div>
              <div>
                <p className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{t('otherInquiries.suppliers')}</p>
                <a href="mailto:suppliers@foodsources.com.sa" className="hover:underline" style={{ color: 'var(--color-primary)' }}>
                  suppliers@foodsources.com.sa
                </a>
              </div>
              <div>
                <p className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{t('otherInquiries.media')}</p>
                <a href="mailto:media@foodsources.com.sa" className="hover:underline" style={{ color: 'var(--color-primary)' }}>
                  media@foodsources.com.sa
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
