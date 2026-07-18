import { Container } from "@/components/shared/container"
import { Lightbox } from "@/components/shared/lightbox"
import { LightboxGallery } from "@/components/shared/lightbox-gallery"
import { SectionHeading } from "@/components/shared/section-heading"
import type { FeatureMediaBlock } from "@/lib/types"

export function FeatureMediaBlockView({ block }: { block: FeatureMediaBlock }) {
  return (
    <Container width="wide" divider className="flex flex-col gap-8">
      <SectionHeading
        eyebrow={block.eyebrow}
        title={block.heading}
        description={block.intro}
        descriptionClassName="max-w-3xl"
      />
      <LightboxGallery images={[block.media]}>
        <Lightbox
          galleryIndex={0}
          caption={block.media.caption}
          figureCaption={block.media.figureCaption}
          src={block.media.src}
          alt={block.media.alt}
          sizes="(min-width: 1024px) 964px, calc(100vw - 60px)"
          className={block.media.src ? "" : "min-h-[420px] w-full sm:min-h-[560px]"}
        />
      </LightboxGallery>
    </Container>
  )
}
