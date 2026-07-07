import type { Metric } from "@/lib/types"

import { MetricItem } from "./metric-item"

export function MetricsRow({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="flex flex-wrap gap-6">
      {metrics.map((metric) => (
        <MetricItem key={metric.label} metric={metric} />
      ))}
    </div>
  )
}
