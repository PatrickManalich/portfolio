export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string | string[]
}) {
  const paragraphs = Array.isArray(description)
    ? description
    : description
      ? [description]
      : []

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
      {paragraphs.length > 0 ? (
        <div className="flex max-w-2xl flex-col gap-3 text-muted-foreground">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      ) : null}
    </div>
  )
}
