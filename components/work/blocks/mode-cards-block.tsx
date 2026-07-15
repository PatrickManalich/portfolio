import { Container } from "@/components/shared/container"
import { Lightbox } from "@/components/shared/lightbox"
import { SectionHeading } from "@/components/shared/section-heading"
import type { ModeCard, ModeCardsBlock } from "@/lib/types"

const desktopSizes =
  "(min-width: 1024px) 265px, (min-width: 640px) calc(31.5vw - 57px), calc(63vw - 67px)"
const mobileSizes =
  "(min-width: 1024px) 79px, (min-width: 640px) calc(10.3vw - 27px), calc(20.7vw - 30px)"

export function ModeCardsBlockView({ block }: { block: ModeCardsBlock }) {
  return (
    <Container width="wide" divider className="flex flex-col gap-8">
      <SectionHeading
        title={block.heading}
        description={block.intro}
        descriptionClassName="max-w-3xl"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {block.cards.map((card) => (
          <ModeCardView key={card.label} card={card} />
        ))}
      </div>
    </Container>
  )
}

function ModeCardView({ card }: { card: ModeCard }) {
  const Icon = card.icon

  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-border p-5">
      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
        <Icon className="size-4" />
        {card.label}
      </div>
      <div className="flex w-full items-stretch justify-center gap-2">
        <Lightbox
          caption={card.desktop.caption}
          figureCaption={card.desktop.figureCaption}
          src={card.desktop.src}
          alt={card.desktop.alt}
          sizes={desktopSizes}
          className="aspect-[2880/2048] w-[63%]"
        />
        <Lightbox
          caption={card.mobile.caption}
          figureCaption={card.mobile.figureCaption}
          src={card.mobile.src}
          alt={card.mobile.alt}
          sizes={mobileSizes}
          className={card.mobile.src ? "shrink-0" : "aspect-[9/16] w-[21%]"}
          imageClassName={card.mobile.src ? "h-full w-auto object-contain" : undefined}
        />
      </div>
    </div>
  )
}
