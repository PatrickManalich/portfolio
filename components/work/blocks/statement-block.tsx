import { Container } from "@/components/shared/container"
import type { StatementBlock } from "@/lib/types"

export function StatementBlockView({ block }: { block: StatementBlock }) {
  return (
    <Container
      tint
      className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center"
    >
      <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {block.eyebrow}
      </span>
      <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {block.text}
      </p>
    </Container>
  )
}
