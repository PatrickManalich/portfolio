import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import type { OverviewBlock } from "@/lib/types"

export function OverviewBlockView({
  block,
  accentClassName,
}: {
  block: OverviewBlock
  accentClassName?: string
}) {
  return (
    <Container width="wide" className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
      <div className="flex flex-col gap-6">
        <SectionHeading title="Overview" titleClassName={accentClassName} />
        <div className="flex flex-col gap-4 text-muted-foreground">
          {block.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <dl className="flex flex-col divide-y divide-border text-sm">
        {block.facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1 py-3">
            <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {fact.label}
            </dt>
            <dd className="text-foreground">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </Container>
  )
}
