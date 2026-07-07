import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MetricsRow } from "@/components/shared/metrics-row"
import { Surface } from "@/components/shared/surface"
import type { CaseStudyPreview } from "@/lib/types"

export function CaseStudyCard({
  caseStudy,
}: {
  caseStudy: CaseStudyPreview
}) {
  return (
    <Surface className="flex h-full flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {caseStudy.client}
        </span>
        <h3 className="text-lg font-semibold tracking-tight">
          {caseStudy.title}
        </h3>
      </div>
      <p className="text-sm text-muted-foreground">{caseStudy.description}</p>
      <div className="flex flex-wrap gap-2">
        {caseStudy.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
      <MetricsRow metrics={caseStudy.metrics} />
      <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
        <Button
          nativeButton={false}
          render={<Link href={`/case-studies/${caseStudy.slug}`} />}
        >
          View case study
        </Button>
        {caseStudy.liveUrl ? (
          <Button
            variant="outline"
            nativeButton={false}
            render={
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            View live
          </Button>
        ) : null}
      </div>
    </Surface>
  )
}
