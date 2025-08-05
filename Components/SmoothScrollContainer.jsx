"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const SmoothScrollContainer = ({ children }) => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [sections, setSections] = useState([]);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Get all section elements
    const sectionElements =
      containerRef.current?.querySelectorAll("[data-section]");
    if (sectionElements) {
      const sectionArray = Array.from(sectionElements).map((el, index) => ({
        id: el.getAttribute("data-section"),
        element: el,
        index,
      }));
      setSections(sectionArray);
    }
  }, []);

  useEffect(() => {
    // Determine current section based on scroll position
    if (sections.length > 0) {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.element.offsetTop;
        if (scrollPosition >= sectionTop) {
          setCurrentSection(i);
          break;
        }
      }
    }
  }, [scrollY, sections]);

  const scrollToSection = (sectionIndex) => {
    if (sections[sectionIndex]) {
      sections[sectionIndex].element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {children}
      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to ${section.id} section`}
          />
        ))}
      </div>
    </div>
  );
};

export default SmoothScrollContainer;
