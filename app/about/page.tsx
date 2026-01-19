'use client'

import Link from "next/link"
import Image from "next/image"
import { Heart, Target, Award, Users, TrendingUp, Globe, CheckCircle } from "lucide-react"
import Button from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

export default function AboutPage() {
  const values = [
    { icon: Award, title: "Quality First", description: "Never compromising on ingredient excellence" },
    { icon: Heart, title: "Integrity", description: "Honest and transparent in all our dealings" },
    { icon: Users, title: "Partnership", description: "Building lasting relationships with our clients" },
    { icon: TrendingUp, title: "Innovation", description: "Constantly improving our service and offerings" },
    { icon: Globe, title: "Sustainability", description: "Responsible sourcing for future generations" },
    { icon: CheckCircle, title: "Excellence", description: "Exceeding expectations in everything we do" },
  ]

  const timeline = [
    { year: "2015", title: "Founded in Riyadh", description: "Started with a vision to bring authentic Mediterranean flavors to Saudi Arabia" },
    { year: "2017", title: "Expanded Product Range", description: "Added premium cheeses and pickles to our olive collection" },
    { year: "2019", title: "Jeddah Distribution Center", description: "Opened our second facility to serve the Western region" },
    { year: "2021", title: "200+ Partner Milestone", description: "Celebrated serving over 200 hotels and restaurants" },
    { year: "2023", title: "Digital Ordering Platform", description: "Launched our online portal for seamless ordering" },
    { year: "2024", title: "500+ Establishments", description: "Now proudly serving 500+ partners across KSA" },
  ]

  const team = [
    { name: "Omar Al-Saud", title: "Founder & CEO", bio: "20+ years in food distribution with a passion for Mediterranean cuisine" },
    { name: "Sarah Hassan", title: "Head of Operations", bio: "Expert in supply chain management and quality assurance" },
    { name: "Michel Dubois", title: "Chief Product Officer", bio: "Sourcing specialist with deep connections in Mediterranean regions" },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-olive/20 to-cream overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&q=80"
            alt="Mediterranean landscape"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">
              Our Story
            </h1>
            <p className="text-2xl text-charcoal-600 leading-relaxed">
              A family's passion for bringing Mediterranean excellence to Saudi Arabia
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <blockquote className="text-3xl md:text-4xl font-serif text-olive leading-relaxed">
                "We believe every great dish starts with exceptional ingredients"
              </blockquote>
            </div>
            <div className="space-y-4 text-charcoal-700 leading-relaxed text-lg">
              <p>
                Founded in 2015, Food Sources Trading Co. began with a simple mission: to connect Saudi Arabia's finest culinary establishments with the authentic flavors of the Mediterranean.
              </p>
              <p>
                What started as a small family business has grown into one of the region's most trusted suppliers of premium olives, cheeses, and pickles. Today, we're proud to serve over 500 hotels, restaurants, and catering businesses across the Kingdom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Our Journey</h2>
            <p className="text-xl text-charcoal-600">Building excellence, one milestone at a time</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            {timeline.map((milestone, index) => (
              <div key={index} className={`flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="inline-block bg-olive text-white px-4 py-2 rounded-full font-bold mb-3">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-2">{milestone.title}</h3>
                  <p className="text-charcoal-600">{milestone.description}</p>
                </div>
                <div className="w-4 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-olive" />
                  {index !== timeline.length - 1 && (
                    <div className="absolute top-4 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-olive/30" />
                  )}
                </div>
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-12 bg-gradient-to-br from-olive to-olive-600 text-white">
              <Target size={48} className="mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed opacity-95">
                To be the leading provider of Mediterranean ingredients in the Middle East, recognized for uncompromising quality and exceptional service.
              </p>
            </Card>
            <Card className="p-12 bg-white border-2 border-olive/20">
              <Heart size={48} className="mb-6 text-olive" />
              <h2 className="text-3xl font-bold text-charcoal mb-4">Our Mission</h2>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                To empower culinary professionals with premium Mediterranean ingredients, delivered with reliability and expertise that exceeds expectations.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-olive" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">{value.title}</h3>
                <p className="text-charcoal-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">The People Behind the Passion</h2>
            <p className="text-xl text-charcoal-600">Meet the team dedicated to your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square bg-olive/10 relative">
                  <Image
                    src={`https://images.unsplash.com/photo-${['1560250097-0b93528c311a', '1573496799652-408c2ac9fe98', '1519085360753-af0119f409b1'][index]}?w=400&q=80`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-1">{member.name}</h3>
                  <p className="text-sm text-olive font-medium mb-3">{member.title}</p>
                  <p className="text-charcoal-600 text-sm">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Our Commitments</h2>
            <p className="text-xl text-charcoal-600">Certified excellence in every delivery</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {['SFDA Certified', 'Halal Approved', 'ISO 9001', 'Quality Assured'].map((cert, index) => (
              <Card key={index} className="p-6 text-center">
                <Award className="text-olive mx-auto mb-3" size={40} />
                <p className="font-semibold text-charcoal text-sm">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-olive to-olive-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Write the Next Chapter Together
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Partner with a team that cares as much about quality as you do
          </p>
          <Link href="/contact">
            <Button className="bg-white text-olive hover:bg-cream-100" size="lg">
              Become a Partner
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
