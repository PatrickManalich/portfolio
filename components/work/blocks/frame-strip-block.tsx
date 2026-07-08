import { Container } from "@/components/shared/container"
import { MediaPlaceholder } from "@/components/shared/media-placeholder"
import { SectionHeading } from "@/components/shared/section-heading"
import { cn } from "@/lib/utils"
import type { FrameStripBlock } from "@/lib/types"

export function FrameStripBlockView({ block }: { block: FrameStripBlock }) {
  return (
    <Container width="wide" divider className="flex flex-col gap-8">
      <SectionHeading title={block.heading} />
      <div
        className={cn(
          "grid gap-4",
          block.frames.length > 2 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2"
        )}
      >
        {block.frames.map((frame, index) => (
          <MediaPlaceholder key={index} caption={frame.caption} className="aspect-video" />
        ))}
      </div>
    </Container>
  )
}
