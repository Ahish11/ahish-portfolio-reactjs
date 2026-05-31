import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { label: "Home", view: "home" },
  { label: "Skills", view: "skills" },
  { label: "Work Experience", view: "experience" },
  { label: "Projects", view: "projects" },
  { label: "Contact Me", view: "contact" },
];

interface NavbarProps {
  sectionRefs: {
    [key: string]: React.RefObject<HTMLDivElement | null>;
  };
}

const Navbar = ({ sectionRefs }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  const scrollToSection = (view: string) => {
    const targetRef = sectionRefs[view];

    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-1 bg-card/90 backdrop-blur-md border border-border rounded-full px-2 py-2">
        {navLinks.map((link) => (
          <li key={link.view}>
            <button
              onClick={() => scrollToSection(link.view)}
              className="text-sm font-medium text-muted-foreground hover:text-primary px-4 py-2 rounded-full transition-colors hover:bg-primary/10"
            >
              {link.label}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={toggle}
            className="ml-2 p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </li>
      </ul>

      {/* Mobile toggle */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={toggle}
          className="bg-card/90 backdrop-blur-md border border-border rounded-full p-3 text-foreground"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button
          className="bg-card/90 backdrop-blur-md border border-border rounded-full p-3 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-14 left-1/2 -translate-x-1/2 bg-card/95 backdrop-blur-md border border-border rounded-2xl px-6 py-4 min-w-[220px] animate-fade-in-up">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.view}>
                <button
                  onClick={() => scrollToSection(link.view)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors block w-full text-left py-1"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
