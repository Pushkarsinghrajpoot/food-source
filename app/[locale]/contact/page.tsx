'use client'

import { useState } from "react"
import { useTranslations, useLocale } from 'next-intl'
import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from "lucide-react"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Card from "@/components/ui/Card"

export default function ContactPage() {
  const t = useTranslations('contact')
  const locale = useLocale()
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
    console.log('Form submitted:', formData)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream to-cream-200 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card hover className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-terracotta" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">{t('callUs.title')}</h3>
              <p className="text-charcoal-600 mb-4">{t('callUs.hours')}</p>
              <a href="tel:+966XXXXXXXX" className="text-olive font-semibold text-lg hover:underline">
                +966 XX XXX XXXX
              </a>
            </Card>

            <Card hover className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-olive" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">{t('emailUs.title')}</h3>
              <p className="text-charcoal-600 mb-4">{t('emailUs.subtitle')}</p>
              <a href="mailto:contact@foodsources.com.sa" className="text-olive font-semibold hover:underline">
                contact@foodsources.com.sa
              </a>
            </Card>

            <Card hover className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">{t('whatsapp.title')}</h3>
              <p className="text-charcoal-600 mb-4">{t('whatsapp.subtitle')}</p>
              <button 
                onClick={() => window.open('https://wa.me/966XXXXXXXXX?text=' + encodeURIComponent('Hello, I would like to inquire about your products and services.'), '_blank')}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                {t('whatsapp.button')}
              </button>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-4">{t('form.title')}</h2>
                <p className="text-charcoal-600 mb-6">
                  {t('form.subtitle')}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="text-olive mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-charcoal">{t('form.officeHours')}</p>
                    <p className="text-sm text-charcoal-600">{t('form.officeHoursWeekdays')}</p>
                    <p className="text-sm text-charcoal-600">{t('form.officeHoursWeekend')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="text-olive mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-charcoal">{t('form.email')}</p>
                    <p className="text-sm text-charcoal-600">contact@foodsources.com.sa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
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
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">{t('form.businessType')}</label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive"
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
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">{t('form.city')}</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive"
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
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">{t('form.inquiryType')}</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive"
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
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">{t('form.message')}</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive resize-none"
                    placeholder={t('form.messagePlaceholder')}
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="consent" className="mt-1" required />
                  <label htmlFor="consent" className="text-sm text-charcoal-600">
                    {t('form.consent')}
                  </label>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  <Send size={20} className="mr-2" />
                  {t('form.submit')}
                </Button>

                <p className="text-xs text-charcoal-500 text-center">
                  {t('form.privacy')}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">{t('locations.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-olive" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-2">{t('locations.riyadh.title')}</h3>
                  <p className="text-charcoal-600 mb-4" style={{whiteSpace: 'pre-line'}}>
                    {t('locations.riyadh.address')}
                  </p>
                  <p className="text-sm text-charcoal-600 mb-1">
                    <strong>{t('locations.riyadh.phone')}:</strong> +966 XX XXX XXXX
                  </p>
                  <p className="text-sm text-charcoal-600">
                    <strong>{t('locations.riyadh.hours')}:</strong> {t('locations.riyadh.hoursValue')}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-olive" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-2">{t('locations.jeddah.title')}</h3>
                  <p className="text-charcoal-600 mb-4" style={{whiteSpace: 'pre-line'}}>
                    {t('locations.jeddah.address')}
                  </p>
                  <p className="text-sm text-charcoal-600 mb-1">
                    <strong>{t('locations.riyadh.phone')}:</strong> +966 XX XXX XXXX
                  </p>
                  <p className="text-sm text-charcoal-600">
                    <strong>{t('locations.riyadh.hours')}:</strong> {t('locations.riyadh.hoursValue')}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-96 bg-charcoal-200 rounded-2xl flex items-center justify-center">
            <p className="text-charcoal-500">{t('locations.mapPlaceholder')}</p>
          </div>
        </div>
      </section>

      {/* Additional Contacts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Card className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">{t('otherInquiries.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-semibold text-charcoal mb-2">{t('otherInquiries.careers')}</p>
                <a href="mailto:careers@foodsources.com.sa" className="text-olive hover:underline">
                  careers@foodsources.com.sa
                </a>
              </div>
              <div>
                <p className="font-semibold text-charcoal mb-2">{t('otherInquiries.suppliers')}</p>
                <a href="mailto:suppliers@foodsources.com.sa" className="text-olive hover:underline">
                  suppliers@foodsources.com.sa
                </a>
              </div>
              <div>
                <p className="font-semibold text-charcoal mb-2">{t('otherInquiries.media')}</p>
                <a href="mailto:media@foodsources.com.sa" className="text-olive hover:underline">
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
