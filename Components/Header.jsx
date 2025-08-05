"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center p-4 border-b-gray-700 border-b-2 fixed top-0 left-0 right-0 z-50 bg-gray-900">
      <div className="flex items-center">
        <Link href="#about" className="text-xl font-bold">
          jaxr.dev
        </Link>
        <nav className="flex space-x-8 ml-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-gray-300 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(
                  `[data-section="${item.id}"]`
                );
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center space-x-6">
        <Link
          href="https://github.com/jaxridd"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          <FaGithub className="text-2xl" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jaxriddell/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          <FaLinkedin className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
