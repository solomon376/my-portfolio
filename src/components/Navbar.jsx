import { Moon, Sun, Github, Linkedin, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("projects");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const links = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  // Track scroll position for active link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset for better accuracy
      let currentSection = "projects";

      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = link.name.toLowerCase();
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 w-[90%] mx-auto">
      <div className="rounded-2xl border bg-background/70 backdrop-blur-lg shadow-md px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-extrabold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          MyPortfolio
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((link, i) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <motion.a
                key={i}
                href={link.href}
                className={`relative transition ${
                  isActive
                    ? "bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                    : "hover:text-primary"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                {!isActive && (
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 hover:w-full"></span>
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <a href="https://github.com/your-handle" target="_blank" rel="noreferrer">
            <Github className="w-5 h-5 hover:text-primary transition" />
          </a>
          <a href="https://linkedin.com/in/your-handle" target="_blank" rel="noreferrer">
            <Linkedin className="w-5 h-5 hover:text-primary transition" />
          </a>
          <Button variant="ghost" size="icon" onClick={() => setDark(!dark)}>
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 p-4 rounded-xl border bg-background/90 backdrop-blur-lg shadow-lg"
        >
          <ul className="flex flex-col gap-4 text-center">
            {links.map((link, i) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={i}
                  href={link.href}
                  className={`transition ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                      : "hover:text-primary"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
