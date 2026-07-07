import Link from "next/link"
import { ArrowRight, ImageIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { MetricsRow } from "@/components/shared/metrics-row"
import { Surface } from "@/components/shared/surface"
import type { WorkPreview } from "@/lib/types"

export function WorkCard({ work }: { work: WorkPreview }) {
  return (
    <Surface className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[3fr_2fr]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {work.client}
          </span>
          <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
            {work.title}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground sm:text-base">
          {work.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="border-t border-border" />
        <MetricsRow metrics={work.metrics} size="lg" />
        <Link
          href={`/work/${work.slug}`}
          className="group mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Read case study
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
      <div className="flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-muted lg:aspect-auto lg:h-full">
        <ImageIcon className="size-10 text-muted-foreground" />
      </div>
    </Surface>
  )
}
