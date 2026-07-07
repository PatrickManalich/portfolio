import { AboutSection } from "@/components/home/about-section"
import { Hero } from "@/components/home/hero"
import { StrengthsSection } from "@/components/home/strengths-section"
import { WorkSection } from "@/components/home/work-section"

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <StrengthsSection />
      <AboutSection />
    </>
  )
}
