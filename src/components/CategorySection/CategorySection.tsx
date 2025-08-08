import { useEffect, useState, useRef } from "react";
import { ProductCard, Icon } from '@/components';

interface Product {
  name: string;
  description: string;
  price: number;
  portions?: number;
  image: string;
}

interface CategorySectionProps {
  id: string;
  name: string;
  products: Product[];
  cardBgColor: string; // Color de fondo de las tarjetas
  portionBgColor: string;
  index: number; // Índice de la sección para alternar dirección
}

export const CategorySection: React.FC<CategorySectionProps> = ({ id, name, products, cardBgColor, index, portionBgColor }) => {
  const [isVisible, setIsVisible] = useState(true); // Start visible by default
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current; // Captura el valor actual del ref

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Don't render section if no products
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`category-section section ${isVisible ? "visible" : "hidden"} ${index % 2 === 0 ? "style-a" : "style-b"}`}
    >
      <div className="product-list">
        <div className="category-header">
          <h2 className="category-title">{name}</h2>
          <p className="header-info">
            Consultar por opciones <br />
            de más porciones
          </p>
        </div>

        {products.map((product, productIndex) => (
          <ProductCard.Root key={productIndex} cardBgColor={cardBgColor}>
            <ProductCard.Details>
              <ProductCard.Name name={product.name} />
              <ProductCard.Description description={product.description} />
              <ProductCard.Footer>
                <ProductCard.Portion portionBgColor={portionBgColor}>
                  <Icon name="portion" className="portion-icon" />
                  <span className="portion-number">{product.portions || 8}</span>
                </ProductCard.Portion>
                <ProductCard.Price price={product.price} />
              </ProductCard.Footer>
            </ProductCard.Details>
            <ProductCard.Image 
              image={product.image} 
              productName={product.name}
              index={productIndex}
              categoryIndex={index}
            />
          </ProductCard.Root>
        ))}
      </div>
    </section>
  );
};
