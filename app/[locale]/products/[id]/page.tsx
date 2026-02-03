'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Plus, Minus, Download, Package, ArrowRight, Shield, Award, Truck, Star } from "lucide-react"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useLocale, useTranslations } from "next-intl"
import productTranslations from "@/data/productTranslations.json"

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const locale = useLocale()
  const t = useTranslations('productDetail')
  const [productId, setProductId] = useState<string>('')
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [selectedImage, setSelectedImage] = useState('')

  useEffect(() => {
    params.then(p => {
      setProductId(p.id)
      const prod = getProductById(p.id)
      if (prod && prod.sizes.length > 0) {
        setSelectedSize(prod.sizes[0])
      }
      if (prod) {
        setSelectedImage(prod.image)
      }
    })
  }, [])

  const product = productId ? getProductById(productId) : null
  const relatedProducts = productId ? getRelatedProducts(productId) : []

  // Get translated product data for Arabic
  const getTranslatedProduct = (product: any) => {
    if (locale === 'ar' && product && product.id && productTranslations[product.id as keyof typeof productTranslations]) {
      const translation = productTranslations[product.id as keyof typeof productTranslations]
      return {
        ...product,
        name: translation.name || product.name,
        description: translation.description || product.description,
        origin: translation.origin || product.origin,
        sizes: translation.sizes || product.sizes,
        shelfLife: translation.shelfLife || product.shelfLife,
        storage: translation.storage || product.storage,
        certification: translation.certification || product.certification,
        suggestedUses: translation.suggestedUses || product.suggestedUses,
        reviews: (translation as any).reviews && product.reviews ? {
          ...product.reviews,
          comments: (translation as any).reviews.comments.map((comment: any, index: number) => ({
            ...product.reviews?.comments[index],
            comment: comment.comment
          }))
        } : product.reviews
      }
    }
    return product
  }

  const translatedProduct = getTranslatedProduct(product)
  const displayProduct = translatedProduct || product

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>{t('notFound')}</p>
      </div>
    )
  }

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
            <Link href={`/${locale}/products?category=${product.category.toLowerCase()}`} className="hover:underline">{t(`breadcrumb.${product.category.toLowerCase()}`)}</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--color-text-primary)' }}>{displayProduct.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
                <Image
                  src={selectedImage || product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedImage(img)}
                    className="aspect-square rounded-lg relative overflow-hidden cursor-pointer hover:ring-2 transition-all"
                    style={{
                      backgroundColor: 'var(--color-bg-tertiary)',
                      boxShadow: selectedImage === img ? '0 0 0 2px var(--color-primary)' : '0 0 0 1px var(--color-border)'
                    }}
                  >
                    <Image
                      src={img}
                      alt={`${t('productView')} ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              <div>
                <span className="inline-block text-sm font-medium px-4 py-2 rounded-full mb-4" style={{ color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)' }}>
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>{displayProduct.name}</h1>
                <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>{t('sourcedFrom')} {displayProduct.origin}</p>
              </div>

              <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{displayProduct.description}</p>

              <div className="py-6 space-y-4" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="mb-1" style={{ color: 'var(--color-text-muted)' }}>{t('availableSizes')}</p>
                    <p className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{displayProduct.sizes.join(', ')}</p>
                  </div>
                  <div>
                    <p className="mb-1" style={{ color: 'var(--color-text-muted)' }}>{t('shelfLife')}</p>
                    <p className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{displayProduct.shelfLife}</p>
                  </div>
                  <div>
                    <p className="mb-1" style={{ color: 'var(--color-text-muted)' }}>{t('storage')}</p>
                    <p className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{displayProduct.storage}</p>
                  </div>
                  <div>
                    <p className="mb-1" style={{ color: 'var(--color-text-muted)' }}>{t('certification')}</p>
                    <p className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{displayProduct.certification}</p>
                  </div>
                </div>
              </div>

              {/* Pack Size Selector */}
              <div>
                <label className="block text-sm font-medium mb-3" style={{ color: 'var(--color-text-secondary)' }}>{t('selectPackSize')}</label>
                <div className="grid grid-cols-3 gap-3">
                  {displayProduct.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className="px-4 py-3 rounded-lg font-medium transition-all"
                      style={{
                        border: selectedSize === size ? '2px solid var(--color-primary)' : '2px solid var(--color-border)',
                        backgroundColor: selectedSize === size ? 'var(--color-primary-light)' : 'transparent',
                        color: selectedSize === size ? 'var(--color-primary)' : 'var(--color-text-secondary)'
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium mb-3" style={{ color: 'var(--color-text-secondary)' }}>{t('quantity')}</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center rounded-lg" style={{ border: '2px solid var(--color-border)' }}>
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 transition-colors"
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-tertiary)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <Minus size={20} />
                    </button>
                    <span className="px-6 font-semibold text-lg" style={{ color: 'var(--color-text-primary)' }}>{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 transition-colors"
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-tertiary)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <Plus size={20} />
                    </button>
                  </div>
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
              {['description', 'nutritional', 'shipping', 'reviews'].map((tab) => (
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
                <p className="leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                  {displayProduct.description}
                </p>
                <h4 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--color-text-primary)' }}>{t('suggestedUses')}</h4>
                <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
                  {displayProduct.suggestedUses.map((use: string, idx: number) => (
                    <li key={idx}>{use}</li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'nutritional' && (
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>{t('tabs.nutritional')}</h3>
                <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>{t('perServing')}</p>
                {displayProduct.nutritional ? (
                  <table className="w-full">
                    <tbody style={{ borderTop: '1px solid var(--color-border)' }}>
                      <tr style={{ borderBottom: '1px solid var(--color-border)' }}><td className="py-3" style={{ color: 'var(--color-text-secondary)' }}>{t('nutritional.energy')}</td><td className="py-3 text-right font-medium" style={{ color: 'var(--color-text-primary)' }}>{displayProduct.nutritional?.energy}</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--color-border)' }}><td className="py-3" style={{ color: 'var(--color-text-secondary)' }}>{t('nutritional.fat')}</td><td className="py-3 text-right font-medium" style={{ color: 'var(--color-text-primary)' }}>{displayProduct.nutritional?.fat}</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--color-border)' }}><td className="py-3" style={{ color: 'var(--color-text-secondary)' }}>{t('nutritional.carbohydrates')}</td><td className="py-3 text-right font-medium" style={{ color: 'var(--color-text-primary)' }}>{displayProduct.nutritional?.carbohydrates}</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--color-border)' }}><td className="py-3" style={{ color: 'var(--color-text-secondary)' }}>{t('nutritional.protein')}</td><td className="py-3 text-right font-medium" style={{ color: 'var(--color-text-primary)' }}>{displayProduct.nutritional?.protein}</td></tr>
                      <tr><td className="py-3" style={{ color: 'var(--color-text-secondary)' }}>{t('nutritional.sodium')}</td><td className="py-3 text-right font-medium" style={{ color: 'var(--color-text-primary)' }}>{displayProduct.nutritional?.sodium}</td></tr>
                    </tbody>
                  </table>
                ) : (
                  <p style={{ color: 'var(--color-text-secondary)' }}>{t('nutritional.notAvailable')}</p>
                )}
              </div>
            )}
            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>{t('tabs.reviews')}</h3>
                {displayProduct.reviews && displayProduct.reviews.count > 0 ? (
                  <>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={24}
                            className={i < Math.round(displayProduct.reviews!.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-charcoal-300'}
                          />
                        ))}
                      </div>
                      <span className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>{displayProduct.reviews.rating}</span>
                      <span style={{ color: 'var(--color-text-secondary)' }}>({displayProduct.reviews.count} {t('reviews')})</span>
                    </div>
                    <div className="space-y-6">
                      {displayProduct.reviews.comments.map((review: any, idx: number) => (
                        <div key={idx} className="pb-6 last:border-0" style={{ borderBottom: '1px solid var(--color-border)' }}>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>{review.author}</span>
                            <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{review.date}</span>
                          </div>
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-charcoal-300'}
                              />
                            ))}
                          </div>
                          <p style={{ color: 'var(--color-text-secondary)' }}>{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <p style={{ color: 'var(--color-text-secondary)' }}>{t('noReviews')}</p>
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
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)' }}>
                    {prod.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-3 mb-2" style={{ color: 'var(--color-text-primary)' }}>{prod.name}</h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>{prod.origin}</p>
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
