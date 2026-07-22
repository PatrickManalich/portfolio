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
- Tailwind v4 gotcha (bit us once): `translate-x-*`/`translate-y-*`
  utilities set the native CSS `translate` property, not `transform` —
  unlike v3. A `transition-[transform,...]` list won't animate them; use
  `transition-[translate,...]` (or `transition-transform`, which Tailwind
  v4 maps to the right property set) or the animation silently no-ops
  regardless of duration.

## Design direction
- Current actual structure: nav (Home, Work, About, Resume) → hero (name/
  title/summary, Email/LinkedIn/GitHub contact row, location + "open to
  remote") → Work section → About section (bio incl. headshot photo and
  Email Me/View LinkedIn buttons, then Key Strengths grid — career
  timeline is currently hidden, see below) → footer (nav + social icons
  row, then copyright + "Built with Next.js · Source").
- Home, Work, and About are sections on the single `/` page, reached via nav
  fragment links (`/#work`, `/#about`), not separate routes. Individual
  project write-ups still get real routes at `/work/[slug]`.
- Resume nav item links to the PDF at `site.resumeUrl`
  (`/patrick-manalich-resume.pdf`, in `public/`) and opens in a new tab, no
  `download` attribute — opens in the browser's native viewer. No
  testimonials section.
- Nav links have no active/current-section highlighting. I tried it once;
  it read as a stuck button rather than a tab, so it was removed. Don't
  re-add it without asking.
- Clicking Home/Work/About (header or footer) smooth-scrolls to the section
  instead of jumping, both directions, via `lib/smooth-scroll.ts` — only
  when already on `/`; from other pages it's normal Next.js navigation.
  `SiteHeader` (`components/layout/site-header.tsx`) is a single `sticky
  top-0` header, page-independent (no hero/homepage special-casing) —
  translucent, slides away on scroll down and back in on scroll up, but
  always visible near the top of the page regardless of direction. There
  used to be a second fixed `StickyNav` component layered on top of a
  static `SiteHeader`, which caused two overlapping header bars and
  hero-page-dependent visibility bugs; it was folded into `SiteHeader`
  and removed. Don't re-introduce a second header element.
- Career timeline (About section, horizontal date-range display) is
  currently hidden — `Timeline` component and `lib/data/timeline.ts` are
  left in place, just not rendered in `about-section.tsx`, pending a
  redesign. Don't delete it or treat it as dead code.
- Section-identity bars: the `--brand-1` through `--brand-5` tokens
  (`app/globals.css`) are 4px left-border accents on section/block
  headings, cycling through all five colors in reading order on both
  the homepage (Work, About, Why Me) and every CAP Index case study
  section — skipping full-width band sections (Problem-to-solve/HMW
  statements, the closing conclusion band). Recolor everything at once
  by editing the oklch values in `globals.css`, not the components —
  every section references `brand-N` by number, not by color name.
  The bar height clamps to the heading line only, via
  `SectionHeading`'s `titleClassName` prop — it must not extend down
  through the description paragraph or any cards/media below. Both
  Hero sections (homepage `Hero` and case study `WorkHero`) are the
  one exception: their bar bundles the kicker + H1 together (still
  stopping before the description paragraph beneath).
- Nav underline: `NavLink` (`components/layout/nav-link.tsx`) is
  shared by both header and footer nav — don't reimplement the hover
  underline separately in either. Each item gets its own brand-color
  underline on hover (Home→brand-1, Work→brand-2, About→brand-3,
  Resume→brand-5), animated via `width` (not `scale` — Tailwind v4's
  `scale` property can read as growing off-center on very short
  elements; `width` from a fixed left edge doesn't have that problem).
- Eyebrow/kicker convention: case study pages get exactly **one**
  eyebrow, at the very top (`WorkHero`) — no kickers anywhere else in
  the body (Research, Foundations, Problem to solve, etc. were all
  removed as redundant). Homepage section headings (Work, About, Why
  Me) have no kickers at all; the homepage Hero's "Hi, I'm Patrick"
  kicker is the one exception.
- Casing: page-level titles (the Hero H1, the one remaining case-study
  eyebrow) are title case, like a resume header. Section headings and
  card titles are sentence case — only the first word and proper
  nouns/acronyms capitalized (e.g. "Key strengths", not "Key
  Strengths"). This distinction isn't always obvious from context;
  ask rather than guess if unsure which category a given string is.
- Card title hierarchy: a card title nested inside a section
  (`WorkCard`, `StrengthCard`) must be both smaller *and* a lighter
  font-weight than its section heading, not just smaller — section
  headings are `font-semibold`, so card titles use `font-medium`.

## Case study image pattern
- Real images live in `assets/work/<slug>/` (not `public/`) and get
  static-imported so Next.js infers width/height. Wire them via
  `MediaSpec.src` (StaticImageData) + `alt`; `caption` is just the
  fallback label shown when there's no `src`. Same static-import
  convention applies to non-work real images too — the About bio photo
  is `assets/about/profile.jpg`. `public/` is reserved for files linked
  to directly rather than rendered via `next/image` (currently just the
  resume PDF) — don't put case-study or bio images there.
- Case study **preview cards** (`components/work/work-card.tsx`, on the
  home listing and the "next case study" footer) are deliberately NOT
  wired through `Lightbox` — the whole card is one clickable unit (the
  "Read case study" link stretched over the card via a CSS
  `after:absolute after:inset-0` pseudo-element), and a second
  independently-interactive lightbox trigger inside it would be an a11y
  regression (two focus stops, confusing tab order). Card thumbnails are
  a plain `next/image`/`MediaPlaceholder`, not `Lightbox`. This rule is
  scoped to preview cards only — images inside the actual case study
  page still go through `Lightbox` as below.
- Every case study image *on a case study page* — real or placeholder —
  renders through the shared `Lightbox` component
  (`components/shared/lightbox.tsx`), which wraps `next/image` or falls
  back to `MediaPlaceholder`. Don't drop in a plain `<img>` or a
  standalone `next/image`; going through `Lightbox` is what gives every
  image the same frame styling and click-to-expand for free.
- Images within one section/block (hero, textMedia, featureMedia,
  frameStrip, modeCards) are grouped into a `LightboxGallery`
  (`components/shared/lightbox-gallery.tsx`), so opening any one of them
  shows Prev/Next arrows (and ArrowLeft/ArrowRight) to step through just
  that section's images — clamped at the ends, not wraparound. Each
  `Lightbox` needs a `galleryIndex` prop for this to work; order images
  in the sensible reading order for that block (e.g. modeCards flattens
  to light-desktop → light-mobile → dark-desktop → dark-mobile).
  `Lightbox` still works standalone (self-contained single-image dialog)
  if used outside a `LightboxGallery`.
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
  them into `assets/work/<slug>/` (or `assets/about/` for non-work
  images, or `public/` for direct-link files like the resume) and only
  that in-repo copy ever gets imported/committed; nothing in the site or
  git history points back to my desktop.
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
     else (headline, overview, results) is still placeholder. Its
     preview card is deliberately in a non-clickable "coming soon"
     state (`WorkPreview.comingSoon`) — status badge, no href, no
     hover/cursor affordance, "Case study coming soon" instead of a
     link — until the write-up is ready.
   - About > career timeline: data is real and complete, but the
     section is currently hidden pending a layout redesign (see Design
     direction above).
   - About > bio: real content complete — headline, copy, and a real
     headshot photo (`assets/about/profile.jpg`).
   - Fun stats section was removed entirely (was placeholder numbers
     borrowed from a reference site) — not part of the site anymore.
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
- Turbopack cache bug (bit us twice): after an edit to `app/globals.css`
  that *only* changes a `:root` custom-property value (no new class
  names, no structural CSS), the running dev server can keep serving
  stale compiled CSS from before the edit — surviving even a plain
  restart. If colors look wrong after a CSS-variable-only edit, stop
  the dev server, delete the `.next` folder, and restart clean before
  assuming anything else is broken.
- Case study page section dividers (`border-t` between sections) were
  removed as an exploratory "let's see how it looks" pass — not a
  final decision either way. Don't treat their absence as settled, but
  also don't re-add them without asking.
- I can see and click the running site myself. Don't burn tokens re-fetching
  pages, parsing rendered HTML, or measuring things to confirm what I can
  eyeball in five seconds — cosmetic CSS values, whether a button is there.
  Only verify what I actually can't check myself: type errors, data wiring,
  computed values (byte-weight math, etc.), anything that could be silently
  wrong without a visible symptom.