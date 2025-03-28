type MainMenuListProps = {
  categories: {
    name: string;
    id: string;
  }[];
};

export const MainMenuList = ({ categories }: MainMenuListProps) => (
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
);