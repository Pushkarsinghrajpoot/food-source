'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Upload, Check, Phone, Mail, MapPin, Users, FileText, Camera } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

interface FormData {
  // Step 1
  isExistingCustomer: boolean
  
  // Step 2
  accountType: 'cash_account' | 'credit_account' | 'add_cheese_dairy' | 'add_olives_pickles'
  
  // Step 3
  commercialName: string
  commercialRegisterNumber: string
  crIssueDate: string
  crIssuePlace: string
  businessType: string
  accountHolderName: string
  civilRegisterNumber: string
  crExpiryDate: string
  
  // Step 4
  mobileNumber: string
  email: string
  emailConfirm: string
  vatNumber: string
  nationalAddressCode: string
  
  // Step 5
  docCommercialRegister: File | null
  docVatCertificate: File | null
  docMunicipalLicense: File | null
  docChamberCommerce: File | null
  docNationalAddress: File | null
  docHolderId: File | null
  docStorefrontPhoto: File | null
  termsAccepted: boolean
}

const getBusinessTypes = (locale: string) => {
  if (locale === 'ar') {
    return [
      'فندق',
      'مطعم',
      'مقهى/مقهى قهوة',
      'شركة تقديم طعام',
      'متجر تجزئة/بقالة',
      'سوبر ماركت/هايبر ماركت',
      'تاجر جملة/موزع',
      'شاحنة طعام',
      'مطبخ سحابي',
      'أخرى'
    ]
  }
  return [
    'Hotel',
    'Restaurant', 
    'Café / Coffee Shop',
    'Catering Company',
    'Retail Store / Grocery',
    'Supermarket / Hypermarket',
    'Wholesaler / Distributor',
    'Food Truck',
    'Cloud Kitchen',
    'Other'
  ]
}

const getCities = (locale: string) => {
  if (locale === 'ar') {
    return [
      'الرياض',
      'جدة',
      'مكة',
      'المدينة',
      'الدمام',
      'الخبر',
      'تبوك',
      'أبها',
      'حائل',
      'نجران',
      'جازان',
      'الباحة',
      'عرعر',
      'سكاكا'
    ]
  }
  return [
    'Riyadh',
    'Jeddah',
    'Mecca',
    'Medina',
    'Dammam',
    'Khobar',
    'Tabuk',
    'Abha',
    'Hail',
    'Najran',
    'Jazan',
    'Al-Baha',
    'Arar',
    'Sakaka'
  ]
}

export default function OnboardingPage() {
  const t = useTranslations('onboarding')
  const locale = useLocale()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    isExistingCustomer: false,
    accountType: 'cash_account',
    commercialName: '',
    commercialRegisterNumber: '',
    crIssueDate: '',
    crIssuePlace: '',
    businessType: '',
    accountHolderName: '',
    civilRegisterNumber: '',
    crExpiryDate: '',
    mobileNumber: '',
    email: '',
    emailConfirm: '',
    vatNumber: '',
    nationalAddressCode: '',
    docCommercialRegister: null,
    docVatCertificate: null,
    docMunicipalLicense: null,
    docChamberCommerce: null,
    docNationalAddress: null,
    docHolderId: null,
    docStorefrontPhoto: null,
    termsAccepted: false
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (field: keyof FormData, file: File | undefined) => {
    if (file) {
      setFormData(prev => ({ ...prev, [field]: file }))
    }
  }

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    // Generate reference number
    const refNumber = `FST-2024-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`
    
    // In a real implementation, you would send the form data to your backend here
    console.log('Submitting application:', formData)
    console.log('Reference number:', refNumber)
    
    // Show success message
    setIsSubmitted(true)
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.isExistingCustomer !== undefined
      case 2:
        return formData.accountType !== undefined
      case 3:
        return formData.commercialName && 
               formData.commercialRegisterNumber && 
               formData.crIssueDate && 
               formData.crIssuePlace && 
               formData.businessType && 
               formData.accountHolderName && 
               formData.civilRegisterNumber && 
               formData.crExpiryDate
      case 4:
        return formData.mobileNumber && 
               formData.email && 
               formData.emailConfirm && 
               formData.vatNumber && 
               formData.nationalAddressCode &&
               formData.email === formData.emailConfirm
      case 5:
        return formData.docCommercialRegister && 
               formData.docVatCertificate && 
               formData.docMunicipalLicense && 
               formData.docNationalAddress && 
               formData.docHolderId && 
               formData.docStorefrontPhoto && 
               formData.termsAccepted
      default:
        return false
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-18" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="max-w-2xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce" style={{ backgroundColor: 'var(--color-secondary-light)' }}>
              <Check size={48} style={{ color: 'var(--color-secondary)' }} />
            </div>
            <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              {t('success.title')}
            </h1>
            <p className="text-xl mb-12" style={{ color: 'var(--color-text-secondary)' }}>
              {t('success.message')}
            </p>
            
            <div className="text-left mb-12 p-8 rounded-2xl shadow-md" style={{ backgroundColor: 'var(--color-surface)' }}>
              <p className="font-bold text-lg mb-8" style={{ color: 'var(--color-accent)' }}>
                {t('success.referenceNumber')} FST-2024-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
              </p>
              <h3 className="font-bold text-xl mb-6" style={{ color: 'var(--color-text-primary)' }}>
                {t('success.whatHappensNext')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-light)' }}>
                    <span className="font-bold text-sm" style={{ color: 'var(--color-accent)' }}>1</span>
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)' }}>{t('success.step1')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-light)' }}>
                    <span className="font-bold text-sm" style={{ color: 'var(--color-accent)' }}>2</span>
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)' }}>{t('success.step2')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-light)' }}>
                    <span className="font-bold text-sm" style={{ color: 'var(--color-accent)' }}>3</span>
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)' }}>{t('success.step3')}</p>
                </div>
              </div>
            </div>

            <div className="mb-12 p-6 rounded-xl" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
              <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--color-text-primary)' }}>
                {t('questions')}
              </h3>
              <div className="flex items-center justify-center gap-6" style={{ color: 'var(--color-text-secondary)' }}>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+966 XX XXX XXXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>partners@foodsources.com.sa</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Link href={`/${locale}`}>
                <button className="px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lift hover:-translate-y-1" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-text-on-accent)' }}>
                  {t('returnToHomepage')}
                </button>
              </Link>
              <Link href={`/${locale}/products`}>
                <button className="px-8 py-3 rounded-full border-2 font-semibold transition-all hover:bg-gray-50" style={{ borderColor: 'var(--color-text-primary)', color: 'var(--color-text-primary)' }}>
                  {t('browseProducts')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-18" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      {/* Progress Stepper */}
      <div className="py-12" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--color-text-primary)' }}>
            {t('partnershipApplication')}
          </h1>
          <div className="flex items-center justify-between mb-6">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all relative z-10"
                  style={{
                    backgroundColor: step <= currentStep ? 'var(--color-accent)' : 'var(--color-bg-tertiary)',
                    color: step <= currentStep ? 'white' : 'var(--color-text-tertiary)'
                  }}
                >
                  {step < currentStep ? <Check size={20} /> : step}
                </div>
                {step !== 5 && (
                  <div 
                    className="flex-1 h-1 mx-2"
                    style={{
                      backgroundColor: step < currentStep ? 'var(--color-accent)' : 'var(--color-border)'
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-center" style={{ color: 'var(--color-text-tertiary)' }}>
            <span className="w-12">{t('status')}</span>
            <span className="w-12">{t('type')}</span>
            <span className="w-12">{t('info')}</span>
            <span className="w-12">{t('contact')}</span>
            <span className="w-12">{t('docs')}</span>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-3xl p-8 md:p-12 shadow-lg" style={{ backgroundColor: 'var(--color-surface)' }}>
          {/* Step 1: Customer Status */}
          {currentStep === 1 && (
            <div>
              <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                {t('welcome')}
              </h1>
              <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                {t('welcomeSubtitle')}
              </p>
              
              <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <p className="mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  {t('partnershipInfo')}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  {t('existingCustomerQuestion')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => updateFormData('isExistingCustomer', true)}
                    className={`p-6 rounded-lg border-2 transition-all ${
                      formData.isExistingCustomer === true 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{
                      borderColor: formData.isExistingCustomer === true ? 'var(--color-primary)' : 'var(--color-border)',
                      backgroundColor: formData.isExistingCustomer === true ? 'var(--color-primary-light)' : 'transparent'
                    }}
                  >
                    <div className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                      {locale === 'ar' ? 'نعم' : 'YES'}
                    </div>
                    <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      {locale === 'ar' ? 'لدي بالفعل حساب' : 'I already have an account'}
                    </div>
                  </button>
                  <button
                    onClick={() => updateFormData('isExistingCustomer', false)}
                    className={`p-6 rounded-lg border-2 transition-all ${
                      formData.isExistingCustomer === false 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{
                      borderColor: formData.isExistingCustomer === false ? 'var(--color-primary)' : 'var(--color-border)',
                      backgroundColor: formData.isExistingCustomer === false ? 'var(--color-primary-light)' : 'transparent'
                    }}
                  >
                    <div className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                      {locale === 'ar' ? 'لا' : 'NO'}
                    </div>
                    <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      {locale === 'ar' ? 'أنا عميل جديد' : "I'm a new customer"}
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <div></div>
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={nextStep}
                  disabled={!isStepValid()}
                >
                  {t('next')} <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Account Type */}
          {currentStep === 2 && (
            <div>
              <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                {t('selectAccountType')}
              </h1>
              <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                {t('chooseAccountType')}
              </p>

              {!formData.isExistingCustomer ? (
                // New Customer Flow
                <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                    {t('accountType')}: {t('cashAccount')}
                  </h3>
                  <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                    {t('newCustomerInfo')}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                      <Check size={16} style={{ color: 'var(--color-primary)' }} />
                      <span>{t('fullCatalog')}</span>
                    </div>
                    <div className="flex items-center gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                      <Check size={16} style={{ color: 'var(--color-primary)' }} />
                      <span>{t('competitivePricing')}</span>
                    </div>
                    <div className="flex items-center gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                      <Check size={16} style={{ color: 'var(--color-primary)' }} />
                      <span>{t('nextDayDelivery')}</span>
                    </div>
                    <div className="flex items-center gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                      <Check size={16} style={{ color: 'var(--color-primary)' }} />
                      <span>{t('dedicatedManager')}</span>
                    </div>
                  </div>
                </div>
              ) : (
                // Existing Customer Flow
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                    {t('selectAccountTypeExisting')}
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => updateFormData('accountType', 'credit_account')}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        formData.accountType === 'credit_account' 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{
                        borderColor: formData.accountType === 'credit_account' ? 'var(--color-primary)' : 'var(--color-border)',
                        backgroundColor: formData.accountType === 'credit_account' ? 'var(--color-primary-light)' : 'transparent'
                      }}
                    >
                      <div className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                        {t('openCreditAccount')}
                      </div>
                      <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        {t('upgradeToCredit')}
                      </div>
                    </button>
                    <button
                      onClick={() => updateFormData('accountType', 'add_cheese_dairy')}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        formData.accountType === 'add_cheese_dairy' 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{
                        borderColor: formData.accountType === 'add_cheese_dairy' ? 'var(--color-primary)' : 'var(--color-border)',
                        backgroundColor: formData.accountType === 'add_cheese_dairy' ? 'var(--color-primary-light)' : 'transparent'
                      }}
                    >
                      <div className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                        {t('addCheeseDairy')}
                      </div>
                      <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        {t('expandProductAccess')}
                      </div>
                    </button>
                    <button
                      onClick={() => updateFormData('accountType', 'add_olives_pickles')}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        formData.accountType === 'add_olives_pickles' 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{
                        borderColor: formData.accountType === 'add_olives_pickles' ? 'var(--color-primary)' : 'var(--color-border)',
                        backgroundColor: formData.accountType === 'add_olives_pickles' ? 'var(--color-primary-light)' : 'transparent'
                      }}
                    >
                      <div className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                        {t('addOlivesPickles')}
                      </div>
                      <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        {t('expandProductAccess')}
                      </div>
                    </button>
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                <Button variant="secondary" size="lg" onClick={prevStep}>
                  <ArrowLeft size={16} className="mr-2" /> {t('previous')}
                </Button>
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={nextStep}
                  disabled={!isStepValid()}
                >
                  {t('next')} <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Business Information */}
          {currentStep === 3 && (
            <div>
              <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                {t('businessInformation')}
              </h1>
              <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                {t('tellUsAboutCompany')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {t('commercialNameLabel')}
                  </label>
                  <input
                    type="text"
                    value={formData.commercialName}
                    onChange={(e) => updateFormData('commercialName', e.target.value)}
                    className="w-full p-3 rounded-lg border"
                    style={{
                      borderColor: 'var(--color-border)',
                      backgroundColor: 'var(--color-bg-primary)',
                      color: 'var(--color-text-primary)'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {t('commercialRegisterLabel')}
                  </label>
                  <input
                    type="text"
                    value={formData.commercialRegisterNumber}
                    onChange={(e) => updateFormData('commercialRegisterNumber', e.target.value)}
                    className="w-full p-3 rounded-lg border"
                    style={{
                      borderColor: 'var(--color-border)',
                      backgroundColor: 'var(--color-bg-primary)',
                      color: 'var(--color-text-primary)'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {t('crIssueDateLabel')}
                  </label>
                  <input
                    type="date"
                    value={formData.crIssueDate}
                    onChange={(e) => updateFormData('crIssueDate', e.target.value)}
                    className="w-full p-3 rounded-lg border"
                    style={{
                      borderColor: 'var(--color-border)',
                      backgroundColor: 'var(--color-bg-primary)',
                      color: 'var(--color-text-primary)'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {t('crIssuePlaceLabel')}(Area) *
                  </label>
                  <select
                    value={formData.crIssuePlace}
                    onChange={(e) => updateFormData('crIssuePlace', e.target.value)}
                    className="w-full p-3 rounded-lg border"
                    style={{
                      borderColor: 'var(--color-border)',
                      backgroundColor: 'var(--color-bg-primary)',
                      color: 'var(--color-text-primary)'
                    }}
                  >
                    <option value="">{t('selectCity')}</option>
                    {getCities(locale).map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {t('businessActivityLabel')}
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => updateFormData('businessType', e.target.value)}
                    className="w-full p-3 rounded-lg border"
                    style={{
                      borderColor: 'var(--color-border)',
                      backgroundColor: 'var(--color-bg-primary)',
                      color: 'var(--color-text-primary)'
                    }}
                  >
                    <option value="">{t('selectType')}</option>
                    {getBusinessTypes(locale).map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {t('accountHolderNameLabel')}
                  </label>
                  <input
                    type="text"
                    value={formData.accountHolderName}
                    onChange={(e) => updateFormData('accountHolderName', e.target.value)}
                    className="w-full p-3 rounded-lg border"
                    style={{
                      borderColor: 'var(--color-border)',
                      backgroundColor: 'var(--color-bg-primary)',
                      color: 'var(--color-text-primary)'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {t('civilRegisterLabel')}
                  </label>
                  <input
                    type="text"
                    value={formData.civilRegisterNumber}
                    onChange={(e) => updateFormData('civilRegisterNumber', e.target.value)}
                    className="w-full p-3 rounded-lg border"
                    style={{
                      borderColor: 'var(--color-border)',
                      backgroundColor: 'var(--color-bg-primary)',
                      color: 'var(--color-text-primary)'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {t('crExpiryDateLabel')}
                  </label>
                  <input
                    type="date"
                    value={formData.crExpiryDate}
                    onChange={(e) => updateFormData('crExpiryDate', e.target.value)}
                    className="w-full p-3 rounded-lg border"
                    style={{
                      borderColor: 'var(--color-border)',
                      backgroundColor: 'var(--color-bg-primary)',
                      color: 'var(--color-text-primary)'
                    }}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="secondary" size="lg" onClick={prevStep}>
                  <ArrowLeft size={16} className="mr-2" /> {t('previous')}
                </Button>
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={nextStep}
                  disabled={!isStepValid()}
                >
                  {t('next')} <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Contact Details */}
          {currentStep === 4 && (
            <div>
              <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                {t('contactInformation')}
              </h1>
              <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                {t('howCanWeReachYou')}
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {t('officialMobileLabel')}
                  </label>
                  <div className="flex gap-2">
                    <div className="px-3 py-3 rounded-lg border" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg-secondary)' }}>
                      +966
                    </div>
                    <input
                      type="tel"
                      placeholder="5X XXX XXXX"
                      value={formData.mobileNumber}
                      onChange={(e) => updateFormData('mobileNumber', e.target.value)}
                      className="flex-1 p-3 rounded-lg border"
                      style={{
                        borderColor: 'var(--color-border)',
                        backgroundColor: 'var(--color-bg-primary)',
                        color: 'var(--color-text-primary)'
                      }}
                    />
                  </div>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                    The official mobile number of the company or account holder. We'll send account details to this number.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                      {t('emailAddressLabel')}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="w-full p-3 rounded-lg border"
                      style={{
                        borderColor: 'var(--color-border)',
                        backgroundColor: 'var(--color-bg-primary)',
                        color: 'var(--color-text-primary)'
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                      {t('nationalAddressLabel')} (Short Code) *
                    </label>
                    <input
                      type="text"
                      placeholder="XXXX1234"
                      value={formData.nationalAddressCode}
                      onChange={(e) => updateFormData('nationalAddressCode', e.target.value)}
                      className="w-full p-3 rounded-lg border"
                      style={{
                        borderColor: 'var(--color-border)',
                        backgroundColor: 'var(--color-bg-primary)',
                        color: 'var(--color-text-primary)'
                      }}
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="secondary" size="lg" onClick={prevStep}>
                    <ArrowLeft size={16} className="mr-2" /> {t('previous')}
                  </Button>
                  <Button 
                    variant="primary" 
                    size="lg" 
                    onClick={nextStep}
                    disabled={!isStepValid()}
                  >
                    {t('next')} <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Document Upload */}
          {currentStep === 5 && (
            <div>
              <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                {t('requiredDocuments')}
              </h1>
              <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                {t('uploadDocuments')}
              </p>

              <div className="space-y-8 mb-8">
                {/* Business Documents */}
                <div>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                    {t('businessDocuments')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                        {t('commercialRegister')}
                      </label>
                      <div className="border-2 border-dashed rounded-lg p-6 text-center" style={{ borderColor: 'var(--color-border)' }}>
                        <Upload size={32} className="mx-auto mb-2" style={{ color: 'var(--color-text-tertiary)' }} />
                        <p style={{ color: 'var(--color-text-secondary)' }}>
                          {formData.docCommercialRegister ? formData.docCommercialRegister.name : t('clickToUpload')}
                        </p>
                        <input
                          type="file"
                          onChange={(e) => handleFileUpload('docCommercialRegister', e.target.files?.[0])}
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                        {t('vatCertificate')}
                      </label>
                      <div className="border-2 border-dashed rounded-lg p-6 text-center" style={{ borderColor: 'var(--color-border)' }}>
                        <Upload size={32} className="mx-auto mb-2" style={{ color: 'var(--color-text-tertiary)' }} />
                        <p style={{ color: 'var(--color-text-secondary)' }}>
                          {formData.docVatCertificate ? formData.docVatCertificate.name : t('clickToUpload')}
                        </p>
                        <input
                          type="file"
                          onChange={(e) => handleFileUpload('docVatCertificate', e.target.files?.[0])}
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personal Documents */}
                <div>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                    {t('personalDocuments')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                        {t('municipalLicense')}
                      </label>
                      <div className="border-2 border-dashed rounded-lg p-6 text-center" style={{ borderColor: 'var(--color-border)' }}>
                        <Upload size={32} className="mx-auto mb-2" style={{ color: 'var(--color-text-tertiary)' }} />
                        <p style={{ color: 'var(--color-text-secondary)' }}>
                          {formData.docMunicipalLicense ? formData.docMunicipalLicense.name : t('clickToUpload')}
                        </p>
                        <input
                          type="file"
                          onChange={(e) => handleFileUpload('docMunicipalLicense', e.target.files?.[0])}
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                        {t('nationalAddress')}
                      </label>
                      <div className="border-2 border-dashed rounded-lg p-6 text-center" style={{ borderColor: 'var(--color-border)' }}>
                        <Upload size={32} className="mx-auto mb-2" style={{ color: 'var(--color-text-tertiary)' }} />
                        <p style={{ color: 'var(--color-text-secondary)' }}>
                          {formData.docNationalAddress ? formData.docNationalAddress.name : t('clickToUpload')}
                        </p>
                        <input
                          type="file"
                          onChange={(e) => handleFileUpload('docNationalAddress', e.target.files?.[0])}
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={(e) => updateFormData('termsAccepted', e.target.checked)}
                    className="w-4 h-4 rounded"
                    style={{ accentColor: 'var(--color-primary)' }}
                  />
                  <label className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    I confirm that all information provided is accurate and I agree to the Terms & Conditions and Privacy Policy of Food Sources Trading Co.
                  </label>
                </label>
              </div>

              <div className="flex justify-between">
                <Button variant="secondary" size="lg" onClick={prevStep}>
                  <ArrowLeft size={16} className="mr-2" /> {t('previous')}
                </Button>
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={nextStep}
                  disabled={!isStepValid()}
                >
                  {t('next')} <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 5: Document Upload */}
          {currentStep === 5 && (
            <div>
              <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                {t('requiredDocuments')}
              </h1>
              <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                Please upload the following documents to complete your application
              </p>

              <div className="space-y-8 mb-8">
                {/* Business Documents */}
                <div>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                    BUSINESS DOCUMENTS
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { key: 'docCommercialRegister', label: 'Commercial Register', required: true },
                      { key: 'docVatCertificate', label: 'VAT Certificate', required: true },
                      { key: 'docMunicipalLicense', label: 'Municipal License', required: true },
                      { key: 'docChamberCommerce', label: 'Chamber of Commerce', required: false },
                      { key: 'docNationalAddress', label: 'National Address', required: true },
                      { key: 'docHolderId', label: 'Account Holder ID', required: true }
                    ].map((doc) => (
                      <div key={doc.key} className="p-4 rounded-lg border-2 border-dashed" style={{ borderColor: 'var(--color-border)' }}>
                        <div className="text-center">
                          <FileText size={32} className="mx-auto mb-2" style={{ color: 'var(--color-text-secondary)' }} />
                          <div className="text-sm font-medium mb-1" style={{ color: 'var(--color-text-primary)' }}>
                            {doc.label} {doc.required && '*'}
                          </div>
                          <div className="text-xs mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                            PDF, JPG, PNG {doc.required && ''}
                          </div>
                          <input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => e.target.files && handleFileUpload(doc.key as keyof FormData, e.target.files[0])}
                            className="hidden"
                            id={doc.key}
                          />
                          <label 
                            htmlFor={doc.key}
                            className="cursor-pointer text-sm font-medium px-3 py-1 rounded"
                            style={{ color: 'var(--color-primary)', border: '1px solid var(--color-primary)' }}
                          >
                            {formData[doc.key as keyof FormData] ? 'Change' : 'Upload File'}
                          </label>
                          {formData[doc.key as keyof FormData] && (
                            <div className="text-xs mt-1 text-green-600">
                              ✓ Uploaded
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Storefront */}
                <div>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                    BUSINESS STOREFRONT
                  </h3>
                  <div className="p-8 rounded-lg border-2 border-dashed" style={{ borderColor: 'var(--color-border)' }}>
                    <div className="text-center">
                      <Camera size={48} className="mx-auto mb-4" style={{ color: 'var(--color-text-secondary)' }} />
                      <div className="text-lg font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                        Photo of your business storefront / signage *
                      </div>
                      <div className="mb-4">
                        <input
                          type="file"
                          accept=".jpg,.jpeg,.png"
                          onChange={(e) => e.target.files && handleFileUpload('docStorefrontPhoto', e.target.files[0])}
                          className="hidden"
                          id="storefront"
                        />
                        <label 
                          htmlFor="storefront"
                          className="cursor-pointer inline-block px-6 py-2 rounded font-medium"
                          style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                        >
                          Browse Files
                        </label>
                      </div>
                      <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        JPG, PNG (Max 5MB)
                      </div>
                      {formData.docStorefrontPhoto && (
                        <div className="mt-2 text-green-600">
                          ✓ Photo uploaded successfully
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={(e) => updateFormData('termsAccepted', e.target.checked)}
                    className="mt-1"
                  />
                  <label className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    I confirm that all information provided is accurate and I agree to the Terms & Conditions and Privacy Policy of Food Sources Trading Co.
                  </label>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="secondary" size="lg" onClick={prevStep}>
                  <ArrowLeft size={16} className="mr-2" /> {t('previous')}
                </Button>
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={handleSubmit}
                  disabled={!isStepValid()}
                >
                  {t('submit')}
                </Button>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}
