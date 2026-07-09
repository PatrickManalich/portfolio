import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function Caption({ className, ...props }: ComponentProps<"figcaption">) {
  return (
    <figcaption
      className={cn("text-center text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}
