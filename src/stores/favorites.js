import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEY = 'portfolio-favorites'

// 讀取 localStorage 中已收藏的作品 id，資料損毀時退回空陣列
function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(raw) ? raw : []
  } catch {
    return []
  }
}

export const useFavoritesStore = defineStore('favorites', () => {
  const ids = ref(load())

  // 任何變動即寫回 localStorage，跨頁與重新整理都能保留
  watch(ids, (val) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }, { deep: true })

  function has(id) {
    return ids.value.includes(id)
  }

  function toggle(id) {
    const idx = ids.value.indexOf(id)
    if (idx === -1) ids.value.push(id)
    else ids.value.splice(idx, 1)
  }

  return { ids, has, toggle }
})
