import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CaseStudyHero } from "@/components/case-studies/case-study-hero"
import { CaseStudyOverview } from "@/components/case-studies/case-study-overview"
import { ContentSection } from "@/components/case-studies/content-section"
import { caseStudies } from "@/lib/data/case-studies"

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }))
}

export async function generateMetadata(
  props: PageProps<"/case-studies/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params
  const caseStudy = caseStudies.find((item) => item.slug === slug)

  if (!caseStudy) {
    return {}
  }

  return {
    title: caseStudy.title,
    description: caseStudy.metaDescription,
  }
}

export default async function CaseStudyPage(
  props: PageProps<"/case-studies/[slug]">
) {
  const { slug } = await props.params
  const caseStudy = caseStudies.find((item) => item.slug === slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <CaseStudyHero
        category={caseStudy.category}
        title={caseStudy.title}
        metaDescription={caseStudy.metaDescription}
        role={caseStudy.role}
        dates={caseStudy.dates}
      />
      <CaseStudyOverview
        intro={caseStudy.intro}
        goals={caseStudy.goals}
        meta={caseStudy.meta}
      />
      {caseStudy.sections.map((section) => (
        <ContentSection key={section.id} section={section} />
      ))}
    </div>
  )
}
