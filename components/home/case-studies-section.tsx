import { CaseStudyGrid } from "@/components/case-studies/case-study-grid"
import { SectionHeading } from "@/components/shared/section-heading"
import { caseStudies } from "@/lib/data/case-studies"

export function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="mx-auto flex w-full max-w-5xl scroll-mt-8 flex-col gap-8 px-6 py-16"
    >
      <SectionHeading
        eyebrow="Case Studies"
        title="What I've built recently"
      />
      <CaseStudyGrid caseStudies={caseStudies} />
    </section>
  )
}
