import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function Container({
  width = "narrow",
  tint = false,
  divider = false,
  className,
  children,
  ...props
}: {
  width?: "narrow" | "wide"
  tint?: boolean
  divider?: boolean
} & ComponentProps<"div">) {
  const inner = (
    <div
      className={cn(
        "mx-auto w-full px-6 py-16",
        width === "wide" ? "max-w-5xl" : "max-w-3xl",
        divider && "border-t border-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )

  return tint ? <div className="bg-muted">{inner}</div> : inner
}
