import Link from "next/link"

import { contactLinks } from "@/lib/data/contact-links"
import { navItems, site } from "@/lib/data/site"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav className="flex flex-wrap gap-6">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div className="flex items-center gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <link.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border pt-6 text-sm text-muted-foreground">
          <p>
            © {year} {site.name}
          </p>
          <p>
            Built with Next.js ·{" "}
            <a
              href={site.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Source
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
