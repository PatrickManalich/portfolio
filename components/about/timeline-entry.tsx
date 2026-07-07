import { cn } from "@/lib/utils"
import type { TimelineEntry } from "@/lib/types"

export function TimelineEntryDetails({
  entry,
  align = "left",
}: {
  entry: TimelineEntry
  align?: "left" | "center"
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1",
        align === "center" ? "items-center text-center" : "items-start"
      )}
    >
      <p className="text-sm font-semibold">{entry.title}</p>
      <p className="text-xs text-muted-foreground">
        {entry.organization}
        {entry.type ? ` · ${entry.type}` : ""}
      </p>
      <p className="text-xs text-muted-foreground">
        {entry.dateRange}
        {entry.duration ? ` · ${entry.duration}` : ""}
      </p>
      {entry.location ? (
        <p className="text-xs text-muted-foreground">{entry.location}</p>
      ) : null}
    </div>
  )
}
