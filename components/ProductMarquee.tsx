'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  image: string
  scale?: number
}

const products = {
  row1: [
    { id: '1', name: 'Green Olives Stuffed', image: '/All products/green olives stuffed/green_olives_stuffed_2.jpeg', scale: 0.85 },
    { id: '2', name: 'Premium Feta Cheese', image: '/All products/premium feta cheese/premium_feta_cheese_2.png', scale: 0.85 },
    { id: '3', name: 'Mixed Mediterranean Pickles', image: '/All products/mixed mediterrean pickles/mixed_mediterrean_pickles_2.jpg', scale: 0.85 },
    { id: '4', name: 'Kalamata Olives', image: '/All products/kalmata olives/kalmata_olives_2.png', scale: 0.85 },
    { id: '5', name: 'Halloumi Cheese', image: '/All products/Halloumi cheese/halluomi_cheese_2.png', scale: 0.85 },
    { id: '6', name: 'Turkish Pickled Cucumbers', image: '/All products/turkish pickled cucumbers/turkish_pickles_cucumbers_2.jpg', scale: 0.85 },
  ],
  row2: [
    { id: '7', name: 'Green Olives Stuffed', image: '/All products/green olives stuffed/green_olives_stuffed_3.jpeg', scale: 1.2 },
    { id: '8', name: 'Halloumi Cheese', image: '/All products/Halloumi cheese/halluomi_cheese_3.jpg', scale: 1.2 },
    { id: '9', name: 'Mixed Mediterranean Pickles', image: '/All products/mixed mediterrean pickles/mixed_mediterrean_pickles_3.jpg', scale: 1.2 },
    { id: '10', name: 'Lebanese Labneh', image: '/All products/lebanese labneh/lebanese_labneh_2.jpg', scale: 1.2 },
    { id: '11', name: 'Premium Feta Cheese', image: '/All products/premium feta cheese/premium_feta_cheese_3.png', scale: 1.2 },
    { id: '12', name: 'Kalamata Olives', image: '/All products/kalmata olives/kalmata_olives_3.png', scale: 1.2 },
  ],
  row3: [
    { id: '13', name: 'Green Olives', image: '/All products/green olives stuffed/green_olives_stuffed_4.png', scale: 0.75 },
    { id: '14', name: 'Strained Labneh', image: '/All products/strained labneh/strained_labneh_2.jpg', scale: 0.75 },
    { id: '15', name: 'Turkish Pickles', image: '/All products/turkish pickled cucumbers/turkish_pickles_cucumbers_3.jpg', scale: 0.75 },
    { id: '16', name: 'Kalamata Olives', image: '/All products/kalmata olives/kalmata_olives_4.png', scale: 0.75 },
    { id: '17', name: 'Halloumi Cheese', image: '/All products/Halloumi cheese/halluomi_cheese_4.jpg', scale: 0.75 },
    { id: '18', name: 'Mixed Pickles', image: '/All products/mixed mediterrean pickles/mixed_mediterrean_pickles_4.jpg', scale: 0.75 },
  ]
}

interface MarqueeRowProps {
  products: Product[]
  direction: 'left' | 'right'
  speed: number
  opacity: number
}

function MarqueeRow({ products, direction, speed, opacity }: MarqueeRowProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  
  // Duplicate products for seamless loop
  const duplicatedProducts = [...products, ...products, ...products]
  
  return (
    <div className="relative overflow-hidden py-8" style={{ opacity }}>
      {/* Gradient fade edges */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, var(--color-bg-primary), transparent)'
        }}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, var(--color-bg-primary), transparent)'
        }}
      />
      
      <div 
        className={`flex gap-12 ${hoveredProduct ? 'paused' : ''}`}
        style={{
          animation: `scroll-${direction} ${speed}s linear infinite`,
          animationPlayState: hoveredProduct ? 'paused' : 'running'
        }}
      >
        {duplicatedProducts.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="flex-shrink-0 relative transition-transform duration-300 cursor-pointer"
            style={{
              transform: `scale(${hoveredProduct === product.id ? 1.15 : product.scale || 1}) rotateY(${Math.sin(index) * 8}deg)`,
              filter: hoveredProduct && hoveredProduct !== product.id ? 'brightness(0.7)' : 'none'
            }}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div 
              className="relative w-32 h-32 rounded-lg overflow-hidden"
              style={{
                boxShadow: 'var(--product-shadow)',
                animation: 'float 3s ease-in-out infinite',
                animationDelay: `${index * 0.2}s`
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
            
            {/* Tooltip on hover */}
            {hoveredProduct === product.id && (
              <div 
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap animate-fade-in"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-text-on-primary)'
                }}
              >
                {product.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProductMarquee() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center py-12">
      {/* Row 1 - Right to Left - Top */}
      <MarqueeRow 
        products={products.row1}
        direction="left"
        speed={35}
        opacity={0.9}
      />
      
      {/* Row 2 - Left to Right - Middle (Hero) */}
      <MarqueeRow 
        products={products.row2}
        direction="right"
        speed={28}
        opacity={1}
      />
      
      {/* Row 3 - Right to Left - Bottom */}
      <MarqueeRow 
        products={products.row3}
        direction="left"
        speed={40}
        opacity={0.85}
      />
      
      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        
        /* Product shadow variables */
        :root {
          --product-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }
        
        [data-theme="dark"] {
          --product-shadow: 0 15px 50px rgba(0, 0, 0, 0.4), 0 0 40px rgba(125, 164, 125, 0.15);
        }
      `}</style>
    </div>
  )
}
