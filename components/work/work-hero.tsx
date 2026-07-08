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
}: {
  eyebrow: string
  headline: string
  metaDescription: string
  role: string
  dates: string
  media?: MediaSpec[]
}) {
  return (
    <Container width="wide" className="flex flex-col gap-4">
      <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {eyebrow}
      </span>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {headline}
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground">
        {metaDescription}
      </p>
      <p className="text-sm text-muted-foreground">
        {role} · {dates}
      </p>
      {media ? (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {media.map((item, index) => (
            <Lightbox key={index} caption={item.caption} className="aspect-video" />
          ))}
        </div>
      ) : null}
    </Container>
  )
}
