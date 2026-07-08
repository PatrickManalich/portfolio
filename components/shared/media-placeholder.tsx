import { ImageIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export function MediaPlaceholder({
  caption,
  className,
  bare = false,
}: {
  caption: string
  className: string
  bare?: boolean
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 p-4 text-center",
        bare ? "bg-muted" : "rounded border-[0.5px] border-border bg-card",
        className
      )}
    >
      <ImageIcon className="size-8 text-muted-foreground" />
      <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {caption}
      </span>
    </div>
  )
}
