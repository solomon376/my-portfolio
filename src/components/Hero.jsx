import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Hi, I’m <span className="text-primary">Eze Kelechi Solomon</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground max-w-xl mb-6"
      >
        I build modern, accessible, and delightful web experiences.
      </motion.p>

      <div className="flex gap-4">
        <Button asChild>
          <a href="#projects">View Projects</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  );
}
