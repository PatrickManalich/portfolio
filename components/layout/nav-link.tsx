"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { handleSmoothNavClick } from "@/lib/smooth-scroll"
import { cn } from "@/lib/utils"
import type { NavItem } from "@/lib/types"

const underlineColors: Record<string, string> = {
  Home: "bg-brand-1",
  Work: "bg-brand-2",
  About: "bg-brand-3",
  Resume: "bg-brand-5",
}

export function NavLink({ item }: { item: NavItem }) {
  const pathname = usePathname()
  const className =
    "group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
  const underline = (
    <span
      className={cn(
        "pointer-events-none absolute -bottom-1 left-0 h-0.5 w-0 transition-[width] duration-150 ease-out group-hover:w-full",
        underlineColors[item.label]
      )}
    />
  )

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {item.label}
        {underline}
      </a>
    )
  }

  return (
    <Link
      href={item.href}
      onClick={(event) => handleSmoothNavClick(event, item.href, pathname)}
      className={className}
    >
      {item.label}
      {underline}
    </Link>
  )
}
