import { Surface } from "@/components/shared/surface"
import type { CardRowItem } from "@/lib/types"

export function SimpleCard({ card }: { card: CardRowItem }) {
  return (
    <Surface className="flex flex-col gap-2">
      <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {card.label}
      </span>
      <p className="text-sm text-muted-foreground">{card.text}</p>
    </Surface>
  )
}
