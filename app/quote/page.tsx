'use client'

import { useState } from "react"
import Link from "next/link"
import { CheckCircle2, ArrowRight, ArrowLeft, ShoppingCart, MapPin, FileText } from "lucide-react"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    contactPerson: '',
    email: '',
    phone: '',
    city: '',
    selectedProducts: [] as string[],
    deliveryAddress: '',
    deliveryFrequency: 'one-time',
    orderVolume: 'medium',
    specialRequirements: '',
  })

  const steps = [
    { number: 1, title: "Your Business", icon: FileText },
    { number: 2, title: "Select Products", icon: ShoppingCart },
    { number: 3, title: "Delivery Details", icon: MapPin },
    { number: 4, title: "Review & Submit", icon: CheckCircle2 },
  ]

  const businessTypes = [
    { id: 'hotel', name: 'Hotel', icon: '🏨' },
    { id: 'restaurant', name: 'Restaurant', icon: '🍽️' },
    { id: 'cafe', name: 'Café', icon: '☕' },
    { id: 'catering', name: 'Catering', icon: '🎉' },
    { id: 'retail', name: 'Retail', icon: '🏪' },
  ]

  const products = [
    { id: '1', name: 'Greek Kalamata Olives', category: 'Olives' },
    { id: '2', name: 'Premium Feta Cheese', category: 'Cheese' },
    { id: '3', name: 'Turkish Pickled Cucumbers', category: 'Pickles' },
    { id: '4', name: 'Lebanese Labneh', category: 'Labneh' },
    { id: '5', name: 'Green Olives Stuffed', category: 'Olives' },
    { id: '6', name: 'Halloumi Cheese', category: 'Cheese' },
  ]

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    console.log('Quote submitted:', formData)
  }

  const toggleProduct = (productId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedProducts: prev.selectedProducts.includes(productId)
        ? prev.selectedProducts.filter(id => id !== productId)
        : [...prev.selectedProducts, productId]
    }))
  }

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      {/* Simplified Header */}
      <div className="bg-white border-b border-charcoal-100 py-4">
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="text-olive font-semibold">← Back to Home</Link>
          <p className="text-sm text-charcoal-600">Need help? Call us: <span className="font-semibold">+966 XX XXX XXXX</span></p>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white py-8 border-b border-charcoal-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                      currentStep >= step.number
                        ? 'bg-olive text-white'
                        : 'bg-charcoal-200 text-charcoal-500'
                    }`}>
                      {currentStep > step.number ? (
                        <CheckCircle2 size={24} />
                      ) : (
                        step.number
                      )}
                    </div>
                    <p className={`text-sm mt-2 font-medium ${
                      currentStep >= step.number ? 'text-olive' : 'text-charcoal-500'
                    }`}>
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-0.5 flex-1 mx-2 ${
                      currentStep > step.number ? 'bg-olive' : 'bg-charcoal-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="section-padding">
        <div className="container-custom max-w-4xl">
          <Card className="p-8 md:p-12">
            {/* Step 1: Business Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-charcoal mb-8">First, tell us about your business</h2>
                
                <Input
                  label="Business Name *"
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  placeholder="e.g., Al Riyadh Grand Hotel"
                />

                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-4">Business Type *</label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {businessTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setFormData({...formData, businessType: type.id})}
                        className={`p-6 rounded-xl border-2 transition-all text-center ${
                          formData.businessType === type.id
                            ? 'border-olive bg-olive/5'
                            : 'border-charcoal-200 hover:border-olive/50'
                        }`}
                      >
                        <div className="text-4xl mb-2">{type.icon}</div>
                        <p className="font-medium text-sm">{type.name}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Contact Person *"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                  />
                  <Input
                    label="Email *"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Phone *"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">City *</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive"
                    >
                      <option value="">Select city</option>
                      <option value="riyadh">Riyadh</option>
                      <option value="jeddah">Jeddah</option>
                      <option value="dammam">Dammam</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Select Products */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-charcoal mb-8">What products are you interested in?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {products.map((product) => (
                    <Card
                      key={product.id}
                      onClick={() => toggleProduct(product.id)}
                      className={`p-6 cursor-pointer transition-all ${
                        formData.selectedProducts.includes(product.id)
                          ? 'ring-2 ring-olive bg-olive/5'
                          : 'hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-charcoal mb-1">{product.name}</h3>
                          <p className="text-sm text-charcoal-600">{product.category}</p>
                        </div>
                        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                          formData.selectedProducts.includes(product.id)
                            ? 'bg-olive border-olive'
                            : 'border-charcoal-300'
                        }`}>
                          {formData.selectedProducts.includes(product.id) && (
                            <CheckCircle2 size={16} className="text-white" />
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {formData.selectedProducts.length > 0 && (
                  <div className="bg-cream-100 rounded-lg p-4">
                    <p className="text-sm font-medium text-charcoal">
                      {formData.selectedProducts.length} product(s) selected
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Delivery Details */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-charcoal mb-8">Where and how often?</h2>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">Delivery Address *</label>
                  <textarea
                    value={formData.deliveryAddress}
                    onChange={(e) => setFormData({...formData, deliveryAddress: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive"
                    placeholder="Enter full delivery address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-4">Preferred Delivery Frequency *</label>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {['one-time', 'weekly', 'bi-weekly', 'monthly'].map((freq) => (
                      <button
                        key={freq}
                        onClick={() => setFormData({...formData, deliveryFrequency: freq})}
                        className={`p-4 rounded-lg border-2 transition-all capitalize ${
                          formData.deliveryFrequency === freq
                            ? 'border-olive bg-olive/5 font-semibold'
                            : 'border-charcoal-200 hover:border-olive/50'
                        }`}
                      >
                        {freq.replace('-', ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-4">Expected Order Volume</label>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {['small', 'medium', 'large', 'very-large'].map((vol) => (
                      <button
                        key={vol}
                        onClick={() => setFormData({...formData, orderVolume: vol})}
                        className={`p-4 rounded-lg border-2 transition-all capitalize ${
                          formData.orderVolume === vol
                            ? 'border-olive bg-olive/5 font-semibold'
                            : 'border-charcoal-200 hover:border-olive/50'
                        }`}
                      >
                        {vol.replace('-', ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">Special Requirements (Optional)</label>
                  <textarea
                    value={formData.specialRequirements}
                    onChange={(e) => setFormData({...formData, specialRequirements: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive"
                    placeholder="Any specific packaging, delivery time preferences, or other requirements?"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-charcoal mb-8">Review your quote request</h2>
                
                <Card className="p-6 bg-cream-50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-charcoal">Business Information</h3>
                    <button onClick={() => setCurrentStep(1)} className="text-sm text-olive hover:underline">Edit</button>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>Business:</strong> {formData.businessName}</p>
                    <p><strong>Type:</strong> {formData.businessType}</p>
                    <p><strong>Contact:</strong> {formData.contactPerson}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <p><strong>City:</strong> {formData.city}</p>
                  </div>
                </Card>

                <Card className="p-6 bg-cream-50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-charcoal">Selected Products</h3>
                    <button onClick={() => setCurrentStep(2)} className="text-sm text-olive hover:underline">Edit</button>
                  </div>
                  <p className="text-sm">{formData.selectedProducts.length} products selected</p>
                </Card>

                <Card className="p-6 bg-cream-50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-charcoal">Delivery Preferences</h3>
                    <button onClick={() => setCurrentStep(3)} className="text-sm text-olive hover:underline">Edit</button>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>Frequency:</strong> {formData.deliveryFrequency}</p>
                    <p><strong>Volume:</strong> {formData.orderVolume}</p>
                  </div>
                </Card>

                <div className="flex items-start gap-2 pt-4">
                  <input type="checkbox" id="terms" className="mt-1" required />
                  <label htmlFor="terms" className="text-sm text-charcoal-600">
                    I agree to the Terms and Privacy Policy
                  </label>
                </div>

                <Button onClick={handleSubmit} variant="primary" size="lg" className="w-full">
                  Submit Quote Request
                </Button>

                <p className="text-center text-sm text-charcoal-500">
                  We'll respond within 24 hours
                </p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-12 pt-6 border-t border-charcoal-200">
              {currentStep > 1 && (
                <Button onClick={handleBack} variant="ghost">
                  <ArrowLeft size={20} className="mr-2" />
                  Back
                </Button>
              )}
              {currentStep < 4 && (
                <Button onClick={handleNext} variant="primary" className="ml-auto">
                  Continue
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              )}
            </div>
          </Card>

          {/* Sidebar Trust Elements */}
          <div className="mt-8 bg-cream-100 rounded-2xl p-6">
            <h3 className="font-semibold text-charcoal mb-4">Why request a quote?</h3>
            <ul className="space-y-3 text-sm text-charcoal-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={20} className="text-olive flex-shrink-0 mt-0.5" />
                <span>Get personalized pricing for your business</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={20} className="text-olive flex-shrink-0 mt-0.5" />
                <span>No commitment required</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={20} className="text-olive flex-shrink-0 mt-0.5" />
                <span>24-hour response time</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
