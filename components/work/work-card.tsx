import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { MediaPlaceholder } from "@/components/shared/media-placeholder"
import { Surface } from "@/components/shared/surface"
import type { WorkPreview } from "@/lib/types"

export function WorkCard({ work }: { work: WorkPreview }) {
  return (
    <Surface className="relative grid cursor-pointer grid-cols-1 items-stretch gap-8 transition-shadow hover:shadow-md lg:grid-cols-[3fr_2fr]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {work.client}
          </span>
          <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
            {work.title}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground sm:text-base">
          {work.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <Link
          href={`/work/${work.slug}`}
          className="group mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-sm font-medium text-primary underline-offset-4 hover:underline after:absolute after:inset-0 after:content-['']"
        >
          Read case study
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
      <div className="aspect-video rounded-lg bg-muted p-1.5 lg:aspect-auto lg:h-full">
        {work.image?.src ? (
          <Image
            src={work.image.src}
            alt={work.image.alt ?? work.image.caption}
            sizes="(min-width: 1024px) 350px, calc(100vw - 108px)"
            className="h-full w-full rounded border-[0.5px] border-border object-cover"
          />
        ) : (
          <MediaPlaceholder
            caption={work.image?.caption ?? work.title}
            className="size-full"
          />
        )}
      </div>
    </Surface>
  )
}
