'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, SlidersHorizontal, Grid, List, Package, ArrowRight } from "lucide-react"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'olives', 'cheeses', 'pickles', 'labneh']
  
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

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-cream to-cream-200 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <nav className="text-sm text-charcoal-600 mb-4">
              <Link href="/" className="hover:text-olive">Home</Link>
              <span className="mx-2">/</span>
              <span>Products</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
              Our Premium Selection
            </h1>
            <p className="text-xl text-charcoal-600">
              Handpicked Mediterranean ingredients for exceptional kitchens
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
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-olive text-white'
                      : 'bg-cream-200 text-charcoal-700 hover:bg-cream-300'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {/* Search & View Toggle */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
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
                    <Link href={`/products/${product.id}`}>
                      <Button variant="primary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        Quick View
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
                  <Link href={`/products/${product.id}`} className="text-olive font-medium text-sm hover:underline inline-flex items-center mt-3">
                    View Details <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
            <p className="text-sm text-charcoal-500 mt-4">Showing {filteredProducts.length} of {products.length} products</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cream py-16">
        <div className="container-custom">
          <Card className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Need Bulk Pricing?</h2>
            <p className="text-charcoal-600 mb-6 max-w-2xl mx-auto">
              Contact our sales team for customized quotes on large orders and regular deliveries
            </p>
            <Link href="/quote">
              <Button variant="primary" size="lg">
                Request Custom Quote
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  )
}
