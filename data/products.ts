export interface Product {
  id: string;
  name: string;
  category: string;
  origin: string;
  description: string;
  sizes: string[];
  shelfLife: string;
  storage: string;
  certification: string;
  image: string;
  images: string[];
  nutritional?: {
    energy: string;
    fat: string;
    carbohydrates: string;
    protein: string;
    sodium: string;
  };
  suggestedUses: string[];
  reviews?: {
    rating: number;
    count: number;
    comments: Array<{
      author: string;
      rating: number;
      date: string;
      comment: string;
    }>;
  };
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Greek Kalamata Olives',
    category: 'olives',
    origin: 'Kalamata, Greece',
    description: 'Authentic Greek Kalamata olives, handpicked and naturally cured. These premium olives offer a rich, fruity flavor with a meaty texture, perfect for Mediterranean dishes and gourmet presentations.',
    sizes: ['5kg tin', '10kg bucket', '20kg barrel'],
    shelfLife: '24 months',
    storage: 'Cool, dry place',
    certification: 'SFDA Approved',
    image: '/All products/kalmata olives/kalmata_olives_2.png',
    images: [
      '/All products/kalmata olives/kalmata_olives_2.png',
      '/All products/kalmata olives/kalmata_olives_3.png',
      '/All products/kalmata olives/kalmata_olives_4.png'
    ],
    nutritional: {
      energy: '115 kcal',
      fat: '10.7g',
      carbohydrates: '6.3g',
      protein: '0.8g',
      sodium: '735mg'
    },
    suggestedUses: [
      'Mediterranean salads and appetizers',
      'Pizza and pasta toppings',
      'Olive tapenade and spreads',
      'Cheese and charcuterie boards'
    ],
    reviews: {
      rating: 4.8,
      count: 47,
      comments: [
        {
          author: 'Ahmed Al-Rashid',
          rating: 5,
          date: '2024-01-15',
          comment: 'Excellent quality olives! Our restaurant customers love them.'
        },
        {
          author: 'Sarah Mohammed',
          rating: 5,
          date: '2024-01-10',
          comment: 'Best Kalamata olives I\'ve found in KSA. Authentic taste!'
        }
      ]
    }
  },
  {
    id: '2',
    name: 'Premium Feta Cheese',
    category: 'cheeses',
    origin: 'Thessaloniki, Greece',
    description: 'Authentic Greek Feta cheese made from sheep and goat milk. Creamy, tangy, and crumbly texture perfect for salads, pastries, and Mediterranean dishes.',
    sizes: ['2kg block', '5kg container', '10kg bulk'],
    shelfLife: '6 months refrigerated',
    storage: 'Keep refrigerated at 2-8°C',
    certification: 'SFDA Approved, Halal Certified',
    image: '/All products/premium feta cheese/premium_feta_cheese_2.png',
    images: [
      '/All products/premium feta cheese/premium_feta_cheese_2.png',
      '/All products/premium feta cheese/premium_feta_cheese_3.png',
      '/All products/premium feta cheese/premium_feta_cheese_4.png'
    ],
    nutritional: {
      energy: '264 kcal',
      fat: '21.3g',
      carbohydrates: '4.1g',
      protein: '14.2g',
      sodium: '1116mg'
    },
    suggestedUses: [
      'Greek salads',
      'Spanakopita and savory pastries',
      'Pizza toppings',
      'Breakfast spreads'
    ],
    reviews: {
      rating: 4.9,
      count: 63,
      comments: [
        {
          author: 'Chef Mohammed',
          rating: 5,
          date: '2024-01-18',
          comment: 'Perfect consistency and authentic Greek taste. My hotel guests love it!'
        }
      ]
    }
  },
  {
    id: '3',
    name: 'Turkish Pickled Cucumbers',
    category: 'pickles',
    origin: 'Bursa, Turkey',
    description: 'Crisp Turkish-style pickled cucumbers with a perfect balance of tang and crunch. Made using traditional fermentation methods.',
    sizes: ['3kg jar', '5kg container', '15kg bucket'],
    shelfLife: '18 months',
    storage: 'Cool, dry place',
    certification: 'SFDA Approved',
    image: '/All products/turkish pickled cucumbers/turkish_pickles_cucumbers_2.jpg',
    images: [
      '/All products/turkish pickled cucumbers/turkish_pickles_cucumbers_2.jpg',
      '/All products/turkish pickled cucumbers/turkish_pickles_cucumbers_3.jpg',
      '/All products/turkish pickled cucumbers/turkish_pickles_cucumbers_4.jpg'
    ],
    nutritional: {
      energy: '11 kcal',
      fat: '0.2g',
      carbohydrates: '2.3g',
      protein: '0.3g',
      sodium: '1208mg'
    },
    suggestedUses: [
      'Sandwiches and burgers',
      'Meze platters',
      'Side dishes',
      'Salads'
    ],
    reviews: {
      rating: 4.7,
      count: 38,
      comments: [
        {
          author: 'Restaurant Al-Noor',
          rating: 5,
          date: '2024-01-12',
          comment: 'Great crunch and flavor. Very consistent quality.'
        }
      ]
    }
  },
  {
    id: '4',
    name: 'Lebanese Labneh',
    category: 'labneh',
    origin: 'Bekaa Valley, Lebanon',
    description: 'Thick, creamy Lebanese labneh made from strained yogurt. Rich in protein and perfect for breakfast spreads or dips.',
    sizes: ['2kg tub', '5kg container', '10kg bulk'],
    shelfLife: '45 days refrigerated',
    storage: 'Keep refrigerated at 2-8°C',
    certification: 'SFDA Approved, Halal Certified',
    image: '/All products/lebanese labneh/lebanese_labneh_2.jpg',
    images: [
      '/All products/lebanese labneh/lebanese_labneh_2.jpg',
      '/All products/lebanese labneh/lebanese_labneh_3.jpg',
      '/All products/lebanese labneh/lebanese_labneh_4.jpg'
    ],
    nutritional: {
      energy: '159 kcal',
      fat: '10.5g',
      carbohydrates: '5.8g',
      protein: '10.7g',
      sodium: '82mg'
    },
    suggestedUses: [
      'Breakfast spreads with olive oil',
      'Dips and mezze',
      'Sandwich fillings',
      'Cooking ingredient'
    ],
    reviews: {
      rating: 4.9,
      count: 52,
      comments: [
        {
          author: 'Cafe Beirut',
          rating: 5,
          date: '2024-01-20',
          comment: 'Authentic Lebanese taste! Our customers can\'t get enough.'
        }
      ]
    }
  },
  {
    id: '5',
    name: 'Green Olives Stuffed',
    category: 'olives',
    origin: 'Seville, Spain',
    description: 'Spanish green olives stuffed with pimento peppers. Firm texture with a mild, slightly bitter taste perfect for cocktails and appetizers.',
    sizes: ['4kg jar', '8kg container', '20kg barrel'],
    shelfLife: '24 months',
    storage: 'Cool, dry place',
    certification: 'SFDA Approved',
    image: '/All products/green olives stuffed/green_olives_stuffed_2.jpeg',
    images: [
      '/All products/green olives stuffed/green_olives_stuffed_2.jpeg',
      '/All products/green olives stuffed/green_olives_stuffed_3.jpeg',
      '/All products/green olives stuffed/green_olives_stuffed_4.png'
    ],
    nutritional: {
      energy: '145 kcal',
      fat: '15.3g',
      carbohydrates: '3.8g',
      protein: '1.0g',
      sodium: '1556mg'
    },
    suggestedUses: [
      'Martinis and cocktails',
      'Tapas and appetizers',
      'Salads',
      'Pizza toppings'
    ],
    reviews: {
      rating: 4.6,
      count: 29,
      comments: []
    }
  },
  {
    id: '6',
    name: 'Halloumi Cheese',
    category: 'cheeses',
    origin: 'Cyprus',
    description: 'Traditional Cypriot semi-hard cheese with high melting point. Perfect for grilling, frying, or eating fresh.',
    sizes: ['2kg block', '5kg bulk', '10kg wholesale'],
    shelfLife: '6 months refrigerated',
    storage: 'Keep refrigerated at 2-8°C',
    certification: 'SFDA Approved, Halal Certified',
    image: '/All products/Halloumi cheese/halluomi_cheese_2.png',
    images: [
      '/All products/Halloumi cheese/halluomi_cheese_2.png',
      '/All products/Halloumi cheese/halluomi_cheese_3.jpg',
      '/All products/Halloumi cheese/halluomi_cheese_4.jpg'
    ],
    nutritional: {
      energy: '321 kcal',
      fat: '25.4g',
      carbohydrates: '2.7g',
      protein: '21.2g',
      sodium: '1266mg'
    },
    suggestedUses: [
      'Grilled or fried',
      'Salads',
      'Sandwiches',
      'Breakfast dishes'
    ],
    reviews: {
      rating: 4.8,
      count: 41,
      comments: []
    }
  },
  {
    id: '7',
    name: 'Mixed Mediterranean Pickles',
    category: 'pickles',
    origin: 'Mediterranean Region',
    description: 'A vibrant mix of Mediterranean pickled vegetables including cauliflower, carrots, peppers, and turnips. Perfectly balanced brine for authentic taste.',
    sizes: ['3kg jar', '5kg container', '15kg bucket'],
    shelfLife: '18 months',
    storage: 'Cool, dry place',
    certification: 'SFDA Approved',
    image: '/All products/mixed mediterrean pickles/mixed_mediterrean_pickles_2.jpg',
    images: [
      '/All products/mixed mediterrean pickles/mixed_mediterrean_pickles_2.jpg',
      '/All products/mixed mediterrean pickles/mixed_mediterrean_pickles_3.jpg',
      '/All products/mixed mediterrean pickles/mixed_mediterrean_pickles_4.jpg'
    ],
    nutritional: {
      energy: '25 kcal',
      fat: '0.3g',
      carbohydrates: '5.2g',
      protein: '0.8g',
      sodium: '980mg'
    },
    suggestedUses: [
      'Meze platters',
      'Side dishes',
      'Sandwiches',
      'Mediterranean buffets'
    ],
    reviews: {
      rating: 4.7,
      count: 34,
      comments: []
    }
  },
  {
    id: '8',
    name: 'Strained Labneh',
    category: 'labneh',
    origin: 'Lebanon',
    description: 'Extra thick and creamy strained labneh with rich flavor. Made from premium yogurt using traditional straining methods for superior texture.',
    sizes: ['2kg tub', '5kg container', '10kg bulk'],
    shelfLife: '45 days refrigerated',
    storage: 'Keep refrigerated at 2-8°C',
    certification: 'SFDA Approved, Halal Certified',
    image: '/All products/strained labneh/strained_labneh_2.jpg',
    images: [
      '/All products/strained labneh/strained_labneh_2.jpg',
      '/All products/strained labneh/strained_labneh_3.jpg',
      '/All products/strained labneh/strained_labneh_4.png'
    ],
    nutritional: {
      energy: '175 kcal',
      fat: '12.1g',
      carbohydrates: '4.9g',
      protein: '12.3g',
      sodium: '95mg'
    },
    suggestedUses: [
      'Dips and spreads',
      'Breakfast with honey',
      'Cooking ingredient',
      'Mediterranean mezze'
    ],
    reviews: {
      rating: 4.8,
      count: 45,
      comments: []
    }
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getRelatedProducts(productId: string, limit: number = 4): Product[] {
  const product = getProductById(productId);
  if (!product) return products.slice(0, limit);
  
  // Get products from same category first, then others
  const sameCategory = products.filter(p => p.id !== productId && p.category === product.category);
  const others = products.filter(p => p.id !== productId && p.category !== product.category);
  
  return [...sameCategory, ...others].slice(0, limit);
}
