import React from 'react';

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
      <div>
        <p className="product-price">${price.toFixed(2)}</p>
        {/* solucionar icon */}
        <img src="../../../public/icons/image-icon.svg" alt='image-icon'></img>
      </div>
    </div>
  );
};

export default ProductCard;