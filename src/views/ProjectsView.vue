<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects.js'

const router = useRouter()

// ── 輪播狀態（一次顯示張數依視窗寬度自適應）──────────
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1280)
function onResize() { windowWidth.value = window.innerWidth }
onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))

// 手機 1 張、平板 2 張、桌機 3 張
const VISIBLE = computed(() => {
  if (windowWidth.value < 640) return 1
  if (windowWidth.value < 1024) return 2
  return 3
})

const total = projects.length
// 前後各複製一份，左右兩份作為循環緩衝，中間那份是「真正」的位置
const slides = [...projects, ...projects, ...projects]
const N = slides.length

const pos = ref(total)    // 從中間份的第一張開始
const animate = ref(true) // 重置位置時暫時關閉過場動畫

// 軌道樣式：寬度依顯示張數撐開，translateX 依目前位置平移
const trackStyle = computed(() => ({
  width: `${(N / VISIBLE.value) * 100}%`,
  gridTemplateColumns: `repeat(${N}, minmax(0, 1fr))`,
  transform: `translateX(-${(pos.value * 100) / N}%)`,
  transition: animate.value ? 'transform 0.45s ease' : 'none',
}))

function prev() { pos.value-- }
function next() { pos.value++ }

// 目前對應的真實索引（給圓點高亮與跳轉用）
const activeIndex = computed(() => ((pos.value - total) % total + total) % total)
function goTo(i) { pos.value = total + i }

// 滑進左右緩衝份時，無動畫地拉回中間等值位置，達成無縫循環
function onTransitionEnd(e) {
  if (e.target !== e.currentTarget || e.propertyName !== 'transform') return
  if (pos.value < total || pos.value >= total * 2) {
    const idx = activeIndex.value
    animate.value = false
    pos.value = total + idx
    // 等兩個影格確定位置已套用，再恢復動畫
    requestAnimationFrame(() => requestAnimationFrame(() => { animate.value = true }))
  }
}

// ── 手機觸控滑動 ────────────────────────────────────
let touchStartX = 0
let touchStartY = 0
function onTouchStart(e) {
  touchStartX = e.changedTouches[0].clientX
  touchStartY = e.changedTouches[0].clientY
}
function onTouchEnd(e) {
  const dx = e.changedTouches[0].clientX - touchStartX
  const dy = e.changedTouches[0].clientY - touchStartY
  const THRESHOLD = 40
  // 只有水平位移明顯大於垂直時才視為滑動，避免干擾上下捲動
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > THRESHOLD) {
    if (dx < 0) next()
    else prev()
  }
}

// ── 收藏狀態（emits 接收）────────────────────────────
const favorites = ref([])

function handleToggleFavorite(id) {
  const idx = favorites.value.indexOf(id)
  if (idx === -1) favorites.value.push(id)
  else favorites.value.splice(idx, 1)
}

// ── 跳轉詳情（emits 接收）────────────────────────────
function handleViewDetail(id) {
  router.push(`/projects/${id}`)
}
</script>

<template>
  <div class="min-h-screen bg-bg">
    <NavBar />

    <main class="max-w-295 mx-auto px-5 md:px-10 pt-16 pb-24">

      <!-- 頁面標題 -->
      <h1 v-reveal class="font-hanken font-bold text-3xl md:text-[40px] text-neutral tracking-[0.01em]">
        作品集
      </h1>

      <!-- ── 輪播區域 ──────────────────────────────── -->
      <div v-reveal="120" class="flex items-center gap-2.5 sm:gap-5 mt-10 md:mt-16">

        <!-- 左箭頭（手機隱藏，改用手指滑動） -->
        <button
          class="w-11 h-11 shrink-0 rounded-full hidden sm:flex items-center justify-center
                 bg-[rgba(215,204,200,0.5)] text-primary border-none cursor-pointer
                 transition-all duration-200 hover:bg-secondary"
          @click="prev"
          aria-label="上一組"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <!-- 視窗（裁切溢出，手機可觸控滑動） -->
        <div
          class="flex-1 overflow-hidden touch-pan-y"
          @touchstart.passive="onTouchStart"
          @touchend.passive="onTouchEnd"
        >
          <!-- 完整卡片軌道：平移 + 過場動畫 -->
          <div
            class="grid"
            :style="trackStyle"
            @transitionend="onTransitionEnd"
          >
            <div
              v-for="(project, i) in slides"
              :key="i"
              class="px-2 sm:px-4"
            >
              <ProjectCard
                :project="project"
                :isFavorite="favorites.includes(project.id)"
                @view-detail="handleViewDetail"
                @toggle-favorite="handleToggleFavorite"
              />
            </div>
          </div>
        </div>

        <!-- 右箭頭（手機隱藏，改用手指滑動） -->
        <button
          class="w-11 h-11 shrink-0 rounded-full hidden sm:flex items-center justify-center
                 bg-[rgba(215,204,200,0.5)] text-primary border-none cursor-pointer
                 transition-all duration-200 hover:bg-secondary"
          @click="next"
          aria-label="下一組"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

      </div>

      <!-- ── 分頁圓點 ──────────────────────────────── -->
      <div class="flex justify-center gap-2.5 mt-10">
        <button
          v-for="i in total"
          :key="i"
          class="w-2.25 h-2.25 rounded-full border-none cursor-pointer
                 transition-colors duration-200"
          :class="i - 1 === activeIndex ? 'bg-primary' : 'bg-[#C0A79D]'"
          @click="goTo(i - 1)"
          :aria-label="`第 ${i} 張`"
        />
      </div>

      <!-- ── 收藏計數 ──────────────────────────────── -->
      <div v-if="favorites.length > 0"
           class="flex items-center gap-2 mt-8 text-sm font-manrope text-primary font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
          fill="currentColor" stroke="currentColor" stroke-width="1.6">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06
                   a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78
                   1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        已收藏：{{ favorites.length }} 個
      </div>

    </main>
  </div>
</template>
