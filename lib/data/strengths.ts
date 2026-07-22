import {
  Accessibility,
  Clock,
  CodeXml,
  Eye,
  Rocket,
  Users,
} from "lucide-react"

import type { Strength } from "@/lib/types"

export const strengths: Strength[] = [
  {
    id: "experience",
    icon: Clock,
    title: "8+ years of experience",
    description:
      "My background spans UI/UX design, front-end engineering, and game development, with deep expertise in design systems.",
  },
  {
    id: "bridges-design-and-code",
    icon: CodeXml,
    title: "Bridges design and code",
    description:
      "My engineering background lets me speak developers' language, review code directly, and close the design-to-code gap myself.",
  },
  {
    id: "collaborator",
    icon: Users,
    title: "Effective collaborator",
    description:
      "I work well in cross-functional teams, partnering closely with engineers, marketing, and leadership to ship systems that scale.",
  },
  {
    id: "detail-oriented",
    icon: Eye,
    title: "Detail oriented",
    description:
      "I catch subtle inconsistencies others miss, reviewing components against source designs and flagging issues before they ship.",
  },
  {
    id: "self-starter",
    icon: Rocket,
    title: "Self-starter",
    description:
      "Give me the goal and I'll run with it, taking full ownership and making sure we cross the finish line — no hand-holding required.",
  },
  {
    id: "accessibility-minded",
    icon: Accessibility,
    title: "Accessibility minded",
    description:
      "I build WCAG-compliant components by default, translating brand and data-dense interfaces into accessible, color-blind-safe experiences.",
  },
]
