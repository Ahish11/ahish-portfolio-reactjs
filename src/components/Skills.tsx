import {
  Atom,
  Code2,
  FileCode,
  Palette,
  Server,
  Database,
  Layers,
  Zap,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  {
    name: "React",
    icon: Atom,
    description:
      "Building high-performance, scalable SPAs using hooks, component architecture, and efficient rendering patterns.",
  },
  {
    name: "Angular",
    icon: Layers,
    description:
      "Developing enterprise-grade applications with modular architecture, reusable components, and maintainable structure.",
  },
  {
    name: "JavaScript",
    icon: Code2,
    description:
      "Strong in ES6+, asynchronous programming, and handling complex UI logic in large-scale applications.",
  },
  {
    name: "TypeScript",
    icon: Code2,
    description:
      "Writing type-safe, scalable code to improve maintainability and reduce runtime errors in large projects.",
  },
  // {
  //   name: "Performance Optimization",
  //   icon: Zap,
  //   description:
  //     "Improved application load time by 30% using lazy loading, code splitting, and efficient rendering strategies.",
  // },
  {
    name: "HTML & Accessibility",
    icon: FileCode,
    description:
      "Semantic, SEO-friendly, and accessible markup following modern web standards.",
  },
  {
    name: "CSS",
    icon: Palette,
    description:
      "Building pixel-perfect, responsive interfaces using Tailwind, SCSS,Bootstrap and modern CSS techniques.",
  },
  {
    name: "Node.js",
    icon: Server,
    description:
      "Designing REST APIs, authentication systems, and scalable backend services using Express.",
  },
  {
    name: "Express.js",
    icon: Server,
    description:
      "Building structured backend APIs using middleware, routing, and request handling for scalable web applications.",
  },
  {
    name: "MongoDB",
    icon: Database,
    description:
      "Designing efficient schemas, indexing strategies, and handling large datasets with aggregation pipelines.",
  },
];

const Skills = () => {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="section-padding section-transition">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Technologies and tools I work with to bring ideas to life.
        </p>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card border border-dashed border-primary/30 rounded-xl p-6 card-hover group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <skill.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
