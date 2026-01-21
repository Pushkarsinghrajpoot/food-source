'use client'

import { useState } from "react"
import { useTranslations } from 'next-intl'
import { Search, ShoppingCart, Truck, Package, CreditCard, User, Info, ChevronDown, MessageCircle, Mail } from "lucide-react"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"

export default function FAQPage() {
  const t = useTranslations('faq')
  const [searchQuery, setSearchQuery] = useState('')
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const categories = [
    { id: 'ordering', name: t('categories.ordering'), icon: ShoppingCart },
    { id: 'delivery', name: t('categories.delivery'), icon: Truck },
    { id: 'products', name: t('categories.products'), icon: Package },
    { id: 'payments', name: t('categories.payments'), icon: CreditCard },
    { id: 'account', name: t('categories.account'), icon: User },
    { id: 'general', name: t('categories.general'), icon: Info },
  ]

  const faqs = {
    ordering: [
      { q: t('ordering.q1'), a: t('ordering.a1') },
      { q: t('ordering.q2'), a: t('ordering.a2') },
      { q: t('ordering.q3'), a: t('ordering.a3') },
      { q: t('ordering.q4'), a: t('ordering.a4') },
    ],
    delivery: [
      { q: t('delivery.q1'), a: t('delivery.a1') },
      { q: t('delivery.q2'), a: t('delivery.a2') },
      { q: t('delivery.q3'), a: t('delivery.a3') },
      { q: t('delivery.q4'), a: t('delivery.a4') },
    ],
    products: [
      { q: t('products.q1'), a: t('products.a1') },
      { q: t('products.q2'), a: t('products.a2') },
      { q: t('products.q3'), a: t('products.a3') },
      { q: t('products.q4'), a: t('products.a4') },
    ],
    payments: [
      { q: t('payments.q1'), a: t('payments.a1') },
      { q: t('payments.q2'), a: t('payments.a2') },
      { q: t('payments.q3'), a: t('payments.a3') },
      { q: t('payments.q4'), a: t('payments.a4') },
    ],
    account: [
      { q: t('account.q1'), a: t('account.a1') },
      { q: t('account.q2'), a: t('account.a2') },
      { q: t('account.q3'), a: t('account.a3') },
      { q: t('account.q4'), a: t('account.a4') },
    ],
    general: [
      { q: t('general.q1'), a: t('general.a1') },
      { q: t('general.q2'), a: t('general.a2') },
      { q: t('general.q3'), a: t('general.a3') },
      { q: t('general.q4'), a: t('general.a4') },
    ],
  }

  const popularSearches = [t('popularSearches.s1'), t('popularSearches.s2'), t('popularSearches.s3'), t('popularSearches.s4')]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(to bottom right, var(--color-bg-secondary), var(--color-bg-primary))' }}>
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
            {t('hero.title')}
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative mb-6">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2" size={24} style={{ color: 'var(--color-text-muted)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('hero.searchPlaceholder')}
              className="w-full pl-16 pr-6 py-5 rounded-xl focus:outline-none focus:ring-2 text-lg"
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                border: '2px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)'
              }}
            />
          </div>

          {/* Popular Searches */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{t('hero.popularLabel')}</span>
            {popularSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(search)}
                className="text-sm hover:underline"
                style={{ color: 'var(--color-primary)' }}
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
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
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                    <category.icon size={24} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <h3 className="font-semibold text-lg" style={{ color: 'var(--color-text-primary)' }}>{category.name}</h3>
                </div>
              </Card>
            ))}
          </div>

          {/* FAQ Sections */}
          <div className="max-w-4xl mx-auto space-y-12">
            {Object.entries(faqs).map(([categoryId, questions]) => {
              const category = categories.find(c => c.id === categoryId)
              
              // Filter questions based on search query
              const filteredQuestions = searchQuery === '' 
                ? questions 
                : questions.filter(faq => 
                    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
                  )
              
              // Only show category if there are filtered questions
              if (filteredQuestions.length === 0) return null
              
              return (
                <div key={categoryId} id={categoryId}>
                  <div className="flex items-center gap-3 mb-6">
                    {category && <category.icon size={28} style={{ color: 'var(--color-primary)' }} />}
                    <h2 className="text-3xl font-bold" style={{ color: 'var(--color-text-primary)' }}>{category?.name}</h2>
                    {searchQuery !== '' && (
                      <span className="text-sm px-3 py-1 rounded-full" style={{ color: 'var(--color-text-muted)', backgroundColor: 'var(--color-bg-tertiary)' }}>
                        {filteredQuestions.length} results
                      </span>
                    )}
                  </div>
                  <div className="space-y-4">
                    {filteredQuestions.map((faq, index) => {
                      const faqId = `${categoryId}-${index}`
                      const isOpen = openFaq === faqId
                      return (
                        <Card key={index} className="overflow-hidden">
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : faqId)}
                            className="w-full p-6 text-left flex items-center justify-between transition-colors"
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-tertiary)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                          >
                            <h3 className="font-semibold pr-4" style={{ color: 'var(--color-text-primary)' }}>{faq.q}</h3>
                            <ChevronDown
                              className={`flex-shrink-0 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                              size={24}
                              style={{ color: 'var(--color-primary)' }}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6 leading-relaxed animate-fade-in" style={{ color: 'var(--color-text-secondary)' }}>
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
            
            {/* Show no results message if search returns nothing */}
            {searchQuery !== '' && Object.entries(faqs).every(([categoryId, questions]) => {
              const filteredQuestions = questions.filter(faq => 
                faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.a.toLowerCase().includes(searchQuery.toLowerCase())
              )
              return filteredQuestions.length === 0
            }) && (
              <div className="text-center py-12">
                <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>No results found for "{searchQuery}"</p>
                <p className="mt-2" style={{ color: 'var(--color-text-muted)' }}>Try searching with different keywords</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
              {t('help.title')}
            </h2>
            <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
              {t('help.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <Mail size={32} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{t('help.emailTitle')}</h3>
              <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                {t('help.emailSubtitle')}
              </p>
              <a href="mailto:support@foodsources.com.sa?subject=FAQ Support Request">
                <Button variant="primary" className="w-full">
                  {t('help.emailButton')}
                </Button>
              </a>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                <MessageCircle size={32} style={{ color: '#16a34a' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{t('help.whatsappTitle')}</h3>
              <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                {t('help.whatsappSubtitle')}
              </p>
              <button 
                onClick={() => window.open('https://wa.me/966XXXXXXXXX?text=' + encodeURIComponent('Hi, I have a question regarding your products and services.'), '_blank')}
                className="w-full px-6 py-3 rounded-lg font-medium transition-colors"
                style={{ backgroundColor: '#16a34a', color: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#15803d'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#16a34a'}
              >
                {t('help.whatsappButton')}
              </button>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="mb-2" style={{ color: 'var(--color-text-secondary)' }}>{t('help.callLabel')}</p>
            <a href="tel:+966XXXXXXXX" className="text-2xl font-bold hover:underline" style={{ color: 'var(--color-primary)' }}>
              +966 XX XXX XXXX
            </a>
            <p className="text-sm mt-2" style={{ color: 'var(--color-text-muted)' }}>{t('help.hours')}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
