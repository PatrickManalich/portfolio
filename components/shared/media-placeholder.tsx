import { ImageIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export function MediaPlaceholder({
  caption,
  className,
}: {
  caption: string
  className: string
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-2xl bg-muted p-4 text-center",
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
