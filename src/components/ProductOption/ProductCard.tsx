import React from 'react';
import ImageIcon from '../../../public/icons/image.svg';

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
        <h3 className='product-name'>{name}</h3>
        <p className='product-description'>{description}</p>
      </div>
      <div className='product-info'>
        <p className="product-price">${price.toFixed(2)}</p>
        <div className='product-img-icon'>
        <ImageIcon width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;