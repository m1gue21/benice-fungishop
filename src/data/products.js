// Helper function to get product theme
export function getProductTheme(productName) {
  const name = productName.toLowerCase();
  
  if (name.includes('melena de león') || name.includes('melena')) {
    return {
      primaryColor: '#D97706', // Ámbar oscuro - más legible que el amarillo
      primaryColorDark: '#B45309',
      primaryColorLight: '#F59E0B',
      pattern: 'dendrites', // dendritas/axones + filamentos del hongo
      theme: 'cognitive'
    };
  }
  
  if (name.includes('cordyceps')) {
    return {
      primaryColor: '#E85D04', // Naranja vermilion
      primaryColorDark: '#C94D03',
      primaryColorLight: '#F07A2E',
      pattern: 'altitude', // flujo de aire/altimetría/montañas estilizadas
      theme: 'energy'
    };
  }
  
  if (name.includes('ganoderma') || name.includes('reishi')) {
    return {
      primaryColor: '#5E0B15', // Burdeos profundo
      primaryColorDark: '#4A090F',
      primaryColorLight: '#7A0E1B',
      pattern: 'breath', // ondas suaves/respiración/ramas orgánicas
      theme: 'calm'
    };
  }
  
  if (name.includes('cola de pavo') || name.includes('turkey tail')) {
    return {
      primaryColor: '#128277', // Verde azulado
      primaryColorDark: '#0E6B5F',
      primaryColorLight: '#1A9A8D',
      pattern: 'intestine', // curvas intestinales + abanicos concéntricos
      theme: 'immune'
    };
  }
  
  if (name.includes('psilo')) {
    return {
      primaryColor: '#4B3F72', // Índigo
      primaryColorDark: '#3A2F5A',
      primaryColorLight: '#5D4F8A',
      pattern: 'synapse', // sinapsis + constelaciones
      theme: 'mood'
    };
  }
  
  // Default theme
  return {
    primaryColor: '#7a9b5a',
    primaryColorDark: '#5f7d44',
    primaryColorLight: '#94b377',
    pattern: 'organic',
    theme: 'default'
  };
}

export const products = [
  {
    id: 1,
    name: "Micro Melena de León",
    images: [
      "/products/Micro Melena de León/IMG-20250604-WA0074.jpg",
      "/products/Micro Melena de León/IMG-20250604-WA0076.jpg",
      "/products/Micro Melena de León/IMG-20250604-WA0090.jpg",
      "/products/Micro Melena de León/IMG-20250604-WA0091.jpg",
      "/products/Micro Melena de León/IMG-20250604-WA0096.jpg",
      "/products/Micro Melena de León/IMG-20250604-WA0099.jpg",
      "/products/Micro Melena de León/IMG-20250604-WA0100.jpg",
      "/products/Micro Melena de León/Melena 1.png",
      "/products/Micro Melena de León/Melena 2.png"
    ],
    description: "Micro Melena de León: producto natural de alta calidad para tu bienestar.",
    price: 70000,
    category: "microdosis",
    inStock: true,
    benefits: [
      "Mejora la memoria y la concentración",
      "Promueve la salud del sistema nervioso",
      "Apoya el crecimiento de nuevas neuronas"
    ],
    badge: "Nuevo",
    rating: 4.8,
    reviewsCount: 126,
    ordersCount: 2000,
    theme: getProductTheme("Micro Melena de León")
  },
  {
    id: 2,
    name: "Micro Ganoderma",
    images: [
      "/products/Micro Ganoderma/IMG-20250616-WA0010.jpg",
      "/products/Micro Ganoderma/IMG-20250616-WA0011.jpg",
      "/products/Micro Ganoderma/IMG-20250616-WA0012.jpg",
      "/products/Micro Ganoderma/IMG-20250616-WA0013.jpg",
      "/products/Micro Ganoderma/Ganoderma 1.png",
      "/products/Micro Ganoderma/Ganoderma 2.png"
    ],
    description: "Micro Ganoderma: producto natural de alta calidad para tu bienestar.",
    price: 70000,
    category: "microdosis",
    inStock: true,
    benefits: [
      "Fortalece el sistema inmunológico",
      "Mejora la salud cardiovascular",
      "Posee propiedades antioxidantes"
    ],
    badge: "Mas vendido",
    rating: 4.5,
    reviewsCount: 98,
    ordersCount: 1500,
    theme: getProductTheme("Micro Ganoderma")
  },
  {
    id: 3,
    name: "Micro Cordyceps",
    images: [
      "/products/Micro Cordyceps/IMG-20250604-WA0081.jpg",
      "/products/Micro Cordyceps/IMG-20250604-WA0085.jpg",
      "/products/Micro Cordyceps/IMG-20250604-WA0092.jpg",
      "/products/Micro Cordyceps/IMG-20250604-WA0101.jpg",
      "/products/Micro Cordyceps/Cordyceps 1.png",
      "/products/Micro Cordyceps/Cordyceps 2.png"
    ],
    description: "Micro Cordyceps: producto natural de alta calidad para tu bienestar.",
    price: 70000,
    category: "microdosis",
    inStock: true,
    benefits: [
      "Aumenta la energía y resistencia",
      "Mejora la función respiratoria",
      "Apoya la salud sexual"
    ],
    badge: "Recomendado",
    rating: 4.7,
    reviewsCount: 75, 
    ordersCount: 1800,
    theme: getProductTheme("Micro Cordyceps")
  },
  {
    id: 4,
    name: "Micro Cola de Pavo",
    images: [
      "/products/Micro Cola de Pavo/IMG-20250604-WA0104.jpg",
      "/products/Micro Cola de Pavo/IMG-20250604-WA0098.jpg",
      "/products/Micro Cola de Pavo/IMG-20250604-WA0077.jpg",
      "/products/Micro Cola de Pavo/IMG-20250604-WA0078.jpg",
      "/products/Micro Cola de Pavo/IMG-20250604-WA0079.jpg",
      "/products/Micro Cola de Pavo/IMG-20250604-WA0086.jpg",
      "/products/Micro Cola de Pavo/IMG-20250604-WA0103.jpg",
      "/products/Micro Cola de Pavo/Cola de Pavo.png",
      "/products/Micro Cola de Pavo/Cola de Pavo(1).png"
    ],
    description: "Micro Cola de Pavo: producto natural de alta calidad para tu bienestar.",
    price: 70000,
    category: "microdosis",
    inStock: true,
    benefits: [
      "Apoya la salud del sistema inmunológico",
      "Mejora la salud digestiva",
      "Posee propiedades antiinflamatorias"
    ],
    badge: "Oferta",
    rating: 4.6,
    reviewsCount: 60,
    ordersCount: 2200,
    theme: getProductTheme("Micro Cola de Pavo")
  },
  {
    id: 5,
    name: "Micro Psilo",
    images: [],
    description: "Micro Psilo: producto natural de alta calidad para tu bienestar.",
    price: 70000,
    category: "microdosis",
    inStock: true,
    benefits: [
      "Mejora el estado de ánimo",
      "Aumenta la creatividad",
      "Reduce la ansiedad y el estrés"
    ],
    badge: "Edición limitada",
    rating: 4.9,
    reviewsCount: 45,
    ordersCount: 1900,
    theme: getProductTheme("Micro Psilo")
  },

  
]; 