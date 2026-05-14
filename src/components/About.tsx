import { Award, Briefcase, FolderOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: FolderOpen, value: "20", label: "Projects" },
  { icon: Award, value: "8", label: "Certifications" },
];

const About = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section-padding section-transition">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>

        <div ref={ref} className="scroll-animate">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-2xl bg-card border border-dashed border-primary/30 flex items-center justify-center text-6xl font-bold text-primary glow-border card-hover">
                JD
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm a developer who loves turning complex problems into simple,
                beautiful, and intuitive solutions. With over 5 years of experience,
                I specialize in building modern web applications that delight users
                and drive business results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about clean code, performance optimization, and
                creating seamless user experiences. When I'm not coding, you'll
                find me exploring new technologies or contributing to open source projects.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-dashed border-primary/30 rounded-xl p-6 text-center card-hover"
              >
                <stat.icon className="text-primary mx-auto mb-3" size={28} />
                <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
