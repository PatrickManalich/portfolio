import type { CaseStudyPreview } from "@/lib/types"

import { CaseStudyCard } from "./case-study-card"

export function CaseStudyGrid({
  caseStudies,
}: {
  caseStudies: CaseStudyPreview[]
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {caseStudies.map((caseStudy) => (
        <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
      ))}
    </div>
  )
}
