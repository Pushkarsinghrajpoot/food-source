'use client'

import { useTranslations } from 'next-intl'

export default function PrivacyPage() {
  const t = useTranslations('privacy')

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-cream to-white py-20">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 text-center">
            {t('title') || 'Privacy Policy'}
          </h1>
          <p className="text-lg text-charcoal-600 text-center max-w-3xl mx-auto">
            {t('lastUpdated') || 'Last Updated: January 2026'}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="mb-6 text-charcoal-600">
              We collect information you provide directly to us, including name, email address, phone number, 
              company details, and any other information you choose to provide when using our services.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="mb-6 text-charcoal-600">
              We use the information we collect to provide, maintain, and improve our services, process your 
              orders, communicate with you about products and services, and send you technical notices and updates.
            </p>

            <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="mb-6 text-charcoal-600">
              We do not share your personal information with third parties except as necessary to provide our 
              services, comply with the law, or protect our rights.
            </p>

            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="mb-6 text-charcoal-600">
              We take reasonable measures to help protect your personal information from loss, theft, misuse, 
              unauthorized access, disclosure, alteration, and destruction.
            </p>

            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="mb-6 text-charcoal-600">
              You have the right to access, update, or delete your personal information at any time. Please 
              contact us if you wish to exercise these rights.
            </p>

            <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
            <p className="mb-6 text-charcoal-600">
              If you have any questions about this Privacy Policy, please contact us at privacy@foodsources.com.sa
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
