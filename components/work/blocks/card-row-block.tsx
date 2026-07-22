import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { SimpleCard } from "@/components/shared/simple-card"
import type { CardRowBlock } from "@/lib/types"

export function CardRowBlockView({
  block,
  accentClassName,
}: {
  block: CardRowBlock
  accentClassName?: string
}) {
  return (
    <Container width="wide" className="flex flex-col gap-8">
      <SectionHeading
        eyebrow={block.eyebrow}
        title={block.heading}
        titleClassName={accentClassName}
        description={block.intro}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {block.cards.map((card, index) => (
          <SimpleCard
            key={card.label}
            card={card}
            number={block.numbered ? index + 1 : undefined}
          />
        ))}
      </div>
    </Container>
  )
}
