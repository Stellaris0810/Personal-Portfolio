# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (auto-opens browser)
npm run build     # Production build
npm run preview   # Preview production build
```

## Architecture

**Stack:** Vue 3 + Vite 8 + Pinia + Vue Router 5 + Tailwind CSS 4

**Entry flow:** `index.html` → `src/main.js` (mounts app, registers Pinia + Router) → `src/App.vue` (only `<RouterView>`) → views.

**Router:** `src/router/index.js` uses web history mode. All page routes map to components in `src/views/`.

**State:** Pinia stores live in `src/stores/` using Composition API style (`ref`, `computed` inside `defineStore`).

**Styling:** Tailwind CSS 4 (via `@tailwindcss/vite` plugin). All styling uses Tailwind utility classes. Global CSS variables and base resets live in `src/assets/Css/main.css` (imported in `main.js`). Avoid writing custom CSS — prefer Tailwind classes directly in templates. If a one-off style is truly needed, use `<style scoped>` in the component.

**Imports:** Use `@` alias for `src/` (e.g. `import '@/assets/Css/main.css'`).

## Directory Structure

```
src/
├── App.vue          # Root component — contains only <RouterView>
├── main.js          # App entry: creates app, registers Pinia + Router, mounts #app
├── assets/
│   └── Css/
│       └── main.css # Global CSS, imported in main.js
├── router/
│   └── index.js     # All route definitions
├── stores/          # Pinia stores (one file per domain)
│   └── counter.js
└── views/           # Page-level components mapped 1:1 to routes
    └── Test.vue
```

## Conventions

- All components use `<script setup>` (Composition API) — no Options API.
- Commit message format: `type:描述` (e.g. `fix:調整`, `feat:新增功能`). Descriptions may be in Traditional Chinese.
- Props defined with `defineProps()`, no TypeScript — this is a plain JS project.
- Use Tailwind utility classes for all styling — avoid writing custom CSS.
- `<style scoped>` is reserved for styles that cannot be expressed with Tailwind utilities.

**Pinia store naming:**
- File: camelCase noun matching the domain, e.g. `counter.js`
- Store ID: string matching the filename, e.g. `defineStore('counter', ...)`
- Export: `use` + PascalCase + `Store`, e.g. `useCounterStore`
- Use Composition API style inside `defineStore` (`ref`, `computed`, plain functions — no `state`/`getters`/`actions` object).
