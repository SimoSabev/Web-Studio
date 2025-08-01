"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle, Lightbulb, Rocket, Users, Sparkles, Zap, ShieldCheck } from "lucide-react"

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' as const } },
}

const timelineItemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  hover: { scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)", transition: { duration: 0.3 } },
}

export default function ServicesTimeline() {
  const services = [
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Full-Stack Web Development",
      description:
        "From robust backend systems to dynamic front-end interfaces, we build scalable and secure web applications tailored to your needs.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Intuitive UI/UX Design",
      description:
        "Crafting engaging and user-friendly interfaces that not only look stunning but also provide seamless user experiences.",
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Collaborative Partnership",
      description:
        "We work closely with you through every stage, ensuring your vision is brought to life with precision and creativity.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Performance & Optimization",
      description:
        "Delivering fast, responsive, and SEO-friendly websites optimized for all devices and search engines.",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Sparkles className="h-8 w-8 text-white" />,
      title: "Artistic & Modern Approach",
      description:
        "We combine cutting-edge technology with a keen eye for design, creating unique and memorable digital experiences.",
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Seamless Integration",
      description:
        "Our development and design processes are tightly integrated, ensuring a cohesive and efficient workflow from concept to launch.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      title: "Reliability & Support",
      description:
        "We stand by our work, offering ongoing support and maintenance to ensure your digital presence remains strong and up-to-date.",
    },
  ]

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="services"
      className="py-24 md:py-40 bg-background text-dynamic-text-primary relative overflow-hidden bg-diagonal-waves"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(to right, hsl(var(--dynamic-accent)), hsl(var(--dynamic-primary)))",
          }}
        >
          Our Expertise & Value
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Services Timeline */}
          <div>
            <motion.h3
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={sectionVariants}
              className="text-4xl font-bold mb-12 text-center lg:text-left text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(to right, hsl(var(--dynamic-primary)), hsl(var(--dynamic-secondary)))",
              }}
            >
              What We Offer
            </motion.h3>
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gray-700 rounded-full shadow-inner"></div>
              {services.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={timelineItemVariants}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  whileHover="hover"
                  className="mb-16 relative p-6 bg-card rounded-xl shadow-lg border border-border/50 cursor-pointer"
                >
                  <div
                    className="absolute -left-8 top-0 w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-4 border-dark-bg-primary"
                    style={{ backgroundColor: "hsl(var(--dynamic-primary))" }}
                  >
                    {item.icon}
                  </div>
                  <div className="ml-8">
                    <h4 className="text-2xl font-semibold mb-3" style={{ color: "hsl(var(--dynamic-primary))" }}>
                      {item.title}
                    </h4>
                    <p className="text-lg text-dynamic-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Timeline */}
          <div>
            <motion.h3
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={sectionVariants}
              className="text-4xl font-bold mb-12 text-center lg:text-left text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(to right, hsl(var(--dynamic-accent)), hsl(var(--dynamic-secondary)))",
              }}
            >
              Why Choose Us
            </motion.h3>
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gray-700 rounded-full shadow-inner"></div>
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={timelineItemVariants}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  whileHover="hover"
                  className="mb-16 relative p-6 bg-card rounded-xl shadow-lg border border-border/50 cursor-pointer"
                >
                  <div
                    className="absolute -left-8 top-0 w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-4 border-dark-bg-primary"
                    style={{ backgroundColor: "hsl(var(--dynamic-accent))" }}
                  >
                    {item.icon}
                  </div>
                  <div className="ml-8">
                    <h4 className="text-2xl font-semibold mb-3" style={{ color: "hsl(var(--dynamic-accent))" }}>
                      {item.title}
                    </h4>
                    <p className="text-lg text-dynamic-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
