import type { ComponentType } from "react"
import type { StaticImageData } from "next/image"

/** Structural type covering both lucide-react and @remixicon/react icon components. */
export type IconComponent = ComponentType<{ className?: string }>

export type NavItem = {
  label: string
  href: string
}

export type Metric = {
  label: string
  value: string
}

export type ContactLink = {
  label: string
  href: string
  icon: IconComponent
  external: boolean
}

export type Strength = {
  id: string
  icon: IconComponent
  title: string
  description: string
}

export type WorkPreview = {
  slug: string
  client: string
  role: string
  dates: string
  title: string
  description: string
  tags: string[]
  metrics: Metric[]
}

export type MediaSpec = {
  caption: string
  src?: StaticImageData
  alt?: string
  figureCaption?: string
}

export type HeroBlock = {
  type: "hero"
  id: string
  media?: MediaSpec[]
  caption?: string
}

export type OverviewBlock = {
  type: "overview"
  id: string
  paragraphs: string[]
  facts: { label: string; value: string }[]
}

export type StatementBlock = {
  type: "statement"
  id: string
  eyebrow: string
  text: string
}

export type CardRowItem = {
  label: string
  text: string
}

export type CardRowBlock = {
  type: "cardRow"
  id: string
  eyebrow?: string
  heading: string
  intro?: string
  numbered?: boolean
  cards: CardRowItem[]
}

export type InsightAction = {
  insight: string
  action: string
}

export type TextMediaContent =
  | { kind: "prose"; paragraphs: string[] }
  | { kind: "cards"; cards: CardRowItem[] }
  | { kind: "pairs"; pairs: InsightAction[] }

export type TextMediaBlock = {
  type: "textMedia"
  id: string
  eyebrow?: string
  heading: string
  intro?: string
  textSide: "left" | "right"
  content: TextMediaContent
  media: MediaSpec
}

export type FeatureMediaBlock = {
  type: "featureMedia"
  id: string
  eyebrow?: string
  heading: string
  intro: string | string[]
  media: MediaSpec
}

export type FrameStripBlock = {
  type: "frameStrip"
  id: string
  heading: string
  frames: MediaSpec[]
}

export type StatsBlock = {
  type: "stats"
  id: string
  heading?: string
  metrics: Metric[]
}

export type CaseStudyBlock =
  | HeroBlock
  | OverviewBlock
  | StatementBlock
  | CardRowBlock
  | TextMediaBlock
  | FeatureMediaBlock
  | FrameStripBlock
  | StatsBlock

export type Work = WorkPreview & {
  eyebrow: string
  headline: string
  metaDescription: string
  blocks: CaseStudyBlock[]
}

export type TimelineEntry = {
  id: string
  title: string
  organization: string
  type?: string
  dateRange: string
  duration?: string
  location?: string
}
