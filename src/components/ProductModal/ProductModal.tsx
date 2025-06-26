import { useRef, useEffect } from 'react';
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

export const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={modalRef} className="modal" onClick={onClose}>
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
    </dialog>
  );
};