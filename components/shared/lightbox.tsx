"use client"

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { XIcon } from "lucide-react"
import Image, { type StaticImageData } from "next/image"

import { Dialog, DialogClose, DialogPortal, DialogTrigger } from "@/components/ui/dialog"
import { Caption } from "@/components/shared/caption"
import { MediaPlaceholder } from "@/components/shared/media-placeholder"
import { cn } from "@/lib/utils"

export function Lightbox({
  caption,
  figureCaption,
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className,
}: {
  caption: string
  figureCaption?: string
  src?: StaticImageData
  alt?: string
  sizes?: string
  priority?: boolean
  className: string
}) {
  const trigger = (
    <DialogTrigger
      className={cn(
        "block cursor-zoom-in rounded-lg bg-muted p-1.5 text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? caption}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full rounded border-[0.5px] border-border"
        />
      ) : (
        <MediaPlaceholder caption={caption} className="size-full" />
      )}
    </DialogTrigger>
  )

  return (
    <Dialog>
      {figureCaption ? (
        <figure className="m-0 flex flex-col gap-2">
          {trigger}
          <Caption>{figureCaption}</Caption>
        </figure>
      ) : (
        trigger
      )}
      <DialogPortal>
        <DialogPrimitive.Backdrop className="fixed inset-0 z-50 bg-black/90 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
        <DialogPrimitive.Popup className="fixed inset-0 z-50 flex items-center justify-center p-6 outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95">
          {src ? (
            <Image
              src={src}
              alt={alt ?? caption}
              sizes="90vw"
              className="h-auto max-h-[85vh] w-auto max-w-[90vw] object-contain"
            />
          ) : (
            <MediaPlaceholder
              caption={caption}
              bare
              className="aspect-video max-h-[85vh] w-full max-w-4xl"
            />
          )}
          <DialogClose className="absolute top-4 right-4 rounded-full p-2 text-white/80 transition-colors outline-none hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/50">
            <XIcon className="size-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogPrimitive.Popup>
      </DialogPortal>
    </Dialog>
  )
}
