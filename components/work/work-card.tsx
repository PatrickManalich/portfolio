import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MetricsRow } from "@/components/shared/metrics-row"
import { Surface } from "@/components/shared/surface"
import type { WorkPreview } from "@/lib/types"

export function WorkCard({ work }: { work: WorkPreview }) {
  return (
    <Surface className="flex h-full flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {work.client}
        </span>
        <h3 className="text-lg font-semibold tracking-tight">
          {work.title}
        </h3>
      </div>
      <p className="text-sm text-muted-foreground">{work.description}</p>
      <div className="flex flex-wrap gap-2">
        {work.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
      <MetricsRow metrics={work.metrics} />
      <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
        <Button
          nativeButton={false}
          render={<Link href={`/work/${work.slug}`} />}
        >
          View work
        </Button>
        {work.liveUrl ? (
          <Button
            variant="outline"
            nativeButton={false}
            render={
              <a href={work.liveUrl} target="_blank" rel="noopener noreferrer" />
            }
          >
            View live
          </Button>
        ) : null}
      </div>
    </Surface>
  )
}
