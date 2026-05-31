import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    home: heroRef,
    skills: skillsRef,
    experience: experienceRef,
    projects: projectsRef,
    contact: contactRef,
  };

  return (
    <div className="min-h-screen">
      <Navbar sectionRefs={sectionRefs} />

      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
