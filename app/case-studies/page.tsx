import type { Metadata } from "next"

import { CaseStudyGrid } from "@/components/case-studies/case-study-grid"
import { SectionHeading } from "@/components/shared/section-heading"
import { caseStudies } from "@/lib/data/case-studies"

export const metadata: Metadata = {
  title: "Case Studies",
}

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16">
      <SectionHeading
        eyebrow="Case Studies"
        title="Selected work"
        description="A closer look at the design systems and products I've built."
      />
      <CaseStudyGrid caseStudies={caseStudies} />
    </div>
  )
}
