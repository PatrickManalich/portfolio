"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { ChevronLeft, ChevronRight, XIcon } from "lucide-react"
import Image from "next/image"

import { Dialog, DialogClose, DialogPortal } from "@/components/ui/dialog"
import { MediaPlaceholder } from "@/components/shared/media-placeholder"
import type { MediaSpec } from "@/lib/types"

type GalleryImage = Pick<MediaSpec, "caption" | "src" | "alt">

type LightboxGalleryContextValue = {
  openAt: (index: number) => void
}

const LightboxGalleryContext =
  React.createContext<LightboxGalleryContextValue | null>(null)

export function useLightboxGallery() {
  return React.useContext(LightboxGalleryContext)
}

/**
 * Groups a section's Lightbox images behind one shared popup, so Prev/Next
 * (buttons or arrow keys) can step through just that section's images.
 */
export function LightboxGallery({
  images,
  children,
}: {
  images: GalleryImage[]
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false)
  const [index, setIndex] = React.useState(0)
  const hasMultiple = images.length > 1
  const hasPrev = index > 0
  const hasNext = index < images.length - 1

  const openAt = React.useCallback((i: number) => {
    setIndex(i)
    setOpen(true)
  }, [])

  const next = React.useCallback(() => {
    setIndex((i) => Math.min(i + 1, images.length - 1))
  }, [images.length])

  const prev = React.useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0))
  }, [])

  const current = images[index]

  return (
    <LightboxGalleryContext.Provider value={{ openAt }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPortal>
          <DialogPrimitive.Backdrop className="fixed inset-0 z-50 bg-black/90 [-webkit-tap-highlight-color:transparent] data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
          <DialogPrimitive.Popup
            className="fixed inset-0 z-50 flex items-center justify-center p-6 outline-none [-webkit-tap-highlight-color:transparent] data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95"
            onKeyDown={(event) => {
              if (event.key === "ArrowRight" && hasNext) {
                event.preventDefault()
                next()
              } else if (event.key === "ArrowLeft" && hasPrev) {
                event.preventDefault()
                prev()
              }
            }}
          >
            {current?.src ? (
              <Image
                src={current.src}
                alt={current.alt ?? current.caption}
                sizes="95vw"
                className="h-auto max-h-[92vh] w-auto max-w-[95vw] object-contain"
              />
            ) : (
              <MediaPlaceholder
                caption={current?.caption ?? ""}
                bare
                className="aspect-video max-h-[85vh] w-full max-w-4xl"
              />
            )}
            {hasMultiple && hasPrev ? (
              <button
                type="button"
                aria-label="Previous image"
                onClick={prev}
                className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full p-2 text-white/80 transition-colors outline-none hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/50"
              >
                <ChevronLeft className="size-6" />
              </button>
            ) : null}
            {hasMultiple && hasNext ? (
              <button
                type="button"
                aria-label="Next image"
                onClick={next}
                className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-2 text-white/80 transition-colors outline-none hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/50"
              >
                <ChevronRight className="size-6" />
              </button>
            ) : null}
            <DialogClose className="absolute top-4 right-4 rounded-full p-2 text-white/80 transition-colors outline-none hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/50">
              <XIcon className="size-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogPrimitive.Popup>
        </DialogPortal>
      </Dialog>
    </LightboxGalleryContext.Provider>
  )
}
