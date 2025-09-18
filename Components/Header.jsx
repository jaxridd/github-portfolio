"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "technologies", label: "Technologies" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <div className="flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm border-b-1 border-stone-700 shadow-lg">
      <div className="flex items-center">
        <Link href="#about" className="text-xl font-bold">
          jaxr.tech
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 ml-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-gray-300 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Desktop Social Links */}
      <div className="hidden md:flex items-center space-x-6">
        <Link
          href="https://github.com/jaxridd"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          <FaGithub className="text-2xl" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jax-riddell/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          <FaLinkedin className="text-2xl" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-4">
        <Link
          href="https://github.com/jaxridd"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          <FaGithub className="text-xl" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jax-riddell/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          <FaLinkedin className="text-xl" />
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-gray-300 transition-colors duration-300"
        >
          <FaBars className="text-xl" />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-stone-700 md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="hover:text-gray-300 transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
