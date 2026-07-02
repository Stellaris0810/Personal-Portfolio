// category：技能頁分組顯示（核心前端 / 開發工具 / 設計工具）
export const skills = [
  { name: 'HTML5',        iconClass: 'devicon-html5-plain',        level: 5, category: '核心前端' },
  { name: 'CSS',          iconClass: 'devicon-css3-plain',         level: 4, category: '核心前端' },
  { name: 'JavaScript',   iconClass: 'devicon-javascript-plain',   level: 4, category: '核心前端' },
  { name: 'Vue.js',       iconClass: 'devicon-vuejs-plain',        level: 4, category: '核心前端' },
  { name: 'Git',          iconClass: 'devicon-git-plain',          level: 3, category: '開發工具' },
  { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-plain',  level: 4, category: '核心前端' },
  {
    name: 'RWD',
    iconClass: null,
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="6" width="14" height="11" rx="2"/>
                <path d="M16 10h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/>
                <path d="M7 19v2"/><path d="M5 21h4"/>
              </svg>`,
    level: 4,
    category: '核心前端',
  },
  { name: 'GitHub',       iconClass: 'devicon-github-original',    level: 4, category: '開發工具' },
  { name: 'Node.js',      iconClass: 'devicon-nodejs-plain',       level: 3, category: '開發工具' },
  { name: 'Photoshop',    iconClass: 'devicon-photoshop-plain',    level: 4, category: '設計工具' },
  { name: 'Illustrator',  iconClass: 'devicon-illustrator-plain',  level: 3, category: '設計工具' },
  { name: 'Figma',        iconClass: 'devicon-figma-plain',        level: 4, category: '設計工具' },
  {
    name: 'ComfyUI',
    iconClass: null,
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="6" cy="6" r="2.5"/>
                <circle cx="18" cy="6" r="2.5"/>
                <circle cx="12" cy="18" r="2.5"/>
                <path d="M8.5 6h7"/>
                <path d="M7.1 8.1 10.9 15.8"/>
                <path d="M16.9 8.1 13.1 15.8"/>
              </svg>`,
    level: 3,
    category: '設計工具',
  },
]
