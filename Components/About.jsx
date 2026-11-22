"use client";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

const About = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center space-x-4">
            <img
              src={`${base}/jax.jpg`}
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
              <div className="flex flex-col sm:flex-row items-center space-y-4 mt-4 sm:space-y-0 sm:space-x-4">
                <InteractiveHoverButton
                  href={`${base}/Jax_Riddell_Res.pdf`}
                  download="Jax_Riddell_Resume.pdf"
                  className="border-white bg-white text-black hover:bg-stone-700 hover:text-white"
                >
                  Download Resume
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
          <div className="hidden md:flex flex-col items-center">
            <p className="text-stone-400 mt-3 text-lg max-w-2xl">
              CS student at Lamar University graduating December 2026. Help Desk
              Support Representative at Neches Federal Credit Union, assisting
              users, troubleshooting enterprise systems, and supporting
              infrastructure across multiple branches. Focused on IT security
              and cloud infrastructure. CompTIA Security+ and Microsoft Azure
              Fundamentals (AZ-900) certified.
            </p>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center space-y-4">
            <img
              src={`${base}/jax.jpg`}
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
              <div className="flex flex-col items-center space-y-4 mt-4 w-full px-4">
                <InteractiveHoverButton
                  href={`${base}/Jax_Riddell_Res.pdf`}
                  download="Jax_Riddell_Resume.pdf"
                  className="border-white bg-white text-black hover:bg-stone-700 hover:text-white"
                >
                  Download Resume
                </InteractiveHoverButton>
                <InteractiveHoverButton
                  href="mailto:riddelljax@protonmail.com"
                  className="border-white bg-white text-black hover:bg-stone-700 hover:text-white"
                >
                  Contact Me
                </InteractiveHoverButton>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-stone-400 mt-3 text-lg max-w-2xl">
                  CS student at Lamar University graduating December 2026. Help
                  Desk Support Representative at Neches Federal Credit Union,
                  assisting users, troubleshooting enterprise systems, and
                  supporting infrastructure across multiple branches. Focused on
                  IT security and cloud infrastructure. CompTIA Security+ and
                  Microsoft Azure Fundamentals (AZ-900) certified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
