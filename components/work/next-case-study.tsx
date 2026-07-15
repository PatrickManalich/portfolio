import { Badge } from "@/components/ui/badge"
import { WorkCard } from "@/components/work/work-card"
import type { WorkPreview } from "@/lib/types"

export function NextCaseStudy({ work }: { work: WorkPreview }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 border-t border-border px-6 py-16">
      <Badge variant="secondary" className="uppercase tracking-wide">
        Next case study
      </Badge>
      <div className="w-full">
        <WorkCard work={work} />
      </div>
    </div>
  )
}
