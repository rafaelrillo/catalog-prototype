import type { ProductCategory } from '@/components/ProductCard/ProductCard';

/**
 * Maps CMS category names to design system categories
 */
export const mapCategoryToDesignSystem = (categoryName: string): ProductCategory => {
  const normalized = categoryName.toLowerCase().trim();
  
  // Map CMS categories to design system categories
  if (normalized.includes('torta')) return 'tortas';
  if (normalized.includes('tarta')) return 'tartas';
  if (normalized.includes('brownie') || normalized.includes('alfajor')) return 'brownies';
  if (normalized.includes('cheesecake')) return 'cheesecakes';
  if (normalized.includes('alfajor')) return 'alfajores';
  
  // Default fallback
  return 'otros';
};

/**
 * Gets category colors for legacy components
 */
export const getCategoryColors = (category: ProductCategory) => {
  const colorMap = {
    tortas: { cardBgColor: '#E67792', portionBgColor: '#EB1951' },
    tartas: { cardBgColor: '#A6BFB1', portionBgColor: '#5A9272' },
    brownies: { cardBgColor: '#F19C32', portionBgColor: '#C57512' },
    cheesecakes: { cardBgColor: '#F8C8DC', portionBgColor: '#E91E63' },
    alfajores: { cardBgColor: '#C680CC', portionBgColor: '#AA17B6' },
    otros: { cardBgColor: '#FFEB3B', portionBgColor: '#F57F17' },
  };
  
  return colorMap[category];
};