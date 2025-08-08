const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'ww97anmg',
  dataset: 'production',
  apiVersion: '2024-08-05',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

async function checkData() {
  try {
    console.log('Checking categories...')
    const categories = await client.fetch('*[_type == "category"] | order(_createdAt desc)')
    console.log(`Found ${categories.length} categories:`)
    categories.forEach((cat, i) => {
      console.log(`${i + 1}. ${cat.name} (ID: ${cat._id.substring(0, 8)}..., Created: ${cat._createdAt})`)
    })
    
    console.log('\nChecking products...')
    const products = await client.fetch('*[_type == "product"] | order(_createdAt desc)')
    console.log(`Found ${products.length} products:`)
    products.slice(0, 5).forEach((prod, i) => {
      console.log(`${i + 1}. ${prod.name} - Category: ${prod.category?._ref || 'No category'} (ID: ${prod._id.substring(0, 8)}...)`)
    })
    
  } catch (error) {
    console.error('Error checking data:', error)
  }
}

checkData()