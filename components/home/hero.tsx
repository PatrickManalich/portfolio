import { MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { site } from "@/lib/data/site"

export function Hero() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-20 sm:py-28">
      <div className="flex flex-col gap-4">
        <span className="text-sm font-medium text-muted-foreground">
          Hi, I&apos;m {site.name.split(" ")[0]}
        </span>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          {site.title}
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          {site.heroSummary}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button
          nativeButton={false}
          render={<a href={`mailto:${site.email}`} />}
        >
          Get in touch
        </Button>
        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4" />
          {site.location}
        </span>
      </div>
    </div>
  )
}
