import React from "react";
import ProductCard from "../ProductOption/ProductCard";

interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CategorySectionProps {
  id: string;
  name: string;
  products: Product[]
}

const CategorySection: React.FC<CategorySectionProps> = ({id, name, products}) => {
  return (
    <section id={id} className="category-section section">
      <h2>{name}</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  )
}

export default CategorySection