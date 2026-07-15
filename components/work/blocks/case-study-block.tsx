import { WorkHero } from "@/components/work/work-hero"
import { CardRowBlockView } from "@/components/work/blocks/card-row-block"
import { FeatureMediaBlockView } from "@/components/work/blocks/feature-media-block"
import { FrameStripBlockView } from "@/components/work/blocks/frame-strip-block"
import { ModeCardsBlockView } from "@/components/work/blocks/mode-cards-block"
import { OverviewBlockView } from "@/components/work/blocks/overview-block"
import { StatementBlockView } from "@/components/work/blocks/statement-block"
import { StatsBlockView } from "@/components/work/blocks/stats-block"
import { TextMediaBlockView } from "@/components/work/blocks/text-media-block"
import type { CaseStudyBlock, Work } from "@/lib/types"

export function CaseStudyBlockView({
  block,
  work,
}: {
  block: CaseStudyBlock
  work: Work
}) {
  switch (block.type) {
    case "hero":
      return (
        <WorkHero
          eyebrow={work.eyebrow}
          headline={work.headline}
          metaDescription={work.metaDescription}
          role={work.role}
          dates={work.dates}
          media={block.media}
          caption={block.caption}
        />
      )
    case "overview":
      return <OverviewBlockView block={block} />
    case "statement":
      return <StatementBlockView block={block} />
    case "cardRow":
      return <CardRowBlockView block={block} />
    case "textMedia":
      return <TextMediaBlockView block={block} />
    case "featureMedia":
      return <FeatureMediaBlockView block={block} />
    case "frameStrip":
      return <FrameStripBlockView block={block} />
    case "stats":
      return <StatsBlockView block={block} />
    case "modeCards":
      return <ModeCardsBlockView block={block} />
  }
}
