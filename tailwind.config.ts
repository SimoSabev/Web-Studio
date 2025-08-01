import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class", "html"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
        "192": "48rem",
      },
      boxShadow: {
        'dynamic-primary': '0 0 20px hsla(var(--dynamic-primary), 0.3)',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Dynamic colors based on selected theme
        "dynamic-primary": "hsl(var(--dynamic-primary))",
        "dynamic-secondary": "hsl(var(--dynamic-secondary))",
        "dynamic-accent": "hsl(var(--dynamic-accent))",
        "dynamic-text-primary": "hsl(var(--dynamic-text-primary))",
        "dynamic-text-secondary": "hsl(var(--dynamic-text-secondary))",
        "dynamic-gradient-start": "hsl(var(--dynamic-gradient-start))",
        "dynamic-gradient-end": "hsl(var(--dynamic-gradient-end))",

        // Base artistic colors (used as defaults or for specific elements)
        "art-blue": "hsl(210, 80%, 50%)",
        "art-purple": "hsl(270, 70%, 60%)",
        "art-green": "hsl(140, 60%, 50%)",
        "art-pink": "hsl(330, 80%, 60%)",
        "art-orange": "hsl(30, 80%, 60%)",
        "dark-bg-primary": "hsl(240, 10%, 3%)",
        "dark-bg-secondary": "hsl(240, 8%, 8%)",
        "text-light-primary": "hsl(0, 0%, 95%)",
        "text-light-secondary": "hsl(0, 0%, 70%)",
        // Neon colors (directly used for dropdown items for visual representation)
        "neon-green": "hsl(120, 100%, 50%)",
        "neon-purple": "hsl(280, 100%, 60%)",
        "neon-red": "hsl(0, 100%, 60%)",
        "neon-yellow": "hsl(60, 100%, 60%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "background-pan": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "text-gradient": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          "100%": {
            "background-position": "0% 0%",
          },
        },
        "diagonal-move": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-100%, 100%)" },
        },
        "grid-fade": {
          "0%, 100%": { opacity: "0.05" },
          "50%": { opacity: "0.15" },
        },
        "wave-move": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        "scanline-fade": {
          "0%, 100%": { opacity: "0.05" },
          "50%": { opacity: "0.1" },
        },
        "mesh-rotate": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(5deg) scale(1.02)" },
          "100%": { transform: "rotate(0deg) scale(1)" },
        },
        "plane-rotate": {
          "0%": { transform: "rotateX(0deg) rotateY(0deg) translateZ(0px)" },
          "50%": { transform: "rotateX(5deg) rotateY(10deg) translateZ(10px)" },
          "100%": { transform: "rotateX(0deg) rotateY(0deg) translateZ(0px)" },
        },
        "blob-pulse": {
          "0%, 100%": { transform: "scale(1) translateX(0) translateY(0)", opacity: "0.2" },
          "33%": { transform: "scale(1.1) translateX(20px) translateY(-10px)", opacity: "0.3" },
          "66%": { transform: "scale(0.9) translateX(-15px) translateY(15px)", opacity: "0.25" },
        },
        "fanning-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.1" },
          "50%": { transform: "scale(1.05)", opacity: "0.2" },
        },
        "abstract-glow": {
          "0%, 100%": { transform: "scale(1) rotate(0deg)", opacity: "0.4" },
          "50%": { transform: "scale(1.05) rotate(5deg)", opacity: "0.6" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "background-pan": "background-pan 10s ease infinite",
        "text-gradient": "text-gradient 3s linear infinite alternate",
        blob: "blob 7s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9)",
        "shine-pulse": "shine-pulse 3s infinite",
        "diagonal-move": "diagonal-move 20s linear infinite",
        "grid-fade": "grid-fade 5s ease-in-out infinite",
        "wave-move": "wave-move 15s linear infinite",
        "scanline-fade": "scanline-fade 3s ease-in-out infinite",
        "mesh-rotate": "mesh-rotate 12s ease-in-out infinite",
        "plane-rotate": "plane-rotate 20s ease-in-out infinite",
        "blob-pulse": "blob-pulse 15s infinite cubic-bezier(0.4, 0, 0.2, 1)",
        "fanning-pulse": "fanning-pulse 10s ease-in-out infinite",
        "abstract-glow": "abstract-glow 8s ease-in-out infinite",
      },
    },
  },
  plugins: [(await import("tailwindcss-animate")).default],
} satisfies Config

export default config
