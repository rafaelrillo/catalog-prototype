const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'ww97anmg',
  dataset: 'production',
  apiVersion: '2024-08-05',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

async function debugProducts() {
  try {
    console.log('Getting categories...')
    const categories = await client.fetch('*[_type == "category"] | order(order asc)')
    
    console.log('Getting products...')
    const products = await client.fetch(`*[_type == "product" && available == true] | order(order asc) {
      _id,
      name,
      "category": category->{
        _id,
        name
      },
      available
    }`)
    
    console.log(`\n=== CATEGORIES (${categories.length}) ===`)
    categories.forEach((cat, i) => {
      console.log(`${i + 1}. ${cat.name} (ID: ${cat._id.substring(0, 8)}...)`)
    })
    
    console.log(`\n=== PRODUCTS BY CATEGORY ===`)
    for (const category of categories) {
      const categoryProducts = products.filter(p => p.category && p.category._id === category._id)
      console.log(`\n${category.name}: ${categoryProducts.length} products`)
      categoryProducts.forEach((product, i) => {
        console.log(`  ${i + 1}. ${product.name}`)
      })
    }
    
    // Check for products without category
    const productsWithoutCategory = products.filter(p => !p.category)
    if (productsWithoutCategory.length > 0) {
      console.log(`\n⚠️  Products without category: ${productsWithoutCategory.length}`)
      productsWithoutCategory.forEach((product, i) => {
        console.log(`  ${i + 1}. ${product.name}`)
      })
    }
    
  } catch (error) {
    console.error('Error debugging products:', error)
  }
}

debugProducts()