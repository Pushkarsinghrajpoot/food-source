'use client'

import { useState } from "react"
import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl'
import { CheckCircle2, ArrowRight, ArrowLeft, ShoppingCart, MapPin, FileText } from "lucide-react"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Card from "@/components/ui/Card"

export default function QuotePage() {
  const t = useTranslations('quote')
  const locale = useLocale()
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
    { number: 1, title: t('steps.business'), icon: FileText },
    { number: 2, title: t('steps.products'), icon: ShoppingCart },
    { number: 3, title: t('steps.delivery'), icon: MapPin },
    { number: 4, title: t('steps.review'), icon: CheckCircle2 },
  ]

  const businessTypes = [
    { id: 'hotel', name: t('businessTypes.hotel'), icon: '🏨' },
    { id: 'restaurant', name: t('businessTypes.restaurant'), icon: '🍽️' },
    { id: 'cafe', name: t('businessTypes.cafe'), icon: '☕' },
    { id: 'catering', name: t('businessTypes.catering'), icon: '🎉' },
    { id: 'retail', name: t('businessTypes.retail'), icon: '🏪' },
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
          <Link href={`/${locale}`} className="text-olive font-semibold">{t('backHome')}</Link>
          <p className="text-sm text-charcoal-600">{t('needHelp')} <span className="font-semibold">+966 XX XXX XXXX</span></p>
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
                <h2 className="text-3xl font-bold text-charcoal mb-8">{t('step1.title')}</h2>
                
                <Input
                  label={`${t('step1.businessName')} *`}
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  placeholder="e.g., Al Riyadh Grand Hotel"
                />

                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-4">{t('step1.businessType')} *</label>
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
                    label={`${t('step1.contactPerson')} *`}
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                  />
                  <Input
                    label={`${t('step1.email')} *`}
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label={`${t('step1.phone')} *`}
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">{t('step1.city')} *</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive"
                    >
                      <option value="">{t('step1.selectCity')}</option>
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
                <h2 className="text-3xl font-bold text-charcoal mb-8">{t('step2.title')}</h2>
                
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
                      {formData.selectedProducts.length} {t('step2.selected')}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Delivery Details */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-charcoal mb-8">{t('step3.title')}</h2>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">{t('step3.deliveryAddress')} *</label>
                  <textarea
                    value={formData.deliveryAddress}
                    onChange={(e) => setFormData({...formData, deliveryAddress: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive"
                    placeholder={t('step3.addressPlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-4">{t('step3.deliveryFrequency')} *</label>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {['oneTime', 'weekly', 'biWeekly', 'monthly'].map((freq) => (
                      <button
                        key={freq}
                        onClick={() => setFormData({...formData, deliveryFrequency: freq})}
                        className={`p-4 rounded-lg border-2 transition-all capitalize ${
                          formData.deliveryFrequency === freq
                            ? 'border-olive bg-olive/5 font-semibold'
                            : 'border-charcoal-200 hover:border-olive/50'
                        }`}
                      >
                        {t(`step3.frequencies.${freq}`)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-4">{t('step3.orderVolume')}</label>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {['small', 'medium', 'large', 'veryLarge'].map((vol) => (
                      <button
                        key={vol}
                        onClick={() => setFormData({...formData, orderVolume: vol})}
                        className={`p-4 rounded-lg border-2 transition-all capitalize ${
                          formData.orderVolume === vol
                            ? 'border-olive bg-olive/5 font-semibold'
                            : 'border-charcoal-200 hover:border-olive/50'
                        }`}
                      >
                        {t(`step3.volumes.${vol}`)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">{t('step3.specialRequirements')}</label>
                  <textarea
                    value={formData.specialRequirements}
                    onChange={(e) => setFormData({...formData, specialRequirements: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-olive"
                    placeholder={t('step3.requirementsPlaceholder')}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-charcoal mb-8">{t('step4.title')}</h2>
                
                <Card className="p-6 bg-cream-50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-charcoal">{t('step4.businessInfo')}</h3>
                    <button onClick={() => setCurrentStep(1)} className="text-sm text-olive hover:underline">{t('step4.edit')}</button>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>{t('step4.business')}:</strong> {formData.businessName}</p>
                    <p><strong>{t('step4.type')}:</strong> {formData.businessType}</p>
                    <p><strong>{t('step4.contact')}:</strong> {formData.contactPerson}</p>
                    <p><strong>{t('step1.email')}:</strong> {formData.email}</p>
                    <p><strong>{t('step1.phone')}:</strong> {formData.phone}</p>
                    <p><strong>{t('step1.city')}:</strong> {formData.city}</p>
                  </div>
                </Card>

                <Card className="p-6 bg-cream-50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-charcoal">{t('step4.selectedProducts')}</h3>
                    <button onClick={() => setCurrentStep(2)} className="text-sm text-olive hover:underline">{t('step4.edit')}</button>
                  </div>
                  <p className="text-sm">{formData.selectedProducts.length} {t('step2.selected')}</p>
                </Card>

                <Card className="p-6 bg-cream-50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-charcoal">{t('step4.deliveryPrefs')}</h3>
                    <button onClick={() => setCurrentStep(3)} className="text-sm text-olive hover:underline">{t('step4.edit')}</button>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>{t('step4.frequency')}:</strong> {formData.deliveryFrequency}</p>
                    <p><strong>{t('step4.volume')}:</strong> {formData.orderVolume}</p>
                  </div>
                </Card>

                <div className="flex items-start gap-2 pt-4">
                  <input type="checkbox" id="terms" className="mt-1" required />
                  <label htmlFor="terms" className="text-sm text-charcoal-600">
                    {t('step4.terms')}
                  </label>
                </div>

                <Button onClick={handleSubmit} variant="primary" size="lg" className="w-full">
                  {t('step4.submit')}
                </Button>

                <p className="text-center text-sm text-charcoal-500">
                  {t('step4.response')}
                </p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-12 pt-6 border-t border-charcoal-200">
              {currentStep > 1 && (
                <Button onClick={handleBack} variant="ghost">
                  <ArrowLeft size={20} className="mr-2" />
                  {t('navigation.back')}
                </Button>
              )}
              {currentStep < 4 && (
                <Button onClick={handleNext} variant="primary" className="ml-auto">
                  {t('navigation.continue')}
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              )}
            </div>
          </Card>

          {/* Sidebar Trust Elements */}
          <div className="mt-8 bg-cream-100 rounded-2xl p-6">
            <h3 className="font-semibold text-charcoal mb-4">{t('why.title')}</h3>
            <ul className="space-y-3 text-sm text-charcoal-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={20} className="text-olive flex-shrink-0 mt-0.5" />
                <span>{t('why.reason1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={20} className="text-olive flex-shrink-0 mt-0.5" />
                <span>{t('why.reason2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={20} className="text-olive flex-shrink-0 mt-0.5" />
                <span>{t('why.reason3')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
