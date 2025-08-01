"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type ColorTheme = "default" | "neon-green" | "neon-purple" | "neon-red" | "neon-yellow"

interface ColorThemeContextType {
  colorTheme: ColorTheme
  setColorTheme: (theme: ColorTheme) => void
}

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined)

export function ColorThemeProvider({ children }: { children: ReactNode }) {
  const [colorTheme, setColorThemeState] = useState<ColorTheme>("default")

  // Remove all theme-* classes and optionally apply new one
  const applyThemeClass = (theme: ColorTheme) => {
    const html = document.documentElement
    html.classList.forEach((className) => {
      if (className.startsWith("theme-")) {
        html.classList.remove(className)
      }
    })
    if (theme !== "default") {
      html.classList.add(`theme-${theme}`)
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme") as ColorTheme | null
    const theme = savedTheme || "default"
    setColorThemeState(theme)
    applyThemeClass(theme)
  }, [])

  const setColorTheme = (theme: ColorTheme) => {
    localStorage.setItem("color-theme", theme)
    setColorThemeState(theme)
    applyThemeClass(theme)
  }

  return (
      <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
        {children}
      </ColorThemeContext.Provider>
  )
}

export function useColorTheme() {
  const context = useContext(ColorThemeContext)
  if (!context) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider")
  }
  return context
}
