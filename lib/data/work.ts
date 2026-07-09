import capdataAuditImage from "@/assets/work/capdata/audit.png"
import capdataComponentsImage from "@/assets/work/capdata/components.png"
import capdataDashboardImage from "@/assets/work/capdata/dashboard.png"
import capdataLegacyImage from "@/assets/work/capdata/legacy.png"
import capdataPersonasImage from "@/assets/work/capdata/personas.png"
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
        type: "featureMedia",
        id: "the-audit",
        heading: "The audit",
        intro: [
          "With no central design files to work from — no mockups, no documentation, no source of truth — I built the map myself. I went screen by screen through the entire CAPData Platform, capturing and annotating each one: its purpose, where it sat in the user flow, and the issues it carried. Patterns emerged quickly — duplicated functionality, inconsistent components and layouts, navigation that varied from section to section, and accessibility gaps throughout.",
          "The finished audit became the redesign's foundation: a complete picture of the platform's flows, pain points, and structure — and the reference against which every scoping and priority decision that followed was made.",
        ],
        media: {
          caption: "annotated audit map of the entire CAPData Platform system",
          src: capdataAuditImage,
          alt: "Annotated audit map of the full CAPData Platform, screens blurred for confidentiality.",
          figureCaption:
            "The audit map with every screen of the platform annotated and grouped by flow.",
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
        text: "How might we rebuild the CAPData Platform's foundation so every future feature inherits consistency instead of reinventing it?",
      },
      {
        type: "textMedia",
        id: "the-plan",
        heading: "The plan",
        textSide: "left",
        content: {
          kind: "prose",
          paragraphs: [
            "[Placeholder — the phased plan and priority sequence paragraph.]",
          ],
        },
        media: {
          caption: "priority sequence diagram",
          figureCaption: "[Placeholder caption — priority sequence diagram.]",
        },
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
            "[Placeholder — why a headless base library was chosen as the foundation.]",
          ],
        },
        media: {
          caption: "base library evaluation notes",
          figureCaption: "[Placeholder caption — base library evaluation notes.]",
        },
      },
      {
        type: "textMedia",
        id: "foundations-palette",
        heading: "Rebuilding the palette with Branding",
        textSide: "right",
        content: {
          kind: "prose",
          paragraphs: [
            "[Placeholder — collaborating with Branding to rebuild the color palette.]",
          ],
        },
        media: {
          caption: "palette exploration board",
          figureCaption: "[Placeholder caption — palette exploration board.]",
        },
      },
      {
        type: "textMedia",
        id: "foundations-tokens",
        heading: "Two-layer token architecture",
        textSide: "left",
        content: {
          kind: "prose",
          paragraphs: [
            "[Placeholder — the primitives-to-semantics token architecture.]",
          ],
        },
        media: {
          caption: "primitives-to-semantics diagram",
          figureCaption: "[Placeholder caption — primitives-to-semantics diagram.]",
        },
      },
      {
        type: "textMedia",
        id: "foundations-conventions",
        heading: "Icon and documentation conventions",
        textSide: "right",
        content: {
          kind: "prose",
          paragraphs: [
            "[Placeholder — icon and documentation conventions established for the system.]",
          ],
        },
        media: {
          caption: "icon and documentation guidelines",
          figureCaption: "[Placeholder caption — icon and documentation guidelines.]",
        },
      },
      {
        type: "frameStrip",
        id: "lo-fi-to-hi-fi",
        heading: "Lo-fi to hi-fi",
        frames: [
          { caption: "Wireframe" },
          { caption: "Nav diagram" },
          { caption: "Hi-fi v1" },
          { caption: "Hi-fi final" },
        ],
      },
      {
        type: "frameStrip",
        id: "dark-mode-first",
        heading: "Dark mode first",
        frames: [{ caption: "Light frame" }, { caption: "Dark frame" }],
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
