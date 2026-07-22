import { Container } from "@/components/shared/container"
import { MetricsRow } from "@/components/shared/metrics-row"
import { SectionHeading } from "@/components/shared/section-heading"
import type { StatsBlock } from "@/lib/types"

export function StatsBlockView({ block }: { block: StatsBlock }) {
  return (
    <Container width="wide" className="flex flex-col gap-8">
      {block.heading ? <SectionHeading title={block.heading} /> : null}
      <MetricsRow metrics={block.metrics} size="lg" />
    </Container>
  )
}
