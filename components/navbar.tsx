"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Code, Palette, Sparkles } from "lucide-react" // Removed Sun, Moon
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// Removed useTheme from next-themes
import { motion, AnimatePresence } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useColorTheme } from "@/providers/color-theme-provider" // Import custom color theme hook

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  // Removed theme and setTheme from useTheme()
  const { colorTheme, setColorTheme } = useColorTheme() // Use custom color theme hook
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    hover: {
      scale: 1.05,
      color: "hsl(var(--dynamic-primary))",
      textShadow: "0px 0px 8px rgba(var(--dynamic-primary), 0.5)",
    },
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl shadow-lg py-6 px-8 md:px-16 flex items-center justify-between border-b border-border/50"
    >
      <Link
        href="#home"
        className="flex items-center gap-3 text-2xl font-extrabold"
        style={{ color: "hsl(var(--dynamic-primary))" }}
      >
        <motion.div whileHover={{ rotate: 15, scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Code className="h-8 w-8" />
        </motion.div>
        <motion.div whileHover={{ rotate: -15, scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Palette className="h-8 w-8" />
        </motion.div>
        <span className="hidden sm:block">Dev & Design</span>
      </Link>

      <nav className="hidden lg:flex items-center gap-10">
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="relative text-foreground hover:text-dynamic-primary transition-colors duration-300 text-xl font-medium group"
          >
            {link.name}
            <motion.span
              className="absolute left-0 bottom-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 ease-out"
              style={{ backgroundColor: "hsl(var(--dynamic-primary))" }}
              layoutId={`underline-${link.name}`}
            />
          </motion.a>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        {mounted && (
          <>            {/* Colorful Theme Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Select colorful theme"
                  className="w-12 h-12 rounded-full hover:bg-dynamic-primary/20 transition-all duration-300"
                  style={{ color: "hsl(var(--dynamic-primary))" }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={colorTheme} // Use colorTheme as key for animation
                      initial={{ y: -20, opacity: 0, rotate: -90 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      exit={{ y: 20, opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sparkles className="h-7 w-7" /> {/* Always show Sparkles icon for colorful themes */}
                    </motion.div>
                  </AnimatePresence>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background/90 text-white border-none shadow-xl">
                <DropdownMenuItem onClick={() => setColorTheme("neon-green")}>
                  <Sparkles className="h-4 w-4 mr-2" style={{ color: "hsl(var(--neon-green))" }} /> Neon Green
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setColorTheme("neon-purple")}>
                  <Sparkles className="h-4 w-4 mr-2" style={{ color: "hsl(var(--neon-purple))" }} /> Neon Purple
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setColorTheme("neon-red")}>
                  <Sparkles className="h-4 w-4 mr-2" style={{ color: "hsl(var(--neon-red))" }} /> Neon Red
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setColorTheme("neon-yellow")}>
                  <Sparkles className="h-4 w-4 mr-2" style={{ color: "hsl(var(--neon-yellow))" }} /> Neon Yellow
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setColorTheme("default")}>
                  <Sparkles className="h-4 w-4 mr-2" style={{ color: "hsl(var(--dynamic-primary))" }} /> Default
                  Artistic
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full hover:bg-dynamic-primary/20 transition-all duration-300"
              style={{ color: "hsl(var(--dynamic-primary))" }}
            >
              <Menu className="h-7 w-7" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[320px] sm:w-[450px] bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col gap-8 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-semibold text-foreground hover:text-dynamic-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
