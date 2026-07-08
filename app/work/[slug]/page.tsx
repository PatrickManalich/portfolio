import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CaseStudyBlockView } from "@/components/work/blocks/case-study-block"
import { NextCaseStudy } from "@/components/work/next-case-study"
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
  const index = work.findIndex((item) => item.slug === slug)

  if (index === -1) {
    notFound()
  }

  const workItem = work[index]
  const nextWork = work[(index + 1) % work.length]

  return (
    <>
      {workItem.blocks.map((block) => (
        <CaseStudyBlockView key={block.id} block={block} work={workItem} />
      ))}
      <NextCaseStudy work={nextWork} />
    </>
  )
}
