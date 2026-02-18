'use client'

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"

import { useTranslations, useLocale } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { Search, SlidersHorizontal, Grid, List, Package, ArrowRight, RefreshCw } from "lucide-react"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Card from "@/components/ui/Card"

interface SupabaseProduct {
  id: string
  name: string
  category: string
  size: string
  shelf_life: string
  barcode: string
  image_url: string
  description: string
  storage: string
  shelf_life_detail: string
  origin: string
  nutrition: any[]
}

function ProductsContent() {
  const t = useTranslations('products')
  const navT = useTranslations('nav')
  const locale = useLocale()
  const searchParams = useSearchParams()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [products, setProducts] = useState<SupabaseProduct[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch products from Supabase
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products')
        const data = await res.json()
        if (data.products) {
          setProducts(data.products)
        }
      } catch (err) {
        console.error('Failed to fetch products:', err)
      }
      setLoading(false)
    }
    fetchProducts()
  }, [])

  // Handle URL category parameter
  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [searchParams])

  const categories = [
    { id: 'all', label: t('all') },
    { id: 'olives', label: t('olives') },
    { id: 'cheeses', label: t('cheeses') },
    { id: 'dairy', label: 'Dairy' },
    { id: 'pickles', label: t('pickles') },
    { id: 'labneh', label: t('labneh') }
  ]

  const filteredProducts = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .filter(p => 
      searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.origin || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div className="pt-18">
      {/* Page Hero - Modern Gradient */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-bg-tertiary) 100%)' }}>
        <div className="max-w-container mx-auto px-6 lg:px-12 text-center">
          <div className="inline-block px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold mb-8" style={{ backgroundColor: 'var(--color-gold-light)', color: 'var(--color-gold)', border: '1px solid var(--color-gold)' }}>
            {t('breadcrumb')}
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6" style={{ color: 'var(--color-text-on-primary)' }}>
            {t('title')}
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'var(--color-text-on-primary)', opacity: 0.9 }}>
            {t('subtitle')}
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:ring-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Filter Bar - Sticky */}
      <div className="sticky top-20 z-40 shadow-sm" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center gap-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className="px-6 py-2.5 rounded-full font-medium whitespace-nowrap transition-all"
                style={{
                  backgroundColor: selectedCategory === cat.id ? '#D97757' : 'transparent',
                  color: selectedCategory === cat.id ? '#FFFFFF' : 'var(--color-text-secondary)',
                  border: selectedCategory === cat.id ? 'none' : '1px solid var(--color-border)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <RefreshCw className="animate-spin text-gray-400" size={32} />
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/${locale}/products/${product.id}`}>
                <div className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lift cursor-pointer" style={{ backgroundColor: 'var(--color-surface)' }}>
                  <div className="aspect-[4/3] relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, var(--color-bg-secondary), var(--color-bg-tertiary))' }}>
                    {product.image_url && (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full inline-block mb-3 bg-emerald-100 text-emerald-700">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{product.name}</h3>
                    <p className="text-sm mb-4" style={{ color: 'var(--color-text-tertiary)' }}>{product.origin ? `${product.origin} • ` : ''}{product.size}</p>
                    <span className="inline-flex items-center gap-2 font-medium text-sm text-orange-600">
                      {t('viewDetails')} <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <Package size={64} className="mx-auto mb-4 text-gray-400" />
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{t('loadMore')}</h3>
              <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>{t('bulkPricingDesc')}</p>
              <button onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }} className="px-6 py-3 rounded-full font-semibold transition-all bg-orange-600 text-white hover:bg-orange-700">
                {t('loadMore')}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
            {t('bulkPricing')}
          </h2>
          <p className="text-xl mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            {t('bulkPricingDesc')}
          </p>
          <Link href={`/${locale}/contact`}>
            <button className="px-8 py-4 rounded-full font-semibold border-2 border-gray-900 text-gray-900 transition-all hover:bg-gray-900 hover:text-white">
              {t('requestCustomQuote')}
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="pt-20 min-h-screen flex items-center justify-center">جاري التحميل...</div>}>
      <ProductsContent />
    </Suspense>
  )
}
