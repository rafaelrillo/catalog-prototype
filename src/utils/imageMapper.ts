// Mapeo de nombres de productos a nombres de archivos de imagen
export const productImageMapping: { [key: string]: string } = {
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

export function getProductImage(productName: string): string {
  const imageName = productImageMapping[productName]
  return imageName ? `/images/${imageName}` : '/images/product.jpg'
}