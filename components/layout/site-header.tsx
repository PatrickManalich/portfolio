import Link from "next/link"

import { site } from "@/lib/data/site"

import { MainNav } from "./main-nav"

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {site.name}
        </Link>
        <MainNav />
      </div>
    </header>
  )
}
