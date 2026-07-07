export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      {eyebrow ? (
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}
