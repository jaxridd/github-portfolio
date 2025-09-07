"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm border-b-1 border-stone-700 shadow-lg">
      <div className="flex items-center">
        <Link href="#about" className="text-xl font-bold">
          jaxr.dev
        </Link>
        <nav className="flex space-x-8 ml-8">
          
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
          href="https://www.linkedin.com/in/jax-riddell/"
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
