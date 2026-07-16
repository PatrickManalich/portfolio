import { Bio } from "@/components/about/bio"

import { StrengthsSection } from "./strengths-section"

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto flex w-full max-w-5xl scroll-mt-8 flex-col gap-16 px-6 py-12"
    >
      <Bio />
      <StrengthsSection />
    </section>
  )
}
