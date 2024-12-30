import React from "react";
import Image from "next/image";
import ScrollIcon from "../ScrollIcon/ScrollIcon";

interface MainMenuProps {
  categories: {
    name: string;
    id: string;
  }[];
}

const MainMenu: React.FC<MainMenuProps> = ({ categories }) => {

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  return (
    <section id="main-menu" className="section">
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
              onClick={(e) => handleScroll(e, category.id)}
            >{category.name}</a>
          </li>
        ))}
      </ul>
      <ScrollIcon />
    </section>
  )
}

export default MainMenu;