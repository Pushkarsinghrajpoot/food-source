'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Clock, User, ArrowRight } from "lucide-react"
import { useLocale } from 'next-intl'
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"

export default function BlogPage() {
  const locale = useLocale()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['all', 'recipes', 'industry-news', 'product-guides', 'company-updates']

  const articles = [
    {
      id: 1,
      title: "10 Creative Ways to Use Kalamata Olives in Your Menu",
      excerpt: "Discover innovative recipes and presentation ideas that will elevate your Mediterranean dishes...",
      category: "recipes",
      author: "Chef Maria",
      readTime: "5 min",
      date: "Jan 15, 2024",
      image: "https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?w=600&q=80"
    },
    {
      id: 2,
      title: "The Rising Demand for Mediterranean Cuisine in Saudi Arabia",
      excerpt: "Market insights and trends shaping the food service industry across the Kingdom...",
      category: "industry-news",
      author: "Omar Al-Saud",
      readTime: "8 min",
      date: "Jan 12, 2024",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
    },
    {
      id: 3,
      title: "Complete Guide to Storing and Handling Feta Cheese",
      excerpt: "Best practices for maintaining freshness and quality in your commercial kitchen...",
      category: "product-guides",
      author: "Sarah Hassan",
      readTime: "6 min",
      date: "Jan 10, 2024",
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&q=80"
    },
    {
      id: 4,
      title: "Food Sources Expands to Eastern Region",
      excerpt: "We're excited to announce our new distribution center in Dammam...",
      category: "company-updates",
      author: "Food Sources Team",
      readTime: "3 min",
      date: "Jan 8, 2024",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80"
    },
    {
      id: 5,
      title: "Pairing Mediterranean Pickles with Local Saudi Dishes",
      excerpt: "Fusion cuisine ideas that blend traditional flavors with Mediterranean ingredients...",
      category: "recipes",
      author: "Chef Maria",
      readTime: "7 min",
      date: "Jan 5, 2024",
      image: "https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?w=600&q=80"
    },
    {
      id: 6,
      title: "Understanding SFDA Certification for Food Imports",
      excerpt: "A comprehensive guide to food safety regulations in Saudi Arabia...",
      category: "industry-news",
      author: "Compliance Team",
      readTime: "10 min",
      date: "Jan 3, 2024",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
    },
  ]

  const filteredArticles = articles
    .filter(a => selectedCategory === 'all' || a.category === selectedCategory)
    .filter(a => 
      searchQuery === '' || 
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.author.toLowerCase().includes(searchQuery.toLowerCase())
    )

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'recipes': 'bg-terracotta/10 text-terracotta',
      'industry-news': 'bg-olive/10 text-olive',
      'product-guides': 'bg-gold/10 text-gold-700',
      'company-updates': 'bg-blue-500/10 text-blue-700',
    }
    return colors[category] || 'bg-charcoal-100 text-charcoal-700'
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream to-white py-20">
        <div className="container-custom text-center">
          <div className="inline-block">
            <span className="text-sm font-medium text-olive bg-olive/10 px-4 py-2 rounded-full mb-4">
              Blog & Resources
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6">
            Insights & Inspiration
          </h1>
          <p className="text-xl text-charcoal-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Expert recipes, industry trends, and professional tips for culinary excellence
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, recipes, and topics..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive focus:border-transparent text-lg bg-white shadow-sm"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full font-medium transition-all capitalize text-sm ${
                  selectedCategory === cat
                    ? 'bg-olive text-white shadow-lg transform scale-105'
                    : 'bg-white text-charcoal-700 hover:bg-cream-100 border border-charcoal-200'
                }`}
              >
                {cat === 'all' ? 'All Articles' : cat.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {selectedCategory === 'all' && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-olive uppercase tracking-wider">Featured Article</span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-2">Editor's Pick</h2>
            </div>
            <Card hover className="overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-square bg-cream-200 relative">
                  <Image
                    src={articles[0].image}
                    alt={articles[0].title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-cream-50 to-white">
                  <span className={`inline-block text-xs font-semibold px-4 py-2 rounded-full mb-4 w-fit ${getCategoryColor('recipes')}`}>
                    FEATURED • RECIPES
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">
                    10 Creative Ways to Use Kalamata Olives in Your Menu
                  </h2>
                  <p className="text-charcoal-600 mb-8 leading-relaxed text-lg">
                    Discover innovative recipes and presentation ideas that will elevate your Mediterranean dishes and delight your customers.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-charcoal-500 mb-8">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>Chef Maria</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>5 min read</span>
                    </div>
                    <span className="text-charcoal-400">January 15, 2024</span>
                  </div>
                  <Link href={`/${locale}/blog/1`}>
                    <Button variant="primary" size="lg" className="group">
                      Read Full Article <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              {selectedCategory === 'all' ? 'All Articles' : `${selectedCategory.replace('-', ' ')} Articles`}
            </h2>
            <p className="text-charcoal-600">
              {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Card key={article.id} hover className="overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-cream-200 relative overflow-hidden group">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(article.category)}`}>
                      {article.category.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className="text-xs text-charcoal-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3 line-clamp-2 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-charcoal-600 mb-6 line-clamp-3 flex-1 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-charcoal-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/${locale}/blog/${article.id}`} className="text-olive font-semibold hover:text-olive/80 transition-colors inline-flex items-center group">
                    Read Article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-br from-olive to-olive-800 py-20">
        <div className="container-custom">
          <Card className="p-8 md:p-16 max-w-4xl mx-auto text-center bg-white shadow-2xl">
            <div className="mb-8">
              <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Stay Ahead of the Curve
              </h2>
              <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get exclusive recipes, industry insights, and professional tips delivered straight to your inbox every month.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive focus:border-transparent text-lg"
              />
              <Button variant="primary" size="lg" className="px-8">
                Subscribe Now
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-charcoal-500">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No spam, ever
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Unsubscribe anytime
              </span>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
