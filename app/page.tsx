import { CaseStudiesPreview } from "@/components/home/case-studies-preview"
import { Hero } from "@/components/home/hero"
import { StrengthsSection } from "@/components/home/strengths-section"

export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudiesPreview />
      <StrengthsSection />
    </>
  )
}
