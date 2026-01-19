'use client'

import { useState } from "react"
import { Search, ShoppingCart, Truck, Package, CreditCard, User, Info, ChevronDown, MessageCircle, Mail } from "lucide-react"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const categories = [
    { id: 'ordering', name: 'Ordering', icon: ShoppingCart },
    { id: 'delivery', name: 'Delivery & Shipping', icon: Truck },
    { id: 'products', name: 'Products', icon: Package },
    { id: 'payments', name: 'Payments & Invoicing', icon: CreditCard },
    { id: 'account', name: 'Account', icon: User },
    { id: 'general', name: 'General', icon: Info },
  ]

  const faqs = {
    ordering: [
      { q: "What is the minimum order quantity?", a: "Our minimum order quantity varies by product. Generally, we require a minimum order of 2 units per product. For bulk orders, we offer attractive discounts." },
      { q: "How do I place an order?", a: "You can place orders through our customer portal, by requesting a quote on our website, via email at orders@foodsources.com.sa, or by calling our sales team at +966 XX XXX XXXX." },
      { q: "Can I modify my order after placing it?", a: "Orders can be modified within 2 hours of placement. Please contact our customer service team immediately if you need to make changes." },
      { q: "Do you offer bulk discounts?", a: "Yes, we offer tiered pricing based on order volume. Contact our sales team for a customized quote based on your specific needs." },
    ],
    delivery: [
      { q: "Which areas do you deliver to?", a: "We deliver across Saudi Arabia, with next-day delivery available in Riyadh, Jeddah, and Dammam. Other cities receive delivery within 2-3 business days." },
      { q: "What is the delivery time?", a: "Standard delivery is 1-3 business days depending on your location. Express delivery options are available for urgent orders." },
      { q: "How do I track my order?", a: "Once your order ships, you'll receive a tracking number via email and SMS. You can also track orders through your customer portal." },
      { q: "What if my order arrives damaged?", a: "We take quality seriously. If your order arrives damaged, please contact us within 24 hours with photos. We'll arrange a replacement or refund immediately." },
    ],
    products: [
      { q: "Are your products certified?", a: "Yes, all our products are SFDA certified and meet international food safety standards. Many items also carry Halal certification." },
      { q: "How should I store the products?", a: "Storage instructions vary by product. Generally, keep items in a cool, dry place. Specific storage guidelines are provided on each product label and spec sheet." },
      { q: "Can you source products not in your catalog?", a: "Absolutely! We have an extensive network of Mediterranean suppliers. Contact our product team with your requirements, and we'll work to source it for you." },
      { q: "What is the shelf life of your products?", a: "Shelf life varies by product category. Olives and pickles typically have 18-24 months, while cheeses vary from 6-12 months. Check product specifications for details." },
    ],
    payments: [
      { q: "What payment methods do you accept?", a: "We accept bank transfers, credit cards, and for approved accounts, we offer Net 30 payment terms." },
      { q: "Do you offer credit terms?", a: "Yes, qualified businesses can apply for credit accounts with Net 30 or Net 60 payment terms. Contact our accounts team to apply." },
      { q: "How do I access my invoices?", a: "All invoices are available in your customer portal under the 'Invoices' section. You can also request copies via email." },
      { q: "What is your refund policy?", a: "We offer full refunds for damaged or defective products within 7 days of delivery. Quality issues are handled on a case-by-case basis." },
    ],
    account: [
      { q: "How do I create an account?", a: "Request a quote on our website, and our team will set up your account. Once approved, you'll receive portal access credentials." },
      { q: "I forgot my password, what should I do?", a: "Click 'Forgot Password' on the portal login page. You'll receive a reset link via email." },
      { q: "Can I have multiple users on my account?", a: "Yes, business accounts can have multiple users with different permission levels. Contact support to add users." },
      { q: "How do I update my account information?", a: "Log into your portal and navigate to Settings > Account Information to update your details." },
    ],
    general: [
      { q: "What are your business hours?", a: "We're open Sunday to Thursday, 9:00 AM to 6:00 PM. We're closed on Fridays and Saturdays." },
      { q: "Do you have physical stores?", a: "We operate distribution centers in Riyadh and Jeddah. We're primarily a B2B supplier and don't have retail stores." },
      { q: "How can I become a supplier?", a: "We're always looking for quality suppliers. Send your company profile and product information to suppliers@foodsources.com.sa." },
      { q: "Do you offer catering services?", a: "No, we're a food distribution company. We supply ingredients to hotels, restaurants, and caterers." },
    ],
  }

  const popularSearches = ['Minimum order', 'Delivery time', 'Payment terms', 'SFDA certification']

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream to-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            How can we help?
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative mb-6">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-charcoal-400" size={24} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for answers..."
              className="w-full pl-16 pr-6 py-5 rounded-xl border-2 border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive text-lg shadow-sm"
            />
          </div>

          {/* Popular Searches */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-sm text-charcoal-600">Popular:</span>
            {popularSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(search)}
                className="text-sm text-olive hover:underline"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((category) => (
              <Card
                key={category.id}
                hover
                className="p-6 cursor-pointer"
                onClick={() => {
                  const element = document.getElementById(category.id)
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-olive/10 flex items-center justify-center">
                    <category.icon className="text-olive" size={24} />
                  </div>
                  <h3 className="font-semibold text-charcoal text-lg">{category.name}</h3>
                </div>
              </Card>
            ))}
          </div>

          {/* FAQ Sections */}
          <div className="max-w-4xl mx-auto space-y-12">
            {Object.entries(faqs).map(([categoryId, questions]) => {
              const category = categories.find(c => c.id === categoryId)
              return (
                <div key={categoryId} id={categoryId}>
                  <div className="flex items-center gap-3 mb-6">
                    {category && <category.icon className="text-olive" size={28} />}
                    <h2 className="text-3xl font-bold text-charcoal">{category?.name}</h2>
                  </div>
                  <div className="space-y-4">
                    {questions.map((faq, index) => {
                      const faqId = `${categoryId}-${index}`
                      const isOpen = openFaq === faqId
                      return (
                        <Card key={index} className="overflow-hidden">
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : faqId)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-cream-50 transition-colors"
                          >
                            <h3 className="font-semibold text-charcoal pr-4">{faq.q}</h3>
                            <ChevronDown
                              className={`text-olive flex-shrink-0 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                              size={24}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6 text-charcoal-600 leading-relaxed animate-fade-in">
                              {faq.a}
                            </div>
                          )}
                        </Card>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-xl text-charcoal-600">
              Our team is here to help you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-olive" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Contact Us</h3>
              <p className="text-charcoal-600 mb-6">
                Send us an email and we'll respond within 24 hours
              </p>
              <Button variant="primary" className="w-full">
                Send Email
              </Button>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Chat with Us</h3>
              <p className="text-charcoal-600 mb-6">
                Connect instantly via WhatsApp for quick support
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Open WhatsApp
              </Button>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-charcoal-600 mb-2">Or call us directly:</p>
            <a href="tel:+966XXXXXXXX" className="text-2xl font-bold text-olive hover:underline">
              +966 XX XXX XXXX
            </a>
            <p className="text-sm text-charcoal-500 mt-2">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  )
}
