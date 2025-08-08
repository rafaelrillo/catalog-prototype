const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'ww97anmg',
  dataset: 'production',
  apiVersion: '2024-08-05',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

async function updateOtrosColor() {
  try {
    console.log('Finding "Otros" category...')
    const otrosCategory = await client.fetch('*[_type == "category" && name == "Otros"][0]')
    
    if (!otrosCategory) {
      console.log('❌ "Otros" category not found')
      return
    }
    
    console.log('Found "Otros" category:', otrosCategory._id)
    console.log('Current colors:', {
      cardBgColor: otrosCategory.cardBgColor,
      portionBgColor: otrosCategory.portionBgColor
    })
    
    console.log('Updating "Otros" to use same colors as "Tortas"...')
    const result = await client
      .patch(otrosCategory._id)
      .set({
        cardBgColor: '#E67792',    // Same as Tortas
        portionBgColor: '#EB1951'  // Same as Tortas
      })
      .commit()
    
    console.log('✅ Successfully updated "Otros" category colors')
    console.log('New colors:', {
      cardBgColor: result.cardBgColor,
      portionBgColor: result.portionBgColor
    })
    
  } catch (error) {
    console.error('Error updating "Otros" color:', error)
  }
}

updateOtrosColor()