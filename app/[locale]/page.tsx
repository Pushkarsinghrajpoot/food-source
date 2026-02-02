'use client'

import Link from "next/link"
import Image from "next/image"
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight, CheckCircle2, Package, Truck, Shield, Users, Award, TrendingUp, FileCheck } from "lucide-react"
import HeroSlider from "@/components/HeroSlider"

export default function Home() {
  const t = useTranslations('home')
  const locale = useLocale()

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Trusted By - Logo Bar */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">Trusted by Leading Businesses Across Saudi Arabia</p>
          <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all">
            <img src="/trusted-partners/almarai-logo.png" alt="Almarai" className="h-10 md:h-12 object-contain" />
            <img src="/trusted-partners/nadec.png" alt="Nadec" className="h-10 md:h-12 object-contain" />
            <img src="/trusted-partners/savola.png" alt="Savola" className="h-10 md:h-12 object-contain" />
            <img src="/trusted-partners/sadafco.png" alt="Sadafco" className="h-10 md:h-12 object-contain" />
            <img src="/trusted-partners/almunajem.png" alt="Almunajem" className="h-10 md:h-12 object-contain" />
          </div>
        </div>
      </section>

      {/* Who We Serve - Industries */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Premium ingredients for Saudi Arabia's hospitality & food service industry</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-5xl mb-4">🏨</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Hotels & Resorts</h3>
              <p className="text-sm text-gray-600">Fine dining & buffet operations</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Restaurants</h3>
              <p className="text-sm text-gray-600">Quick service to fine dining</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Catering</h3>
              <p className="text-sm text-gray-600">Events & corporate catering</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-5xl mb-4">🏪</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Retailers</h3>
              <p className="text-sm text-gray-600">Specialty food stores</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories - Card Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Premium Product Range
            </h2>
            <p className="text-xl text-gray-600">Sourced directly from Mediterranean family producers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href={`/${locale}/products?category=olives`}>
              <div className="group bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl cursor-pointer">
                <div className="h-80 relative overflow-hidden bg-gray-50">
                  <Image
                    src="/All products/kalmata olives/kalmata_olives_3.png"
                    alt="Premium Mediterranean Olives"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900">Olives</h3>
                  <p className="text-sm mb-4 text-gray-500">50+ varieties • Bulk & retail</p>
                  <span className="inline-flex items-center gap-2 font-semibold text-orange-600">
                    View <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>

            <Link href={`/${locale}/products?category=cheeses`}>
              <div className="group bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl cursor-pointer">
                <div className="h-80 relative overflow-hidden bg-gray-50">
                  <Image
                    src="/All products/premium feta cheese/premium_feta_cheese_3.png"
                    alt="Premium Mediterranean Cheese"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900">Cheeses</h3>
                  <p className="text-sm mb-4 text-gray-500">30+ varieties • Feta, Halloumi & more</p>
                  <span className="inline-flex items-center gap-2 font-semibold text-orange-600">
                    View <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>

            <Link href={`/${locale}/products?category=pickles`}>
              <div className="group bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl cursor-pointer">
                <div className="h-80 relative overflow-hidden bg-gray-50">
                  <Image
                    src="/All products/mixed mediterrean pickles/mixed_mediterrean_pickles_3.jpg"
                    alt="Premium Mediterranean Pickles"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900">Pickles</h3>
                  <p className="text-sm mb-4 text-gray-500">40+ varieties • Traditional recipes</p>
                  <span className="inline-flex items-center gap-2 font-semibold text-orange-600">
                    View <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Businesses Choose Us</h2>
            <p className="text-xl text-gray-300">More than just a supplier—your strategic food partner</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Competitive Wholesale Pricing</h3>
              <p className="text-gray-300 mb-4">Volume-based discounts and flexible payment terms for established partners</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Cash & credit accounts available</li>
                <li>• Bulk order discounts</li>
                <li>• Price protection programs</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Reliable Logistics</h3>
              <p className="text-gray-300 mb-4">Next-day delivery across all major KSA cities with temperature control</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• 24-hour delivery (Riyadh, Jeddah, Dammam)</li>
                <li>• Cold chain management</li>
                <li>• Real-time order tracking</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl mb-4">👤</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Dedicated Support</h3>
              <p className="text-gray-300 mb-4">Every account gets a personal manager who understands your business</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Single point of contact</li>
                <li>• Custom product sourcing</li>
                <li>• Menu development support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Split Layout */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-gray-100">
              <Image
                src="/hero.png"
                alt="Premium Mediterranean Food Products"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Quality You Can Trust
              </h2>
              <p className="text-xl text-gray-600 mb-12">Every product meets the highest international & local standards</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-100">
                    <CheckCircle2 size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Direct Sourcing</h3>
                  <p className="text-sm text-gray-600">From Mediterranean producers</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-100">
                    <Shield size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">SFDA Certified</h3>
                  <p className="text-sm text-gray-600">All products certified</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-100">
                    <Truck size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Next-Day Delivery</h3>
                  <p className="text-sm text-gray-600">Across all KSA cities</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-100">
                    <TrendingUp size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Flexible Orders</h3>
                  <p className="text-sm text-gray-600">No minimum quantities</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-100">
                    <Users size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Account Manager</h3>
                  <p className="text-sm text-gray-600">Dedicated support team</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-100">
                    <Award size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Wholesale Pricing</h3>
                  <p className="text-sm text-gray-600">Best rates guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Start Partnering in 3 Steps
            </h2>
            <p className="text-xl text-gray-600">Get approved and start ordering within 48 hours</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="text-center space-y-6">
              <div className="relative inline-block">
                <span className="text-8xl font-light opacity-10 absolute -top-4 left-1/2 -translate-x-1/2 text-gray-300" style={{ fontFamily: 'Space Grotesk, monospace' }}>01</span>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto relative z-10 bg-orange-100">
                  <FileCheck size={32} className="text-orange-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Open Account</h3>
              <p className="text-gray-600">Submit documents online</p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="relative inline-block">
                <span className="text-8xl font-light opacity-10 absolute -top-4 left-1/2 -translate-x-1/2 text-gray-300" style={{ fontFamily: 'Space Grotesk, monospace' }}>02</span>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto relative z-10 bg-orange-100">
                  <CheckCircle2 size={32} className="text-orange-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Receive Approval</h3>
              <p className="text-gray-600">Our team reviews & contacts you</p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="relative inline-block">
                <span className="text-8xl font-light opacity-10 absolute -top-4 left-1/2 -translate-x-1/2 text-gray-300" style={{ fontFamily: 'Space Grotesk, monospace' }}>03</span>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto relative z-10 bg-orange-100">
                  <Package size={32} className="text-orange-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Order & Reorder</h3>
              <p className="text-gray-600">Browse, order, and manage everything online</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">What Our Partners Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg italic text-gray-700 mb-6">
                "Food Sources has been our partner for 3 years. Their quality is consistent, delivery is reliable, and the account manager really understands our needs."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-xl">👨‍🍳</div>
                <div>
                  <p className="font-bold text-gray-900">Ahmad Al-Salem</p>
                  <p className="text-sm text-gray-600">Executive Chef, Riyadh Marriott Hotel</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg italic text-gray-700 mb-6">
                "We switched to Food Sources last year and haven't looked back. The pricing is competitive and the Mediterranean products are authentic."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-xl">👩‍💼</div>
                <div>
                  <p className="font-bold text-gray-900">Sara Al-Ghamdi</p>
                  <p className="text-sm text-gray-600">Owner, La Petite Maison Jeddah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner - Full Width Bold */}
      <section className="py-32" style={{ background: 'linear-gradient(135deg, #1B3A2F 0%, #0F1419 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Ready to Elevate Your Business?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Join 500+ restaurants, hotels, and catering companies partnering with Food Sources for premium Mediterranean ingredients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/${locale}/onboarding`}>
                  <button className="px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-2xl hover:-translate-y-1 bg-orange-600 text-white">
                    Open Business Account →
                  </button>
                </Link>
                <Link href={`/${locale}/contact`}>
                  <button className="px-8 py-4 rounded-full font-semibold text-lg transition-all border-2 border-white/30 hover:bg-white/10 text-white">
                    Talk to Sales
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-white">What You Get:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Flexible payment terms (Cash & Credit)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Next-day delivery across KSA</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Wholesale pricing & volume discounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">SFDA certified products</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
