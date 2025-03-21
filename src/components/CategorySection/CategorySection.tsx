import { useEffect, useState, useRef } from "react";
import { ProductCard } from "@/components";

interface Product {
  name: string;
  description: string;
  price: number;
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

const CategorySection: React.FC<CategorySectionProps> = ({ id, name, products, cardBgColor, index, portionBgColor }) => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`category-section section ${isVisible ? "visible" : "hidden"} ${index % 2 === 0 ? "style-a" : "style-b"}`}
    >
      <div className="product-list">
        <div className="category-header">
          <h2 className="category-title">{name}</h2>
          <p className="header-info">Consultar por opciones <br />
            de más porciones</p>
        </div>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} cardBgColor={cardBgColor} portionBgColor={portionBgColor} />  // Color de fondo dinámico
        ))}
      </div>
    </section>
  );
};

export default CategorySection;