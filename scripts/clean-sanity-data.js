const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'ww97anmg',
  dataset: 'production',
  apiVersion: '2024-08-05',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

async function cleanData() {
  try {
    console.log('Getting all categories...')
    const categories = await client.fetch('*[_type == "category"] | order(_createdAt desc)')
    
    console.log('Getting all products...')
    const products = await client.fetch('*[_type == "product"] | order(_createdAt desc)')
    
    // Delete old products FIRST (the ones created before 2025-08-07)
    const oldProducts = products.filter(prod => prod._createdAt < '2025-08-07T14:00:00Z')
    
    console.log(`\nDeleting ${oldProducts.length} old products first:`)
    for (const product of oldProducts) {
      console.log(`Deleting product: ${product.name} (${product._id})`)
      await client.delete(product._id)
    }
    
    // Now delete old categories (the ones created before 2025-08-07)
    const oldCategories = categories.filter(cat => cat._createdAt < '2025-08-07T14:00:00Z')
    
    console.log(`\nDeleting ${oldCategories.length} old categories:`)
    for (const category of oldCategories) {
      console.log(`Deleting category: ${category.name} (${category._id})`)
      await client.delete(category._id)
    }
    
    console.log('\nCleaning completed!')
    
    // Show final counts
    const finalCategories = await client.fetch('*[_type == "category"]')
    const finalProducts = await client.fetch('*[_type == "product"]')
    console.log(`\nFinal count: ${finalCategories.length} categories, ${finalProducts.length} products`)
    
  } catch (error) {
    console.error('Error cleaning data:', error)
  }
}

cleanData()