import { useEffect, useState, useRef } from "react";

type MainMenuRootProps = {
  children: React.ReactNode;
};

export const MainMenuRoot = ({ children }: MainMenuRootProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const currentMenuRef = menuRef.current;

    if (currentMenuRef) {
      observer.observe(currentMenuRef);
    }

    return () => {
      if (currentMenuRef) {
        observer.unobserve(currentMenuRef);
      }
    };
  }, []);

  return (
    <section
      id="main-menu"
      ref={menuRef}
      className={`section ${isVisible ? "visible" : "hidden"}`}
    >
      {children}
    </section>
  );
};