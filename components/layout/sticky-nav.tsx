"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

import { site } from "@/lib/data/site"
import { cn } from "@/lib/utils"

import { MainNav } from "./main-nav"

export function StickyNav() {
  const [visible, setVisible] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY
    let ticking = false

    function update() {
      const currentY = window.scrollY
      const heroEl = document.getElementById("hero-section")
      const pastHero = heroEl
        ? heroEl.getBoundingClientRect().bottom <= 0
        : true

      if (!pastHero) {
        setVisible(false)
      } else if (currentY < lastY.current) {
        setVisible(true)
      } else if (currentY > lastY.current) {
        setVisible(false)
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
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm transition-[translate,visibility] duration-300 ease-out",
        visible ? "visible translate-y-0" : "invisible -translate-y-full"
      )}
    >
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {site.name}
        </Link>
        <MainNav />
      </div>
    </div>
  )
}
