import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// Removed ThemeProvider from next-themes
import { ColorThemeProvider } from "@/providers/color-theme-provider" // Custom color theme provider

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Developer & Designer Portfolio",
  description: "Modern and artistic web development and design services.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Removed ThemeProvider and its attributes */}
        <ColorThemeProvider>{children}</ColorThemeProvider> {/* Wrap children with ColorThemeProvider */}
      </body>
    </html>
  )
}
