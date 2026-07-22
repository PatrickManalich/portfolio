import { ArrowRight } from "lucide-react"

import { Container } from "@/components/shared/container"
import { Lightbox } from "@/components/shared/lightbox"
import { LightboxGallery } from "@/components/shared/lightbox-gallery"
import { SectionHeading } from "@/components/shared/section-heading"
import { SimpleCard } from "@/components/shared/simple-card"
import { Surface } from "@/components/shared/surface"
import { cn } from "@/lib/utils"
import type { InsightAction, TextMediaBlock, TextMediaContent } from "@/lib/types"

export function TextMediaBlockView({
  block,
  accentClassName,
}: {
  block: TextMediaBlock
  accentClassName?: string
}) {
  return (
    <Container
      width="wide"
      className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2"
    >
      <div
        className={cn(
          "flex flex-col gap-4",
          block.textSide === "right" && "lg:order-2"
        )}
      >
        <SectionHeading
          eyebrow={block.eyebrow}
          title={block.heading}
          titleClassName={accentClassName}
          description={block.intro}
        />
        <TextMediaContentView content={block.content} />
      </div>
      <LightboxGallery images={[block.media]}>
        <Lightbox
          galleryIndex={0}
          caption={block.media.caption}
          figureCaption={block.media.figureCaption}
          src={block.media.src}
          alt={block.media.alt}
          sizes="(min-width: 1024px) 460px, calc(100vw - 60px)"
          className={block.media.src ? "" : "aspect-video"}
          figureClassName={block.textSide === "right" ? "lg:order-1" : undefined}
        />
      </LightboxGallery>
    </Container>
  )
}

function TextMediaContentView({ content }: { content: TextMediaContent }) {
  switch (content.kind) {
    case "prose":
      return (
        <div className="flex flex-col gap-4 text-muted-foreground">
          {content.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )
    case "cards":
      return (
        <div className="flex flex-col gap-4">
          {content.cards.map((card) => (
            <SimpleCard key={card.label} card={card} />
          ))}
        </div>
      )
    case "pairs":
      return (
        <div className="flex flex-col gap-4">
          {content.pairs.map((pair, index) => (
            <InsightActionCard key={index} pair={pair} />
          ))}
        </div>
      )
  }
}

function InsightActionCard({ pair }: { pair: InsightAction }) {
  return (
    <Surface className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="flex-1">
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Insight
        </span>
        <p className="text-sm text-foreground">{pair.insight}</p>
      </div>
      <ArrowRight className="hidden size-4 shrink-0 text-muted-foreground sm:block" />
      <div className="flex-1">
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Action
        </span>
        <p className="text-sm text-foreground">{pair.action}</p>
      </div>
    </Surface>
  )
}
