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
    const scrollToTopButton = document.querySelector('.scroll-to-top-btn');

    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => setShowContent(true), 50);
      
      // Añadir clase para deshabilitar scroll
      document.body.classList.add('no-scroll');
      const scrollContainer = document.querySelector('.scroll-container');
      if (scrollContainer) {
        scrollContainer.classList.add('no-scroll');
      }

      // Ocultar el botón de scroll
      if (scrollToTopButton) {
        scrollToTopButton.classList.add('hidden');
      }
    } else {
      setShowContent(false);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      
      // Quitar clase para restaurar scroll
      document.body.classList.remove('no-scroll');
      const scrollContainer = document.querySelector('.scroll-container');
      if (scrollContainer) {
        scrollContainer.classList.remove('no-scroll');
      }

      // Mostrar el botón de scroll
      if (scrollToTopButton) {
        scrollToTopButton.classList.remove('hidden');
      }

      return () => clearTimeout(timer);
    }

    // Cleanup en caso de desmontar el componente
    return () => {
      document.body.classList.remove('no-scroll');
      const scrollContainer = document.querySelector('.scroll-container');
      if (scrollContainer) {
        scrollContainer.classList.remove('no-scroll');
      }

      if (scrollToTopButton) {
        scrollToTopButton.classList.remove('hidden');
      }
    };
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
            width={4}
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