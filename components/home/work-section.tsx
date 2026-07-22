import { WorkList } from "@/components/work/work-list"
import { SectionHeading } from "@/components/shared/section-heading"
import { work } from "@/lib/data/work"

export function WorkSection() {
  return (
    <section
      id="work"
      className="mx-auto flex w-full max-w-5xl scroll-mt-8 flex-col px-6 py-12"
    >
      <div className="flex flex-col gap-8">
        <SectionHeading title="Work" titleClassName="border-l-4 border-brand-2 pl-4" />
        <WorkList work={work} />
      </div>
    </section>
  )
}
