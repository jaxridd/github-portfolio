"use client";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

const About = () => {
  return (
    <div className="flex items-center justify-center py-15">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center space-x-4">
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
          <div className="flex items-center space-x-4">
            <InteractiveHoverButton
              className="border-white bg-white text-black hover:bg-stone-700 hover:text-white"
              onClick={() => {
                window.open("public/Jax_Riddell_Res.pdf");
              }}
            >
              Download CV
            </InteractiveHoverButton>
            <InteractiveHoverButton className="border-white bg-white text-black hover:bg-stone-700 hover:text-white">
              Contact Me
            </InteractiveHoverButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
