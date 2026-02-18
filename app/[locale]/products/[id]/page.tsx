'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

import { ArrowLeft, Plus, Minus, Download, Package, ArrowRight, Shield, Award, Truck, Star, RefreshCw } from "lucide-react"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import { useLocale, useTranslations } from "next-intl"

interface SupabaseProduct {
  id: string
  name: string
  category: string
  size: string
  shelf_life: string
  barcode: string
  image_url: string
  description: string
  storage: string
  shelf_life_detail: string
  origin: string
  nutrition: { nutrient: string; amount: string; daily_value: string | null }[]
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const locale = useLocale()
  const t = useTranslations('productDetail')
  const [product, setProduct] = useState<SupabaseProduct | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<SupabaseProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  useEffect(() => {
    params.then(async (p) => {
      try {
        // Fetch single product
        const res = await fetch(`/api/products/${p.id}`)
        const data = await res.json()
        if (data.product) {
          setProduct(data.product)

          // Fetch related products (same category)
          const allRes = await fetch('/api/products')
          const allData = await allRes.json()
          if (allData.products) {
            const related = allData.products
              .filter((prod: SupabaseProduct) => prod.id !== p.id)
              .sort((a: SupabaseProduct, b: SupabaseProduct) =>
                a.category === data.product.category ? -1 : b.category === data.product.category ? 1 : 0
              )
              .slice(0, 4)
            setRelatedProducts(related)
          }
        }
      } catch (err) {
        console.error('Failed to fetch product:', err)
      }
      setLoading(false)
    })
  }, [])

  // Extract suggested uses from description (lines after "Suggested Uses")
  const getSuggestedUses = (desc: string): string[] => {
    if (!desc) return []
    const match = desc.match(/Suggested Uses[:\s]*\n([\s\S]*?)(?:\n\n|$)/)
    if (match) {
      return match[1].split('\n').map(s => s.trim()).filter(s => s.length > 0)
    }
    return []
  }

  // Get main description (before "Suggested Uses")
  const getMainDescription = (desc: string): string => {
    if (!desc) return ''
    const idx = desc.indexOf('Suggested Uses')
    return idx > -1 ? desc.substring(0, idx).trim() : desc
  }

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <RefreshCw className="animate-spin text-gray-400" size={32} />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>{t('notFound')}</p>
      </div>
    )
  }

  const suggestedUses = getSuggestedUses(product.description)
  const mainDescription = getMainDescription(product.description)

  const handleDownloadPDF = () => {
    // Simulate PDF download
    alert(t('downloadAlert'))
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="py-4" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="container-custom">
          <nav className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <Link href={`/${locale}`} className="hover:underline">{t('breadcrumb.home')}</Link>
            <span className="mx-2">/</span>
            <Link href={`/${locale}/products`} className="hover:underline">{t('breadcrumb.products')}</Link>
            <span className="mx-2">/</span>
            <Link href={`/${locale}/products?category=${product.category.toLowerCase()}`} className="hover:underline">{product.category}</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--color-text-primary)' }}>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
                {product.image_url ? (
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Package size={64} className="text-gray-300" />
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              <div>
                <span className="inline-block text-sm font-medium px-4 py-2 rounded-full mb-4" style={{ color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)' }}>
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>{product.name}</h1>
                {product.origin && (
                  <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>{t('sourcedFrom')} {product.origin}</p>
                )}
              </div>

              <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{mainDescription}</p>

              <div className="py-6 space-y-4" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {product.size && (
                    <div>
                      <p className="mb-1" style={{ color: 'var(--color-text-muted)' }}>{t('availableSizes')}</p>
                      <p className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{product.size}</p>
                    </div>
                  )}
                  {product.shelf_life && (
                    <div>
                      <p className="mb-1" style={{ color: 'var(--color-text-muted)' }}>{t('shelfLife')}</p>
                      <p className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{product.shelf_life}</p>
                    </div>
                  )}
                  {product.storage && (
                    <div>
                      <p className="mb-1" style={{ color: 'var(--color-text-muted)' }}>{t('storage')}</p>
                      <p className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{product.storage}</p>
                    </div>
                  )}
                  {product.barcode && (
                    <div>
                      <p className="mb-1" style={{ color: 'var(--color-text-muted)' }}>Barcode</p>
                      <p className="font-medium font-mono" style={{ color: 'var(--color-text-primary)' }}>{product.barcode}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4">
                <div className="text-center mb-4 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-primary-light)', border: '1px solid var(--color-primary)' }}>
                  <p className="text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>{t('interestedMessage')}</p>
                </div>
                <Link href={`/${locale}/onboarding?product=${product.id}`}>
                  <Button variant="primary" size="lg" className="w-full">
                    {t('openAccountToOrder')}
                  </Button>
                </Link>
                <Button onClick={handleDownloadPDF} variant="outline" size="lg" className="w-full">
                  <Download size={20} className="mr-2" />
                  {t('downloadSpecSheet')}
                </Button>
                <Link href={`/${locale}/contact?product=${product.id}`}>
                  <Button variant="ghost" size="lg" className="w-full">
                    {t('contactBulkPricing')}
                  </Button>
                </Link>
              </div>

              {/* Trust Icons */}
              <div className="flex items-center gap-6 pt-6" style={{ borderTop: '1px solid var(--color-border)' }}>
                <div className="flex items-center gap-2">
                  <Shield size={24} style={{ color: 'var(--color-primary)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>{t('trust.foodSafe')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={24} style={{ color: 'var(--color-primary)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>{t('trust.halal')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package size={24} style={{ color: 'var(--color-primary)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>{t('trust.premium')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container-custom max-w-5xl">
          <div className="mb-8" style={{ borderBottom: '1px solid var(--color-border)' }}>
            <div className="flex gap-8 overflow-x-auto">
              {['description', 'nutritional', 'shipping'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="pb-4 font-medium capitalize transition-colors relative"
                  style={{ color: activeTab === tab ? 'var(--color-primary)' : 'var(--color-text-secondary)' }}
                >
                  {t(`tabs.${tab}`)}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: 'var(--color-primary)' }} />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--color-surface)' }}>
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>{t('tabs.description')}</h3>
                <p className="leading-relaxed mb-4 whitespace-pre-line" style={{ color: 'var(--color-text-secondary)' }}>
                  {mainDescription}
                </p>
                {suggestedUses.length > 0 && (
                  <>
                    <h4 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--color-text-primary)' }}>{t('suggestedUses')}</h4>
                    <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
                      {suggestedUses.map((use: string, idx: number) => (
                        <li key={idx}>{use}</li>
                      ))}
                    </ul>
                  </>
                )}
                {product.shelf_life_detail && (
                  <>
                    <h4 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--color-text-primary)' }}>Shelf Life Details</h4>
                    <p className="leading-relaxed whitespace-pre-line" style={{ color: 'var(--color-text-secondary)' }}>{product.shelf_life_detail}</p>
                  </>
                )}
              </div>
            )}
            {activeTab === 'nutritional' && (
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>{t('tabs.nutritional')}</h3>
                <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>{t('perServing')}</p>
                {product.nutrition && product.nutrition.length > 0 ? (
                  <table className="w-full">
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                        <th className="py-3 text-left font-semibold" style={{ color: 'var(--color-text-primary)' }}>Nutrient</th>
                        <th className="py-3 text-right font-semibold" style={{ color: 'var(--color-text-primary)' }}>Amount</th>
                        <th className="py-3 text-right font-semibold" style={{ color: 'var(--color-text-primary)' }}>% Daily Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.nutrition.map((item, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid var(--color-border)' }}>
                          <td className="py-3" style={{ color: 'var(--color-text-secondary)' }}>{item.nutrient}</td>
                          <td className="py-3 text-right font-medium" style={{ color: 'var(--color-text-primary)' }}>{item.amount}</td>
                          <td className="py-3 text-right" style={{ color: 'var(--color-text-muted)' }}>{item.daily_value || '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p style={{ color: 'var(--color-text-secondary)' }}>{t('nutritional.notAvailable')}</p>
                )}
              </div>
            )}
            {activeTab === 'shipping' && (
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>{t('tabs.shipping')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Truck className="mt-1" size={24} style={{ color: 'var(--color-primary)' }} />
                    <div>
                      <p className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>{t('shipping.deliveryTime')}</p>
                      <p style={{ color: 'var(--color-text-secondary)' }}>{t('shipping.deliveryTimeDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="mt-1" size={24} style={{ color: 'var(--color-primary)' }} />
                    <div>
                      <p className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>{t('shipping.minimumOrder')}</p>
                      <p style={{ color: 'var(--color-text-secondary)' }}>{t('shipping.minimumOrderDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--color-text-primary)' }}>{t('relatedProducts')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((prod) => (
              <Card key={prod.id} hover className="overflow-hidden group">
                <div className="aspect-square relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
                  {prod.image_url ? (
                    <Image
                      src={prod.image_url}
                      alt={prod.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Package size={48} className="text-gray-300" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)' }}>
                    {prod.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-3 mb-2" style={{ color: 'var(--color-text-primary)' }}>{prod.name}</h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>{prod.origin || prod.size}</p>
                  <Link href={`/${locale}/products/${prod.id}`} className="font-medium text-sm hover:underline inline-flex items-center gap-1" style={{ color: 'var(--color-primary)' }}>
                    {t('viewDetails')} <ArrowRight size={16} />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
