import React from 'react';
import Image from 'next/image';
import { generateBlurDataURL, getOptimizedImageUrl, shouldPrioritizeImage, getImageSizes } from '@/utils/imageOptimization';

// Types
export type ProductCategory = 'tortas' | 'tartas' | 'brownies' | 'cheesecakes' | 'alfajores' | 'otros';

export interface ProductCardRootProps {
  children: React.ReactNode;
  category: ProductCategory;
  className?: string;
}

export interface ProductCardImageProps {
  image: string;
  productName: string;
  index?: number;
  categoryIndex?: number;
}

export interface ProductCardDetailsProps {
  children: React.ReactNode;
}

export interface ProductCardNameProps {
  name: string;
}

export interface ProductCardDescriptionProps {
  description: string;
}

export interface ProductCardFooterProps {
  children: React.ReactNode;
}

export interface ProductCardPortionProps {
  category: ProductCategory;
  children: React.ReactNode;
}

export interface ProductCardPriceProps {
  price: number;
}

// Helper function to get category colors
const getCategoryColors = (category: ProductCategory) => {
  const colorMap = {
    tortas: { main: '#EB1951', light: '#E67792' },
    tartas: { main: '#5A9272', light: '#A6BFB1' },
    brownies: { main: '#C57512', light: '#F19C32' },
    cheesecakes: { main: '#E91E63', light: '#F8C8DC' },
    alfajores: { main: '#AA17B6', light: '#C680CC' },
    otros: { main: '#F57F17', light: '#FFEB3B' },
  };
  
  return colorMap[category];
};

const ProductCardRoot: React.FC<ProductCardRootProps> = ({ 
  children, 
  category, 
  className = '' 
}) => {
  const colors = getCategoryColors(category);
  
  return (
    <div 
      className={`product-card ${className}`} 
      style={{ backgroundColor: colors.light }}
    >
      {children}
    </div>
  );
};

const ProductCardImage: React.FC<ProductCardImageProps> = ({ 
  image, 
  productName, 
  index = 0, 
  categoryIndex = 0 
}) => {
  const optimizedUrl = getOptimizedImageUrl(image, productName);
  const isPriority = shouldPrioritizeImage(index, categoryIndex);
  
  return (
    <div className="product-img">
      <Image
        src={optimizedUrl}
        alt={`Imagen de ${productName}`}
        fill
        sizes={getImageSizes()}
        priority={isPriority}
        placeholder="blur"
        blurDataURL={generateBlurDataURL()}
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
        loading={isPriority ? 'eager' : 'lazy'}
      />
    </div>
  );
};

const ProductCardDetails: React.FC<ProductCardDetailsProps> = ({ children }) => {
  return <div className="product-details">{children}</div>;
};

const ProductCardName: React.FC<ProductCardNameProps> = ({ name }) => {
  return <h3 className="product-name">{name}</h3>;
};

const ProductCardDescription: React.FC<ProductCardDescriptionProps> = ({ description }) => {
  return <p className="product-description">{description}</p>;
};

const ProductCardFooter: React.FC<ProductCardFooterProps> = ({ children }) => {
  return <div className="product-footer">{children}</div>;
};

const ProductCardPortion: React.FC<ProductCardPortionProps> = ({
  category,
  children,
}) => {
  const colors = getCategoryColors(category);
  
  return (
    <div className="portions" style={{ backgroundColor: colors.main }}>
      {children}
    </div>
  );
};

const ProductCardPrice: React.FC<ProductCardPriceProps> = ({ price }) => {
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0
  }).format(price);
  
  return <p className="product-price">{formattedPrice}</p>;
};

export const ProductCard = {
  Root: ProductCardRoot,
  Image: ProductCardImage,
  Details: ProductCardDetails,
  Name: ProductCardName,
  Description: ProductCardDescription,
  Footer: ProductCardFooter,
  Portion: ProductCardPortion,
  Price: ProductCardPrice,
};