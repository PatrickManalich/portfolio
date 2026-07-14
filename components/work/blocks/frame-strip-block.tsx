import { Container } from "@/components/shared/container"
import { Lightbox } from "@/components/shared/lightbox"
import { SectionHeading } from "@/components/shared/section-heading"
import { cn } from "@/lib/utils"
import type { FrameStripBlock } from "@/lib/types"

function frameSizes(frameCount: number) {
  if (frameCount === 2) {
    return "(min-width: 1024px) 468px, calc((100vw - 64px) / 2 - 12px)"
  }
  if (frameCount === 3) {
    return "(min-width: 1024px) 303px, (min-width: 640px) calc((100vw - 80px) / 3 - 12px), calc(100vw - 60px)"
  }
  return "(min-width: 1024px) 220px, (min-width: 640px) calc((100vw - 96px) / 4 - 12px), calc((100vw - 64px) / 2 - 12px)"
}

export function FrameStripBlockView({ block }: { block: FrameStripBlock }) {
  return (
    <Container width="wide" divider className="flex flex-col gap-8">
      <SectionHeading
        title={block.heading}
        description={block.intro}
        descriptionClassName="max-w-3xl"
      />
      <div
        className={cn(
          "grid gap-4",
          block.frames.length === 3
            ? "grid-cols-1 sm:grid-cols-3"
            : block.frames.length > 2
              ? "grid-cols-2 sm:grid-cols-4"
              : "grid-cols-2"
        )}
      >
        {block.frames.map((frame, index) => (
          <Lightbox
            key={index}
            caption={frame.caption}
            figureCaption={frame.figureCaption}
            src={frame.src}
            alt={frame.alt}
            sizes={frameSizes(block.frames.length)}
            className={frame.src ? "" : "aspect-video"}
          />
        ))}
      </div>
    </Container>
  )
}
