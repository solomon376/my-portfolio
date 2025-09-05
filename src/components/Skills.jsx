import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400 text-5xl" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-5xl" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-6 animate-in fade-in">
          Skills
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto animate-in slide-in-from-bottom duration-700">
          These are the technologies and tools I use to bring ideas to life.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition duration-300 hover:-translate-y-2">
                <CardContent className="flex flex-col items-center justify-center gap-3 p-6">
                  {skill.icon}
                  <Badge>{skill.name}</Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
