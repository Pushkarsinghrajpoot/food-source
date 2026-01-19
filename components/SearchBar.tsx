'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  locale: string;
}

export default function SearchBar({ placeholder = 'Search...', onSearch, locale }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      if (onSearch) {
        onSearch(query)
      } else {
        // Default: redirect to products page with search query
        router.push(`/${locale}/products?search=${encodeURIComponent(query)}`)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-charcoal-400" size={20} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:border-olive focus:ring-2 focus:ring-olive/20 transition-all"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-1.5 bg-olive text-white rounded-md hover:bg-olive-600 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  )
}
