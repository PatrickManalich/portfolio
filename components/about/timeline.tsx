import { SectionHeading } from "@/components/shared/section-heading"
import { timeline } from "@/lib/data/timeline"

import { TimelineEntryDetails } from "./timeline-entry"

export function Timeline() {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeading eyebrow="Experience" title="Career timeline" />

      {/* Tablet/desktop: horizontal line with a dot per entry. auto-cols-fr
          sizes any number of implicit columns evenly, so adding entries
          later doesn't require touching this layout. */}
      <div className="relative hidden sm:grid sm:grid-flow-col sm:auto-cols-fr sm:gap-4">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1.5 h-px bg-border"
        />
        {timeline.map((entry) => (
          <div
            key={entry.id}
            className="relative flex flex-col items-center gap-3 px-2"
          >
            <span className="z-10 size-3 rounded-full border-2 border-background bg-foreground" />
            <TimelineEntryDetails entry={entry} align="center" />
          </div>
        ))}
      </div>

      {/* Mobile: vertical stacked list with a connecting line down the left. */}
      <ol className="flex flex-col gap-6 sm:hidden">
        {timeline.map((entry, index) => (
          <li key={entry.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="z-10 size-3 shrink-0 rounded-full border-2 border-background bg-foreground" />
              {index < timeline.length - 1 ? (
                <span aria-hidden className="w-px flex-1 bg-border" />
              ) : null}
            </div>
            <div className="pb-2">
              <TimelineEntryDetails entry={entry} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
