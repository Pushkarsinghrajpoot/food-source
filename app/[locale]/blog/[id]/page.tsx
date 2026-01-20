'use client'

import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, User, ArrowLeft, ArrowRight } from "lucide-react"
import { useLocale } from 'next-intl'

export default function BlogArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const locale = useLocale()
  const resolvedParams = use(params)
  const articleId = resolvedParams.id

  // Mock Fetch (replace with DB/API)
  const article = {
    id: articleId,
    title: "10 Creative Ways to Use Kalamata Olives in Your Menu",
    excerpt: "Discover innovative recipes and presentation ideas that will elevate your Mediterranean dishes...",
    category: "recipes",
    author: "Chef Maria",
    readTime: "5 min",
    date: "January 15, 2024",
    cover: "https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?w=1200&q=80",
    content: `
    Kalamata olives are a staple in Mediterranean cuisine, prized for their rich flavor and versatility.
    In this guide, we will explore new and creative ways to integrate these ingredients into modern menus
    for restaurants, caterers, and premium food services.

    From spreads and marinades to complex pairings and fusion techniques, olives offer a surprising
    amount of depth that can elevate both the presentation and palate experience.

    One exciting approach is to incorporate Kalamata olives into warm salads with roasted vegetables and
    balsamic reductions. This simple pairing creates a vibrant and balanced appetizer with minimal prep.

    Another technique is creating emulsified olive tapenade butter that can be used as a finishing compound
    on steaks, seafood, and grilled breads—delivering Mediterranean richness instantly.
    `
  }

  const related = [
    { id: 2, title: "Pairing Mediterranean Pickles with Local Saudi Dishes", date: "Jan 5, 2024" },
    { id: 3, title: "Complete Guide to Storing and Handling Feta Cheese", date: "Jan 10, 2024" },
    { id: 4, title: "The Rising Demand for Mediterranean Cuisine in Saudi Arabia", date: "Jan 12, 2024" }
  ]

  if (!articleId) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-olive border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-charcoal-600">Loading article...</p>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-20 h-20 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">📄</span>
          </div>
          <h1 className="text-2xl font-bold text-charcoal mb-4">Article Not Found</h1>
          <p className="text-charcoal-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link href={`/${locale}/blog`} className="inline-flex items-center text-olive hover:text-olive/80 transition-colors font-medium">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24">
      
      {/* Back Link */}
      <div className="container-custom mb-10">
        <Link href={`/${locale}/blog`} className="inline-flex items-center text-charcoal-600 hover:text-charcoal transition-all">
          <ArrowLeft size={18} className="mr-2" /> Back to Blog
        </Link>
      </div>

      {/* Hero */}
      <section className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-olive mb-3">
            {article.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-charcoal-600 mb-10">
            <span className="flex items-center gap-2">
              <User size={16} /> {article.author}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} /> {article.readTime} read
            </span>
            <span className="opacity-70">{article.date}</span>
          </div>
        </div>

        {/* Cover */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-20 shadow-xl">
          <Image
            src={article.cover}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="container-custom grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 mb-32">
        
        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          {article.content.split("\n").filter(Boolean).map((p, i) => (
            <p key={i} className={`text-charcoal-700 leading-relaxed mb-6 ${i === 0 ? 'first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85]' : ''}`}>
              {p.trim()}
            </p>
          ))}
        </article>

        {/* Sidebar */}
        <aside className="space-y-10">
          <div>
            <h3 className="uppercase text-sm tracking-wider text-charcoal-500 mb-4">Author</h3>
            <p className="font-semibold text-charcoal mb-1">{article.author}</p>
            <p className="text-charcoal-600 text-sm leading-relaxed">
              Mediterranean culinary expert and executive chef specializing in creative modern menus.
            </p>
          </div>

          <div>
            <h3 className="uppercase text-sm tracking-wider text-charcoal-500 mb-4">Category</h3>
            <span className="text-olive font-medium capitalize">{article.category.replace('-', ' ')}</span>
          </div>
        </aside>
      </section>

      {/* Related */}
      <section className="container-custom mb-32">
        <h2 className="text-3xl font-serif font-bold text-charcoal mb-10">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {related.map(r => (
            <Link key={r.id} href={`/${locale}/blog/${r.id}`} className="group">
              <h3 className="text-lg font-semibold text-charcoal group-hover:text-olive transition">
                {r.title}
              </h3>
              <p className="text-sm text-charcoal-500 mt-1">{r.date}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Next / Prev Navigation */}
      <section className="bg-cream py-12">
        <div className="container-custom flex justify-between text-sm">
          <Link href={`/${locale}/blog/${Number(articleId) - 1}`} className="flex items-center gap-2 text-charcoal-600 hover:text-olive transition">
            <ArrowLeft size={16}/> Previous
          </Link>
          <Link href={`/${locale}/blog/${Number(articleId) + 1}`} className="flex items-center gap-2 text-charcoal-600 hover:text-olive transition">
            Next <ArrowRight size={16}/>
          </Link>
        </div>
      </section>

    </div>
  )
}
