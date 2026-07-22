import { RiMapPinLine } from "@remixicon/react"

import { contactLinks } from "@/lib/data/contact-links"
import { site } from "@/lib/data/site"

export function Hero() {
  return (
    <div
      id="hero-section"
      className="mx-auto flex w-full max-w-5xl flex-col px-6 pt-10 pb-12 sm:pt-14 sm:pb-16"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 border-l-4 border-brand-1 pl-4">
            <span className="text-sm font-medium text-muted-foreground">
              Hi, I&apos;m {site.name.split(" ")[0]} 👋
            </span>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              {site.title}
            </h1>
          </div>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {site.heroSummary}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-6">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                <link.icon className="size-5" />
                {link.label}
              </a>
            ))}
          </div>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <RiMapPinLine className="size-4" />
            {site.location} · {site.remoteNote}
          </span>
        </div>
      </div>
    </div>
  )
}
