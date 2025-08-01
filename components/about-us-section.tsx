"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Sparkles, Code, Palette } from "lucide-react"

const cardVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const } },
}

const badgeHoverVariants = {
  hover: { scale: 1.1, boxShadow: "0px 0px 15px rgba(0,0,0,0.3)", transition: { duration: 0.2 } },
}

const linkHoverVariants = {
  hover: { x: 5, color: "hsl(var(--dynamic-primary))", transition: { duration: 0.2 } },
}

export default function AboutUsSection() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section
      id="about"
      className="py-24 md:py-40 bg-background text-dynamic-text-primary relative overflow-hidden bg-floating-circles" // Changed to bg-dynamic-blobs
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 z-10 relative">
        <h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(to right, hsl(var(--dynamic-secondary)), hsl(var(--dynamic-accent)))",
          }}
        >
          Meet the Visionaries
        </h2>

        {/* Developer Profile */}
        <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={cardVariants}
            className="flex flex-col lg:flex-row items-center lg:items-start gap-16 mb-24 p-6 sm:p-8 md:p-12 rounded-3xl bg-card shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_hsla(var(--dynamic-primary))]"
        >
          {/* Image Section */}
          <div
              className="relative w-60 h-60 sm:w-72 sm:h-72 flex-shrink-0 rounded-full p-[6px] shadow-xl group mx-auto"
              style={{ background: "linear-gradient(to right, hsl(var(--dynamic-secondary)), hsl(var(--dynamic-accent)))" }}
          >
            <div className="bg-card rounded-full w-full h-full overflow-hidden relative">
              <Image
                  src="/simo.jpg"
                  alt="Simeon Sabev - Frontend Developer"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 rounded-full"
              />
              <motion.div
                  className="absolute top-4 right-4 p-3 rounded-full shadow-md"
                  style={{ backgroundImage: "linear-gradient(to right, hsl(var(--dynamic-secondary)), hsl(var(--dynamic-accent)))" }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
              >
                <Code className="h-7 w-7 text-white" />
              </motion.div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4 lg:mb-6">
              <motion.div variants={badgeHoverVariants} whileHover="hover">
                <Badge
                    variant="secondary"
                    className="text-white px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base md:text-lg rounded-full shadow-md"
                    style={{ backgroundImage: "linear-gradient(to right, hsl(var(--dynamic-secondary)), hsl(var(--dynamic-accent)))" }}
                >
                  <Sparkles className="h-5 w-5 mr-2" /> Available for new opportunities
                </Badge>
              </motion.div>
            </div>

            {/* Name */}
            <h3
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(to right, hsl(var(--dynamic-secondary)), hsl(var(--dynamic-accent)))",
                }}
            >
              Simeon Sabev
            </h3>

            {/* Role Badge */}
            <Badge className="mb-5 sm:mb-6 text-sm sm:text-lg px-4 sm:px-6 sm:py-2 bg-dark-bg-secondary text-dynamic-text-secondary rounded-full shadow-inner">
              FrontEnd Developer
            </Badge>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-dynamic-text-secondary mb-6 sm:mb-8 leading-relaxed lg:leading-relaxed px-2">
              I&apos;m a professional front-end developer with over two years of experience crafting beautiful,
              responsive, and highly functional web applications. I specialize in modern technologies and user-centered
              design, bringing ideas to life with clean, efficient code.
            </p>

            {/* Skill Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-5 sm:mb-8">
              <motion.div variants={badgeHoverVariants} whileHover="hover">
                <Badge
                    variant="outline"
                    className="text-xs sm:text-sm md:text-base px-4 sm:px-5 py-1 sm:py-2 rounded-full"
                    style={{ borderColor: "hsl(var(--dynamic-primary))", color: "hsl(var(--dynamic-primary))" }}
                >
                  {"<"}React & Next.js{">"}
                </Badge>
              </motion.div>
              <motion.div variants={badgeHoverVariants} whileHover="hover">
                <Badge
                    variant="outline"
                    className="text-xs sm:text-sm md:text-base px-4 sm:px-5 py-1 sm:py-2 rounded-full"
                    style={{ borderColor: "hsl(var(--dynamic-accent))", color: "hsl(var(--dynamic-accent))" }}
                >
                  UI/UX Development
                </Badge>
              </motion.div>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <motion.a
                  href="tel:+359885031865"
                  className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-dynamic-text-secondary hover:text-dynamic-primary transition-colors duration-300"
                  variants={linkHoverVariants}
                  whileHover="hover"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" /> +359 88 503 1865
              </motion.a>
              <motion.a
                  href="mailto:sabevsimeon08@gmail.com"
                  className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-dynamic-text-secondary hover:text-dynamic-primary transition-colors duration-300"
                  variants={linkHoverVariants}
                  whileHover="hover"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" /> sabevsimeon08@gmail.com
              </motion.a>
            </div>
          </div>
        </motion.div>


        {/* Partner Profile */}
        <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={cardVariants}
            className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-10 sm:mb-16 md:mb-24 lg:mb-32 p-4 sm:p-8 md:p-12 lg:p-16 rounded-3xl bg-card shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_hsla(var(--dynamic-primary))]"
        >
          {/* Image Section */}
          <div
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 flex-shrink-0 rounded-full overflow-hidden border-2 shadow-xl group mx-auto lg:mx-0"
              style={{ borderColor: "hsl(var(--dynamic-primary))" }}
          >
            <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Partner Name - Web Designer"
                width={320}
                height={320}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <motion.div
                className="absolute top-2 sm:top-4 md:top-6 left-2 sm:left-4 md:left-6 p-2 sm:p-3 md:p-4 rounded-full shadow-lg"
                style={{ backgroundColor: "hsl(var(--dynamic-primary))" }}
                whileHover={{ scale: 1.2, rotate: -360 }}
                transition={{ duration: 0.5 }}
            >
              <Palette className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 text-white" />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-right">
            {/* Badge Section */}
            <div className="flex items-center justify-center lg:justify-end gap-2 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
              <motion.div variants={badgeHoverVariants} whileHover="hover">
                <Badge
                    variant="secondary"
                    className="text-white px-3 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg rounded-full shadow-md"
                    style={{ backgroundColor: "hsl(var(--dynamic-primary))" }}
                >
                  <Sparkles className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 mr-1 sm:mr-2" /> Open for collaborations
                </Badge>
              </motion.div>
            </div>

            {/* Name */}
            <h3
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-2 sm:mb-3 md:mb-4 text-transparent bg-clip-text leading-tight xl:leading-snug"
                style={{
                  backgroundImage: "linear-gradient(to right, hsl(var(--dynamic-primary)), hsl(var(--dynamic-accent)))",
                }}
            >
              Maksim Akimov
            </h3>

            {/* Role Badge */}
            <Badge className="mb-2 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 py-2 bg-dark-bg-secondary text-dynamic-text-secondary rounded-full shadow-inner">
              Web Designer & UI/UX
            </Badge>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-dynamic-text-secondary mb-5 sm:mb-7 md:mb-8 leading-relaxed sm:leading-loose">
              As a passionate web designer, I focus on creating intuitive, aesthetically pleasing, and user-centric digital
              experiences. My expertise lies in transforming ideas into visually stunning and functional designs that captivate
              audiences.
            </p>

            {/* Skills Section */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
              <motion.div variants={badgeHoverVariants} whileHover="hover">
                <Badge
                    variant="outline"
                    className="text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-full"
                    style={{ borderColor: "hsl(var(--dynamic-secondary))", color: "hsl(var(--dynamic-secondary))" }}
                >
                  Figma & Sketch
                </Badge>
              </motion.div>
              <motion.div variants={badgeHoverVariants} whileHover="hover">
                <Badge
                    variant="outline"
                    className="text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-full"
                    style={{ borderColor: "hsl(var(--dynamic-accent))", color: "hsl(var(--dynamic-accent))" }}
                >
                  User Experience
                </Badge>
              </motion.div>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-end gap-3 sm:gap-4 md:gap-6">
              <motion.a
                  href="tel:+359885031865"
                  className="flex items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base text-dynamic-text-secondary hover:text-dynamic-primary transition-colors duration-300"
                  variants={linkHoverVariants}
                  whileHover="hover"
              >
                <Phone className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6" /> +359 98 823 1539
              </motion.a>
              <motion.a
                  href="mailto:alex.johnson@example.com"
                  className="flex items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base text-dynamic-text-secondary hover:text-dynamic-primary transition-colors duration-300"
                  variants={linkHoverVariants}
                  whileHover="hover"
              >
                <Mail className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6" /> alex.johnson@example.com
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
