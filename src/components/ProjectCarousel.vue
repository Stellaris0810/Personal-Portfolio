<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import ProjectCard from '@/components/ProjectCard.vue'
import { useFavoritesStore } from '@/stores/favorites.js'

const props = defineProps({
  projects: { type: Array, required: true },
})

const router = useRouter()
const favorites = useFavoritesStore()

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

const total = computed(() => props.projects.length)
// 前後各複製一份，左右兩份作為循環緩衝，中間那份是「真正」的位置
const slides = computed(() => [...props.projects, ...props.projects, ...props.projects])
const N = computed(() => slides.value.length)

const pos = ref(props.projects.length) // 從中間份的第一張開始
const animate = ref(true)              // 重置位置時暫時關閉過場動畫

// 軌道樣式：寬度依顯示張數撐開，translateX 依目前位置平移
const trackStyle = computed(() => ({
  width: `${(N.value / VISIBLE.value) * 100}%`,
  gridTemplateColumns: `repeat(${N.value}, minmax(0, 1fr))`,
  transform: `translateX(-${(pos.value * 100) / N.value}%)`,
  transition: animate.value ? 'transform 0.45s ease' : 'none',
}))

function prev() { pos.value-- }
function next() { pos.value++ }

// 目前對應的真實索引（給圓點高亮與跳轉用）
const activeIndex = computed(() => ((pos.value - total.value) % total.value + total.value) % total.value)
function goTo(i) { pos.value = total.value + i }

// 滑進左右緩衝份時，無動畫地拉回中間等值位置，達成無縫循環
function onTransitionEnd(e) {
  if (e.target !== e.currentTarget || e.propertyName !== 'transform') return
  if (pos.value < total.value || pos.value >= total.value * 2) {
    const idx = activeIndex.value
    animate.value = false
    pos.value = total.value + idx
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
</script>

<template>
  <div>
    <!-- ── 輪播區域 ──────────────────────────────── -->
    <div
      class="flex items-center gap-2.5 sm:gap-5"
      role="region"
      aria-roledescription="carousel"
      aria-label="作品輪播"
    >

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
              :isFavorite="favorites.has(project.id)"
              @view-detail="router.push(`/projects/${$event}`)"
              @toggle-favorite="favorites.toggle($event)"
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
  </div>
</template>
