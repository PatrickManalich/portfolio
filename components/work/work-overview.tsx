import type { WorkMeta } from "@/lib/types"

const metaFields: { label: string; key: keyof WorkMeta }[] = [
  { label: "Role", key: "role" },
  { label: "Responsibilities", key: "responsibilities" },
  { label: "Collaborators", key: "collaborators" },
  { label: "Timeline", key: "timeline" },
]

export function WorkOverview({
  intro,
  goals,
  meta,
}: {
  intro: string
  goals: string[]
  meta: WorkMeta
}) {
  return (
    <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-[2fr_1fr]">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
          <p className="mt-3 text-muted-foreground">{intro}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium">Goals</h3>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-muted-foreground">
            {goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ol>
        </div>
      </div>
      <dl className="flex flex-col divide-y divide-border border-t border-border text-sm">
        {metaFields.map(({ label, key }) => {
          const value = meta[key]
          return (
            <div key={key} className="flex flex-col gap-1 py-3">
              <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {label}
              </dt>
              <dd className="text-foreground">
                {Array.isArray(value) ? value.join(", ") : value}
              </dd>
            </div>
          )
        })}
      </dl>
    </div>
  )
}
