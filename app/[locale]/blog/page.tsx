'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Clock, User, ArrowRight } from "lucide-react"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

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

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory)

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
      <section className="bg-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
            Insights & Inspiration
          </h1>
          <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Recipes, trends, and tips for culinary professionals
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive text-lg"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all capitalize ${
                  selectedCategory === cat
                    ? 'bg-olive text-white'
                    : 'bg-cream-200 text-charcoal-700 hover:bg-cream-300'
                }`}
              >
                {cat.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {selectedCategory === 'all' && (
        <section className="bg-cream py-16">
          <div className="container-custom">
            <Card hover className="overflow-hidden grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-cream-300 relative">
                <Image
                  src="https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?w=800&q=80"
                  alt="Featured article - Mediterranean ingredients"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit ${getCategoryColor('recipes')}`}>
                  FEATURED • RECIPES
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  10 Creative Ways to Use Kalamata Olives in Your Menu
                </h2>
                <p className="text-charcoal-600 mb-6 leading-relaxed">
                  Discover innovative recipes and presentation ideas that will elevate your Mediterranean dishes and delight your customers.
                </p>
                <div className="flex items-center gap-4 text-sm text-charcoal-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>Chef Maria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>5 min read</span>
                  </div>
                </div>
                <Link href="/blog/1">
                  <Button variant="primary">
                    Read Article <ArrowRight size={20} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Card key={article.id} hover className="overflow-hidden flex flex-col">
                <div className="aspect-video bg-cream-200 relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit ${getCategoryColor(article.category)}`}>
                    {article.category.replace('-', ' ').toUpperCase()}
                  </span>
                  <h3 className="text-xl font-semibold text-charcoal mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-charcoal-600 mb-4 line-clamp-2 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-charcoal-500 mb-4">
                    <span className="flex items-center gap-2">
                      <User size={14} />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={14} />
                      {article.readTime}
                    </span>
                  </div>
                  <Link href={`/blog/${article.id}`} className="text-olive font-medium hover:underline inline-flex items-center">
                    Read More <ArrowRight size={16} className="ml-1" />
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
      <section className="bg-cream py-16">
        <div className="container-custom">
          <Card className="p-8 md:p-12 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Get Monthly Insights Delivered to Your Inbox
            </h2>
            <p className="text-charcoal-600 mb-6">
              Stay updated with industry trends, recipes, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive"
              />
              <Button variant="primary">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-charcoal-500 mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}
