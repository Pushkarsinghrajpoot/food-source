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
    category: 'Premium Olives',
    origin: 'Kalamata, Greece',
    description: 'Authentic Greek Kalamata olives, handpicked and naturally cured. These premium olives offer a rich, fruity flavor with a meaty texture, perfect for Mediterranean dishes and gourmet presentations.',
    sizes: ['5kg tin', '10kg bucket', '20kg barrel'],
    shelfLife: '24 months',
    storage: 'Cool, dry place',
    certification: 'SFDA Approved',
    image: 'https://images.unsplash.com/photo-1587411768339-e0ab6ad0bb3d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1587411768339-e0ab6ad0bb3d?w=800&q=80',
      'https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?w=800&q=80',
      'https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?w=800&q=80',
      'https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?w=800&q=80'
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
    category: 'Cheese',
    origin: 'Thessaloniki, Greece',
    description: 'Authentic Greek Feta cheese made from sheep and goat milk. Creamy, tangy, and crumbly texture perfect for salads, pastries, and Mediterranean dishes.',
    sizes: ['2kg block', '5kg container', '10kg bulk'],
    shelfLife: '6 months refrigerated',
    storage: 'Keep refrigerated at 2-8°C',
    certification: 'SFDA Approved, Halal Certified',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&q=80',
      'https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?w=800&q=80',
      'https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?w=800&q=80',
      'https://images.unsplash.com/photo-1587411768339-e0ab6ad0bb3d?w=800&q=80'
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
    category: 'Pickles',
    origin: 'Bursa, Turkey',
    description: 'Crisp Turkish-style pickled cucumbers with a perfect balance of tang and crunch. Made using traditional fermentation methods.',
    sizes: ['3kg jar', '5kg container', '15kg bucket'],
    shelfLife: '18 months',
    storage: 'Cool, dry place',
    certification: 'SFDA Approved',
    image: 'https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?w=800&q=80',
      'https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?w=800&q=80',
      'https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?w=800&q=80',
      'https://images.unsplash.com/photo-1587411768339-e0ab6ad0bb3d?w=800&q=80'
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
    category: 'Labneh',
    origin: 'Bekaa Valley, Lebanon',
    description: 'Thick, creamy Lebanese labneh made from strained yogurt. Rich in protein and perfect for breakfast spreads or dips.',
    sizes: ['2kg tub', '5kg container', '10kg bulk'],
    shelfLife: '45 days refrigerated',
    storage: 'Keep refrigerated at 2-8°C',
    certification: 'SFDA Approved, Halal Certified',
    image: 'https://images.unsplash.com/photo-1571212515416-9cf500fe1dae?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571212515416-9cf500fe1dae?w=800&q=80',
      'https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?w=800&q=80',
      'https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?w=800&q=80',
      'https://images.unsplash.com/photo-1587411768339-e0ab6ad0bb3d?w=800&q=80'
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
    category: 'Premium Olives',
    origin: 'Seville, Spain',
    description: 'Spanish green olives stuffed with pimento peppers. Firm texture with a mild, slightly bitter taste perfect for cocktails and appetizers.',
    sizes: ['4kg jar', '8kg container', '20kg barrel'],
    shelfLife: '24 months',
    storage: 'Cool, dry place',
    certification: 'SFDA Approved',
    image: 'https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?w=800&q=80',
      'https://images.unsplash.com/photo-1587411768339-e0ab6ad0bb3d?w=800&q=80',
      'https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?w=800&q=80',
      'https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?w=800&q=80'
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
    category: 'Cheese',
    origin: 'Cyprus',
    description: 'Traditional Cypriot semi-hard cheese with high melting point. Perfect for grilling, frying, or eating fresh.',
    sizes: ['2kg block', '5kg bulk', '10kg wholesale'],
    shelfLife: '6 months refrigerated',
    storage: 'Keep refrigerated at 2-8°C',
    certification: 'SFDA Approved, Halal Certified',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f409b1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1519085360753-af0119f409b1?w=800&q=80',
      'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&q=80',
      'https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?w=800&q=80',
      'https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?w=800&q=80'
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
