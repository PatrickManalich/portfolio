import { WorkHero } from "@/components/work/work-hero"
import { CardRowBlockView } from "@/components/work/blocks/card-row-block"
import { ConclusionBlockView } from "@/components/work/blocks/conclusion-block"
import { FeatureMediaBlockView } from "@/components/work/blocks/feature-media-block"
import { FrameStripBlockView } from "@/components/work/blocks/frame-strip-block"
import { ModeCardsBlockView } from "@/components/work/blocks/mode-cards-block"
import { OverviewBlockView } from "@/components/work/blocks/overview-block"
import { StatementBlockView } from "@/components/work/blocks/statement-block"
import { StatsBlockView } from "@/components/work/blocks/stats-block"
import { TextMediaBlockView } from "@/components/work/blocks/text-media-block"
import type { CaseStudyBlock, Work } from "@/lib/types"

const capdataAccentByBlockId: Record<string, string> = {
  hero: "border-l-4 border-brand-1 pl-4",
  overview: "border-l-4 border-brand-2 pl-4",
  "the-challenge": "border-l-4 border-brand-3 pl-4",
  research: "border-l-4 border-brand-4 pl-4",
  "the-audit": "border-l-4 border-brand-5 pl-4",
  "key-insights": "border-l-4 border-brand-1 pl-4",
  "foundations-base-library": "border-l-4 border-brand-2 pl-4",
  "foundations-palette": "border-l-4 border-brand-3 pl-4",
  "foundations-tokens": "border-l-4 border-brand-4 pl-4",
  "foundations-figma-to-production": "border-l-4 border-brand-5 pl-4",
  "reworking-the-flows": "border-l-4 border-brand-1 pl-4",
  "dark-mode-and-responsive": "border-l-4 border-brand-2 pl-4",
}

export function CaseStudyBlockView({
  block,
  work,
}: {
  block: CaseStudyBlock
  work: Work
}) {
  const accentClassName =
    work.slug === "capdata-3-0" ? capdataAccentByBlockId[block.id] : undefined

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
          accentClassName={accentClassName}
        />
      )
    case "overview":
      return <OverviewBlockView block={block} accentClassName={accentClassName} />
    case "statement":
      return <StatementBlockView block={block} />
    case "cardRow":
      return <CardRowBlockView block={block} accentClassName={accentClassName} />
    case "textMedia":
      return <TextMediaBlockView block={block} accentClassName={accentClassName} />
    case "featureMedia":
      return <FeatureMediaBlockView block={block} accentClassName={accentClassName} />
    case "frameStrip":
      return <FrameStripBlockView block={block} accentClassName={accentClassName} />
    case "stats":
      return <StatsBlockView block={block} />
    case "modeCards":
      return <ModeCardsBlockView block={block} accentClassName={accentClassName} />
    case "conclusion":
      return <ConclusionBlockView block={block} />
  }
}
