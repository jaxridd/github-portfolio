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
              <h2 className="text-3xl max-w-2xl">IT & Systems Support</h2>
              <p className="text-stone-400 mt-3 text-lg">
                B.S. Computer Science · Lamar University · Expected Dec 2026
              </p>
              <span className="text-stone-400 mt-3 text-medium">
                CompTIA Security+ (SY0-701)
              </span>
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
              <h2 className="text-xl text-center px-4">IT & Systems Support</h2>
              <p className="text-stone-400 mt-2 text-sm text-center px-4">
                B.S. Computer Science · Lamar University · Expected Dec 2026
              </p>
              <span className="text-stone-400 mt-2 text-sm">
                CompTIA Security+ (SY0-701)
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <InteractiveHoverButton
              href="/Jax_Riddell_Res.pdf"
              download="Jax_Riddell_Resume.pdf"
              className="border-white bg-white text-black hover:bg-stone-700 hover:text-white"
            >
              Download CV
            </InteractiveHoverButton>
            <InteractiveHoverButton
              href="mailto:riddelljax@protonmail.com"
              className="border-white bg-white text-black hover:bg-stone-700 hover:text-white"
            >
              Contact Me
            </InteractiveHoverButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
