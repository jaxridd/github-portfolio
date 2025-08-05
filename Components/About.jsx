"use client";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import Section from "./Section";

const About = () => {
  return (
    <Section sectionId="about">
      <div className="flex flex-col items-center h-screen space-y-6 mt-50">
        <h1 className="text-6xl font-bold">Jax Riddell</h1>
        <h1 className="text-6xl font-bold">Full-Stack Developer</h1>
        <div className="flex space-x-4">
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
    </Section>
  );
};

export default About;
