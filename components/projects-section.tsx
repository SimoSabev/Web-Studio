"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projectList = [
  {
    name: "Azion",
    role: "Frontend Development",
    type: "Freelance",
    year: 2024,
    image: "/Azion.png?height=200&width=300",
  },
  {
    name: "Ilios Decor",
    role: "Frontend Development",
    type: "Freelance",
    year: 2025,
    image: "/ilios.png?height=200&width=300",
  },
  {
    name: "Yachtllywood",
    role: "Frontend Development",
    type: "Freelance",
    year: 2024,
    image: "/yachtlly.png?height=200&width=300",
  },
  {
    name: "Shiseikan Aikido Dojo",
    role: "Frontend Development",
    type: "Freelance with Code Resolution",
    year: 2022,
    image: "/shiseikan.png?height=200&width=300",
  },
  {
    name: "Cruz Cuts",
    role: "Frontend Development",
    type: "Freelance",
    year: 2023,
    image: "/cruz.png?height=200&width=300",
  },
  {
    name: "Personal Portfolio",
    role: "Design & Frontend Development",
    type: "Freelance",
    year: 2021,
    image: "/simoo.png?height=200&width=300",
  },
  {
    name: "Vega-ns",
    role: "Frontend Development",
    type: "Freelance with Code Resolution",
    year: 2022,
    image: "/vega.png?height=200&width=300",
  },
  {
    name: "Arlekin",
    role: "Frontend Development",
    type: "Freelance",
    year: 2023,
    image: "/arlekin.png?height=200&width=300",
  },
  {
    name: "Peara",
    role: "Frontend Development",
    type: "Freelance",
    year: 2023,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "ONE38",
    role: "Frontend Development",
    type: "Freelance",
    year: 2024,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "1st St. Paul's Place",
    role: "Frontend Development",
    type: "Freelance",
    year: 2024,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "The Wild Hare",
    role: "Frontend Development",
    type: "Freelance",
    year: 2024,
    image: "/placeholder.svg?height=200&width=300",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] } },
};

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<{ name: string; image: string } | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });
  };

  return (
      <section
          id="projects"
          ref={sectionRef}
          onMouseMove={handleMouseMove} // Capture mouse movement
          className="py-24 md:py-40 bg-background text-dynamic-text-primary relative overflow-hidden bg-hexagonal-pattern"
      >
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <motion.h2
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(to right, hsl(var(--dynamic-accent)), hsl(var(--dynamic-primary)))",
              }}
          >
            Our Creative Portfolio
          </motion.h2>

          <motion.div
              className="relative"
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
          >
            <div className="grid grid-cols-1 gap-y-6">
              {projectList.map((project) => (
                  <motion.div
                      key={project.name}
                      variants={itemVariants}
                      className="relative flex flex-col sm:flex-row items-center sm:justify-between py-6 px-8 rounded-xl transition-all duration-300 ease-in-out group bg-card border border-border/50 hover:bg-dynamic-primary/10 hover:border-dynamic-primary/50 cursor-pointer"
                      onMouseEnter={() => setHoveredProject({ name: project.name, image: project.image })}
                      onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 w-full sm:w-auto">
                      <motion.span
                          className="text-3xl font-bold text-dynamic-primary group-hover:text-dynamic-primary-foreground transition-colors duration-300"
                          whileHover={{ scale: 1.02, x: 5 }}
                      >
                        {project.name}
                      </motion.span>
                      <span className="text-dynamic-text-secondary text-xl">{project.role}</span>
                    </div>
                    <div className="flex items-center gap-6 mt-4 sm:mt-0">
                      <span className="text-dynamic-text-secondary text-xl hidden md:block">{project.type}</span>
                      <span className="text-dynamic-text-secondary text-xl">{project.year}</span>
                    </div>

                    {hoveredProject?.name === project.name && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            style={{
                              position: "fixed", // Use fixed to follow the cursor globally
                              top: cursorPosition.y + 10, // Slightly below the cursor
                              left: cursorPosition.x + 20, // Slightly to the right of the cursor
                              pointerEvents: "none", // Prevent interaction with the hover image
                              zIndex: 50,
                            }}
                            className="w-80 h-52 bg-card rounded-xl shadow-2xl overflow-hidden border border-border/50"
                        >
                          <Image
                              src={project.image || "/placeholder.svg"}
                              alt={`Preview of ${project.name}`}
                              width={320}
                              height={208}
                              className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                            <span className="text-lg font-semibold text-white">{project.name}</span>
                          </div>
                        </motion.div>
                    )}
                  </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  );
}