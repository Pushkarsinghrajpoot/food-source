'use client'

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslations, useLocale } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { Search, SlidersHorizontal, Grid, List, Package, ArrowRight } from "lucide-react"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Card from "@/components/ui/Card"
import { products } from "@/data/products"

function ProductsContent() {
  const t = useTranslations('products')
  const navT = useTranslations('nav')
  const locale = useLocale()
  const searchParams = useSearchParams()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

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
    { id: 'pickles', label: t('pickles') },
    { id: 'labneh', label: t('labneh') }
  ]

  const filteredProducts = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .filter(p => 
      searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(to bottom right, var(--color-bg-secondary), var(--color-bg-tertiary))' }}>
        <div className="container-custom">
          <div className="max-w-3xl">
            <nav className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              <Link href={`/${locale}`} className="hover:underline" style={{ color: 'var(--color-text-secondary)' }}>{navT('home')}</Link>
              <span className="mx-2">/</span>
              <span>{t('breadcrumb')}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
              {t('title')}
            </h1>
            <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <div className="sticky top-20 z-40 shadow-sm" style={{ backgroundColor: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all"
                  style={{
                    backgroundColor: selectedCategory === cat.id ? 'var(--color-primary)' : 'var(--color-bg-tertiary)',
                    color: selectedCategory === cat.id ? 'var(--color-text-on-primary)' : 'var(--color-text-secondary)'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search & View Toggle */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={20} style={{ color: 'var(--color-text-muted)' }} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('searchPlaceholder')}
                  className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-text-primary)',
                    border: '1px solid var(--color-border)'
                  }}
                />
              </div>
              <div className="flex items-center gap-2 rounded-lg p-1" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
                <button
                  onClick={() => setViewMode('grid')}
                  className="p-2 rounded"
                  style={{
                    backgroundColor: viewMode === 'grid' ? 'var(--color-surface)' : 'transparent',
                    boxShadow: viewMode === 'grid' ? 'var(--shadow-sm)' : 'none'
                  }}
                >
                  <Grid size={20} style={{ color: 'var(--color-text-secondary)' }} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className="p-2 rounded"
                  style={{
                    backgroundColor: viewMode === 'list' ? 'var(--color-surface)' : 'transparent',
                    boxShadow: viewMode === 'list' ? 'var(--shadow-sm)' : 'none'
                  }}
                >
                  <List size={20} style={{ color: 'var(--color-text-secondary)' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container-custom">
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8' : 'space-y-6'}>
            {filteredProducts.map((product) => (
              <Card key={product.id} hover className="overflow-hidden">
                <div className="aspect-square relative group overflow-hidden" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <Link href={`/${locale}/products/${product.id}`}>
                      <Button variant="primary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        {t('quickView')}
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)' }}>
                      {product.category}
                    </span>
                    <span className="text-xs px-2 py-1 rounded" style={{ color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                      {product.certification}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{product.name}</h3>
                  <p className="text-sm mb-1" style={{ color: 'var(--color-text-secondary)' }}>{product.origin} • {product.sizes[0]}</p>
                  <Link href={`/${locale}/products/${product.id}`} className="font-medium text-sm hover:underline inline-flex items-center mt-3" style={{ color: 'var(--color-primary)' }}>
                    {t('viewDetails')} <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              {t('loadMore')}
            </Button>
            <p className="text-sm text-charcoal-500 mt-4">{t('showing')} {filteredProducts.length} {t('of')} {products.length} {t('productsCount')}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cream py-16">
        <div className="container-custom">
          <Card className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-charcoal mb-4">{t('bulkPricing')}</h2>
            <p className="text-charcoal-600 mb-6 max-w-2xl mx-auto">
              {t('bulkPricingDesc')}
            </p>
            <Link href={`/${locale}/quote`}>
              <Button variant="primary" size="lg">
                {t('requestCustomQuote')}
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="pt-20 min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  )
}
