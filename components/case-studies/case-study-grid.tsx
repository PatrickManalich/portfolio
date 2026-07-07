import type { CaseStudyPreview } from "@/lib/types"

import { CaseStudyCard } from "./case-study-card"

export function CaseStudyGrid({
  caseStudies,
  limit,
}: {
  caseStudies: CaseStudyPreview[]
  limit?: number
}) {
  const items =
    typeof limit === "number" ? caseStudies.slice(0, limit) : caseStudies

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((caseStudy) => (
        <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
      ))}
    </div>
  )
}
