import { SectionHeading } from "@/components/shared/section-heading"
import { strengths } from "@/lib/data/strengths"

import { StrengthCard } from "./strength-card"

export function StrengthsSection() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16">
      <SectionHeading eyebrow="Why me" title="Key strengths" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((strength) => (
          <StrengthCard key={strength.id} strength={strength} />
        ))}
      </div>
    </div>
  )
}
