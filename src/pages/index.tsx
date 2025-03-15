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
    { name: 'Tortas', id: 'category-1', cardBgColor: '#E67792', portionBgColor: '#EB1951' },
    { name: 'Tartas', id: 'category-2', cardBgColor: '#A6BFB1', portionBgColor: '#5A9272' },
    { name: 'Brownies', id: 'category-3',cardBgColor: '#F19C32', portionBgColor: '#C57512' },
    { name: 'Bocaditos', id: 'category-4',cardBgColor: '#C680CC', portionBgColor: '#AA17B6' },
    { name: 'Servicios', id: 'category-5',cardBgColor: '#F8C8DC', portionBgColor: '#bc96c0' },
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
      {categories.map((category, index) => (
        <CategorySection
          key={category.id}
          id={category.id}
          name={category.name}
          products={sampleProducts}
          cardBgColor={category.cardBgColor} // Pasamos el color de fondo
          portionBgColor={category.portionBgColor}
        index={index} // Pasamos el índice para intercalar
        />
      ))}
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Home;