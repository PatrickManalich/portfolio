import Image from "next/image"
import { Mail } from "lucide-react"
import { RiLinkedinBoxLine } from "@remixicon/react"

import profileImage from "@/assets/about/profile.jpg"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/shared/section-heading"
import { site } from "@/lib/data/site"

export function Bio() {
  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[3fr_2fr]">
      <div className="flex flex-col gap-6">
        <SectionHeading eyebrow="About" title="A bit more about me" />
        <div className="flex flex-col gap-4 text-muted-foreground">
          <p>
            With a diverse background spanning UI/UX design, front-end
            engineering, game development, and animation, I bring a rare mix
            of design sensibility and engineering fluency to everything I
            build. My passion is building beautiful things that outlast me.
          </p>
          <p>
            When I&apos;m not designing, I&apos;m playing volleyball and
            tennis, gaming, learning Spanish, building Lego sets,
            volunteering, and exploring new places!
          </p>
          <p>Feel free to reach out, I&apos;d love to connect!</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            nativeButton={false}
            render={<a href={`mailto:${site.email}`} />}
          >
            <Mail />
            Email Me
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <RiLinkedinBoxLine />
            View LinkedIn
          </Button>
        </div>
      </div>
      <div className="aspect-square rounded-lg bg-muted p-1.5">
        <Image
          src={profileImage}
          alt="Patrick Manalich"
          sizes="(min-width: 1024px) 366px, calc(100vw - 60px)"
          className="h-full w-full rounded border-[0.5px] border-border object-cover"
        />
      </div>
    </div>
  )
}
