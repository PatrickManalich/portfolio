import type { ComponentType, SVGProps } from "react"

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export type NavItem = {
  label: string
  href: string
}

export type Metric = {
  label: string
  value: string
}

export type Strength = {
  id: string
  icon: IconComponent
  title: string
  description: string
}

export type CaseStudyPreview = {
  slug: string
  client: string
  role: string
  dates: string
  title: string
  description: string
  tags: string[]
  metrics: Metric[]
  liveUrl?: string
}

export type CaseStudyMeta = {
  role: string
  responsibilities: string[]
  collaborators: string[]
  timeline: string
}

export type CaseStudyContentSection = {
  id: string
  heading: string
  subheading?: string
  body: string[]
  metrics?: Metric[]
}

export type CaseStudy = CaseStudyPreview & {
  category: string
  metaDescription: string
  intro: string
  goals: string[]
  meta: CaseStudyMeta
  sections: CaseStudyContentSection[]
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
