import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    category: "Web",
    description: "A modern responsive portfolio built with React, TailwindCSS, and Vite.",
    image: "/images/portfolio.jpg",
    demo: "https://jenkison.netlify.app/",
    code: "https://github.com/solomon376/Jenkison-Sea-Life",
  },
  {
    title: "E-commerce Store",
    category: "Web",
    description: "An e-commerce app with shopping cart and checkout functionality.",
    image: "https://via.placeholder.com/600x400?text=E-commerce+Project",
    demo: "#",
    code: "#",
  },
  {
    title: "UI Components Library",
    category: "UI",
    description: "Reusable UI components built with shadcn/ui and Tailwind.",
    image: "https://via.placeholder.com/600x400?text=UI+Library",
    demo: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-6 text-center animate-in fade-in">
          Projects
        </h2>
        <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto animate-in slide-in-from-bottom duration-700">
          A showcase of my recent work. Click below to explore demos and source
          code.
        </p>

        {/* Tabs for categories */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="web">Web Apps</TabsTrigger>
            <TabsTrigger value="ui">UI/UX</TabsTrigger>
          </TabsList>

          {/* All Projects */}
          <TabsContent value="all">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-xl hover:-translate-y-2 transition duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex gap-3">
                      <Button asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={project.code} target="_blank" rel="noopener noreferrer">
                          Source Code
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Web Projects */}
          <TabsContent value="web">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((p) => p.category === "Web")
                .map((project) => (
                  <Card
                    key={project.title}
                    className="overflow-hidden hover:shadow-xl hover:-translate-y-2 transition duration-300"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex gap-3">
                      <Button asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={project.code} target="_blank" rel="noopener noreferrer">
                          Source Code
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          {/* UI Projects */}
          <TabsContent value="ui">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((p) => p.category === "UI")
                .map((project) => (
                  <Card
                    key={project.title}
                    className="overflow-hidden hover:shadow-xl hover:-translate-y-2 transition duration-300"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex gap-3">
                      <Button asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={project.code} target="_blank" rel="noopener noreferrer">
                          Source Code
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
