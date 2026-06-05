# Stellaris's Web — Portfolio UI Kit

A high-fidelity, interactive recreation of **Stellaris's Web**, the 個人作品集網站 (personal portfolio) by 黃偉綸. Built as a React + Babel click-through prototype mirroring the production Vue 3 app's four routes.

## Run
Open `index.html`. No build step — React, Babel, Google Fonts, and Devicon all load from CDN.

## Interactions
- **Nav** (`首頁 / 專業技能 / 作品集`) switches between the four pages; the active link gets a black underline.
- **首頁 (Home):** hero with eyebrow, name, subtitle, primary CTA (arrow nudges right on hover), portrait frame, and the `個人簡介` block with the signature arrow rule. 「了解更多」 jumps to 作品集.
- **專業技能 (Skills):** responsive grid of skill cards — Devicon logo, name, 5-star rating.
- **作品集 (Projects):** 3-up carousel with ‹ › arrows + dot pagination. Each card has a ♥ favorite toggle (turns red, updates the 「已收藏：N 個」 counter) and a 「查看作品」 button that opens the detail page.
- **作品詳細 (Detail):** back link, big project shot placeholder, tech-stack badges, `專案敘述` body, and a floating GitHub / Demo link card.

## Files
| File | Role |
|---|---|
| `index.html` | Mounts everything, loads scripts in order. |
| `kit.css` | All component styles + design tokens (mirrors `colors_and_type.css`). |
| `data.js` | `window.STELLARIS_DATA` — sample skills + projects. |
| `Icons.jsx` | `Icon` (stroke SVGs) + `Stars` rating. |
| `Button.jsx` | `Button` (primary/secondary/inverted/outlined) + `TagBadge`. |
| `NavBar.jsx` | Sticky nav. |
| `HomePage.jsx` | Hero + profile. |
| `SkillsPage.jsx` | `SkillCard` + grid. |
| `ProjectsPage.jsx` | `ProjectCard` + carousel + favorites. |
| `ProjectDetailPage.jsx` | Detail layout + link card. |
| `App.jsx` | Route state + lifted favorites (the brief's emits flow). |

## Notes
- Project cover images and the detail hero are **placeholders** (line-art image icon on a tertiary fill) — the source project ships no project screenshots. Drop real images in to replace.
- Skill/tech glyphs come from **Devicon** exactly as the production app loads it.
- This is a cosmetic recreation: state is in-memory React, not the real Pinia/Vue Router app.
