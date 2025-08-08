const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')

// Verificar que el token esté configurado
if (!process.env.SANITY_AUTH_TOKEN) {
  console.error('❌ ERROR: SANITY_AUTH_TOKEN no está configurado')
  console.error('Por favor, sigue estos pasos:')
  console.error('1. Ve a https://www.sanity.io/manage/personal/tokens')
  console.error('2. Crea un nuevo token con permisos de "Editor" o "Administrator"')
  console.error('3. Agrega SANITY_AUTH_TOKEN=tu_token_aqui al archivo .env.local')
  process.exit(1)
}

const client = createClient({
  projectId: 'ww97anmg',
  dataset: 'production',
  apiVersion: '2024-08-05',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

// Mapeo de nombres de productos a nombres de archivos de imagen
const productImageMapping = {
  // Tortas
  'Torta Tres Leches': 'torta-tres-leches.png',
  'Torta Matilda de Chocolate': 'torta-matilda-de-chocolate.png',
  'Torta Capitas Sin Nueces': 'torta-capita-sin-nueces.png',
  'Torta Imperial': 'torta-imperial.png',
  'Torta Oreo': 'torta-oreo.png',
  'Torta Chocolina': 'torta-chocolina.png',
  'Torta Oreolina': 'torta-oreolina.png',
  'Torta Nugaton': 'torta-nugaton.png',
  'Torta Oreonut': 'torta-oreonut.png',
  
  // Cheesecakes
  'Cheesecake': 'cheescake.png',
  
  // Tartas
  'Tarta Mousse Nutella': 'tarta-nutella.png',
  'Lemon Pie Clásico': 'lemon-pie-clasico.png',
  'Tarta Coco': 'tarta-coco.png',
  'Tarta Cabsha': 'tarta-cabsha.png',
  'Tarta Nube de Nuez Clásica Sin Harinas': 'tarta-nube-de-nuez-clasica-sin.png',
  'Tarta de Frutilla': 'tarta-de-frutilla.png',
  
  // Brownies
  'Brownie Clásico': 'brownie-clasico.png',
  'Brownie con Nueces': 'brownie-con-nueces.png',
  'Brownie con Frutos Rojos': 'brownie-con-frutos-rojos.png',
  'Brownie Mousse de Nutella': 'brownie-mousse-de-nutella.png',
  
  // Alfajores
  'Alfajor Marplatense': 'alfajor-marplatense.png',
  'Alfabrownie Blanco': 'alfabrownie-blanco.png',
  'Alfajor Maicena': 'alfajor-maicena.png',
  'Alfajor Coco': 'alfajor-coco.png',
  'Alfanuez': 'alfanuez.png',
  'Antojitos Mixtos': 'antojitos-mixtos.png',
  'Maicenitas': 'maicenitas.png',
  
  // Otros
  'Bandeja Variaditos': 'bandeja-variaditos.png',
  'Flan de Leche Condensada': 'flan-de-leche-condensada.png',
  'Crocante de Nuez Simple': 'nuez-sin-harina.png',
  'Conitos DDL Bañados': 'conitos-ddl-bañados.png',
  'Postre Oreo Individual': 'postre-oreo-individual.png',
  'Trufas Chocolina': 'trufas-chocolina.png'
}

async function uploadImagesAndAssignToProducts() {
  try {
    console.log('🔍 Verificando conexión con Sanity...')
    
    // Test connection
    const testQuery = await client.fetch('*[_type == "product"][0..0] { _id }')
    if (!testQuery || testQuery.length === 0) {
      console.error('❌ No se pudo conectar a Sanity o no hay productos')
      return
    }
    
    console.log('✅ Conexión exitosa con Sanity')
    console.log('📦 Obteniendo todos los productos...')
    
    const products = await client.fetch(`*[_type == "product"] {
      _id,
      name,
      image
    }`)
    
    console.log(`📋 Encontrados ${products.length} productos`)
    
    const imagesPath = path.join(__dirname, '..', 'public', 'images')
    let uploadedCount = 0
    let skippedCount = 0
    let errorCount = 0
    
    for (const product of products) {
      const imageName = productImageMapping[product.name]
      
      if (!imageName) {
        console.log(`⚠️  No se encontró mapeo de imagen para: "${product.name}"`)
        continue
      }
      
      const imagePath = path.join(imagesPath, imageName)
      
      if (!fs.existsSync(imagePath)) {
        console.log(`⚠️  No se encontró la imagen: ${imagePath}`)
        continue
      }
      
      // Verificar si el producto ya tiene una imagen
      if (product.image && product.image.asset && product.image.asset._ref) {
        console.log(`✅ "${product.name}" ya tiene imagen asignada, omitiendo...`)
        skippedCount++
        continue
      }
      
      try {
        console.log(`📤 Subiendo imagen: "${imageName}" para "${product.name}"`)
        
        // Subir imagen a Sanity
        const imageAsset = await client.assets.upload('image', fs.createReadStream(imagePath), {
          filename: imageName,
          title: `Imagen de ${product.name}`,
          description: `Imagen del producto ${product.name}`,
        })
        
        console.log(`✅ Imagen subida con ID: ${imageAsset._id}`)
        
        // Asignar imagen al producto
        const updatedProduct = await client
          .patch(product._id)
          .set({
            image: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageAsset._id,
              },
            },
          })
          .commit()
        
        console.log(`🔗 Imagen asignada al producto: "${product.name}"`)
        uploadedCount++
        
        // Pequeña pausa para no saturar la API
        await new Promise(resolve => setTimeout(resolve, 500))
        
      } catch (error) {
        console.error(`❌ Error procesando "${product.name}":`, error.message)
        errorCount++
      }
    }
    
    console.log(`\n🎉 Proceso completado!`)
    console.log(`📊 Resumen:`)
    console.log(`   - Imágenes subidas y asignadas: ${uploadedCount}`)
    console.log(`   - Productos que ya tenían imagen: ${skippedCount}`)
    console.log(`   - Errores: ${errorCount}`)
    
  } catch (error) {
    console.error('❌ Error general:', error)
    
    if (error.message.includes('Insufficient permissions')) {
      console.error('\n💡 Sugerencias:')
      console.error('1. Verifica que el token tenga permisos de "Editor" o "Administrator"')
      console.error('2. Verifica que el token sea válido y no haya expirado')
      console.error('3. Intenta crear un nuevo token desde https://www.sanity.io/manage/personal/tokens')
    }
  }
}

// Verificar argumentos de línea de comandos
const args = process.argv.slice(2)
if (args.includes('--help') || args.includes('-h')) {
  console.log(`
🖼️  Script para cargar imágenes de productos en Sanity

Uso: node upload-product-images.js [opciones]

Opciones:
  --help, -h     Mostrar esta ayuda
  --force, -f    Forzar reemplazo de imágenes existentes

Prerequisitos:
  1. SANITY_AUTH_TOKEN configurado en .env.local
  2. Imágenes en formato PNG en public/images/
  3. Token con permisos de Editor o Administrator

Para obtener el token:
  https://www.sanity.io/manage/personal/tokens
`)
  process.exit(0)
}

uploadImagesAndAssignToProducts()