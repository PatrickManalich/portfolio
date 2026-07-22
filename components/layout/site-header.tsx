"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

import { site } from "@/lib/data/site"
import { cn } from "@/lib/utils"

import { MainNav } from "./main-nav"

const HIDE_THRESHOLD = 80

export function SiteHeader() {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY
    let ticking = false

    function update() {
      const currentY = window.scrollY

      if (currentY <= HIDE_THRESHOLD) {
        setHidden(false)
      } else if (currentY > lastY.current) {
        setHidden(true)
      } else if (currentY < lastY.current) {
        setHidden(false)
      }

      lastY.current = currentY
      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm transition-transform duration-300 ease-out",
        hidden && "-translate-y-full"
      )}
    >
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {site.name}
        </Link>
        <MainNav />
      </div>
    </header>
  )
}
