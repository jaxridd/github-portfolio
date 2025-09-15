import About from "@/Components/About";
import Header from "@/Components/Header";
import Projects from "@/Components/Projects";
import Technologies from "@/Components/Technologies";
import ParticlesBackground from "@/Components/ParticlesBackground";
import WorkExperience from "@/Components/WorkExperience";

export default function Home() {
  return (
    <div className="relative">
      <ParticlesBackground />
      <Header />
      <div className="pt-20">
        <section id="about">
          <About />
        </section>
        <section id="technologies">
          <Technologies />
        </section>
        <section id="experience">
          <WorkExperience />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
    </div>
  );
}
