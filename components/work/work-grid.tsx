import type { WorkPreview } from "@/lib/types"

import { WorkCard } from "./work-card"

export function WorkGrid({ work }: { work: WorkPreview[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {work.map((item) => (
        <WorkCard key={item.slug} work={item} />
      ))}
    </div>
  )
}
