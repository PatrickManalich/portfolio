import type { MouseEvent } from "react"

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/**
 * Intercepts same-page nav clicks (Home/Work/About) so they smooth-scroll
 * instead of jumping — both to the top and back down. No-ops when the
 * click would navigate to a different page, letting Next.js handle it.
 */
export function handleSmoothNavClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  pathname: string
) {
  if (pathname !== "/") return

  const behavior = prefersReducedMotion() ? "auto" : "smooth"

  if (href === "/") {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior })
    history.pushState(null, "", href)
    return
  }

  const hashIndex = href.indexOf("#")
  if (hashIndex === -1) return

  const target = document.getElementById(href.slice(hashIndex + 1))
  if (!target) return

  event.preventDefault()
  target.scrollIntoView({ behavior })
  history.pushState(null, "", href)
}
