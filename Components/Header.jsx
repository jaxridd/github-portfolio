"use client";
import { motion } from "framer-motion";

const Header = () => {
  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex justify-between items-center p-4 border-b-gray-700 border-b-2">
      <div className="text-xl font-bold">jaxr.dev</div>
      <div className="flex space-x-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="hover:text-gray-300 transition-colors duration-300"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
