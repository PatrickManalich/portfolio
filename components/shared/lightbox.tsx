"use client"

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { XIcon } from "lucide-react"

import { Dialog, DialogClose, DialogPortal, DialogTrigger } from "@/components/ui/dialog"
import { MediaPlaceholder } from "@/components/shared/media-placeholder"
import { cn } from "@/lib/utils"

export function Lightbox({
  caption,
  className,
}: {
  caption: string
  className: string
}) {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "block cursor-zoom-in rounded-2xl text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
          className
        )}
      >
        <MediaPlaceholder caption={caption} className="size-full" />
      </DialogTrigger>
      <DialogPortal>
        <DialogPrimitive.Backdrop className="fixed inset-0 z-50 bg-black/90 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
        <DialogPrimitive.Popup className="fixed inset-0 z-50 flex items-center justify-center p-6 outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95">
          <MediaPlaceholder
            caption={caption}
            className="aspect-video max-h-[85vh] w-full max-w-4xl"
          />
          <DialogClose className="absolute top-4 right-4 rounded-full p-2 text-white/80 transition-colors outline-none hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/50">
            <XIcon className="size-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogPrimitive.Popup>
      </DialogPortal>
    </Dialog>
  )
}
