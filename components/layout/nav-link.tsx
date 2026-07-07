import Link from "next/link"

import type { NavItem } from "@/lib/types"

export function NavLink({ item }: { item: NavItem }) {
  return (
    <Link
      href={item.href}
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
    >
      {item.label}
    </Link>
  )
}
