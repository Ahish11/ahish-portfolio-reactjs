import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  // {
  //   title: "E-Commerce Dashboard",
  //   description:
  //     "A full-featured dashboard for managing products, orders, and analytics with real-time data visualization.",
  //   tags: ["React", "TypeScript", "Javascript", "Tailwind CSS"],
  //   github: "https://github.com/Ahish11/ahish-portfolio-reactjs",
  //   // live: "#",
  // },
  {
    title: "Portfolio",
    description: "Build my own portfolio",
    tags: ["Reactjs", "Javascript", "Tailwind CSS", "Typescript", "HTML"],
    github: "https://github.com/Ahish11/contactsApp_meanstack",
    // live: "#",
  },
  {
    title: "Contactly",
    description:
      "Building a Full Stack Contacts Management directory to stremline all contacts in one place",
    tags: [
      "Angular",
      "TailwindCSS",
      "HTML",
      "Javascript",
      "TypeScript",
      "Nodejs",
      "Express js",
      "Mongodb",
    ],
    github: "https://github.com/Ahish11/contactsApp_meanstack",
    live: "#",
  },
  // {
  //   title: "Portfolio Generator",
  //   description: "A tool that generates stunning portfolio websites from a simple JSON configuration file.",
  //   tags: ["TypeScript", "Vite", "Tailwind", "Three.js"],
  //   github: "#",
  //   live: "#",
  // },
];

const Projects = () => {
  const ref = useScrollAnimation();

  return (
    <section id="projects" className="section-padding section-transition">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Personal <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Side projects I've built to explore new technologies and solve real
          problems.
        </p>

        <div ref={ref} className="grid sm:grid-cols-2 gap-6 stagger-children">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card border border-dashed border-primary/30 rounded-xl p-6 card-hover group"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                {/* <a
                  href={project.live}
                  className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={18} />
                </a> */}   
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
