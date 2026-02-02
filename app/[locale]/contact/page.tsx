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
    <div className="pt-18">
      {/* Hero - Modern Gradient */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #1B3A2F 0%, #0F1419 100%)' }}>
        <div className="max-w-container mx-auto px-6 lg:px-12 text-center">
          <div className="inline-block px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold mb-8" style={{ backgroundColor: 'rgba(201, 169, 97, 0.2)', color: '#C9A961', border: '1px solid rgba(201, 169, 97, 0.3)' }}>
            Contact Us
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Get in Touch
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            We're here to help with your partnership inquiries
          </p>
        </div>
      </section>

      {/* Contact Options - 3 Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="bg-white rounded-2xl p-8 text-center transition-all hover:-translate-y-2 shadow-lg hover:shadow-2xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-orange-100">
                <Mail size={32} className="text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Open Account</h3>
              <p className="mb-4 text-sm text-gray-600">Start your partnership</p>
              <p className="text-sm mb-6 text-gray-500">Sun-Thu: 9am-6pm</p>
              <Link href={`/${locale}/onboarding`}>
                <button className="px-6 py-2.5 rounded-full border-2 border-gray-900 text-gray-900 transition-all font-semibold hover:bg-gray-900 hover:text-white">
                  Start →
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center transition-all hover:-translate-y-2 shadow-lg hover:shadow-2xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-orange-100">
                <Phone size={32} className="text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Call Us</h3>
              <p className="mb-4 text-lg font-semibold text-orange-600">+966 XX XXX XXXX</p>
              <p className="text-sm mb-6 text-gray-500">Sun-Thu: 9am-6pm</p>
              <a href="tel:+966XXXXXXXX">
                <button className="px-6 py-2.5 rounded-full border-2 border-gray-900 text-gray-900 transition-all font-semibold hover:bg-gray-900 hover:text-white">
                  Call →
                </button>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center transition-all hover:-translate-y-2 shadow-lg hover:shadow-2xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-green-100">
                <MessageCircle size={32} style={{ color: '#16a34a' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">WhatsApp</h3>
              <p className="mb-4 text-sm text-gray-600">Chat with our team</p>
              <p className="text-sm mb-6 text-gray-500">Instant response</p>
              <button 
                onClick={() => window.open('https://wa.me/966XXXXXXXXX', '_blank')}
                className="px-6 py-2.5 rounded-full border-2 border-gray-900 text-gray-900 transition-all font-semibold hover:bg-gray-50"
              >
                Open →
              </button>
            </div>
          </div>

          {/* Contact Form - Two Column */}
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Send Us a Message</h2>
              <p className="mb-8 text-lg text-gray-600">
                Fill out the form and we'll respond within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="font-semibold mb-1 text-gray-900">Office Hours:</p>
                  <p className="text-sm text-gray-600">Sun-Thu: 9am-6pm KSA</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-1 text-gray-900">Email:</p>
                  <p className="text-sm text-gray-600">contact@foodsources.com.sa</p>
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
