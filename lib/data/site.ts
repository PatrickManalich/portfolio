import type { NavItem } from "@/lib/types"

export const site = {
  name: "Patrick Manalich",
  title: "Senior Design Systems Engineer",
  location: "Austin, TX",
  remoteNote: "open to remote",
  email: "patrickmanalich@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/patrickmanalich",
  githubUrl: "https://github.com/PatrickManalich",
  repoUrl: "https://github.com/PatrickManalich/portfolio",
  heroSummary:
    "Senior design systems engineer with 8+ years of experience translating design intent into scalable, responsive UI systems — deep expertise in Figma, React, TypeScript, design tokens, and WCAG accessibility.",
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Resume", href: "/patrick-manalich-resume.pdf", external: true },
]
