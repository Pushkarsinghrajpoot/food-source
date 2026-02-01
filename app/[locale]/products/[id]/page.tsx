'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Plus, Minus, Download, Package, ArrowRight, Shield, Award, Truck, Star } from "lucide-react"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useLocale } from "next-intl"

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const locale = useLocale()
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

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>Product not found</p>
      </div>
    )
  }

  const handleDownloadPDF = () => {
    // Simulate PDF download
    alert('Product specification sheet will be downloaded. This is a demo - integrate with actual PDF generation/storage.')
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="py-4" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="container-custom">
          <nav className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:underline">Products</Link>
            <span className="mx-2">/</span>
            <Link href="/products?category=olives" className="hover:underline">Olives</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--color-text-primary)' }}>Greek Kalamata Olives</span>
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
                      alt={`Product view ${i + 1}`}
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
                <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>{product.name}</h1>
                <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>Sourced from {product.origin}</p>
              </div>

              <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{product.description}</p>

              <div className="py-6 space-y-4" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="mb-1" style={{ color: 'var(--color-text-muted)' }}>Available Sizes</p>
                    <p className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{product.sizes.join(', ')}</p>
                  </div>
                  <div>
                    <p className="mb-1" style={{ color: 'var(--color-text-muted)' }}>Shelf Life</p>
                    <p className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{product.shelfLife}</p>
                  </div>
                  <div>
                    <p className="mb-1" style={{ color: 'var(--color-text-muted)' }}>Storage</p>
                    <p className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{product.storage}</p>
                  </div>
                  <div>
                    <p className="mb-1" style={{ color: 'var(--color-text-muted)' }}>Certification</p>
                    <p className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{product.certification}</p>
                  </div>
                </div>
              </div>

              {/* Pack Size Selector */}
              <div>
                <label className="block text-sm font-medium mb-3" style={{ color: 'var(--color-text-secondary)' }}>Select Pack Size</label>
                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map((size) => (
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
                <label className="block text-sm font-medium mb-3" style={{ color: 'var(--color-text-secondary)' }}>Quantity</label>
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
                  <p className="text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>Interested in this product?</p>
                </div>
                <Link href={`/${locale}/onboarding?product=${product.id}`}>
                  <Button variant="primary" size="lg" className="w-full">
                    Open Account to Order
                  </Button>
                </Link>
                <Button onClick={handleDownloadPDF} variant="outline" size="lg" className="w-full">
                  <Download size={20} className="mr-2" />
                  Download Product Spec Sheet (PDF)
                </Button>
                <Link href={`/${locale}/contact?product=${product.id}`}>
                  <Button variant="ghost" size="lg" className="w-full">
                    Contact for Bulk Pricing
                  </Button>
                </Link>
              </div>

              {/* Trust Icons */}
              <div className="flex items-center gap-6 pt-6" style={{ borderTop: '1px solid var(--color-border)' }}>
                <div className="flex items-center gap-2">
                  <Shield size={24} style={{ color: 'var(--color-primary)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>Food Safe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={24} style={{ color: 'var(--color-primary)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>Halal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package size={24} style={{ color: 'var(--color-primary)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>Premium</span>
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
                  {tab}
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
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Product Description</h3>
                <p className="leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                  {product.description}
                </p>
                <h4 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--color-text-primary)' }}>Suggested Uses</h4>
                <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
                  {product.suggestedUses.map((use, idx) => (
                    <li key={idx}>{use}</li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'nutritional' && (
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Nutritional Information</h3>
                <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>Per 100g serving</p>
                {product.nutritional ? (
                  <table className="w-full">
                    <tbody style={{ borderTop: '1px solid var(--color-border)' }}>
                      <tr style={{ borderBottom: '1px solid var(--color-border)' }}><td className="py-3" style={{ color: 'var(--color-text-secondary)' }}>Energy</td><td className="py-3 text-right font-medium" style={{ color: 'var(--color-text-primary)' }}>{product.nutritional.energy}</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--color-border)' }}><td className="py-3" style={{ color: 'var(--color-text-secondary)' }}>Fat</td><td className="py-3 text-right font-medium" style={{ color: 'var(--color-text-primary)' }}>{product.nutritional.fat}</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--color-border)' }}><td className="py-3" style={{ color: 'var(--color-text-secondary)' }}>Carbohydrates</td><td className="py-3 text-right font-medium" style={{ color: 'var(--color-text-primary)' }}>{product.nutritional.carbohydrates}</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--color-border)' }}><td className="py-3" style={{ color: 'var(--color-text-secondary)' }}>Protein</td><td className="py-3 text-right font-medium" style={{ color: 'var(--color-text-primary)' }}>{product.nutritional.protein}</td></tr>
                      <tr><td className="py-3" style={{ color: 'var(--color-text-secondary)' }}>Sodium</td><td className="py-3 text-right font-medium" style={{ color: 'var(--color-text-primary)' }}>{product.nutritional.sodium}</td></tr>
                    </tbody>
                  </table>
                ) : (
                  <p style={{ color: 'var(--color-text-secondary)' }}>Nutritional information not available</p>
                )}
              </div>
            )}
            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Customer Reviews</h3>
                {product.reviews && product.reviews.count > 0 ? (
                  <>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={24}
                            className={i < Math.round(product.reviews!.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-charcoal-300'}
                          />
                        ))}
                      </div>
                      <span className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>{product.reviews.rating}</span>
                      <span style={{ color: 'var(--color-text-secondary)' }}>({product.reviews.count} reviews)</span>
                    </div>
                    <div className="space-y-6">
                      {product.reviews.comments.map((review, idx) => (
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
                  <p style={{ color: 'var(--color-text-secondary)' }}>No reviews yet. Be the first to review this product!</p>
                )}
              </div>
            )}
            {activeTab === 'shipping' && (
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Shipping Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Truck className="mt-1" size={24} style={{ color: 'var(--color-primary)' }} />
                    <div>
                      <p className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>Delivery Time</p>
                      <p style={{ color: 'var(--color-text-secondary)' }}>Next-day delivery available across Riyadh, Jeddah, and Dammam. 2-3 days for other locations in KSA.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="mt-1" size={24} style={{ color: 'var(--color-primary)' }} />
                    <div>
                      <p className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>Minimum Order</p>
                      <p style={{ color: 'var(--color-text-secondary)' }}>Minimum order quantity: 2 units. Free delivery on orders above 500 SAR.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--color-text-primary)' }}>You May Also Like</h2>
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
                    View Details <ArrowRight size={16} />
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
