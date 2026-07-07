import Link from "next/link"

import { navItems, site } from "@/lib/data/site"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold">{site.name}</p>
          <p className="text-sm text-muted-foreground">{site.title}</p>
        </div>
        <nav className="flex flex-wrap gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:items-end">
          <a href={`mailto:${site.email}`} className="hover:text-foreground">
            {site.email}
          </a>
          <p>
            © {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
