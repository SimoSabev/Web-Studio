import Navbar from "@/components/navbar"
import IntroText from "@/components/intro-text"
import HeroSection from "@/components/hero-section"
import AboutUsSection from "@/components/about-us-section"
import ServicesTimeline from "@/components/services-timeline"
import ProjectsSection from "@/components/projects-section"
import ContactFooterSection from "@/components/contact-footer-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <IntroText />
        <HeroSection />
        <AboutUsSection />
        <ServicesTimeline />
        <ProjectsSection />
        <ContactFooterSection />
      </main>
    </div>
  )
}
