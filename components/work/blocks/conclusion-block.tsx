import { Container } from "@/components/shared/container"
import { Surface } from "@/components/shared/surface"
import type { ConclusionBlock, Metric } from "@/lib/types"

export function ConclusionBlockView({ block }: { block: ConclusionBlock }) {
  return (
    <Container
      width="wide"
      tint
      className="flex flex-col items-center gap-8 text-center"
    >
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {block.heading}
      </h2>
      <p className="max-w-4xl text-muted-foreground">{block.paragraph}</p>
      <div className="grid w-full max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
        {block.stats.map((stat) => (
          <ConclusionStatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </Container>
  )
}

function ConclusionStatCard({ stat }: { stat: Metric }) {
  return (
    <Surface className="flex flex-col items-center justify-center gap-2 p-4 text-center">
      <span className="text-xs font-medium text-muted-foreground uppercase">
        {stat.label}
      </span>
      <span className="text-2xl font-semibold tracking-tight whitespace-nowrap sm:text-3xl">
        {stat.value}
      </span>
    </Surface>
  )
}
