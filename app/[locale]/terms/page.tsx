'use client'

import { useTranslations } from 'next-intl'

export default function TermsPage() {
  const t = useTranslations('terms')

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-cream to-white py-20">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 text-center">
            {t('title') || 'Terms of Service'}
          </h1>
          <p className="text-lg text-charcoal-600 text-center max-w-3xl mx-auto">
            {t('lastUpdated') || 'Last Updated: January 2026'}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6 text-charcoal-600">
              By accessing and using Food Sources services, you accept and agree to be bound by the terms and 
              provisions of this agreement.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. Use of Services</h2>
            <p className="mb-6 text-charcoal-600">
              Our services are intended for business-to-business transactions. You agree to use our services 
              only for lawful purposes and in accordance with these terms.
            </p>

            <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
            <p className="mb-6 text-charcoal-600">
              To access certain features, you may be required to register for an account. You are responsible 
              for maintaining the confidentiality of your account credentials.
            </p>

            <h2 className="text-2xl font-bold mb-4">4. Orders and Pricing</h2>
            <p className="mb-6 text-charcoal-600">
              All orders are subject to acceptance and availability. Prices are subject to change without notice. 
              Payment terms will be specified in your quote or invoice.
            </p>

            <h2 className="text-2xl font-bold mb-4">5. Delivery Terms</h2>
            <p className="mb-6 text-charcoal-600">
              Delivery times are estimates and not guaranteed. We are not liable for delays caused by factors 
              beyond our reasonable control.
            </p>

            <h2 className="text-2xl font-bold mb-4">6. Product Quality</h2>
            <p className="mb-6 text-charcoal-600">
              All products meet SFDA certification standards. Any quality issues must be reported within 48 hours 
              of delivery for consideration.
            </p>

            <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
            <p className="mb-6 text-charcoal-600">
              Food Sources shall not be liable for any indirect, incidental, special, or consequential damages 
              arising out of or related to the use of our services.
            </p>

            <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
            <p className="mb-6 text-charcoal-600">
              These terms shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia.
            </p>

            <h2 className="text-2xl font-bold mb-4">9. Contact</h2>
            <p className="mb-6 text-charcoal-600">
              For questions about these Terms of Service, please contact us at legal@foodsources.com.sa
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
