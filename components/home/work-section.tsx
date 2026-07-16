import { WorkList } from "@/components/work/work-list"
import { SectionHeading } from "@/components/shared/section-heading"
import { work } from "@/lib/data/work"

export function WorkSection() {
  return (
    <section
      id="work"
      className="mx-auto flex w-full max-w-5xl scroll-mt-8 flex-col gap-8 px-6 py-12"
    >
      <SectionHeading eyebrow="Work" title="What I've built recently" />
      <WorkList work={work} />
    </section>
  )
}
