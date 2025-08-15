import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { CategorySection, Footer, ScrollToTopButton } from '@/components';
import { MainMenu } from '@/components/MainMenu/components';
import { ScrollIcon } from '@/components';
import { getCategories, getProducts, Category, Product, urlFor } from '@/lib/sanity';
import { preloadCriticalImages } from '@/utils/imageMapper';
import { mapCategoryToDesignSystem } from '@/utils/categoryMapper';

interface HomeProps {
  categories: Category[];
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ categories, products }) => {

  useEffect(() => {
    const mainMenu = document.getElementById('main-menu');
    if (mainMenu) {
      mainMenu.scrollIntoView({ behavior: 'auto' });
    }
    
    // Precargar imágenes críticas de los primeros productos
    if (products.length > 0) {
      const criticalProductNames = products.slice(0, 6).map(p => p.name);
      preloadCriticalImages(criticalProductNames);
    }
  }, [products]);

  // Transform products to include image URLs
  const transformedProducts = products.map(product => ({
    _id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    portions: product.portions || 8,
    image: product.image ? urlFor(product.image).url() : '/images/product.jpg',
    category: product.category
  }));

  // Transform categories to include the required id field
  const transformedCategories = categories.map((category, index) => ({
    ...category,
    id: `category-${index + 1}` // Generate id based on index for consistency with existing CSS
  }));

  // Function to get products for a specific category
  const getProductsForCategory = (categoryId: string) => {
    return transformedProducts.filter(product => 
      product.category && product.category._id === categoryId
    );
  };

  return (
    <div className="scroll-container">
      <MainMenu.Root>
        <MainMenu.Logo />
        <MainMenu.List categories={transformedCategories} />
        <ScrollIcon />
      </MainMenu.Root>
      {transformedCategories.map((category, index) => {
        const designSystemCategory = mapCategoryToDesignSystem(category.name);
        return (
          <CategorySection
            key={category._id}
            id={category.id}
            name={category.name}
            products={getProductsForCategory(category._id)}
            category={designSystemCategory}
            index={index}
          />
        );
      })}
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const [categories, products] = await Promise.all([
      getCategories(),
      getProducts()
    ]);

    return {
      props: {
        categories,
        products,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    
    // Fallback to empty data if Sanity fails
    return {
      props: {
        categories: [],
        products: [],
      },
      revalidate: 60,
    };
  }
};

export default Home;