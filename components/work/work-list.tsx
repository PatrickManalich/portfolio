import type { WorkPreview } from "@/lib/types"

import { WorkCard } from "./work-card"

export function WorkList({ work }: { work: WorkPreview[] }) {
  return (
    <div className="flex flex-col gap-6">
      {work.map((item) => (
        <WorkCard key={item.slug} work={item} />
      ))}
    </div>
  )
}
