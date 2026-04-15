import Navbar from "@/app/components/Navbar";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="pt-20">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
