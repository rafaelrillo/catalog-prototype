import MainMenu from '@/components/MainMenu/MainMenu';
import CategorySection from '@/components/CategorySection/CategorySection';
import Footer from '@/components/Footer/Footer';

const Home: React.FC = () => {
  const categories = [
    { name: 'Categoría 1', id: 'category-1' },
    { name: 'Categoría 2', id: 'category-2' },
    { name: 'Categoría 3', id: 'category-3' },
    { name: 'Categoría 4', id: 'category-3' },
    { name: 'Categoría 5', id: 'category-3' },
  ];

  const sampleProducts = [
    {
      name: 'Producto 1',
      description: 'Descripción breve del producto.',
      price: 19.99,
      image: '/path/to/image1.jpg',
    },
    {
      name: 'Producto 2',
      description: 'Descripción breve del producto.',
      price: 29.99,
      image: '/path/to/image2.jpg',
    },
    {
      name: 'Producto 3',
      description: 'Descripción breve del producto.',
      price: 29.99,
      image: '/path/to/image2.jpg',
    },
    {
      name: 'Producto 4',
      description: 'Descripción breve del producto.',
      price: 29.99,
      image: '/path/to/image2.jpg',
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
      <Footer />
    </div>
  );
};

export default Home;