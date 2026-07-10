const base = import.meta.env.BASE_URL

// category：技能頁分組顯示（核心前端 / 開發工具 / 設計工具）
// iconSrc：public/icons/ 下的自訂圖檔
export const skills = [
  { name: 'HTML5',        iconSrc: `${base}icons/html5.png`,       level: 5, category: '核心前端' },
  { name: 'CSS',          iconSrc: `${base}icons/css.png`,         level: 4, category: '核心前端' },
  { name: 'JavaScript',   iconSrc: `${base}icons/javascript.webp`, level: 4, category: '核心前端' },
  { name: 'Vue.js',       iconSrc: `${base}icons/vue.png`,         level: 4, category: '核心前端' },
  { name: 'Vue Router',   iconSrc: `${base}icons/vue-router.png`,  level: 4, category: '核心前端' },
  { name: 'Pinia',        iconSrc: `${base}icons/pinia.webp`,      level: 3, category: '核心前端' },
  { name: 'API',  iconSrc: `${base}icons/api.png`,         level: 4, category: '核心前端' },
  { name: 'Git',          iconSrc: `${base}icons/git.webp`,        level: 3, category: '開發工具' },
  { name: 'Tailwind CSS', iconSrc: `${base}icons/tailwind.webp`,   level: 4, category: '核心前端' },
  { name: 'RWD',          iconSrc: `${base}icons/rwd.png`,         level: 4, category: '核心前端' },
  { name: 'GitHub',       iconSrc: `${base}icons/github.png`,      level: 4, category: '開發工具' },
  { name: 'Node.js',      iconSrc: `${base}icons/node.webp`,       level: 3, category: '開發工具' },
  { name: 'npm',          iconSrc: `${base}icons/npm.png`,         level: 4, category: '開發工具' },
  { name: 'Vite',         iconSrc: `${base}icons/vite.webp`,       level: 3, category: '開發工具' },
  { name: 'VS Code',      iconSrc: `${base}icons/vscode.webp`,     level: 4.5, category: '開發工具' },
  { name: 'AI 輔助開發',   iconSrc: `${base}icons/ai.svg`,          level: 4, category: '開發工具' },
  { name: 'Photoshop',    iconSrc: `${base}icons/photoshop.png`,   level: 4, category: '設計工具' },
  { name: 'Illustrator',  iconSrc: `${base}icons/illustrator.png`, level: 3, category: '設計工具' },
  { name: 'Figma',        iconSrc: `${base}icons/figma.png`,       level: 4, category: '設計工具' },
  { name: 'ComfyUI',      iconSrc: `${base}icons/comfyui.png`,     level: 3, category: '設計工具' },
]
