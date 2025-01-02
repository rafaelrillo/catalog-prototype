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
    { name: 'Categoría 1', id: 'category-1' },
    { name: 'Categoría 2', id: 'category-2' },
    { name: 'Categoría 3', id: 'category-3' },
    { name: 'Categoría 4', id: 'category-4' },
    { name: 'Categoría 5', id: 'category-5' },
  ];

  const sampleProducts = [
    {
      name: 'Producto 1',
      description: 'Descripción breve del producto.',
      price: 19.99,
      image: '/images/product.jpg',
    },
    {
      name: 'Producto 2',
      description: 'de cada diez personas que ven la television cinco, son la mitad',
      price: 29.99,
      image: '/images/product.jpg',
    },
    {
      name: 'Producto 3',
      description: 'medialuna de manteca',
      price: 29.99,
      image: '/images/product.jpg',
    },
    {
      name: 'Producto 4',
      description: 'texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias',
      price: 29.99,
      image: '/images/product.jpg',
    },
    {
      name: 'Producto 5',
      description: 'texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias',
      price: 29.99,
      image: '/images/product.jpg',
    },
    {
      name: 'Producto 6',
      description: 'texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias',
      price: 29.99,
      image: '/images/product.jpg',
    },
    {
      name: 'Producto 6',
      description: 'texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias',
      price: 29.99,
      image: '/images/product.jpg',
    },
    {
      name: 'Producto 6',
      description: 'texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias',
      price: 29.99,
      image: '/images/product.jpg',
    },
    {
      name: 'Producto 6',
      description: 'texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias',
      price: 29.99,
      image: '/images/product.jpg',
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