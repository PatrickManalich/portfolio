import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { WorkHero } from "@/components/work/work-hero"
import { WorkOverview } from "@/components/work/work-overview"
import { ContentSection } from "@/components/work/content-section"
import { work } from "@/lib/data/work"

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params
  const workItem = work.find((item) => item.slug === slug)

  if (!workItem) {
    return {}
  }

  return {
    title: workItem.title,
    description: workItem.metaDescription,
  }
}

export default async function WorkPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params
  const workItem = work.find((item) => item.slug === slug)

  if (!workItem) {
    notFound()
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <WorkHero
        category={workItem.category}
        title={workItem.title}
        metaDescription={workItem.metaDescription}
        role={workItem.role}
        dates={workItem.dates}
      />
      <WorkOverview
        intro={workItem.intro}
        goals={workItem.goals}
        meta={workItem.meta}
      />
      {workItem.sections.map((section) => (
        <ContentSection key={section.id} section={section} />
      ))}
    </div>
  )
}
