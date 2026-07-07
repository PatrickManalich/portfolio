import type { Metric } from "@/lib/types"

export function MetricItem({ metric }: { metric: Metric }) {
  return (
    <div className="flex flex-col">
      <span className="text-lg font-semibold tracking-tight">
        {metric.value}
      </span>
      <span className="text-xs text-muted-foreground">{metric.label}</span>
    </div>
  )
}
