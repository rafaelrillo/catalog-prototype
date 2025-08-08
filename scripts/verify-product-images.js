const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'ww97anmg',
  dataset: 'production',
  apiVersion: '2024-08-05',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

async function verifyProductImages() {
  try {
    console.log('🔍 Verificando productos con imágenes...\n')
    
    const products = await client.fetch(`*[_type == "product"] | order(name asc) {
      _id,
      name,
      image,
      "category": category->{name}
    }`)
    
    let withImages = 0
    let withoutImages = 0
    
    console.log('📊 ESTADO DE IMÁGENES POR PRODUCTO:\n')
    
    for (const product of products) {
      const hasImage = product.image && product.image.asset && product.image.asset._ref
      
      if (hasImage) {
        console.log(`✅ ${product.name} (${product.category?.name || 'Sin categoría'})`)
        console.log(`   Imagen ID: ${product.image.asset._ref}\n`)
        withImages++
      } else {
        console.log(`❌ ${product.name} (${product.category?.name || 'Sin categoría'})`)
        console.log(`   Sin imagen asignada\n`)
        withoutImages++
      }
    }
    
    console.log(`\n📈 RESUMEN:`)
    console.log(`   Total de productos: ${products.length}`)
    console.log(`   Con imágenes: ${withImages}`)
    console.log(`   Sin imágenes: ${withoutImages}`)
    
    if (withImages === products.length) {
      console.log(`\n🎉 ¡PERFECTO! Todos los productos tienen imágenes asignadas.`)
    } else {
      console.log(`\n⚠️  Hay ${withoutImages} producto(s) sin imagen.`)
    }
    
  } catch (error) {
    console.error('❌ Error verificando imágenes:', error.message)
  }
}

verifyProductImages()