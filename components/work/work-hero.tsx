import { Caption } from "@/components/shared/caption"
import { Container } from "@/components/shared/container"
import { Lightbox } from "@/components/shared/lightbox"
import { LightboxGallery } from "@/components/shared/lightbox-gallery"
import { cn } from "@/lib/utils"
import type { MediaSpec } from "@/lib/types"

export function WorkHero({
  eyebrow,
  headline,
  metaDescription,
  role,
  dates,
  media,
  caption,
  accentClassName,
}: {
  eyebrow: string
  headline: string
  metaDescription: string
  role: string
  dates: string
  media?: MediaSpec[]
  caption?: string
  accentClassName?: string
}) {
  return (
    <Container width="wide" className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className={cn("flex flex-col gap-1", accentClassName)}>
          <span className="text-sm font-medium text-muted-foreground">
            {eyebrow}
          </span>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {headline}
          </h1>
        </div>
        <p className="max-w-[52rem] text-lg text-pretty text-muted-foreground">
          {metaDescription}
        </p>
      </div>
      <p className="text-sm text-muted-foreground">
        {role} · {dates}
      </p>
      {media ? (
        <figure className="m-0 mt-6 flex flex-col gap-3">
          <LightboxGallery images={media}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {media.map((item, index) => (
                <Lightbox
                  key={index}
                  galleryIndex={index}
                  caption={item.caption}
                  src={item.src}
                  alt={item.alt}
                  sizes="(min-width: 1024px) 468px, (min-width: 640px) calc(50vw - 44px), calc(100vw - 60px)"
                  priority
                  className={item.src ? "" : "aspect-video"}
                />
              ))}
            </div>
          </LightboxGallery>
          {caption ? <Caption>{caption}</Caption> : null}
        </figure>
      ) : null}
    </Container>
  )
}
