import { productImageMapping } from './imageMapper';

export function generateBlurDataURL(): string {
  return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjNmNGY2O3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlNWU3ZWI7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgZmlsbD0idXJsKCNncmFkaWVudCkiIC8+Cjwvc3ZnPgo=';
}

export function getOptimizedImageUrl(originalUrl: string, productName: string): string {
  // Si es una imagen de Sanity, ya viene optimizada
  if (originalUrl.includes('cdn.sanity.io')) {
    return originalUrl;
  }
  
  // Si es una imagen local, verificar si existe en el mapping
  const localImageName = productImageMapping[productName];
  if (localImageName) {
    return `/images/${localImageName}`;
  }
  
  // Fallback
  return originalUrl || '/images/product.jpg';
}

export function shouldPrioritizeImage(index: number, categoryIndex: number): boolean {
  // Priorizar las primeras 6 imágenes (2 categorías x 3 productos promedio)
  return categoryIndex === 0 && index < 6;
}

export function getImageSizes(): string {
  return '(max-width: 320px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 280px, 320px';
}