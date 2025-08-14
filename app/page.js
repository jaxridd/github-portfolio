"use client";
import About from "@/Components/About";
import Header from "@/Components/Header";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
import Technologies from "@/Components/Technologies";
import ParticlesBackground from "@/Components/ParticlesBackground";

export default function Home() {
  return (
    <div className="relative">
      <ParticlesBackground />
      <Header />
      <div className="pt-20">
        <About />

        <Technologies />

        <Projects />
        <Contact />
      </div>
    </div>
  );
}
