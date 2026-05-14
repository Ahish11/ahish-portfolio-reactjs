import {
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Mail,
  Calendar,
} from "lucide-react";
import FloatingShape from "./FloatingShape";

const skillTags = [
  "React js",
  "Angular",
  "JavaScript",
  "Typescript",
  "HTML",
  "CSS",
  "SCSS",
  "Git",
  "Bootstrap",
  "Tailwindcss",
  "Express js",
  "Node.js",
  "MongoDB",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-32 relative overflow-hidden"
    >
      <FloatingShape />
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div className="space-y-6 animate-fade-in-up">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">
            A Frontend Developer
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Ahish M <span className="inline-block animate-float">👋</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg">
            I’m a frontend engineer with 5+ years of experience building
            scalable SaaS and enterprise applications using Angular and React. I
            specialize in performance optimization and frontend architecture,
            focusing on creating fast, maintainable, and user-centric systems.
            I’ve improved application load times, built reusable component
            systems to accelerate development, and worked on data-heavy
            applications at scale. My experience includes micro frontends,
            server-side rendering, and advanced performance techniques like lazy
            loading and code splitting.
          </p>
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right profile card */}
        <div className="flex justify-center" style={{ animationDelay: "0.3s" }}>
          <div className="bg-card border border-dashed border-primary/40 rounded-2xl p-6 w-full max-w-sm glow-border card-hover animate-pulse-glow">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center text-3xl font-bold text-primary">
                AM
              </div>
            </div>

            <h3 className="text-center font-bold text-lg">Ahish M</h3>
            <p className="text-center text-primary text-sm mb-4">
              Frontend Developer
            </p>

            <div className="space-y-2 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                <span>India</span>
              </div>
              <a
                href="mailto:ahishm430@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail size={14} className="text-primary" />
                <span>ahishm430@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-primary" />
                <span>5+ Years Experience</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-center gap-4 pt-2">
              <a
                href="https://github.com/Ahish11?tab=repositories&q=&type=public&language=&sort="
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:scale-125 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ahish-murugesan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:scale-125 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              {/* <a
                href="#"
                className="text-muted-foreground hover:text-primary hover:scale-125 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
