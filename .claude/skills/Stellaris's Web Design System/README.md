# Stellaris's Web — Design System

A design system for **Stellaris's Web** (`Stellaris's Web`), a single-person **個人作品集網站** (personal portfolio website) built by 黃偉綸 (Huang Wei-Lun), a front-end design learner. The aesthetic is **modern-minimal with a Japanese warm-wood palette** — warm cream backgrounds, soft wood-brown ink, generous whitespace, and a near-square, editorial feel.

> Brand tagline / self-description: *「前端設計學習者」* — a front-end design learner who blends UI/UX design with Vue.js and JavaScript to craft lively, engaging websites.

---

## Sources

This system was reverse-engineered from the materials below. Paths/links are recorded so a reader with access can verify — do not assume access.

| Source | Location | Notes |
|---|---|---|
| Vue 3 codebase | `Personal Portfolio/` (local mount) | Vite + Vue 3 + Pinia + Vue Router + **Tailwind CSS 4**. Only `HomeView` is fully built; Skills / Projects / Detail views are placeholders, designed only in the screenshots below. |
| Design tokens | `Personal Portfolio/src/assets/Css/main.css` | Source of truth for colors + font families (mirrored into `colors_and_type.css`). |
| Built components | `src/components/NavBar.vue`, `src/components/ProfileCard.vue` | The only finished components — drove the nav + hero recreations. |
| Spec / brief | `Personal Portfolio/README.md`, `Personal Portfolio/NOTES.md` | Full 4-page UI/UX brief in Traditional Chinese; brand notes, component list, emits flow. |
| Design board | `uploads/image 1.png` → `assets/ref-designsystem.png` | Color swatches, type assignments (Hanken/Manrope), button + control specimens. |
| Page mockups | `uploads/{主頁-自我介紹,作品集,掌握技能,詳細頁面}.png` → `assets/ref-*.png` | Hi-fi Figma screenshots of all 4 pages — the design intent for the unbuilt views. |
| Personal photo | `src/assets/Img/myPhoto.jpg` → `assets/myPhoto.jpg` | Hero portrait. |

**Stack the brand ships on:** Vue 3 `<script setup>` + Tailwind CSS 4 (utility-first; CSS vars declared in an `@theme` block). Skill/tech logos come from **Devicon** (CDN).

---

## The Product

A 4-route single-page application:

| Route | Page | Purpose |
|---|---|---|
| `/` | 首頁 (Home) | Hero: eyebrow + 「你好，我是黃偉綸」 + 「前端設計學習者」 + 「了解更多」 CTA, portrait on the right, then a `Profile` intro block. |
| `/skills` | 我的技能 (Skills) | Grid of `SkillCard`s — Devicon logo, skill name, 5-star proficiency. |
| `/projects` | 作品集 (Projects) | Carousel of 3 visible `ProjectCard`s — cover thumb, tech tags, summary, ♥ favorite, 「查看作品」 button. Footer shows 「❤️ 已收藏：N 個」. |
| `/projects/:id` | 作品詳細 (Detail) | Back link, big project shot, tech-stack badges, description, floating GitHub/Demo link card. |

There is **one product** (the portfolio site) with **two surfaces worth a UI kit**: the marketing/portfolio pages (covered) — there is no separate app or dashboard.

---

## CONTENT FUNDAMENTALS

**Language.** Primary copy is **Traditional Chinese (zh-Hant)**, with English reserved for the brand wordmark, section overlines (`Profile`, `// 歡迎來到我的網站`), tech names (Vue.js, CSS, HTML, JavaScript, Git), and button micro-labels. Tech terms stay in Latin script inline with Chinese (e.g. 「將設計與Vue.js還有JavaScript精準融合」).

**Voice.** First-person, warm, earnest, a little aspirational — a learner introducing himself. Uses 「我」 (I) freely; addresses the reader implicitly rather than with a hard 「你」 sell. Example: *「對待前端就如同其他我所熱愛的事物一樣，持續精進自己的能力」*. Confident but humble — labels himself a 「學習者」 (learner), not an expert.

**Casing & punctuation.** English overlines are UPPERCASE with wide letter-spacing (`Profile`, button labels like 「了解更多」 paired with uppercase Latin meta). Chinese uses full-width punctuation (，。). A signature device: an eyebrow prefixed with `//` (code comment) — `// 歡迎來到我的網站` — nodding to the developer identity.

**Microcopy.** Action labels are short, verb-first Chinese: 「了解更多」「查看作品」「回到作品列表」. Tags are terse tech tokens: `CSS` `HTML` `Vue.js`. Status copy is friendly and concrete: 「❤️ 已收藏：2 個」「持續進步」. Section heads are single nouns or noun phrases: 「個人簡介」「我的技能」「作品集」「專案敘述」.

**Emoji.** Used **sparingly and purposefully** as status glyphs — primarily ❤️ for the favorites counter and 🔗/🌐 hinting at GitHub/Demo links (though those render as line icons in the final UI). Never decorative in headings or body.

**Vibe.** Quiet portfolio confidence. Editorial whitespace, an architect's restraint, the warmth of a wood-panelled studio. Not flashy, not corporate — personal and craft-forward.

---

## VISUAL FOUNDATIONS

**Palette.** Warm, low-saturation, wood-and-cream. Wood-brown **`#5D4037`** (primary) is the only saturated hue — it carries text emphasis, buttons, active states, links. Everything else is a warm neutral: page background **`#FCF9F8`** (cream), nav fill **`#ECE0DC`** (dusty rose-beige), card fills white or **`#F5F5F1`**, taupe **`#D7CCC8`** for tag chips, near-black **`#2C2C2C`** for body ink, **`#B3A9A5`** for hairlines. No blues, no purples, no gradients-as-decoration. Imagery skews warm — the portrait is slightly de-saturated (`saturate-0.96 contrast-1.01`) to sit calmly in the palette.

**Type.** Three families, clear roles. **Hanken Grotesk** (display) — page titles, the hero name (800), section heads, all set fairly tight with a touch of positive tracking. **Playfair Display Italic** (brand) — used *only* for the `Stellaris's Web` wordmark, lending an editorial signature. **Manrope** (body/UI) — paragraphs (light 300, line-height 2, justified, wide tracking), labels, buttons. Overlines are Manrope semibold, UPPERCASE, `0.4em` tracking.

**Spacing & layout.** Generous and airy — hero sections use 7rem+ vertical gaps. Max content width ~1152px (`max-w-6xl`), centered, with `px-10` page gutters. Two-column hero (text | portrait). Grids for skills/projects. Right-aligned nav links. A recurring **full-width horizontal rule with an arrowhead** terminator under section heads (見 個人簡介 / 專案敘述) is a signature motif.

**Backgrounds.** Flat warm cream — **no** gradients, textures, patterns, or full-bleed photography behind content. The nav is a flat beige bar with a single bottom hairline. Empty image areas are shown as a **checkerboard placeholder** (transparent-image convention) in mockups.

**Borders & dividers.** Thin and warm: `1px` `rgba(179,169,165,0.4)` hairlines around cards and image frames; `1px` solid `#B3A9A5` under the nav; `1px` black underline marks the active nav link and the big arrow rules. Square corners dominate — image frames and buttons use `rounded-xs` (2px). Cards are gently rounded (~10px); the floating detail-page link card is the roundest element (~16px).

**Corner radii.** Very square overall. Buttons + framed images = 2px. Inputs ≈ 6px. Cards ≈ 10px. Tag chips + the ♥ favorite button = full pill. Floating link card ≈ 16px.

**Cards.** White (or `#F5F5F1`) fill, hairline border, soft warm shadow (`0 6px 20px rgba(93,64,55,0.08)`). Project cards: cover thumb on top, a row of taupe tag chips, bold title, muted summary, then a full-width **primary brown button**. A circular white ♥ button floats top-right of the thumb. Skill cards: centered Devicon glyph, name, 5 brown stars.

**Buttons.** Four documented variants (見 design board): **Primary** (solid brown, white label), **Secondary** (taupe fill), **Inverted** (near-black fill), **Outlined** (brown border, transparent). Labels are uppercase Manrope, wide-tracked, often paired with a line arrow. Square `rounded-xs` corners.

**Hover states.** Buttons invert — solid primary fades its fill to transparent and swaps to brown text (`hover:bg-transparent hover:text-primary`), with the arrow icon sliding right `+6px`. Nav links shift from neutral ink to primary brown. Transitions are smooth (`transition-all duration-300`).

**Press states.** Buttons scale down subtly (`active:scale-[0.98]`) — a gentle tactile shrink, no color flash.

**Shadows / elevation.** Restrained and warm-tinted (brown-based rgba, never neutral grey). Three steps: `sm` (1–2px, cards at rest), `md` (20px blur, raised cards), `lg` (40px, floating elements). The nav uses a *hairline* shadow (`0 1px 0 0 #B3A9A5`) rather than a blur.

**Transparency & blur.** Minimal. Muted text uses alpha (`text-neutral/80`, `/60`); borders use alpha hairlines. No glassmorphism, no backdrop blur. The nav is `sticky` and fully opaque.

**Animation.** Subtle and functional only — color/transform transitions on hover (300ms ease), arrow nudge, button press shrink. No bounces, no looping decorative motion, no parallax. The projects carousel slides between sets of 3.

**Motion easing.** Standard ease (`cubic-bezier(0.4,0,0.2,1)`) at 150–300ms.

---

## ICONOGRAPHY

The brand uses **three icon sources**, all line/flat — never hand-drawn flourishes:

1. **Inline stroke SVGs** for UI affordances — drawn in the components with `stroke="currentColor"`, `stroke-width: 1.5–2.5`, round caps/joins, 24×24 viewBox. Examples: the **person** glyph in the nav (`circle` + arc), the **arrow** (`M5 12h14M12 5l7 7-7 7`) on CTAs, the **back arrow** and the **link / globe** icons on the detail page. This matches a **Lucide / Feather** stroke aesthetic (1.5–2px, rounded). In the UI kit these are reproduced as inline SVG; where a broader set is needed, **Lucide via CDN** is the closest match and is used as a documented substitute.
2. **Devicon** (`devicon.min.css` via jsDelivr CDN) for **technology logos** on skill cards — HTML5, CSS3, JavaScript, Vue.js, Git — rendered as their official brand marks. Loaded exactly as the production app loads it.
3. **Emoji**, used as status glyphs only — ❤️ in the favorites counter, and 🔗/🌐 as link hints in copy.

The **stars** on skill cards are filled star glyphs in primary brown (★), used as a 5-point rating scale.

No custom icon font ships with the project beyond Devicon. Logos/marks live in `assets/`. See `assets/README` notes inline below.

---

## VISUAL ASSETS

In `assets/`:
- `myPhoto.jpg` — hero portrait (the one real photo).
- `favicon.ico` — site favicon.
- `ref-home.png`, `ref-skills.png`, `ref-projects.png`, `ref-detail.png` — Figma page mockups (reference only).
- `ref-designsystem.png` — the design-board specimen sheet.

The wordmark **「Stellaris's Web」** is pure type (Playfair Display Italic, primary brown) — there is no logo image; recreate it with the font.

> **Font substitution note:** all three families (Hanken Grotesk, Playfair Display, Manrope) are **Google Fonts** and load from the Google Fonts CDN exactly as the production app does — no local TTFs were shipped, so none are bundled here. If you need them offline, download from Google Fonts. **Flag:** if the brand later moves to self-hosted or licensed variants, replace the `<link>` and drop the files in a `fonts/` folder.

---

## INDEX / MANIFEST

Root files:
- **`README.md`** — this file.
- **`colors_and_type.css`** — all color + type CSS variables (base + semantic) and tokens (radius, shadow, spacing, motion).
- **`SKILL.md`** — Agent Skill manifest for using this system in Claude Code.

Folders:
- **`assets/`** — photo, favicon, reference mockups.
- **`preview/`** — design-system specimen cards (rendered in the Design System tab).
- **`ui_kits/portfolio/`** — the Stellaris's Web UI kit: `index.html` (interactive 4-page click-through prototype) + JSX components (`NavBar`, `Button`, `ProfileHero`, `SkillCard`, `ProjectCard`, `TagBadge`, `ProjectDetail`, etc).

There is **one UI kit** (`portfolio`) and **no slide template** (none was provided), so no `slides/` folder.
