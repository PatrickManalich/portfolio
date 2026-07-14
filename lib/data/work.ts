import capdataAuditImage from "@/assets/work/capdata/audit.png"
import capdataBrandImage from "@/assets/work/capdata/brand.png"
import capdataButtonsImage from "@/assets/work/capdata/buttons.png"
import capdataChangelogImage from "@/assets/work/capdata/changelog.png"
import capdataComponentsImage from "@/assets/work/capdata/components.png"
import capdataDashboardImage from "@/assets/work/capdata/dashboard.png"
import capdataFlowsDiagramImage from "@/assets/work/capdata/flows-diagram.png"
import capdataFlowsNewImage from "@/assets/work/capdata/flows-new.png"
import capdataFlowsOldImage from "@/assets/work/capdata/flows-old.png"
import capdataLegacyImage from "@/assets/work/capdata/legacy.png"
import capdataPersonasImage from "@/assets/work/capdata/personas.png"
import capdataTokensImage from "@/assets/work/capdata/tokens.png"
import type { Work } from "@/lib/types"

export const work: Work[] = [
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
    eyebrow: "CAP Index case study",
    headline: "Founding CAP Index's first design system",
    metaDescription:
      "From full design audit to 300+ hi-fi mockups: rebuilding an enterprise platform from the ground up.",
    blocks: [
      {
        type: "hero",
        id: "hero",
        media: [
          {
            caption: "CAPData Platform dashboard",
            src: capdataDashboardImage,
            alt: "CAPData Platform dashboard built on the design system",
          },
          {
            caption: "Component library sheet",
            src: capdataComponentsImage,
            alt: "Component library sheet from the CAPData Platform design system",
          },
        ],
        caption: "The redesigned CAPData Platform and the component system behind it.",
      },
      {
        type: "overview",
        id: "overview",
        paragraphs: [
          "When CAP Index hired me, I was the company's first designer. I was brought in to build the design function from zero and lead a full front-end rebuild of the CAPData Platform, the company's flagship crime-forecasting platform. That meant everything from introducing Figma to the organization and establishing research practices, to auditing the entire legacy system and architecting the component library the rebuild would stand on.",
          "Over two years, I rebuilt the platform's foundation: accessible, responsive for the first time, dark-mode capable, and built on a design-to-code pipeline that keeps Figma libraries and production components in parity. The result is a system the team now ships every new feature on — scalable past the rebuild that created it.",
        ],
        facts: [
          { label: "Role", value: "Senior UI/UX Engineer" },
          {
            label: "Responsibilities",
            value:
              "Design function from zero: research and personas, full system audit, design tokens, 250+ components, hi-fi mockups, Storybook documentation; mentored a junior designer.",
          },
          {
            label: "Collaborators",
            value: "Dev Team, Project Managers, Research & Innovation, Marketing, Sales",
          },
          { label: "Timeline", value: "Apr 2024 – Jun 2026" },
        ],
      },
      {
        type: "textMedia",
        id: "the-challenge",
        heading: "The challenge",
        intro:
          "The CAPData Platform served security leaders at some of the country's largest companies — but the platform hadn't kept pace with them. The interface had grown feature by feature over years without design involvement: inconsistent, desktop-only, and increasingly costly to extend.",
        textSide: "left",
        content: {
          kind: "cards",
          cards: [
            {
              label: "Business need",
              text: "Modernize the CAPData Platform's front end to stay competitive and make new feature development faster — replacing one-off screens with a scalable, reusable foundation.",
            },
            {
              label: "User need",
              text: "Security leaders needed to assess risk and build the case for decisions quickly. Dense, inconsistent screens and no mobile support meant more time fighting the interface than using the data.",
            },
          ],
        },
        media: {
          caption: "legacy CAPData Platform screen",
          src: capdataLegacyImage,
          alt: "The legacy CAPData Platform interface before the redesign.",
          figureCaption: "The legacy CAPData Platform before the redesign.",
        },
      },
      {
        type: "statement",
        id: "problem-to-solve",
        eyebrow: "Problem to solve",
        text: "The CAPData Platform was dated, inconsistent, and desktop-only — and it couldn't scale to what came next.",
      },
      {
        type: "featureMedia",
        id: "research",
        eyebrow: "Research",
        heading: "Personas & requirements",
        intro:
          "CAP Index had deep informal knowledge of its users — sales calls, support conversations, years of client relationships — but none of it was documented in a format that design decisions could be built on. I led the company's first user personas, synthesizing internal expertise and periodic client conversations into profiles spanning our core industries: retail, banking, and healthcare. Alongside them, I gathered and documented feature requests and pain points from across the organization, turning scattered requirements into a prioritized foundation for the redesign.",
        media: {
          caption: "user personas",
          src: capdataPersonasImage,
          alt: "The four user personas created for the CAPData Platform redesign, spanning retail, banking, and healthcare.",
          figureCaption: "The four user personas spanning retail, banking, and healthcare.",
        },
      },
      {
        type: "textMedia",
        id: "the-audit",
        heading: "The audit",
        textSide: "left",
        content: {
          kind: "prose",
          paragraphs: [
            "With no central design files to work from — no mockups, no documentation, no source of truth — I built the map myself. I went screen by screen through the entire CAPData Platform, capturing and annotating each one: its purpose, where it sat in the user flow, and the issues it carried. Patterns emerged quickly — duplicated functionality, inconsistent components and layouts, navigation that varied from section to section, and accessibility gaps throughout.",
            "The finished audit became the redesign's foundation: a complete picture of the platform's flows, pain points, and structure — and the reference against which every scoping and priority decision that followed was made.",
          ],
        },
        media: {
          caption: "annotated audit map of the entire CAPData Platform system",
          src: capdataAuditImage,
          alt: "Annotated audit map of the full CAPData Platform, screens blurred for confidentiality.",
          figureCaption:
            "The audit map with every screen of the legacy platform annotated.",
        },
      },
      {
        type: "cardRow",
        id: "key-insights",
        heading: "Key insights",
        intro: "Three insights from the audit shaped everything that followed.",
        numbered: true,
        cards: [
          {
            label: "A system, not a restyle",
            text: "This called for a bigger rebuild than modernizing a couple of screens — the platform needed a design system: consistent, scalable, and equally workable for designers and developers.",
          },
          {
            label: "Rework the flow",
            text: "The core flow between the map, site library, and site details was confusing, and page layouts made things hard to find — the platform's primary navigation had to be rethought, not patched.",
          },
          {
            label: "Simplify and guide",
            text: "The platform presented complex data without guidance — users needed pre-crafted configurations and clearer paths through it, not more options to configure themselves.",
          },
        ],
      },
      {
        type: "statement",
        id: "how-might-we",
        eyebrow: "How might we",
        text: "How might we rebuild the CAPData Platform so consistency, clarity, and guidance are the default?",
      },
      {
        type: "textMedia",
        id: "foundations-base-library",
        eyebrow: "Foundations",
        heading: "Choosing a base library",
        textSide: "left",
        content: {
          kind: "prose",
          paragraphs: [
            "The component library decision came first, because everything else would be built on it. In 2024, I evaluated the major options — Material UI, Ant Design, Chakra, and the then-emerging shadcn/ui — against the platform's real constraints: a data-dense enterprise product, WCAG accessibility as a requirement rather than a goal, dark mode as a first-class theme, and a small team that needed to move fast without a dedicated design-systems staff.",
            "MUI won on maturity. Its components were battle-tested for accessibility out of the box, its theming system handled light and dark modes at the token level, and its breadth — data grids, complex inputs, date handling — covered the platform's needs without custom builds. Rather than constructing every primitive from scratch, we could put our effort where it differentiated: CAP Index's own tokens, patterns, and composite components layered on a proven base.",
          ],
        },
        media: {
          caption: "base library evaluation notes",
          src: capdataButtonsImage,
          alt: "Button variant and state matrix — primary, neutral, error, and warning colors across contained, outlined, and text styles, each in enabled, hovered, focused, pressed, and disabled states, at large, medium, and small sizes.",
          figureCaption: "MUI button variant matrix themed to our brand guidelines.",
        },
      },
      {
        type: "textMedia",
        id: "foundations-palette",
        heading: "Shaping the new brand",
        textSide: "right",
        content: {
          kind: "prose",
          paragraphs: [
            "The redesign coincided with a company-wide rebrand — new logo, colors, and identity across everything CAP Index put in the world. I was part of the small group steering it, alongside the CEO, the head of Marketing, and an outside brand agency, shaping the palette, logo direction, and overall feel.",
            "My job was making the brand work as an interface: translating the new palette into accessible, color-blind-safe values that could survive data-dense screens, dark mode, and WCAG contrast requirements — the bridge between brand identity and the token architecture that follows.",
          ],
        },
        media: {
          caption: "brand type and color sheet",
          src: capdataBrandImage,
          alt: "The rebrand's type and color sheet.",
          figureCaption: "The new brand's type and color system.",
        },
      },
      {
        type: "textMedia",
        id: "foundations-tokens",
        heading: "Token architecture",
        textSide: "left",
        content: {
          kind: "prose",
          paragraphs: [
            "The token system came next, built directly into the MUI theme structure — primitive color scales (capPrimary, capSecondary, etc.) laid the foundation, with semantic tokens layered on top to drive light and dark theming. This split meant switching an entire page of components & mockups from light to dark mode in Figma was a single toggle, not a manual rebuild. Every semantic token referenced back to a primitive token rather than a hardcoded hex code, so the relationship between a color and its source was always traceable and scalable.",
            "Surface tokens followed the same logic, with a four-level hierarchy — base, raised, overlay, and elevated — giving every component a consistent home regardless of theme. Spacing and typography ran on shared variables too, so a single change at the token level propagated across every mockup and component in the file.",
          ],
        },
        media: {
          caption: "semantic color token pairs",
          src: capdataTokensImage,
          alt: "Figma palette table showing main, dark, light, and contrastText rows for primary and secondary colors, each resolving to capPrimary or capSecondary scale references.",
          figureCaption: "Semantic color tokens paired for light and dark mode, from Figma.",
        },
      },
      {
        type: "textMedia",
        id: "foundations-figma-to-production",
        heading: "From Figma to production",
        textSide: "right",
        content: {
          kind: "prose",
          paragraphs: [
            "Token changes moved through the same discipline as code. Updates were made on a branch within the design system file, verified against live mockups before merging, and logged in a running changelog so the history of what changed and why stayed intact. From there, tokens were exported to a developer-ready JSON format and handed to the team.",
            "Implementation went through a design QA step: as developers rebuilt components in Storybook, I reviewed each one against the Figma source for spacing, color, type, and state accuracy, flagging anything as critical versus triage for later. Having worked as a developer myself, I could speak directly to engineering concerns, review the code directly in the repo, and iterate quickly instead of working through a layer of translation — devs were also looped into design early, so feasibility concerns surfaced before mockups were final rather than after. That process supported over 250 components and 300+ hi-fi mockups across a team of 10+ developers.",
          ],
        },
        media: {
          caption: "design system changelog",
          src: capdataChangelogImage,
          alt: "Versioned changelog entries for the CAPData design system, each with a date, change-type tag, and ticket link.",
          figureCaption: "A running changelog tracked every design system update.",
        },
      },
      {
        type: "frameStrip",
        id: "reworking-the-flows",
        heading: "Reworking the flows",
        intro: [
          "The old platform organized navigation around three flat tabs — Dashboard, Table, and Map — with everything else, from user accounts to system settings, buried under a single account menu in the top right. Users had to hunt for basic administrative tasks, and Table and Map, which were really just two views of the same site list, lived as separate destinations rather than a single connected experience.",
          "I merged Table and Map into one Sites tab with an in-page toggle between views, so switching how you looked at a site list no longer meant losing your place or reapplying filters. I split the old account menu into two purposeful groups — User Management and Admin Settings — so users could find what they needed by what it was, not by memory. A global search bar tied it together, letting anyone jump straight to a page instead of navigating down to it.",
        ],
        frames: [
          {
            caption: "old navigation structure",
            src: capdataFlowsOldImage,
            alt: "The old CRIMECAST platform's flat tab navigation and account menu.",
            figureCaption: "The old flat tab structure, with many pages buried.",
          },
          {
            caption: "before and after navigation diagram",
            src: capdataFlowsDiagramImage,
            alt: "A before-and-after diagram of the platform's navigation, showing Table and Map merging into a Sites tab and the account menu splitting into User Management and Admin Settings.",
            figureCaption: "Navigation reworked and pages purposefully grouped.",
          },
          {
            caption: "new Sites tab hi-fi mockup",
            src: capdataFlowsNewImage,
            alt: "The new CRIMECAST platform's Sites tab, showing the Map and Table toggle.",
            figureCaption: "The new layered tab structure, with pages properly exposed.",
          },
        ],
      },
      {
        type: "frameStrip",
        id: "dark-mode-and-responsive",
        heading: "Dark mode and responsive from day one",
        intro:
          "[Placeholder — dark mode as the default theme, responsive breakpoints for the platform's first non-desktop support, and WCAG compliance across both.]",
        frames: [{ caption: "Light & dark" }, { caption: "Mobile" }],
      },
      {
        type: "textMedia",
        id: "testing-iteration",
        heading: "Testing & iteration",
        textSide: "left",
        content: {
          kind: "pairs",
          pairs: [
            {
              insight: "[Placeholder — usability insight one.]",
              action: "[Placeholder — resulting action one.]",
            },
            {
              insight: "[Placeholder — usability insight two.]",
              action: "[Placeholder — resulting action two.]",
            },
          ],
        },
        media: {
          caption: "usability testing session",
          figureCaption: "[Placeholder caption — usability testing session.]",
        },
      },
      {
        type: "stats",
        id: "results",
        heading: "Results",
        metrics: [
          { label: "Components", value: "250+" },
          { label: "Hi-fi mockups", value: "300+" },
          { label: "Dual-mode", value: "WCAG AA" },
          { label: "Placeholder metric", value: "—" },
        ],
      },
      {
        type: "cardRow",
        id: "what-i-learned",
        heading: "What I learned",
        cards: [
          { label: "[Placeholder lesson one]", text: "[Placeholder — supporting detail.]" },
          { label: "[Placeholder lesson two]", text: "[Placeholder — supporting detail.]" },
          { label: "[Placeholder lesson three]", text: "[Placeholder — supporting detail.]" },
        ],
      },
    ],
  },
  {
    slug: "neurosparks",
    client: "Barron Associates",
    role: "Lead Front-End Engineer",
    dates: "Aug 2018 – Apr 2024",
    title: "NeuroSPARKS Educational Games",
    description:
      "Conceiving and executing the vision for the award-winning NeuroSPARKS educational games, recognized with the 2022 Back to School Tech & Learning Award of Excellence.",
    tags: ["Responsive UI", "Design Tokens", "Cross-Platform"],
    metrics: [
      { label: "Award", value: "2022 Tech & Learning" },
      { label: "Platforms", value: "Windows, Android, VR" },
      { label: "Product lines led", value: "Multiple" },
    ],
    eyebrow: "Barron Associates case study",
    headline: "[Placeholder — NeuroSPARKS hero headline.]",
    metaDescription:
      "Lead design and engineering for the award-winning NeuroSPARKS educational games.",
    blocks: [
      { type: "hero", id: "hero" },
      {
        type: "overview",
        id: "overview",
        paragraphs: [
          "[Placeholder — first overview paragraph summarizing the NeuroSPARKS engagement.]",
          "[Placeholder — second overview paragraph summarizing outcomes across Windows, Android, and VR.]",
        ],
        facts: [
          { label: "Role", value: "Lead Front-End Engineer" },
          {
            label: "Responsibilities",
            value:
              "UI/UX design and front-end architecture, design token architecture, cross-platform implementation",
          },
          { label: "Collaborators", value: "Researchers, Engineers, Clients" },
          { label: "Timeline", value: "Aug 2018 – Apr 2024" },
        ],
      },
      {
        type: "stats",
        id: "results",
        heading: "Results",
        metrics: [
          { label: "Award", value: "2022 Tech & Learning" },
          { label: "Platforms", value: "Windows, Android, VR" },
          { label: "Product lines led", value: "Multiple" },
        ],
      },
    ],
  },
]
