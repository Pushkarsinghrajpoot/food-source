'use client'

import { useState } from "react"
import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from "lucide-react"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"

export default function ContactPage() {
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
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Whether you're ready to order or just have questions, we're here to help
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
              <h3 className="text-xl font-semibold text-charcoal mb-2">Call Us</h3>
              <p className="text-charcoal-600 mb-4">Available Sun-Thu, 9am-6pm</p>
              <a href="tel:+966XXXXXXXX" className="text-olive font-semibold text-lg hover:underline">
                +966 XX XXX XXXX
              </a>
            </Card>

            <Card hover className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-olive" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Email Us</h3>
              <p className="text-charcoal-600 mb-4">Get custom pricing for your business</p>
              <a href="mailto:contact@foodsources.com.sa" className="text-olive font-semibold hover:underline">
                contact@foodsources.com.sa
              </a>
            </Card>

            <Card hover className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">WhatsApp</h3>
              <p className="text-charcoal-600 mb-4">Chat with our team instantly</p>
              <Button variant="primary" className="bg-green-600 hover:bg-green-700">
                Open WhatsApp
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-4">Send Us a Message</h2>
                <p className="text-charcoal-600 mb-6">
                  Fill out the form and we'll get back within 24 hours
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="text-olive mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-charcoal">Office Hours</p>
                    <p className="text-sm text-charcoal-600">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-charcoal-600">Friday - Saturday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="text-olive mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-charcoal">Email</p>
                    <p className="text-sm text-charcoal-600">contact@foodsources.com.sa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Business Name *"
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                    required
                  />
                  <Input
                    label="Contact Person *"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Email *"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Input
                    label="Phone Number *"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">Business Type</label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive"
                    >
                      <option value="">Select type</option>
                      <option value="hotel">Hotel</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="cafe">Café</option>
                      <option value="catering">Catering</option>
                      <option value="retail">Retail</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">City</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive"
                    >
                      <option value="">Select city</option>
                      <option value="riyadh">Riyadh</option>
                      <option value="jeddah">Jeddah</option>
                      <option value="dammam">Dammam</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">Inquiry Type</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="pricing">Pricing</option>
                    <option value="product">Product Info</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="consent" className="mt-1" required />
                  <label htmlFor="consent" className="text-sm text-charcoal-600">
                    I agree to receive communications from Food Sources Trading Co.
                  </label>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-charcoal-500 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Our Locations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-olive" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-2">Riyadh (HQ)</h3>
                  <p className="text-charcoal-600 mb-4">
                    King Fahd Road, Al Olaya District<br />
                    Riyadh 12211, Saudi Arabia
                  </p>
                  <p className="text-sm text-charcoal-600 mb-1">
                    <strong>Phone:</strong> +966 XX XXX XXXX
                  </p>
                  <p className="text-sm text-charcoal-600">
                    <strong>Hours:</strong> Sun-Thu: 9AM - 6PM
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
                  <h3 className="text-2xl font-semibold text-charcoal mb-2">Jeddah</h3>
                  <p className="text-charcoal-600 mb-4">
                    Al Andalus District<br />
                    Jeddah 23326, Saudi Arabia
                  </p>
                  <p className="text-sm text-charcoal-600 mb-1">
                    <strong>Phone:</strong> +966 XX XXX XXXX
                  </p>
                  <p className="text-sm text-charcoal-600">
                    <strong>Hours:</strong> Sun-Thu: 9AM - 6PM
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-96 bg-charcoal-200 rounded-2xl flex items-center justify-center">
            <p className="text-charcoal-500">Google Maps Integration</p>
          </div>
        </div>
      </section>

      {/* Additional Contacts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Card className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">Other Inquiries</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-semibold text-charcoal mb-2">For Careers</p>
                <a href="mailto:careers@foodsources.com.sa" className="text-olive hover:underline">
                  careers@foodsources.com.sa
                </a>
              </div>
              <div>
                <p className="font-semibold text-charcoal mb-2">For Suppliers</p>
                <a href="mailto:suppliers@foodsources.com.sa" className="text-olive hover:underline">
                  suppliers@foodsources.com.sa
                </a>
              </div>
              <div>
                <p className="font-semibold text-charcoal mb-2">For Media</p>
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
