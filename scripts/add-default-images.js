const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'ww97anmg',
  dataset: 'production',
  apiVersion: '2024-08-05',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

// Mapping of product names to existing image files
const productImageMap = {
  // Use the existing product.jpg for all products as default
  default: {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: 'image-placeholder' // This will use the placeholder
    }
  }
}

async function addDefaultImages() {
  try {
    console.log('Getting all products...')
    const products = await client.fetch('*[_type == "product"]')
    
    console.log(`Found ${products.length} products`)
    
    // For now, we'll just make sure all products are available and have correct structure
    // The images will be handled by the fallback in the frontend
    let updatedCount = 0
    
    for (const product of products) {
      const updates = {}
      let needsUpdate = false
      
      // Ensure product is available
      if (product.available !== true) {
        updates.available = true
        needsUpdate = true
      }
      
      // Add image field if missing (even if null, the frontend will handle fallback)
      if (product.image === undefined) {
        updates.image = null
        needsUpdate = true
      }
      
      if (needsUpdate) {
        console.log(`Updating product: ${product.name}`)
        await client.patch(product._id).set(updates).commit()
        updatedCount++
      }
    }
    
    console.log(`\nUpdated ${updatedCount} products`)
    console.log('All products should now have proper structure for display')
    
  } catch (error) {
    console.error('Error adding default images:', error)
  }
}

addDefaultImages()