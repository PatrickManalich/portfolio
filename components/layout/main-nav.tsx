import { navItems } from "@/lib/data/site"

import { NavLink } from "./nav-link"

export function MainNav() {
  return (
    <nav className="flex items-center gap-6">
      {navItems.map((item) => (
        <NavLink key={item.href} item={item} />
      ))}
    </nav>
  )
}
