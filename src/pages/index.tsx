import ProductCard from '@/components/ProductOption/ProductCard';

const Home: React.FC = () => {
  const categories = [
    { name: 'Categoría 1', id: 'category-1' },
    { name: 'Categoría 2', id: 'category-2' },
    { name: 'Categoría 3', id: 'category-3' },
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
    <div className="home">
      <div className="hero">
        <h1>Popa Cakes</h1>
        <ul className="category-menu">
          {categories.map((category) => (
            <li key={category.id} className="category-item">
              <a href={`#${category.id}`}>{category.name}</a>
            </li>
          ))}
        </ul>
      </div>
      {categories.map((category) => (
        <section id={category.id} key={category.id} className="category-section">
          <h2>{category.name}</h2>
          <div className="product-list">
            {sampleProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;