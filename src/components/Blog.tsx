import { ArrowRight, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const posts = [
  {
    title: "Building Performant React Apps with Suspense",
    excerpt: "Learn how to leverage React Suspense and lazy loading to dramatically improve your app's performance and user experience.",
    date: "Mar 15, 2026",
    readTime: "5 min read",
    tag: "React",
  },
  {
    title: "CSS Container Queries: The Future of Responsive Design",
    excerpt: "Container queries are changing how we think about responsive design. Here's everything you need to know to get started.",
    date: "Feb 28, 2026",
    readTime: "4 min read",
    tag: "CSS",
  },
  {
    title: "TypeScript Patterns Every Developer Should Know",
    excerpt: "From discriminated unions to template literal types — master these TypeScript patterns to write safer, more expressive code.",
    date: "Jan 10, 2026",
    readTime: "7 min read",
    tag: "TypeScript",
  },
];

const Blog = () => {
  const ref = useScrollAnimation();

  return (
    <section id="blog" className="section-padding section-transition">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Latest <span className="text-gradient">Blog Posts</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Thoughts, tutorials, and insights from my development journey.
        </p>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 stagger-children">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-card border border-dashed border-primary/30 rounded-xl overflow-hidden card-hover group cursor-pointer"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  {post.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {post.excerpt}
                </p>
                <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
