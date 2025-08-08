// ProductCard.tsx
type ProductCardRootProps = {
  children: React.ReactNode;
  cardBgColor: string;
};

const ProductCardRoot = ({ children, cardBgColor }: ProductCardRootProps) => {
  return (
    <div className="product-card" style={{ backgroundColor: cardBgColor }}>
      {children}
    </div>
  );
};

import Image from 'next/image';
import { generateBlurDataURL, getOptimizedImageUrl, shouldPrioritizeImage, getImageSizes } from '@/utils/imageOptimization';

const ProductCardImage = ({ 
  image, 
  productName, 
  index = 0, 
  categoryIndex = 0 
}: { 
  image: string; 
  productName: string;
  index?: number;
  categoryIndex?: number;
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

const ProductCardDetails = ({ children }: { children: React.ReactNode }) => {
  return <div className="product-details">{children}</div>;
};

const ProductCardName = ({ name }: { name: string }) => {
  return <h3 className="product-name">{name}</h3>;
};

const ProductCardDescription = ({ description }: { description: string }) => {
  return <p className="product-description">{description}</p>;
};

const ProductCardFooter = ({ children }: { children: React.ReactNode }) => {
  return <div className="product-footer">{children}</div>;
};

const ProductCardPortion = ({
  portionBgColor,
  children,
}: {
  portionBgColor: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="portions" style={{ backgroundColor: portionBgColor }}>
      {children}
    </div>
  );
};

const ProductCardPrice = ({ price }: { price: number }) => {
  return <p className="product-price">${price}</p>;
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