"use client"

import {Easing, motion} from "framer-motion"
import { useInView } from "react-intersection-observer"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 100, rotateX: 90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as Easing,
    },
  },
}

const taglineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 0.8,
      ease: "easeOut" as Easing,
    },
  },
}

export default function HeroSection() {
  const title1 = "LEADING"
  const title2 = "DEVELOPER"
  const title3 = "&"
  const title4 = "DESIGNER"
  const tagline =
    "CLIENTS & INVESTORS 24/7. AWARD-WINNING WEBSITES THAT MAKE YOU STAND OUT AS A TECH-COMPANY AND STARTUP."

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-background text-dynamic-text-primary"
    >
      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <motion.h1
          ref={ref}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl font-extrabold leading-tight mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span
            className="block animated-gradient-text"
            style={{
              backgroundImage: "linear-gradient(to right, hsl(var(--dynamic-primary)), hsl(var(--dynamic-secondary)))",
            }}
            variants={wordVariants}
          >
            {title1}
          </motion.span>
          <motion.span
            className="block animated-gradient-text"
            style={{
              backgroundImage: "linear-gradient(to right, hsl(var(--dynamic-secondary)), hsl(var(--dynamic-accent)))",
            }}
            variants={wordVariants}
          >
            {title2}
          </motion.span>
          <motion.span
            className="block animated-gradient-text text-7xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl"
            style={{
              backgroundImage:
                "linear-gradient(to right, hsl(var(--dynamic-text-secondary)), hsl(var(--dynamic-text-primary)))",
            }}
            variants={wordVariants}
          >
            {title3}
          </motion.span>
          <motion.span
            className="block animated-gradient-text"
            style={{
              backgroundImage: "linear-gradient(to right, hsl(var(--dynamic-accent)), hsl(var(--dynamic-primary)))",
            }}
            variants={wordVariants}
          >
            {title4}
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-dynamic-text-secondary max-w-4xl mx-auto leading-relaxed"
          variants={taglineVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {tagline}
        </motion.p>
      </div>
    </section>
  )
}
