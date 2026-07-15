import { Caption } from "@/components/shared/caption"
import { Container } from "@/components/shared/container"
import { Lightbox } from "@/components/shared/lightbox"
import type { MediaSpec } from "@/lib/types"

export function WorkHero({
  eyebrow,
  headline,
  metaDescription,
  role,
  dates,
  media,
  caption,
}: {
  eyebrow: string
  headline: string
  metaDescription: string
  role: string
  dates: string
  media?: MediaSpec[]
  caption?: string
}) {
  return (
    <Container width="wide" className="flex flex-col gap-4">
      <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {eyebrow}
      </span>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {headline}
      </h1>
      <p className="max-w-[52rem] text-lg text-pretty text-muted-foreground">
        {metaDescription}
      </p>
      <p className="text-sm text-muted-foreground">
        {role} · {dates}
      </p>
      {media ? (
        <figure className="m-0 mt-6 flex flex-col gap-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {media.map((item, index) => (
              <Lightbox
                key={index}
                caption={item.caption}
                src={item.src}
                alt={item.alt}
                sizes="(min-width: 1024px) 468px, (min-width: 640px) calc(50vw - 44px), calc(100vw - 60px)"
                priority
                className={item.src ? "" : "aspect-video"}
              />
            ))}
          </div>
          {caption ? <Caption>{caption}</Caption> : null}
        </figure>
      ) : null}
    </Container>
  )
}
