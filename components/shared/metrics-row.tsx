import type { Metric } from "@/lib/types"

import { MetricItem } from "./metric-item"

export function MetricsRow({
  metrics,
  size = "sm",
}: {
  metrics: Metric[]
  size?: "sm" | "lg"
}) {
  return (
    <div className="flex flex-wrap gap-6">
      {metrics.map((metric) => (
        <MetricItem key={metric.label} metric={metric} size={size} />
      ))}
    </div>
  )
}
