import { Container } from "@/components/shared/container"
import { Lightbox } from "@/components/shared/lightbox"
import { SectionHeading } from "@/components/shared/section-heading"
import type { FeatureMediaBlock } from "@/lib/types"

export function FeatureMediaBlockView({ block }: { block: FeatureMediaBlock }) {
  return (
    <Container width="wide" divider className="flex flex-col gap-8">
      <SectionHeading title={block.heading} description={block.intro} />
      <Lightbox
        caption={block.media.caption}
        className="min-h-[420px] w-full sm:min-h-[560px]"
      />
    </Container>
  )
}
