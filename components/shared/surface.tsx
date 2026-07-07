import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function Surface({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("rounded-lg border border-border bg-card p-6", className)}
      {...props}
    />
  )
}
