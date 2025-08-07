const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'ww97anmg',
  dataset: 'production',
  apiVersion: '2024-08-05',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

const categories = [
  { name: 'Tortas', cardBgColor: '#E67792', portionBgColor: '#EB1951', order: 1 },
  { name: 'Tartas', cardBgColor: '#A6BFB1', portionBgColor: '#5A9272', order: 2 },
  { name: 'Brownies', cardBgColor: '#F19C32', portionBgColor: '#C57512', order: 3 },
  { name: 'Cheesecakes', cardBgColor: '#F8C8DC', portionBgColor: '#E91E63', order: 4 },
  { name: 'Alfajores', cardBgColor: '#C680CC', portionBgColor: '#AA17B6', order: 5 },
  { name: 'Otros', cardBgColor: '#FFEB3B', portionBgColor: '#F57F17', order: 6 },
]

const products = [
  // Tortas
  {
    name: 'Torta Tres Leches',
    description: 'Deliciosa torta tres leches para 10 porciones',
    price: 29560,
    portions: 10,
    categoryName: 'Tortas',
    order: 1,
  },
  {
    name: 'Torta Matilda de Chocolate',
    description: 'Torta de chocolate Matilda para 10 porciones',
    price: 29560,
    portions: 10,
    categoryName: 'Tortas',
    order: 2,
  },
  {
    name: 'Torta Capitas Sin Nueces',
    description: 'Torta Capitas sin nueces por pedido para 10 porciones',
    price: 29560,
    portions: 10,
    categoryName: 'Tortas',
    order: 3,
  },
  {
    name: 'Torta Imperial',
    description: 'Torta Imperial por pedido para 10 porciones',
    price: 29560,
    portions: 10,
    categoryName: 'Tortas',
    order: 4,
  },
  {
    name: 'Torta Oreo',
    description: 'Torta Oreo para 10 porciones',
    price: 29600,
    portions: 10,
    categoryName: 'Tortas',
    order: 5,
  },
  {
    name: 'Torta Chocolina',
    description: 'Torta Chocolina para 10 porciones',
    price: 29600,
    portions: 10,
    categoryName: 'Tortas',
    order: 6,
  },
  {
    name: 'Torta Oreolina',
    description: 'Torta Oreolina para 10 porciones',
    price: 29600,
    portions: 10,
    categoryName: 'Tortas',
    order: 7,
  },
  {
    name: 'Torta Nugaton',
    description: 'Torta Nugaton con drip de chocolate negro o blanco para 10 porciones',
    price: 29600,
    portions: 10,
    categoryName: 'Tortas',
    order: 8,
  },
  {
    name: 'Torta Oreonut',
    description: 'Torta Oreonut para 10 porciones',
    price: 36000,
    portions: 10,
    categoryName: 'Tortas',
    order: 9,
  },
  
  // Cheesecakes
  {
    name: 'Cheesecake',
    description: 'Cheesecake con reducción de frutos rojos para 10-12 porciones',
    price: 37800,
    portions: 12,
    categoryName: 'Cheesecakes',
    order: 1,
  },
  
  // Tartas
  {
    name: 'Tarta Mousse Nutella',
    description: 'Tarta mousse de Nutella para 8-10 porciones',
    price: 26520,
    portions: 10,
    categoryName: 'Tartas',
    order: 1,
  },
  {
    name: 'Lemon Pie Clásico',
    description: 'Lemon pie clásico para 10 porciones aproximadamente',
    price: 26520,
    portions: 10,
    categoryName: 'Tartas',
    order: 2,
  },
  {
    name: 'Tarta Coco',
    description: 'Tarta de coco para 10 porciones aproximadamente',
    price: 26520,
    portions: 10,
    categoryName: 'Tartas',
    order: 3,
  },
  {
    name: 'Tarta Cabsha',
    description: 'Tarta Cabsha para 10 porciones aproximadamente',
    price: 26520,
    portions: 10,
    categoryName: 'Tartas',
    order: 4,
  },
  {
    name: 'Tarta Nube de Nuez Clásica Sin Harinas',
    description: 'Tarta nube de nuez clásica sin harinas con nueces para 10 porciones',
    price: 24150,
    portions: 10,
    categoryName: 'Tartas',
    order: 5,
  },
  {
    name: 'Tarta de Frutilla',
    description: 'Tarta de frutilla para 8-10 porciones',
    price: 26520,
    portions: 10,
    categoryName: 'Tartas',
    order: 6,
  },
  
  // Brownies
  {
    name: 'Brownie Clásico',
    description: 'Brownie clásico con dulce de leche y merengue para 10 porciones',
    price: 21960,
    portions: 10,
    categoryName: 'Brownies',
    order: 1,
  },
  {
    name: 'Brownie con Nueces',
    description: 'Brownie con dulce de leche, merengue y nueces para 10 porciones',
    price: 22920,
    portions: 10,
    categoryName: 'Brownies',
    order: 2,
  },
  {
    name: 'Brownie con Frutos Rojos',
    description: 'Brownie con dulce de leche, crema y frutos rojos para 10 porciones',
    price: 26400,
    portions: 10,
    categoryName: 'Brownies',
    order: 3,
  },
  {
    name: 'Brownie Mousse de Nutella',
    description: 'Brownie con dulce de leche, mousse de Nutella y praliné de almendras para 10 porciones',
    price: 27840,
    portions: 10,
    categoryName: 'Brownies',
    order: 4,
  },
  
  // Alfajores
  {
    name: 'Alfajor Marplatense',
    description: 'Alfajor marplatense individual',
    price: 2040,
    portions: 1,
    categoryName: 'Alfajores',
    order: 1,
  },
  {
    name: 'Alfabrownie Blanco',
    description: 'Alfajor brownie con chocolate blanco',
    price: 2040,
    portions: 1,
    categoryName: 'Alfajores',
    order: 2,
  },
  {
    name: 'Alfajor Maicena',
    description: 'Alfajor de maicena individual',
    price: 2040,
    portions: 1,
    categoryName: 'Alfajores',
    order: 3,
  },
  {
    name: 'Alfajor Coco',
    description: 'Alfajor de coco individual',
    price: 2040,
    portions: 1,
    categoryName: 'Alfajores',
    order: 4,
  },
  {
    name: 'Alfanuez',
    description: 'Alfajor de nuez individual',
    price: 2040,
    portions: 1,
    categoryName: 'Alfajores',
    order: 5,
  },
  {
    name: 'Antojitos Mixtos',
    description: '5 mini alfabrownie y 5 mini alfanuez',
    price: 7200,
    portions: 10,
    categoryName: 'Alfajores',
    order: 6,
  },
  {
    name: 'Maicenitas',
    description: '12 mini maicenitas',
    price: 5148,
    portions: 12,
    categoryName: 'Alfajores',
    order: 7,
  },
  
  // Otros
  {
    name: 'Bandeja Variaditos',
    description: 'Bandeja de 25 variaditos',
    price: 23322,
    portions: 25,
    categoryName: 'Otros',
    order: 1,
  },
  {
    name: 'Flan de Leche Condensada',
    description: 'Flan de leche condensada',
    price: 26400,
    portions: 8,
    categoryName: 'Otros',
    order: 2,
  },
  {
    name: 'Crocante de Nuez Simple',
    description: 'Crocante de nuez simple',
    price: 25560,
    portions: 8,
    categoryName: 'Otros',
    order: 3,
  },
  {
    name: 'Conitos DDL Bañados',
    description: 'Conitos de dulce de leche bañados',
    price: 1680,
    portions: 1,
    categoryName: 'Otros',
    order: 4,
  },
  {
    name: 'Postre Oreo Individual',
    description: 'Postre congelado individual sabor Oreo',
    price: 6360,
    portions: 1,
    categoryName: 'Otros',
    order: 5,
  },
  {
    name: 'Trufas Chocolina',
    description: 'Trufas sabor Chocolina',
    price: 6336,
    portions: 1,
    categoryName: 'Otros',
    order: 6,
  },
]

async function populateData() {
  try {
    console.log('Creating categories...')
    
    // Create categories
    const createdCategories = {}
    for (const category of categories) {
      const doc = {
        _type: 'category',
        name: category.name,
        slug: { current: category.name.toLowerCase().replace(/\s+/g, '-') },
        cardBgColor: category.cardBgColor,
        portionBgColor: category.portionBgColor,
        order: category.order,
      }
      
      const result = await client.create(doc)
      createdCategories[category.name] = result._id
      console.log(`Created category: ${category.name}`)
    }
    
    console.log('Creating products...')
    
    // Create products
    for (const product of products) {
      const categoryId = createdCategories[product.categoryName]
      if (!categoryId) {
        console.log(`Category not found for product: ${product.name}`)
        continue
      }
      
      const doc = {
        _type: 'product',
        name: product.name,
        slug: { current: product.name.toLowerCase().replace(/\s+/g, '-') },
        description: product.description,
        price: product.price,
        portions: product.portions,
        category: { _type: 'reference', _ref: categoryId },
        available: true,
        featured: false,
        order: product.order,
      }
      
      const result = await client.create(doc)
      console.log(`Created product: ${product.name}`)
    }
    
    console.log('Data population completed!')
    
  } catch (error) {
    console.error('Error populating data:', error)
  }
}

populateData()