# Vue 個人作品集 — 專案筆記

## 對話摘要

### 第一次嘗試（已放棄）
- 一次把所有頁面與組件全部建完
- 展示出來的結果不符合預期，全部砍掉重來

### 第二次（目前進行中）
- 方針：一個介面一個介面慢慢做，每頁確認後再繼續
- 設計圖重新分析，以新版 Figma 截圖為準

---

## 專案需求（來自作業需求圖）

### 基本需求
1. Vue Router 建立 4 個頁面
   - `/` 首頁
   - `/skills` 技能頁
   - `/projects` 作品列表頁
   - `/projects/:id` 作品詳細頁
2. 建立並使用多個組件，每個頁面用組件呈現內容
3. 使用 **props** 將資料傳遞給組件
4. 使用 **emits** 讓下層組件通知上層，並在畫面呈現結果
5. 點擊作品卡片的「查看作品」→ 以路徑參數 id 顯示對應作品內容
6. 資料直接寫在 Vue 檔中，不需串接 API
7. 畫面樣式自行設計，重點在功能與組件應用

### 挑戰項目（加分）
- 使用 v-for 渲染技能與作品資料
- 點擊作品卡片可加入「收藏」，畫面顯示已收藏數量（透過 emits）
- 作品詳細頁顯示更多資訊（說明、圖片、技術、連結等）
- 加入簡單動畫或美化效果

### 重要限制
- `ProjectCard.vue` **不可直接使用 RouterLink** 跳轉作品詳細頁
- **必須使用 emits** 將作品 id 傳給上層（ProjectsView），由上層負責 `router.push`

---

## 設計規格

### 視覺風格
- 品牌名稱：**Stellaris's Web**
- 背景：溫暖米色
- 主色：深棕色（文字、按鈕、active 狀態）
- 樣式工具：**Tailwind CSS v4**（已安裝）

### 頁面設計（對照設計截圖）

| 頁面 | 佈局重點 |
|---|---|
| 首頁 | 左：個人簡介文字；右：個人照片 |
| 技能頁 | 「我的技能」標題 + SkillCard 網格 |
| 作品集 | 輪播（3 張可見）+ 左右箭頭 + 底部圓點分頁 |
| 作品詳情 | 回到列表連結、標題、大圖、敘述、右下浮動連結卡片 |

### NavBar
- 左側：`Stellaris's Web` Logo
- 右側：首頁 | 專業技能 | 作品集 | 人形圖示

---

## 組件清單

```
src/
├── components/
│   ├── NavBar.vue          # 左 Logo + 右導覽連結
│   ├── ProfileCard.vue     # props: name, title, intro, image
│   ├── SkillCard.vue       # props: name, level, iconClass
│   └── ProjectCard.vue     # props: project；emit: view-detail, toggle-favorite
├── views/
│   ├── HomeView.vue
│   ├── SkillsView.vue
│   ├── ProjectsView.vue
│   └── ProjectDetailView.vue
├── data/
│   ├── skills.js
│   └── projects.js
├── router/
│   └── index.js
├── assets/
│   └── Css/main.css
├── App.vue
└── main.js
```

### emits 流程（指定要求）
```
ProjectCard.vue           ProjectsView.vue         ProjectDetailView.vue
（下層組件）                （上層組件）                （詳細頁）
  點擊「查看作品」
       ↓
  emit('view-detail', id)
       ↓
                    接收 id
                    router.push(`/projects/${id}`)
                                                      useRoute().params.id
                                                      顯示對應作品內容
```

---

## 實作進度

- [x] 基礎設定（index.html、main.css、router）
- [x] NavBar.vue
- [x] HomeView.vue + ProfileCard.vue
- [x] SkillsView.vue + SkillCard.vue
- [x] ProjectsView.vue + ProjectCard.vue（含 emits）
- [x] ProjectDetailView.vue（route.params.id）
- [x] 城市旅遊網站部署至 GitHub Pages

---

## 問題記錄（踩過的坑）

### 1. Tailwind utilities 被 CSS reset 覆蓋
**現象：** `py-16`、`px-10` 等 padding 類別完全沒有效果，NavBar 和內容之間沒有空隙。

**根本原因：** Tailwind v4 的 utility class 在 `@layer utilities` 裡，而自訂的 reset `* { padding: 0 }` 是**無 layer 的普通 CSS**。CSS Cascade 規則：unlayered CSS > `@layer utilities`，導致 reset 覆蓋所有 Tailwind padding。

**解法：** 把 reset 包進 `@layer base`，確保 utilities 的優先度高於它：
```css
@layer base {
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
}
```

---

### 2. NavBar 和內容之間沒有空隙（`sticky` 誤用）
**現象：** 即使在 ProfileCard 加了 `pt-32`，內容仍然緊貼 NavBar。

**根本原因：**
- `pt-32` 加在組件內部，但「頁面與 NavBar 的距離」應該由 View 層管理，不是組件的責任
- NavBar 使用 `sticky` 而非 `fixed`，`sticky` 仍佔據頁面流，不需要特別的 offset

**解法：**
1. 把間距加在 HomeView 的 `<main>` 上（`py-16`），而非組件內部
2. 移除組件裡多餘的 `pt-32`

**原則：** 組件不應知道自己上方有什麼，padding/margin 由頁面層管理。

---

### 3. `sticky` vs `fixed` 的行為差異
| | `sticky` | `fixed` |
|---|---|---|
| 佔據頁面流 | ✅ 是 | ❌ 否 |
| 是否需要內容 offset | ❌ 不需要 | ✅ 需要（加 `pt-[navbar高度]`） |
| 捲動時 | 黏住頂端 | 永遠固定在視窗 |

---

### 4. GitHub Pages + Vue Router history 模式 → 404
**現象：** 部署到 GitHub Pages 後，直接開啟某個路由（如 `/cities`）會出現 404。

**根本原因：** GitHub Pages 只服務靜態檔案，`createWebHistory` 需要伺服器端支援 SPA routing，GitHub Pages 沒有這個功能。

**解法：** 改用 Hash 模式：
```js
// router/index.js
import { createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
})
```
網址會變成 `https://帳號.github.io/repo/#/path`，但功能完全正常。

---

### 5. Vue 專案部署到 GitHub Pages 前必須設定 `base`
**現象：** 部署後頁面空白，CSS/JS 資源全部 404。

**根本原因：** Vite 預設 `base: '/'`，但 GitHub Pages 的路徑是 `/repo名稱/`，資源路徑對不上。

**解法：** 在 `vite.config.js` 加上 base：
```js
export default defineConfig({
  base: '/你的repo名稱/',
  ...
})
```

---

### 6. 圖片管理：import 一張一行太冗長
**現象：** 每加一張圖就要在最上方多一行 `import`，10 個作品就有 10 行。

**解法 A（簡單）：** 放在 `public/images/`，直接用字串路徑，不需要 import：
```js
image: '/images/project-name.png'
```

**解法 B（進階）：** 放在 `src/assets/`，用 `import.meta.glob` 批次匯入：
```js
const images = import.meta.glob('@/assets/Img/projects/*.png', { eager: true })
```

---

### 7. gh-pages 套件的資訊安全注意事項
**套件本身低風險**，只負責把 `dist/` 推送到 GitHub 的 `gh-pages` 分支，不會存取其他資料。

**真正要注意的是 build 出來的內容：**

| 風險 | 說明 |
|---|---|
| API Key 外洩 | `.env` 裡的 key 若被寫進程式碼，build 後會直接暴露在 JS 裡 |
| 個人資訊 | 寫死在程式碼裡的信箱、電話等都會變成公開內容 |
| 私有檔案 | `public/` 資料夾的所有東西都會原封不動被部署 |

**API Key 的正確做法：**
```bash
# .env（確認有加進 .gitignore，不要 commit）
VITE_API_KEY=你的key
```
```js
// 程式碼裡用 import.meta.env 讀取
const apiKey = import.meta.env.VITE_API_KEY
```
注意：即使如此，Vite build 後 key 仍會出現在打包的 JS 裡，前端串接 API 本來就不適合放機密 key，機密操作應透過後端代理。

---

### 8. Tailwind 任意值 vs 標準 class
**原則：** 能用標準 class 就用，任意值保留給 Tailwind 沒有對應數值的情況。

| 任意值 | 標準 class | 換算 |
|---|---|---|
| `mt-[72px]` | `mt-18` | 18 × 4 = 72px |
| `max-w-[1180px]` | `max-w-295` | 295 × 4 = 1180px |
| `h-[380px]` | `h-95` | 95 × 4 = 380px |
| `rounded-[6px]` | `rounded-md` | 預設 6px |
| `rounded-[16px]` | `rounded-2xl` | 預設 16px |
| `leading-[2]` | `leading-loose` | 預設 2 |
| `pt-[34px]` | `pt-8.5` | 8.5 × 4 = 34px |
