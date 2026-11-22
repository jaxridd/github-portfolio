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
        <section id="about" className="py-8 md:py-16 scroll-mt-20">
          <About />
        </section>
        <section id="skills" className="py-8 md:py-16 scroll-mt-20">
          <Technologies />
        </section>
        <section id="experience" className="py-8 md:py-16 scroll-mt-20">
          <WorkExperience />
        </section>
        <section id="projects" className="py-8 md:py-16 scroll-mt-20">
          <Projects />
        </section>
      </div>
    </div>
  );
}
