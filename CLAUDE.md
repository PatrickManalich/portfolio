@AGENTS.md
# Project Brief: patrickmanalich.com

## Who I am
Patrick Manalich, Senior Design Systems Engineer, 8+ years spanning UI/UX
design and front-end development. Most recently built CAPData 3.0, a
dark-mode-first design system (250+ components, 300+ hi-fi mockups, two-layer
token architecture, WCAG light/dark, Storybook docs) at CAP Index. Before
that, ~6 years of game development including Lead Front-End Engineer work at
Barron Associates.

## Why this project exists
I'm job searching (Design Systems Engineer / UX Engineer / Design
Technologist roles). This portfolio is:
1. The URL on my resume — needs to be live and presentable ASAP
2. A public work sample — the repo itself demonstrates design systems
   thinking (owned shadcn components, custom token architecture)

Priority order when these conflict: live > presentable > educational.
Ship first, refine after.

## My experience level — how to work with me
- Designer-strong, developer-strong.
- I review every diff. Keep changes small and reviewable.
- I have strong design opinions; make layout/visual changes only as
  specified, ask before improvising visually.
- Direct communication. No filler, no cheerleading.

## Tech stack (decided — don't relitigate)
- Next.js (App Router, TypeScript, Tailwind), created via create-next-app
- shadcn/ui on the Base UI track, Nova preset — components owned in-repo
- Icons: lucide-react for general icons; @remixicon/react added specifically
  for brand icons (LinkedIn, GitHub) since lucide-react dropped brand logos —
  both are intentionally in package.json, not redundant.
- Hosting: Vercel, auto-deploy from GitHub main branch
- Domain: patrickmanalich.com (Cloudflare DNS, already connected, working)
- No CMS, no database. Content lives in the repo (MDX or TSX).

## Design direction
- Current actual structure: nav (Home, Work, About) → hero (name/title/
  summary, Email/LinkedIn/GitHub contact row, location + "open to remote")
  → Work section → Key Strengths grid → About section (bio, horizontal
  career timeline, fun stats) → footer (nav + social icons row, then
  copyright + "Built with Next.js · Source").
- Home, Work, and About are sections on the single `/` page, reached via nav
  fragment links (`/#work`, `/#about`), not separate routes. Individual
  project write-ups still get real routes at `/work/[slug]`.
- No testimonials section, no Resume nav item/route — explicitly skipped.
- Nav links have no active/current-section highlighting. I tried it once;
  it read as a stuck button rather than a tab, so it was removed. Don't
  re-add it without asking.

## Case study image pattern
- Real images live in `assets/work/<slug>/` (not `public/`) and get
  static-imported so Next.js infers width/height. Wire them via
  `MediaSpec.src` (StaticImageData) + `alt`; `caption` is just the
  fallback label shown when there's no `src`.
- Every case study image — real or placeholder — renders through the
  shared `Lightbox` component (`components/shared/lightbox.tsx`), which
  wraps `next/image` or falls back to `MediaPlaceholder`. Don't drop in
  a plain `<img>` or a standalone `next/image`; going through `Lightbox`
  is what gives every image the same frame styling and click-to-expand
  for free.
- Frame is muted/padded/rounded on the outside, hairline-bordered on the
  inner image; the lightbox popup strips the frame and shows the image
  bare, scaled to fit.
- The `sizes` prop must account for the `Container` padding *and* the
  `Lightbox` frame padding, not just the grid column width — otherwise
  mobile (sub-640px, single-column) falls through to a bare `100vw`
  default and overstates the real render width, so `next/image` ships a
  bigger srcset entry than needed.
- Every case study image gets a caption: `MediaSpec.figureCaption`,
  rendered below the frame by the shared `Caption` component
  (`components/shared/caption.tsx`) via `Lightbox`'s `figureCaption`
  prop. Real images get real captions; placeholders get
  `"[Placeholder caption — ...]"` text until real copy exists — don't
  leave new image slots uncaptioned. Exception: `frameStrip`'s small
  multi-thumbnail grids skip below-image captions *while still
  placeholder*, since the placeholder already shows the label inline
  and a second one below each tiny tile would just be redundant
  clutter. Once real images go in, each frame gets its own real
  `figureCaption` like everywhere else — see "Reworking the flows" for
  the filled-in version of this pattern.
- When two images share a row and need to render at the same height:
  if their aspect ratios are already close (near-duplicates, e.g. two
  similar screenshots), the simple fix is padding one image's canvas
  to match the other exactly, so the plain grid layout just works with
  no CSS special-casing — pad with opaque white, not transparent, even
  though the site supports dark mode (confirmed preference, not an
  oversight). But when the images are fundamentally different shapes
  by design (e.g. `modeCards`' landscape desktop + portrait mobile
  pair), don't force a shared aspect ratio by editing the images —
  match height with pure CSS instead: give one slot a fixed
  `aspect-ratio` at a fixed `%` width (fully responsive), leave the
  other slot's width unset, and let it stretch to the row's height via
  flexbox `items-stretch` plus `Lightbox`'s `imageClassName="h-full
  w-auto object-contain"` — its width falls out of its own real aspect
  ratio, nothing is cropped or stretched. `Lightbox` has an
  `imageClassName` prop specifically for this override; don't add a
  new one-off image component for it.
- Hero images share one caption for the whole pair (`HeroBlock.caption`,
  wrapped in its own `<figure>`), not a per-image `figureCaption` —
  different from every other section, which captions each image
  individually.
- If an image is unusually wide/panoramic (a multi-up sheet, a wide
  screenshot), the two-column `textMedia` slot (~460px wide) will crop
  it down to near-illegibility. Check the aspect ratio before wiring it
  in; if it's a bad fit, flag it and confirm switching that section to
  the full-width `featureMedia` layout rather than doing it silently.
- Image handoff: I drop exports in `Desktop/Exports/` on my machine as
  a working handoff spot — that's not part of the project. You copy
  them into `assets/work/<slug>/` and only that in-repo copy ever gets
  imported/committed; nothing in the site or git history points back
  to my desktop.
- `Lightbox` takes two separate className props: `className` styles the
  image trigger itself (aspect ratio, sizing), `figureClassName` styles
  the outer wrapper (e.g. `lg:order-1` column flips in `textMedia`).
  Don't put positioning/order classes in `className` — when a
  `figureCaption` is set, `className` lands on the trigger *inside* the
  caption's flex-col figure, and an `order` there reorders the image
  against its own caption instead of moving the whole block. This bit
  us once (captions rendering above their image on `textSide: "right"`
  sections) before the props were split.

## Build order
1. ✅ Skeleton: layout shell, nav, footer, empty routes with placeholder text
2. ✅ Homepage structure with real hero text, placeholder cards
3. ✅ Work page template with placeholder content
4. Token pass: replace preset variables with my palette (I'll drive this)
5. Real content — status:
   - Work: capdata-3-0 is content-complete, real copy and real images
     throughout — hero, overview, challenge, research/personas,
     full-system-audit, all four Foundations subsections (choosing a
     base library, shaping the new brand, token architecture, from
     Figma to production), "Reworking the flows" (frameStrip, 3 real
     screenshots), "Dark mode and responsive design" (modeCards block:
     bordered Light mode/Dark mode cards, each with real desktop +
     mobile screenshots), and a closing "In conclusion" full-bleed band
     (closing paragraph + 4 stat cards). "The plan" and "Icon and
     documentation conventions" were removed as standalone sections
     early on (icons folded into token architecture; documentation
     folded into Figma-to-production). Testing & iteration, Results,
     and What I learned were later cut entirely (not filled in) and
     replaced by the "In conclusion" band above.
   - neurosparks: only client/role/dates/metrics are real; everything
     else (headline, overview, results) is still placeholder.
   - About > career timeline: real and complete.
   - About > bio: placeholder text, needs my real copy.
   - About > fun stats: placeholder numbers borrowed from a reference site,
     need my real numbers.
6. Polish: metrics on cards, responsive QA, meta/OG tags

## Guardrails
- I have a tendency to over-iterate. If I ask for the third revision of
  something cosmetic before v1 content is done, flag it and point back to
  the build order.
- Don't add sections, dependencies, or animation libraries unless I ask.
- Don't run `npm audit fix --force`, ever.
- Commit at the end of each working chunk with a clear message; I'll say
  when.
- Verify with the dev server and quick checks; don't build verification scripts or take screenshots for cosmetic changes unless I ask. If a check fails twice, stop and tell me instead of investigating further.
- Avoid headless-browser screenshots/cropping for visual checks (line wraps, spacing, layout) unless I explicitly ask for that kind of verification — and even then, keep it to one or two shots, not an iterative screenshot-crop-inspect loop. Reason briefly from the CSS instead (widths, font size, character count), or just make the change and let me eyeball it. This burns a lot of tokens for something I can check in five seconds.
- Don't spawn subagents for verification or exploration unless I ask.
- I can see and click the running site myself. Don't burn tokens re-fetching
  pages, parsing rendered HTML, or measuring things to confirm what I can
  eyeball in five seconds — cosmetic CSS values, whether a button is there.
  Only verify what I actually can't check myself: type errors, data wiring,
  computed values (byte-weight math, etc.), anything that could be silently
  wrong without a visible symptom.