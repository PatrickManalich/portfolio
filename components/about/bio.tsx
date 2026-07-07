import { CircleUserRound } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/shared/section-heading"
import { site } from "@/lib/data/site"

export function Bio() {
  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[3fr_2fr]">
      <div className="flex flex-col gap-6">
        <SectionHeading eyebrow="About" title="[Placeholder — bio headline]" />
        <div className="flex flex-col gap-4 text-muted-foreground">
          <p>[Placeholder — bio paragraph one.]</p>
          <p>[Placeholder — bio paragraph two.]</p>
          <p>[Placeholder — bio paragraph three.]</p>
        </div>
        <div>
          <Button
            variant="outline"
            nativeButton={false}
            render={
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            View LinkedIn
          </Button>
        </div>
      </div>
      <div className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-muted">
        <CircleUserRound className="size-24 text-muted-foreground" />
      </div>
    </div>
  )
}
