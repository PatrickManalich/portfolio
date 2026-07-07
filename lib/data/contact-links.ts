import { RiGithubLine, RiLinkedinBoxLine, RiMailLine } from "@remixicon/react"

import type { ContactLink } from "@/lib/types"

import { site } from "./site"

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    icon: RiMailLine,
    external: false,
  },
  {
    label: "LinkedIn",
    href: site.linkedinUrl,
    icon: RiLinkedinBoxLine,
    external: true,
  },
  {
    label: "GitHub",
    href: site.githubUrl,
    icon: RiGithubLine,
    external: true,
  },
]
