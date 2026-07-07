import { MetricItem } from "@/components/shared/metric-item"
import { SectionHeading } from "@/components/shared/section-heading"
import { funStats } from "@/lib/data/stats"

export function FunStats() {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeading eyebrow="Fun stats" title="Outside of work" />
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {funStats.map((stat) => (
          <MetricItem key={stat.label} metric={stat} size="lg" />
        ))}
      </div>
    </div>
  )
}
