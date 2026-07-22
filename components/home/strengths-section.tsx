import { SectionHeading } from "@/components/shared/section-heading"
import { strengths } from "@/lib/data/strengths"

import { StrengthCard } from "./strength-card"

export function StrengthsSection() {
  return (
    <div className="flex flex-col gap-8 border-l-4 border-brand-4 pl-4">
      <SectionHeading eyebrow="Why me" title="Key strengths" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((strength) => (
          <StrengthCard key={strength.id} strength={strength} />
        ))}
      </div>
    </div>
  )
}
