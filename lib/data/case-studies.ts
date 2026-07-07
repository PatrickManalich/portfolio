import type { CaseStudy } from "@/lib/types"

const placeholderSections = (topics: string[]) =>
  topics.map((heading, index) => ({
    id: heading.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    heading,
    body: [
      `[Placeholder — write up the "${heading.toLowerCase()}" section here.]`,
    ],
    ...(index === topics.length - 1
      ? { metrics: [{ label: "Placeholder metric", value: "—" }] }
      : {}),
  }))

export const caseStudies: CaseStudy[] = [
  {
    slug: "capdata-3-0",
    client: "CAP Index",
    role: "Senior UI/UX Engineer",
    dates: "Apr 2024 – Jun 2026",
    title: "CAPData 3.0 Design System",
    description:
      "Founding and scaling a dark-mode-first design system from the ground up for a platform relied on by 80% of Fortune 100 companies.",
    tags: ["Design Systems", "Design Tokens", "Accessibility (WCAG)"],
    metrics: [
      { label: "Components shipped", value: "250+" },
      { label: "Hi-fi mockups", value: "300+" },
      { label: "Fortune 100 reach", value: "80%" },
    ],
    category: "Design Systems",
    metaDescription:
      "Founding and scaling CAP Index's design system from the ground up.",
    intro:
      "[Placeholder — intro paragraph summarizing the CAPData 3.0 project scope and impact.]",
    goals: [
      "[Placeholder goal — close the design-to-code gap between Figma and production]",
      "[Placeholder goal — establish a token architecture spanning light and dark mode]",
      "[Placeholder goal — give teams a documented, adoptable component library]",
    ],
    meta: {
      role: "Senior UI/UX Engineer",
      responsibilities: [
        "Design system architecture",
        "Design token strategy",
        "Component documentation",
      ],
      collaborators: ["Engineering", "Product", "10+ developers across teams"],
      timeline: "Apr 2024 – Jun 2026",
    },
    sections: placeholderSections(["Challenge", "Approach", "Outcome"]),
  },
  {
    slug: "neurosparks",
    client: "Barron Associates",
    role: "Lead Front-End Engineer",
    dates: "Aug 2018 – Mar 2024",
    title: "NeuroSPARKS Educational Games",
    description:
      "Conceiving and executing the vision for the award-winning NeuroSPARKS educational games, recognized with the 2022 Back to School Tech & Learning Award of Excellence.",
    tags: ["Responsive UI", "Design Tokens", "Cross-Platform"],
    metrics: [
      { label: "Award", value: "2022 Tech & Learning" },
      { label: "Platforms", value: "Windows, Android, VR" },
      { label: "Product lines led", value: "Multiple" },
    ],
    category: "Product Design & Engineering",
    metaDescription:
      "Lead design and engineering for the award-winning NeuroSPARKS educational games.",
    intro:
      "[Placeholder — intro paragraph summarizing the NeuroSPARKS project scope and impact.]",
    goals: [
      "[Placeholder goal — deliver consistent visual/interaction quality across Windows, Android, and VR]",
      "[Placeholder goal — establish a token architecture as the single source of truth]",
      "[Placeholder goal — incorporate user research into iterative UI development]",
    ],
    meta: {
      role: "Lead Front-End Engineer",
      responsibilities: [
        "UI/UX design and front-end architecture",
        "Design token architecture",
        "Cross-platform implementation",
      ],
      collaborators: ["Researchers", "Engineers", "Clients"],
      timeline: "Aug 2018 – Mar 2024",
    },
    sections: placeholderSections(["Challenge", "Approach", "Outcome"]),
  },
]
