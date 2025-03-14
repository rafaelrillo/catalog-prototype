import { useEffect } from 'react';
import MainMenu from '@/components/MainMenu/MainMenu';
import CategorySection from '@/components/CategorySection/CategorySection';
import Footer from '@/components/Footer/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';

const Home: React.FC = () => {

  useEffect(() => {
    const mainMenu = document.getElementById('main-menu');
    if (mainMenu) {
      mainMenu.scrollIntoView({ behavior: 'auto' }); // Posiciona instantáneamente
    }
  }, []); // Solo se ejecuta una vez, al montar el componente

  const categories = [
    { name: 'Tortas', id: 'category-1' },
    { name: 'Tartas', id: 'category-2' },
    { name: 'Brownies', id: 'category-3' },
    { name: 'Bocaditos', id: 'category-4' },
    { name: 'Servicios', id: 'category-5' },
  ];

  const sampleProducts = [
    {
      name: 'Matilda',
      description: 'Bizcochuelo de chocolate con dulce de leche, relleno y cubierto con crema bariloche',
      price: 9999,
      image: '/images/matilda.png',
    },
    {
      name: 'Matilda',
      description: 'Bizcochuelo de chocolate con dulce de leche, relleno y cubierto con crema bariloche',
      price: 9999,
      image: '/images/matilda.png',
    },
    {
      name: 'Matilda',
      description: 'Bizcochuelo de chocolate con dulce de leche, relleno y cubierto con crema bariloche',
      price: 9999,
      image: '/images/matilda.png',
    },
    {
      name: 'Matilda',
      description: 'Bizcochuelo de chocolate con dulce de leche, relleno y cubierto con crema bariloche',
      price: 9999,
      image: '/images/matilda.png',
    },
    {
      name: 'Matilda',
      description: 'Bizcochuelo de chocolate con dulce de leche, relleno y cubierto con crema bariloche',
      price: 9999,
      image: '/images/matilda.png',
    },
    
  ];

  return (
    <div className="scroll-container">
      <MainMenu categories={categories} />
      {categories.map((category) => (
        <CategorySection
          key={category.id}
          id={category.id}
          name={category.name}
          products={sampleProducts}
        />
      ))}
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Home;