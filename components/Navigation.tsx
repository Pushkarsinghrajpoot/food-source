'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Globe } from "lucide-react"
import Button from "./ui/Button"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Products', href: '/products' },
    { name: 'Solutions', href: '/about' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism shadow-medium' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-olive transition-transform duration-300 group-hover:scale-110">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5C20 5 25 10 25 15C25 18.3 22.8 21 20 21C17.2 21 15 18.3 15 15C15 10 20 5 20 5Z" fill="currentColor"/>
                <ellipse cx="20" cy="25" rx="12" ry="8" fill="currentColor" opacity="0.7"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-olive">Food Sources</span>
              <span className="text-xs text-charcoal-600">Trading Co.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-charcoal-700 hover:text-olive font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-olive transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-charcoal-700 hover:text-olive transition-colors">
              <Globe size={20} />
              <span className="text-sm">EN</span>
            </button>
            <Link href="/quote">
              <Button variant="primary">Request Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-charcoal-700 hover:text-olive transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-charcoal-100 shadow-lg">
          <div className="container-custom py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-charcoal-700 hover:text-olive font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <button className="flex items-center space-x-2 text-charcoal-700 hover:text-olive">
                <Globe size={20} />
                <span>EN / AR</span>
              </button>
              <Link href="/quote" className="block">
                <Button variant="primary" className="w-full">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
