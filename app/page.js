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
      <div className="pt-20 md:pt-20">
        <section id="about" className="py-8 md:py-15">
          <About />
        </section>
        <section id="technologies" className="py-8 md:py-15">
          <Technologies />
        </section>
        <section id="experience" className="py-8 md:py-15">
          <WorkExperience />
        </section>
        <section id="projects" className="py-8 md:py-15">
          <Projects />
        </section>
      </div>
    </div>
  );
}
