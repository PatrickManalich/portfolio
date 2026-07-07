import { AboutSection } from "@/components/home/about-section"
import { CaseStudiesSection } from "@/components/home/case-studies-section"
import { Hero } from "@/components/home/hero"
import { StrengthsSection } from "@/components/home/strengths-section"

export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudiesSection />
      <StrengthsSection />
      <AboutSection />
    </>
  )
}
