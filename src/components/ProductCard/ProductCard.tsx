import React, { useState } from 'react';
import ImageIcon from '../../../public/icons/image.svg';
import ProductModal from '../ProductModal/ProductModal';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="product-card"
        onClick={() => setIsModalOpen(true)} // Abrir el modal al hacer clic
      >
        <div className="product-details">
          <h3 className="product-name">{name}</h3>
          <p className="product-description">{description}</p>
        </div>
        <div className="product-info">
          <p className="product-price">${price.toFixed(2)}</p>
          <div className="product-img-icon">
            <ImageIcon width={40} height={40} />
          </div>
        </div>
      </div>
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Cerrar el modal
        product={{ name, description, image }}
      />
    </>
  );
};

export default ProductCard;