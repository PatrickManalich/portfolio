import { Badge } from "@/components/ui/badge"

export function CaseStudyHero({
  category,
  title,
  metaDescription,
  role,
  dates,
}: {
  category: string
  title: string
  metaDescription: string
  role: string
  dates: string
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-border pb-10">
      <Badge variant="outline" className="w-fit">
        {category}
      </Badge>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground">
        {metaDescription}
      </p>
      <p className="text-sm text-muted-foreground">
        {role} · {dates}
      </p>
    </div>
  )
}
