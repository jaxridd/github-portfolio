import About from "@/Components/About";
import Header from "@/Components/Header";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
import SmoothScrollContainer from "@/Components/SmoothScrollContainer";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <SmoothScrollContainer>
        <About />
        <Projects />
        <Contact />
      </SmoothScrollContainer>
    </div>
  );
}
