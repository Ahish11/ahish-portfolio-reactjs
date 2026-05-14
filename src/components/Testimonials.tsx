import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCo",
    text: "John delivered an exceptional frontend that exceeded our expectations. His attention to detail and understanding of UX principles made a huge difference in our product.",
    avatar: "SJ",
  },
  {
    name: "Mike Chen",
    role: "CTO at StartupHub",
    text: "Working with John was a pleasure. He took our vague requirements and turned them into a polished, performant application. Highly recommend!",
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Designer at CreativeLab",
    text: "John is one of the few developers who truly understands design. He translated my designs pixel-perfectly and even suggested improvements that made the UI better.",
    avatar: "ER",
  },
];

const Testimonials = () => {
  const ref = useScrollAnimation();

  return (
    <section id="testimonials" className="section-padding section-transition">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What People <span className="text-gradient">Say</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Feedback from clients and colleagues I've had the pleasure of working with.
        </p>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 stagger-children">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-dashed border-primary/30 rounded-xl p-6 card-hover relative"
            >
              <Quote className="text-primary/20 absolute top-4 right-4" size={32} />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
