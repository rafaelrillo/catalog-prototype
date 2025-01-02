import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Loader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsFading(true), 1000);
    const fadeOutTimer = setTimeout(() => setIsVisible(false), 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`loader ${isFading ? 'fade-out' : ''}`}>
      <Image
        src="/images/logo.png"
        alt="Logo de la empresa"
        width={150}
        height={150}
      />
    </div>
  );
};

export default Loader;