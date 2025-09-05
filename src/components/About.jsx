import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const About = () => {
  const timeline = [
   {
  year: "2022",
  title: "The Beginning",
  desc: "Started my journey in web development. Built my first simple website with little knowledge, laying the foundation for growth.",
},
{
  year: "2023",
  title: "Building Fundamentals",
  desc: "Improved my skills by creating small projects, practicing HTML, CSS, and JavaScript, and gaining confidence as a developer.",
},
{
  year: "2024",
  title: "Frontend Developer Path",
  desc: "Focused on React, TailwindCSS, and modern tooling (Vite). Built my first full portfolio and started working on real-world apps.",
},
{
  year: "2025",
  title: "Expanding Horizons",
  desc: "Learning Java (with JavaFX), gaining knowledge of C++, and exploring databases like MySQL and MongoDB — all while pursuing my B.Sc.",
},
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I’m a passionate <span className="font-semibold">Frontend Developer </span> 
          who loves creating beautiful, user-friendly web applications. With a strong 
          foundation in modern frameworks and a constant drive to learn, <br />I build 
          interfaces that balance design and performance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Profile / Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-42 h-42 rounded-full object-cover object-top border-4 border-primary"
              />
              <h3 className="text-2xl font-semibold">Solomon Eze</h3>
              <p className="text-muted-foreground">
                Turning ideas into responsive and engaging digital experiences.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Highlights / Skills Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="shadow-lg">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold mb-2">Highlights</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Frontend Development</Badge>
                <Badge>React & Vite</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>UI/UX Enthusiast</Badge>
                <Badge>Remote Ready</Badge>
              </div>
              <p className="text-muted-foreground mt-4">
                I specialize in building modern web apps with React, TailwindCSS,
                and animations using Framer Motion. My focus is always on crafting
                seamless user journeys and clean, scalable code.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10">My Journey</h3>
        <div className="relative border-l border-muted-foreground/30">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground ring-4 ring-background">
                {index + 1}
              </div>
              <h4 className="text-lg font-semibold">{item.year} — {item.title}</h4>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
