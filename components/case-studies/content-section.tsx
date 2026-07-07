import { MetricsRow } from "@/components/shared/metrics-row"
import type { CaseStudyContentSection } from "@/lib/types"

export function ContentSection({
  section,
}: {
  section: CaseStudyContentSection
}) {
  return (
    <section className="flex flex-col gap-4 border-t border-border py-10">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">
          {section.heading}
        </h2>
        {section.subheading ? (
          <p className="mt-1 text-muted-foreground">{section.subheading}</p>
        ) : null}
      </div>
      <div className="flex flex-col gap-3 text-muted-foreground">
        {section.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {section.metrics ? <MetricsRow metrics={section.metrics} /> : null}
    </section>
  )
}
