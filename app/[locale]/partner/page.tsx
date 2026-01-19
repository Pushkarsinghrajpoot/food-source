'use client'

import { useTranslations, useLocale } from 'next-intl'
import { useState } from 'react'
import { Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function PartnerPage() {
  const t = useTranslations('partner')
  const locale = useLocale()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    }, 1500)
  }

  const openWhatsApp = () => {
    const phone = '+966XXXXXXXXX' // Replace with actual WhatsApp number
    const message = encodeURIComponent(`Hi, I'm interested in becoming a partner with Food Sources.`)
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-olive/10 to-cream py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            {t('hero.title') || 'Become a Partner'}
          </h1>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            {t('hero.subtitle') || 'Join Saudi Arabia\'s leading network of premium food suppliers and distributors'}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Market Access', description: 'Reach 500+ hotels and restaurants across KSA' },
              { title: 'Reliable Distribution', description: 'Established logistics network with next-day delivery' },
              { title: 'Growth Support', description: 'Marketing and business development assistance' },
              { title: 'Quality Standards', description: 'SFDA-certified quality assurance processes' },
              { title: 'Competitive Pricing', description: 'Fair and transparent wholesale pricing models' },
              { title: 'Dedicated Support', description: 'Personal account manager for your business' },
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-cream rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="text-olive" size={24} />
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                </div>
                <p className="text-charcoal-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle className="text-olive mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-charcoal-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:outline-none focus:border-olive"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:outline-none focus:border-olive"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:outline-none focus:border-olive"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name *</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:outline-none focus:border-olive"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:outline-none focus:border-olive"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={submitStatus === 'loading'}
                  >
                    <Send className="mr-2" size={20} />
                    {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Options */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-charcoal-600 mb-8">
                  Prefer to talk directly? Choose your preferred contact method below.
                </p>
              </div>

              {/* WhatsApp CTA */}
              <button
                onClick={openWhatsApp}
                className="w-full flex items-center gap-4 p-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={32} />
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Chat on WhatsApp</h3>
                  <p className="text-sm opacity-90">Get instant responses to your questions</p>
                </div>
              </button>

              {/* Phone CTA */}
              <a
                href="tel:+966XXXXXXXXX"
                className="w-full flex items-center gap-4 p-6 bg-olive text-white rounded-lg hover:bg-olive-600 transition-colors"
              >
                <Phone size={32} />
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-sm opacity-90">+966 XX XXX XXXX</p>
                </div>
              </a>

              {/* Email CTA */}
              <a
                href="mailto:partners@foodsources.com.sa"
                className="w-full flex items-center gap-4 p-6 bg-charcoal text-white rounded-lg hover:bg-charcoal-800 transition-colors"
              >
                <Mail size={32} />
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-sm opacity-90">partners@foodsources.com.sa</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-olive text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Together?</h2>
          <p className="text-lg mb-8 opacity-90">Let's discuss how we can create a successful partnership</p>
          <Button variant="secondary" size="lg" onClick={openWhatsApp}>
            <MessageCircle className="mr-2" size={20} />
            Start a Conversation
          </Button>
        </div>
      </section>
    </div>
  )
}
