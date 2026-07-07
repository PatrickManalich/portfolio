import { cn } from "@/lib/utils"
import type { Metric } from "@/lib/types"

export function MetricItem({
  metric,
  size = "sm",
}: {
  metric: Metric
  size?: "sm" | "lg"
}) {
  return (
    <div className="flex flex-col">
      <span
        className={cn(
          "font-semibold tracking-tight",
          size === "lg" ? "text-3xl sm:text-4xl" : "text-lg"
        )}
      >
        {metric.value}
      </span>
      <span
        className={cn(
          "text-muted-foreground",
          size === "lg" ? "text-sm" : "text-xs"
        )}
      >
        {metric.label}
      </span>
    </div>
  )
}
