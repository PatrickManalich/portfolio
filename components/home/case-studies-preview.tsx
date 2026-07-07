import Link from "next/link"

import { CaseStudyGrid } from "@/components/case-studies/case-study-grid"
import { SectionHeading } from "@/components/shared/section-heading"
import { caseStudies } from "@/lib/data/case-studies"

const PREVIEW_LIMIT = 3

export function CaseStudiesPreview() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Case Studies"
          title="What I've built recently"
        />
        <Link
          href="/case-studies"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          View all →
        </Link>
      </div>
      <CaseStudyGrid caseStudies={caseStudies} limit={PREVIEW_LIMIT} />
    </div>
  )
}
