import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    role: "Frontend Developer (Angular)",
    company: "Adamsbridge Services Pvt Ltd",
    period: "Nov 2023 — Present",
    project: "CRM & Internal Workflow Platform",
    description:
      "Worked on modernizing and scaling enterprise CRM and workflow management applications. Led Angular migration from v17 to v21, migrated UI architecture to PrimeNG v19 with Tailwind CSS, reduced bundle size by 20%, and improved page load performance by 30% through frontend optimization strategies and reusable component architecture.",
  },

  {
    role: "React Developer",
    company: "Animaker Inc",
    period: "Mar 2023 — Nov 2023",
    project: "AI-Powered Text-to-Video Platform",
    description:
      "Contributed to an AI-powered SaaS platform that enables users to generate videos from text inputs. Developed interactive frontend workflows using React.js and Redux, integrated asynchronous APIs, and optimized rendering performance for dynamic content-heavy experiences.",
  },

  {
    role: "Frontend Developer (React)",
    company: "Infovision Labs India Pvt Ltd",
    period: "Oct 2021 — Feb 2023",
    project: "Employee Management Portal",
    description:
      "Built responsive and scalable frontend interfaces for enterprise applications using React.js. Focused on reusable component architecture, responsive design systems, and transforming Figma designs into production-ready user interfaces across devices and browsers.",
  },
];

const Experience = () => {
  const ref = useScrollAnimation();

  return (
    <section id="experience" className="section-padding section-transition">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          My professional journey building products that matter.
        </p>

        <div ref={ref} className="space-y-6 stagger-children">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-card border border-dashed border-primary/30 rounded-xl p-6 card-hover"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <div>
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <p className="text-sm text-primary font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  {exp.period}
                </span>
              </div>
              <span className="text-semibold text-base leading-relaxed">
                {exp.project}
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
