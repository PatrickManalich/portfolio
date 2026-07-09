import { Surface } from "@/components/shared/surface"
import type { CardRowItem } from "@/lib/types"

export function SimpleCard({
  card,
  number,
}: {
  card: CardRowItem
  number?: number
}) {
  return (
    <Surface className="flex flex-col gap-2">
      <span className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {number ? <span>{number}</span> : null}
        <span>{card.label}</span>
      </span>
      <p className="text-sm text-muted-foreground">{card.text}</p>
    </Surface>
  )
}
