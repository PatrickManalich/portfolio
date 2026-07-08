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
    headline:
      "Rebuilding a crime-analytics platform on a dark-mode-first design system",
    metaDescription:
      "Founding and scaling CAP Index's design system from the ground up.",
    blocks: [
      {
        type: "hero",
        id: "hero",
        media: [
          { caption: "CAPData hi-fi frame — desktop" },
          { caption: "CAPData hi-fi frame — mobile" },
        ],
      },
      {
        type: "overview",
        id: "overview",
        paragraphs: [
          "[Placeholder — first overview paragraph summarizing the CAPData 3.0 engagement, sole-designer scope, and the dark-mode-first mandate.]",
          "[Placeholder — second overview paragraph summarizing outcomes and how the system now underpins new feature work.]",
        ],
        facts: [
          { label: "Role", value: "Senior Design Systems Engineer — sole designer" },
          {
            label: "Responsibilities",
            value: "End-to-end design system: tokens, components, mockups, documentation",
          },
          { label: "Collaborators", value: "Branding, Engineering, Product" },
          { label: "Timeline", value: "2024–2026" },
        ],
      },
      {
        type: "textMedia",
        id: "the-challenge",
        heading: "The challenge",
        textSide: "left",
        content: {
          kind: "cards",
          cards: [
            {
              label: "Business need",
              text: "[Placeholder — the business need driving the rebuild.]",
            },
            {
              label: "User need",
              text: "[Placeholder — the user need driving the rebuild.]",
            },
          ],
        },
        media: { caption: "legacy CAPData screen" },
      },
      {
        type: "statement",
        id: "problem-to-solve",
        eyebrow: "Problem to solve",
        text: "CAPData had grown feature by feature without a system — every screen was custom, inconsistent, and expensive to change.",
      },
      {
        type: "textMedia",
        id: "research",
        eyebrow: "Research",
        heading: "Personas & requirements",
        textSide: "left",
        content: {
          kind: "prose",
          paragraphs: [
            "[Placeholder — persona and requirements-gathering paragraph.]",
          ],
        },
        media: { caption: "persona artifact" },
      },
      {
        type: "featureMedia",
        id: "the-audit",
        heading: "The audit",
        intro: "[Placeholder — short intro framing the full-system audit.]",
        media: { caption: "annotated audit map of the entire CAPData system" },
      },
      {
        type: "cardRow",
        id: "key-insights",
        heading: "Key insights",
        cards: [
          { label: "[Placeholder insight one]", text: "[Placeholder — supporting detail.]" },
          { label: "[Placeholder insight two]", text: "[Placeholder — supporting detail.]" },
          { label: "[Placeholder insight three]", text: "[Placeholder — supporting detail.]" },
        ],
      },
      {
        type: "statement",
        id: "how-might-we",
        eyebrow: "How might we",
        text: "How might we rebuild CAPData's foundation so every future feature inherits consistency instead of reinventing it?",
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
        media: { caption: "priority sequence diagram" },
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
        media: { caption: "base library evaluation notes" },
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
        media: { caption: "palette exploration board" },
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
        media: { caption: "primitives-to-semantics diagram" },
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
        media: { caption: "icon and documentation guidelines" },
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
        media: { caption: "usability testing session" },
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
