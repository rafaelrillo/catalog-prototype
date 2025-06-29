import { useState, useEffect } from 'react';
import { Icon } from '@/components';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');

    const toggleVisibility = () => {
      if (scrollContainer?.scrollTop && scrollContainer.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    scrollContainer?.addEventListener('scroll', toggleVisibility);
    return () => scrollContainer?.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const mainMenu = document.getElementById('main-menu');
    if (mainMenu) {
      mainMenu.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return isVisible ? (
    <button
      className="scroll-to-top-btn"
      onClick={scrollToTop}
      aria-label="Volver al menú principal"
    >
      <Icon name='upArrow' />
    </button>
  ) : null;
};