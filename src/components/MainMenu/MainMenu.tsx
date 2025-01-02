import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ScrollIcon from "../ScrollIcon/ScrollIcon";

interface MainMenuProps {
  categories: {
    name: string;
    id: string;
  }[];
}

const MainMenu: React.FC<MainMenuProps> = ({ categories }) => {
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); 
      },
      { threshold: 0.5 }
    );

    if (menuRef.current) {
      observer.observe(menuRef.current);
    }

    return () => {
      if (menuRef.current) {
        observer.unobserve(menuRef.current);
      }
    };
  }, []);

  return (
    <section
      id="main-menu"
      ref={menuRef}
      className={`section ${isVisible ? "visible" : "hidden"}`}
    >
      <Image
        src="/images/logo.png"
        alt="Logo de mi sitio"
        width={100}
        height={100}
      />
      <ul className="category-menu">
        {categories.map((category) => (
          <li key={category.id} className="category-item">
            <a
              href={`#${category.id}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(category.id);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
      <ScrollIcon />
    </section>
  );
};

export default MainMenu;