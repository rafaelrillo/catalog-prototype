const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')

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

async function assignImagePathsToProducts() {
  try {
    console.log('Obteniendo todos los productos...')
    const products = await client.fetch(`*[_type == "product"] {
      _id,
      name,
      imagePath
    }`)
    
    console.log(`Encontrados ${products.length} productos`)
    
    let updatedCount = 0
    
    for (const product of products) {
      const imageName = productImageMapping[product.name]
      
      if (!imageName) {
        console.log(`⚠️  No se encontró mapeo de imagen para el producto: ${product.name}`)
        continue
      }
      
      const imageUrl = `/images/${imageName}`
      
      try {
        console.log(`🔗 Asignando ruta de imagen para "${product.name}": ${imageUrl}`)
        
        // Asignar ruta de imagen al producto
        await client
          .patch(product._id)
          .set({
            imagePath: imageUrl
          })
          .commit()
        
        console.log(`✅ Ruta de imagen asignada al producto: ${product.name}`)
        updatedCount++
        
      } catch (error) {
        console.error(`❌ Error procesando producto "${product.name}":`, error.message)
      }
    }
    
    console.log(`🎉 Proceso completado! Se actualizaron ${updatedCount} productos`)
    
  } catch (error) {
    console.error('❌ Error general:', error)
  }
}

assignImagePathsToProducts()