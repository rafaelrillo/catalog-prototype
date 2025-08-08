import { useState, useCallback } from 'react';
import Image from 'next/image';

interface ImageLoaderProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
  fallbackSrc?: string;
}

export const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  alt,
  priority = false,
  className = '',
  onLoad,
  onError,
  fallbackSrc = '/images/product.jpg'
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
    
    if (imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
    
    onError?.();
  }, [imageSrc, fallbackSrc, onError]);

  return (
    <div className={`image-loader ${className} ${isLoading ? 'loading' : ''}`}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority={priority}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
      
      {isLoading && (
        <div className="shimmer-placeholder">
          <div className="shimmer-animation"></div>
        </div>
      )}
      
      {hasError && imageSrc === fallbackSrc && (
        <div className="error-placeholder">
          <span>⚠️</span>
        </div>
      )}
    </div>
  );
};