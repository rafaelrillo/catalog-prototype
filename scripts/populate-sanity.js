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
  { name: 'Bocaditos', cardBgColor: '#C680CC', portionBgColor: '#AA17B6', order: 4 },
  { name: 'Servicios', cardBgColor: '#E67792', portionBgColor: '#EB1951', order: 5 },
]

const products = [
  {
    name: 'Matilda',
    description: 'Bizcochuelo de chocolate con dulce de leche, relleno y cubierto con crema bariloche',
    price: 9999,
    categoryName: 'Tortas',
    order: 1,
  },
  {
    name: 'Oreo',
    description: 'Base de galletas Oreo con dulce de leche y crema chantilli x2',
    price: 9999,
    categoryName: 'Tortas',
    order: 2,
  },
  {
    name: 'Capita',
    description: 'Capas crocantes intercaladas con dulce de leche cubierto con merengue',
    price: 9999,
    categoryName: 'Tartas',
    order: 1,
  },
  {
    name: 'Nuez sin harina',
    description: 'Base húmeda de nuez sin harinas con dulce de leche, crema y frutos rojos.',
    price: 9999,
    categoryName: 'Tartas',
    order: 2,
  },
  {
    name: 'Mousse Nutella',
    description: 'Masa sable de cacao rellena con dulce de leche y mousse de nutella.',
    price: 9999,
    categoryName: 'Brownies',
    order: 1,
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