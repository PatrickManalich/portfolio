import { Surface } from "@/components/shared/surface"
import type { Strength } from "@/lib/types"

export function StrengthCard({ strength }: { strength: Strength }) {
  const Icon = strength.icon

  return (
    <Surface className="flex flex-col gap-3">
      <Icon className="size-5 text-muted-foreground" />
      <h3 className="text-base font-semibold tracking-tight">
        {strength.title}
      </h3>
      <p className="text-sm text-muted-foreground">{strength.description}</p>
    </Surface>
  )
}
