'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslations, useLocale } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { Search, SlidersHorizontal, Grid, List, Package, ArrowRight } from "lucide-react"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Card from "@/components/ui/Card"

export default function ProductsPage() {
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
  
  const products = [
    { id: 1, name: "Greek Kalamata Olives", category: "olives", origin: "Greece", size: "5kg tin", certification: "SFDA", image: "https://images.unsplash.com/photo-1587411768339-e0ab6ad0bb3d?w=400&q=80" },
    { id: 2, name: "Premium Feta Cheese", category: "cheeses", origin: "Greece", size: "2kg block", certification: "SFDA", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80" },
    { id: 3, name: "Turkish Pickled Cucumbers", category: "pickles", origin: "Turkey", size: "3kg jar", certification: "SFDA", image: "https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?w=400&q=80" },
    { id: 4, name: "Lebanese Labneh", category: "labneh", origin: "Lebanon", size: "1kg tub", certification: "Halal", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&q=80" },
    { id: 5, name: "Green Olives Stuffed", category: "olives", origin: "Spain", size: "4kg tin", certification: "SFDA", image: "https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?w=400&q=80" },
    { id: 6, name: "Halloumi Cheese", category: "cheeses", origin: "Cyprus", size: "1.5kg", certification: "Halal", image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=400&q=80" },
    { id: 7, name: "Mixed Mediterranean Pickles", category: "pickles", origin: "Greece", size: "5kg bucket", certification: "SFDA", image: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=400&q=80" },
    { id: 8, name: "Strained Labneh", category: "labneh", origin: "Lebanon", size: "2kg tub", certification: "Halal", image: "https://images.unsplash.com/photo-1571212515416-9cf500fe1dae?w=400&q=80" },
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
      <section className="bg-gradient-to-br from-cream to-cream-200 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <nav className="text-sm text-charcoal-600 mb-4">
              <Link href={`/${locale}`} className="hover:text-olive">{navT('home')}</Link>
              <span className="mx-2">/</span>
              <span>{t('breadcrumb')}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-charcoal-600">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <div className="sticky top-20 z-40 bg-white border-b border-charcoal-100 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-olive text-white'
                      : 'bg-cream-200 text-charcoal-700 hover:bg-cream-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search & View Toggle */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-400" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('searchPlaceholder')}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive"
                />
              </div>
              <div className="flex items-center gap-2 bg-cream-200 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Grid size={20} className="text-charcoal-700" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                >
                  <List size={20} className="text-charcoal-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8' : 'space-y-6'}>
            {filteredProducts.map((product) => (
              <Card key={product.id} hover className="overflow-hidden">
                <div className="aspect-square bg-cream-200 relative group overflow-hidden">
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
                    <span className="text-xs font-medium text-olive bg-olive/10 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    <span className="text-xs text-charcoal-500 border border-charcoal-200 px-2 py-1 rounded">
                      {product.certification}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">{product.name}</h3>
                  <p className="text-sm text-charcoal-600 mb-1">{product.origin} • {product.size}</p>
                  <Link href={`/${locale}/products/${product.id}`} className="text-olive font-medium text-sm hover:underline inline-flex items-center mt-3">
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
