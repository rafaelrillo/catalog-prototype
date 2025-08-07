import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { CategorySection, Footer, ScrollToTopButton } from '@/components';
import { MainMenu } from '@/components/MainMenu/components';
import { ScrollIcon } from '@/components';
import { getCategories, getProducts, Category, Product, urlFor } from '@/lib/sanity';

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
  }, []);

  // Transform products to include image URLs
  const transformedProducts = products.map(product => ({
    name: product.name,
    description: product.description,
    price: product.price,
    portions: product.portions,
    image: product.image ? urlFor(product.image).url() : '/images/product.jpg'
  }));

  // Transform categories to include the required id field
  const transformedCategories = categories.map((category, index) => ({
    ...category,
    id: `category-${index + 1}` // Generate id based on index for consistency with existing CSS
  }));

  return (
    <div className="scroll-container">
      <MainMenu.Root>
        <MainMenu.Logo />
        <MainMenu.List categories={transformedCategories} />
        <ScrollIcon />
      </MainMenu.Root>
      {transformedCategories.map((category, index) => (
        <CategorySection
          key={category._id}
          id={category.id}
          name={category.name}
          products={transformedProducts}
          cardBgColor={category.cardBgColor}
          portionBgColor={category.portionBgColor}
          index={index}
        />
      ))}
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