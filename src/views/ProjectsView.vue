<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects.js'

const router = useRouter()

// ── 輪播狀態 ────────────────────────────────────────
const VISIBLE = 3
const start = ref(0)
const maxStart = computed(() => Math.max(0, projects.length - VISIBLE))
const shown = computed(() => projects.slice(start.value, start.value + VISIBLE))

function prev() { if (start.value > 0) start.value-- }
function next() { if (start.value < maxStart.value) start.value++ }

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

    <main class="max-w-295 mx-auto px-10 pt-16 pb-24">

      <!-- 頁面標題 -->
      <h1 class="font-hanken font-bold text-[40px] text-neutral tracking-[0.01em]">
        作品集
      </h1>

      <!-- ── 輪播區域 ──────────────────────────────── -->
      <div class="flex items-center gap-5 mt-16">

        <!-- 左箭頭 -->
        <button
          class="w-11 h-11 shrink-0 rounded-full flex items-center justify-center
                 bg-[rgba(215,204,200,0.5)] text-primary border-none cursor-pointer
                 transition-all duration-200 hover:bg-secondary
                 disabled:opacity-30 disabled:cursor-not-allowed"
          :disabled="start === 0"
          @click="prev"
          aria-label="上一組"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <!-- 卡片軌道 -->
        <div class="grid grid-cols-3 gap-8 flex-1">
          <ProjectCard
            v-for="project in shown"
            :key="project.id"
            :project="project"
            :isFavorite="favorites.includes(project.id)"
            @view-detail="handleViewDetail"
            @toggle-favorite="handleToggleFavorite"
          />
        </div>

        <!-- 右箭頭 -->
        <button
          class="w-11 h-11 shrink-0 rounded-full flex items-center justify-center
                 bg-[rgba(215,204,200,0.5)] text-primary border-none cursor-pointer
                 transition-all duration-200 hover:bg-secondary
                 disabled:opacity-30 disabled:cursor-not-allowed"
          :disabled="start === maxStart"
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
          v-for="i in maxStart + 1"
          :key="i"
          class="w-2.25 h-2.25 rounded-full border-none cursor-pointer
                 transition-colors duration-200"
          :class="i - 1 === start ? 'bg-primary' : 'bg-[#C0A79D]'"
          @click="start = i - 1"
          :aria-label="`第 ${i} 頁`"
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
