"use client";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

const About = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center space-x-4">
            <img
              src="/jax.jpg"
              alt="Jax Riddell"
              className="w-40 h-40 rounded-full"
            />
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-bold mb-3">Jax Riddell</h1>
              <h2 className="text-3xl max-w-100">
                Full-stack developer with a passion for building.
              </h2>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center space-y-4">
            <img
              src="/jax.jpg"
              alt="Jax Riddell"
              className="w-24 h-24 rounded-full"
            />
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold mb-3">Jax Riddell</h1>
              <h2 className="text-xl text-center px-4">
                Full-stack developer with a passion for building.
              </h2>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/Jax_Riddell_Res.pdf"
              download="Jax_Riddell_Resume.pdf"
              className="inline-block"
            >
              <InteractiveHoverButton className="border-white bg-white text-black hover:bg-stone-700 hover:text-white">
                Download CV
              </InteractiveHoverButton>
            </a>
            <a href="mailto:riddelljax@protonmail.com" className="inline-block">
              <InteractiveHoverButton className="border-white bg-white text-black hover:bg-stone-700 hover:text-white">
                Contact Me
              </InteractiveHoverButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
