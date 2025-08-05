"use client";
import Section from "./Section";

const About = () => {
  return (
    <Section sectionId="about">
      <div className="flex flex-col items-center justify-start h-screen mt-50">
        <h1 className="text-6xl font-bold">Jax Riddell</h1>
        <h1 className="text-6xl font-bold">Full Stack Developer</h1>
      </div>
    </Section>
  );
};

export default About;
