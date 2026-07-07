import {
  Accessibility,
  Blocks,
  CodeXml,
  Component,
  MonitorSmartphone,
  SwatchBook,
} from "lucide-react"

import type { Strength } from "@/lib/types"

export const strengths: Strength[] = [
  {
    id: "design-systems",
    icon: Component,
    title: "Design Systems",
    description:
      "Founding and scaling component libraries from the ground up, keeping Figma and production code in parity.",
  },
  {
    id: "design-tokens",
    icon: SwatchBook,
    title: "Design Tokens",
    description:
      "Structured token architecture as the single source of truth for color, typography, and spacing.",
  },
  {
    id: "accessibility",
    icon: Accessibility,
    title: "Accessibility (WCAG)",
    description:
      "Applying WCAG standards across component states and surfaces, including light and dark mode.",
  },
  {
    id: "component-architecture",
    icon: Blocks,
    title: "Component Architecture",
    description:
      "Architecting reusable, composite components with variants and states that hold up in production.",
  },
  {
    id: "responsive-design",
    icon: MonitorSmartphone,
    title: "Responsive Design",
    description:
      "Consistent visual and interaction quality across breakpoints, platforms, and resolutions.",
  },
  {
    id: "design-to-code",
    icon: CodeXml,
    title: "Design-to-Code Workflow",
    description:
      "Closing the gap between design intent and shipped UI by working directly in React and TypeScript.",
  },
]
