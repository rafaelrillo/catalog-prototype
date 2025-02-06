import React, { useEffect, useState, useRef } from "react";
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
}

const CategorySection: React.FC<CategorySectionProps> = ({ id, name, products }) => {
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
      className={`category-section section ${isVisible ? "visible" : "hidden"}`}
    >
      <h2 className="category-title">{name}</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;