// Stellaris's Web — sample data (mirrors the brief's v-for skill/project lists)
window.STELLARIS_DATA = {
  skills: [
    { name: 'HTML5',      icon: 'devicon-html5-plain',      level: 5 },
    { name: 'CSS',        icon: 'devicon-css3-plain',       level: 5 },
    { name: 'JavaScript', icon: 'devicon-javascript-plain', level: 5 },
    { name: 'Vue.js',     icon: 'devicon-vuejs-plain',      level: 5 },
    { name: 'Git',        icon: 'devicon-git-plain',        level: 4 },
  ],
  projects: [
    {
      id: 'ms-clone', title: 'Microsoft 仿切', tags: ['CSS', 'HTML'],
      summary: '根據官方網站，透過 CSS 樣式跟 HTML 佈局，仿切出逼真的網站來。',
      desc: '這是一個以 Microsoft 官方網站為藍本的純前端仿切練習。透過細緻觀察原站的排版節奏、留白與字級層級，使用語意化的 HTML 結構搭配 CSS 佈局，逐一重建首頁的視覺區塊。過程中特別著重於響應式斷點的處理，讓畫面在桌機與手機上都能維持一致的閱讀體驗。',
      stack: ['HTML', 'CSS'],
    },
    {
      id: 'todo-vue', title: '待辦事項 App', tags: ['Vue.js', 'CSS'],
      summary: '以 Vue 3 Composition API 打造的待辦清單，含新增、完成與篩選功能。',
      desc: '一個練習 Vue 3 響應式資料流的待辦事項應用。使用 ref 與 computed 管理任務狀態，透過 v-for 渲染清單、v-model 雙向綁定輸入框，並以 emits 在組件間傳遞事件。資料持久化採用 localStorage，重新整理後仍保留清單內容。',
      stack: ['Vue.js', 'JavaScript', 'CSS'],
    },
    {
      id: 'weather', title: '天氣查詢介面', tags: ['Vue.js', 'API'],
      summary: '串接天氣 API，依城市即時顯示溫度、濕度與天氣狀態的小工具。',
      desc: '透過 fetch 串接公開天氣 API，依使用者輸入的城市名稱查詢即時天氣。介面以卡片呈現溫度、濕度、風速等資訊，並依天氣狀態切換對應的圖示與背景色調。著重在非同步資料處理與載入、錯誤狀態的使用者體驗設計。',
      stack: ['Vue.js', 'JavaScript', 'API'],
    },
    {
      id: 'landing', title: '品牌形象一頁式', tags: ['HTML', 'CSS'],
      summary: '為虛擬咖啡品牌設計的一頁式形象網站，強調暖色調與大圖排版。',
      desc: '為一個虛擬咖啡品牌打造的一頁式形象網站。以暖棕色系與大尺寸圖片營造沉穩的品牌氛圍，透過 scroll 進場動畫帶出各個段落。版面採用 CSS Grid 與 Flexbox 混合佈局，確保內容在不同裝置上都能優雅地重新排列。',
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
  ],
};
