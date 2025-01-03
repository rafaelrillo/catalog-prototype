import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    description: string;
    image: string;
  } | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => setShowContent(true), 50);
    } else {
      setShowContent(false);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isAnimating) return null;

  return (
    <div
      className={`modal-overlay ${showContent ? 'fade-in' : 'fade-out'}`}
      onClick={onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image-wrapper">
          <Image
            src={product?.image || '/placeholder.png'}
            alt={product?.name || 'Producto'}
            layout="responsive"
            width={4} // Relación de aspecto (4:3)
            height={3}
            className="modal-image"
          />
        </div>
        <div className="modal-info">
          <h2>{product?.name}</h2>
          <p>{product?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;