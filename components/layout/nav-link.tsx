import Link from "next/link"

import type { NavItem } from "@/lib/types"

export function NavLink({ item }: { item: NavItem }) {
  const className =
    "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {item.label}
      </a>
    )
  }

  return (
    <Link href={item.href} className={className}>
      {item.label}
    </Link>
  )
}
