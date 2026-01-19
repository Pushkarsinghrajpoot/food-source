import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '/about#story' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '/contact' },
    ],
    products: [
      { name: 'Olives', href: '/products?category=olives' },
      { name: 'Cheeses', href: '/products?category=cheeses' },
      { name: 'Pickles', href: '/products?category=pickles' },
      { name: 'All Products', href: '/products' },
    ],
    quickLinks: [
      { name: 'Request Quote', href: '/quote' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Blog', href: '/blog' },
      { name: 'Customer Portal', href: '/portal' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-cream">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 5C20 5 25 10 25 15C25 18.3 22.8 21 20 21C17.2 21 15 18.3 15 15C15 10 20 5 20 5Z" fill="currentColor"/>
                  <ellipse cx="20" cy="25" rx="12" ry="8" fill="currentColor" opacity="0.7"/>
                </svg>
              </div>
              <div>
                <div className="font-serif text-xl font-bold">Food Sources</div>
                <div className="text-sm text-charcoal-400">Trading Co.</div>
              </div>
            </div>
            <p className="text-charcoal-400 mb-6 max-w-sm">
              Premium Mediterranean food distribution company supplying the finest olives, cheeses, and pickles to Saudi Arabia's top establishments.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-charcoal-400">
                <strong className="text-white">Phone:</strong> +966 XX XXX XXXX
              </p>
              <p className="text-sm text-charcoal-400">
                <strong className="text-white">Email:</strong> contact@foodsources.com.sa
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-charcoal-400 hover:text-cream transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-charcoal-400 hover:text-cream transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-charcoal-400 hover:text-cream transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-charcoal-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-serif text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-charcoal-400 text-sm mb-4">
              Get monthly insights and industry news delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-lg bg-charcoal-800 border border-charcoal-700 text-white placeholder:text-charcoal-500 focus:outline-none focus:ring-2 focus:ring-olive"
              />
              <button className="px-6 py-2 bg-olive hover:bg-olive-600 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-charcoal-400 text-sm">
            © 2024 Food Sources Trading Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-charcoal-400 hover:text-cream text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-charcoal-400 hover:text-cream text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-charcoal-400 hover:text-cream transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
