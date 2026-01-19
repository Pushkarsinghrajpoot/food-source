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

  useEffect(() => {
    params.then(p => {
      setProductId(p.id)
      const prod = getProductById(p.id)
      if (prod && prod.sizes.length > 0) {
        setSelectedSize(prod.sizes[0])
      }
    })
  }, [])

  const product = productId ? getProductById(productId) : null
  const relatedProducts = productId ? getRelatedProducts(productId) : []

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <p className="text-xl text-charcoal-600">Product not found</p>
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
      <div className="bg-cream-100 py-4">
        <div className="container-custom">
          <nav className="text-sm text-charcoal-600">
            <Link href="/" className="hover:text-olive">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-olive">Products</Link>
            <span className="mx-2">/</span>
            <Link href="/products?category=olives" className="hover:text-olive">Olives</Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal-900">Greek Kalamata Olives</span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-cream-200 rounded-2xl relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, i) => (
                  <div key={i} className="aspect-square bg-cream-200 rounded-lg relative overflow-hidden cursor-pointer hover:ring-2 ring-olive transition-all">
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
                <span className="inline-block text-sm font-medium text-olive bg-olive/10 px-4 py-2 rounded-full mb-4">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-3">{product.name}</h1>
                <p className="text-lg text-charcoal-600">Sourced from {product.origin}</p>
              </div>

              <p className="text-charcoal-700 leading-relaxed">{product.description}</p>

              <div className="border-t border-b border-charcoal-200 py-6 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-charcoal-500 mb-1">Available Sizes</p>
                    <p className="font-medium text-charcoal-900">{product.sizes.join(', ')}</p>
                  </div>
                  <div>
                    <p className="text-charcoal-500 mb-1">Shelf Life</p>
                    <p className="font-medium text-charcoal-900">{product.shelfLife}</p>
                  </div>
                  <div>
                    <p className="text-charcoal-500 mb-1">Storage</p>
                    <p className="font-medium text-charcoal-900">{product.storage}</p>
                  </div>
                  <div>
                    <p className="text-charcoal-500 mb-1">Certification</p>
                    <p className="font-medium text-charcoal-900">{product.certification}</p>
                  </div>
                </div>
              </div>

              {/* Pack Size Selector */}
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-3">Select Pack Size</label>
                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                        selectedSize === size
                          ? 'border-olive bg-olive/5 text-olive'
                          : 'border-charcoal-200 text-charcoal-700 hover:border-olive/50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-charcoal-200 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-cream-100 transition-colors"
                    >
                      <Minus size={20} />
                    </button>
                    <span className="px-6 font-semibold text-lg">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-cream-100 transition-colors"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4">
                <Link href="/quote">
                  <Button variant="primary" size="lg" className="w-full">
                    Add to Quote Request
                  </Button>
                </Link>
                <Button onClick={handleDownloadPDF} variant="outline" size="lg" className="w-full">
                  <Download size={20} className="mr-2" />
                  Download Product Spec Sheet (PDF)
                </Button>
                <Link href="/contact">
                  <Button variant="ghost" size="lg" className="w-full text-olive hover:bg-olive/5">
                    Contact for Bulk Pricing
                  </Button>
                </Link>
              </div>

              {/* Trust Icons */}
              <div className="flex items-center gap-6 pt-6 border-t border-charcoal-200">
                <div className="flex items-center gap-2">
                  <Shield size={24} className="text-olive" />
                  <span className="text-sm font-medium">Food Safe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={24} className="text-olive" />
                  <span className="text-sm font-medium">Halal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package size={24} className="text-olive" />
                  <span className="text-sm font-medium">Premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="bg-cream-50 py-16">
        <div className="container-custom max-w-5xl">
          <div className="border-b border-charcoal-200 mb-8">
            <div className="flex gap-8 overflow-x-auto">
              {['description', 'nutritional', 'shipping', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 font-medium capitalize transition-colors relative ${
                    activeTab === tab
                      ? 'text-olive'
                      : 'text-charcoal-600 hover:text-charcoal-900'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-olive" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-charcoal mb-4">Product Description</h3>
                <p className="text-charcoal-700 leading-relaxed mb-4">
                  {product.description}
                </p>
                <h4 className="text-xl font-semibold text-charcoal mt-6 mb-3">Suggested Uses</h4>
                <ul className="list-disc list-inside space-y-2 text-charcoal-700">
                  {product.suggestedUses.map((use, idx) => (
                    <li key={idx}>{use}</li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'nutritional' && (
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Nutritional Information</h3>
                <p className="text-charcoal-600 mb-4">Per 100g serving</p>
                {product.nutritional ? (
                  <table className="w-full">
                    <tbody className="divide-y divide-charcoal-200">
                      <tr><td className="py-3 text-charcoal-700">Energy</td><td className="py-3 text-right font-medium">{product.nutritional.energy}</td></tr>
                      <tr><td className="py-3 text-charcoal-700">Fat</td><td className="py-3 text-right font-medium">{product.nutritional.fat}</td></tr>
                      <tr><td className="py-3 text-charcoal-700">Carbohydrates</td><td className="py-3 text-right font-medium">{product.nutritional.carbohydrates}</td></tr>
                      <tr><td className="py-3 text-charcoal-700">Protein</td><td className="py-3 text-right font-medium">{product.nutritional.protein}</td></tr>
                      <tr><td className="py-3 text-charcoal-700">Sodium</td><td className="py-3 text-right font-medium">{product.nutritional.sodium}</td></tr>
                    </tbody>
                  </table>
                ) : (
                  <p className="text-charcoal-600">Nutritional information not available</p>
                )}
              </div>
            )}
            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Customer Reviews</h3>
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
                      <span className="text-2xl font-bold text-charcoal">{product.reviews.rating}</span>
                      <span className="text-charcoal-600">({product.reviews.count} reviews)</span>
                    </div>
                    <div className="space-y-6">
                      {product.reviews.comments.map((review, idx) => (
                        <div key={idx} className="border-b border-charcoal-200 pb-6 last:border-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold text-charcoal-900">{review.author}</span>
                            <span className="text-sm text-charcoal-500">{review.date}</span>
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
                          <p className="text-charcoal-700">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-charcoal-600">No reviews yet. Be the first to review this product!</p>
                )}
              </div>
            )}
            {activeTab === 'shipping' && (
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Shipping Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Truck className="text-olive mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-charcoal-900 mb-1">Delivery Time</p>
                      <p className="text-charcoal-600">Next-day delivery available across Riyadh, Jeddah, and Dammam. 2-3 days for other locations in KSA.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="text-olive mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-charcoal-900 mb-1">Minimum Order</p>
                      <p className="text-charcoal-600">Minimum order quantity: 2 units. Free delivery on orders above 500 SAR.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((prod) => (
              <Card key={prod.id} hover className="overflow-hidden group">
                <div className="aspect-square bg-cream-200 relative overflow-hidden">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-olive bg-olive/10 px-3 py-1 rounded-full">
                    {prod.category}
                  </span>
                  <h3 className="text-lg font-semibold text-charcoal mt-3 mb-2">{prod.name}</h3>
                  <p className="text-sm text-charcoal-600 mb-4">{prod.origin}</p>
                  <Link href={`/${locale}/products/${prod.id}`} className="text-olive font-medium text-sm hover:underline inline-flex items-center gap-1">
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
