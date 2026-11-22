"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const socials = [
  { href: "https://github.com/jaxridd", label: "GitHub", Icon: FaGithub },
  {
    href: "https://www.linkedin.com/in/jax-riddell/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-50 bg-black border-b border-stone-700 shadow-lg">
      <div className="flex items-center">
        <Link href="#about" className="text-xl font-bold">
          jaxr.dev
        </Link>
        <nav
          aria-label="Primary"
          className="hidden md:flex space-x-8 ml-8"
        >
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

      <div className="flex items-center space-x-4 md:space-x-6">
        {socials.map(({ href, label, Icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:text-gray-300 transition-colors duration-300"
          >
            <Icon className="text-xl md:text-2xl" />
          </Link>
        ))}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden text-white hover:text-gray-300 transition-colors duration-300"
        >
          {isMenuOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 right-0 bg-black border-b border-stone-700 md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col space-y-4 p-4">
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
    </header>
  );
};

export default Header;
