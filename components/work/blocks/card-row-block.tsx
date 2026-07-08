import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { SimpleCard } from "@/components/shared/simple-card"
import type { CardRowBlock } from "@/lib/types"

export function CardRowBlockView({ block }: { block: CardRowBlock }) {
  return (
    <Container width="wide" divider className="flex flex-col gap-8">
      <SectionHeading eyebrow={block.eyebrow} title={block.heading} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {block.cards.map((card) => (
          <SimpleCard key={card.label} card={card} />
        ))}
      </div>
    </Container>
  )
}
