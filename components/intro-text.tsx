"use client"

import { motion } from "framer-motion"
import { ChevronDown, Building2 } from "lucide-react"
import Link from "next/link"

const mainTextVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      staggerChildren: 0.05,
      delayChildren: 0.5,
    },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const taglineVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] as const, delay: 1.5 } },
}

const bottomCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] as const, delay: 2 } },
}

const bottomTextVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] as const, delay: 2.2 } },
}

export default function IntroText() {
  const mainTitleLine1 = "CRAFTING DIGITAL"
  const mainTitleLine2 = "MASTERPIECES"
  const mainTitleLine3 = "FOR YOU*" // Keeping the asterisk for artistic flair

  const tagline =
    "We bring together professional developers and designers, the brightest creative minds in the industry, to build innovative digital experiences."

  return (
      <section
          id="intro"
          className="relative h-dvh w-full flex flex-col justify-between overflow-hidden text-white"
          style={{
            backgroundImage:
                "linear-gradient(135deg, hsl(var(--dynamic-gradient-start)), hsl(var(--dynamic-gradient-end)))",
          }}
      >

  {/* Top Left Info */}
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-12 z-20 flex items-center gap-4 text-lg font-semibold"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 text-white"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <div>
          <span className="block">GLOBAL • DIGITAL</span>
          <span className="block text-sm opacity-80">ALWAYS AVAILABLE</span>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between w-full px-8 md:px-16 lg:px-24 pt-32 pb-24">
        {/* Left Side - Main Title */}
        <motion.h1
          className="text-7xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl font-extrabold leading-none mb-12 lg:mb-0 text-white"
          variants={mainTextVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="block" variants={wordVariants}>
            {mainTitleLine1}
          </motion.span>
          <motion.span className="block" variants={wordVariants}>
            {mainTitleLine2}
          </motion.span>
          <motion.span className="block" variants={wordVariants}>
            {mainTitleLine3}
          </motion.span>
        </motion.h1>

        {/* Right Side - Tagline */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl max-w-xl lg:text-right leading-relaxed text-white/90"
          variants={taglineVariants}
          initial="hidden"
          animate="visible"
        >
          {tagline}
        </motion.p>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 flex flex-col lg:flex-row items-end justify-between w-full px-8 md:px-16 lg:px-24 pb-12">
        {/* Bottom Left Card */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg flex items-center gap-4 mb-8 lg:mb-0 border border-white/20"
          variants={bottomCardVariants}
          initial="hidden"
          animate="visible"
        >
          <Building2 className="h-10 w-10 text-white flex-shrink-0" />
          <div>
            <span className="block text-lg font-semibold">OUR NEXT STEP:</span>
            <span className="block text-sm opacity-80">YOUR PROJECT</span>
            <Link
              href="#contact"
              className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors mt-1"
            >
              GET IN TOUCH <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
            </Link>
          </div>
        </motion.div>

        {/* Bottom Right Text */}
        <motion.h2
          className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white"
          variants={bottomTextVariants}
          initial="hidden"
          animate="visible"
        >
          INNOVATE
        </motion.h2>
      </div>

      {/* Scroll Down Indicator - Keep for general site navigation */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/70"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 3, // Increased delay to appear after other elements
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeOut",
        }}
      >
        <span className="text-lg mb-2">Scroll Down</span>
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </motion.div>
    </section>
  )
}
