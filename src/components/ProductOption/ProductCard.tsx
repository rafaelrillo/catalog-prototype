import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, price }) => {
  return (
    <div className="product-card">
      <div className="product-details">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className='product-info'>
        <p className="product-price">${price.toFixed(2)}</p>
        <Image
          src="/icons/image-icon.svg"
          alt="Descripción del ícono"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default ProductCard;