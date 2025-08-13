"use client";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import Section from "./Section";

const About = () => {
  return (
    <Section sectionId="about">
      <div className="flex flex-col items-center h-screen space-y-6 mt-50">
        <div className="flex items-center space-x-4">
          <img
            src="/jax.jpg"
            alt="Jax Riddell"
            className="w-40 h-40 rounded-full"
          />
          <div className="flex flex-col items-start">
            <h1 className="text-6xl font-bold mb-3">Jax Riddell</h1>
            <h2 className="text-3xl max-w-100">Full-stack developer with a passion for building.</h2>
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
        <div className="flex items-center space-x-4"></div>
      </div>
    </Section>
  );
};

export default About;
