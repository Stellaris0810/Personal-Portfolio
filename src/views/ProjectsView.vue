<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects.js'
import { useFavoritesStore } from '@/stores/favorites.js'

const router = useRouter()
const favorites = useFavoritesStore()

// ── 標籤篩選 ────────────────────────────────────────
const ALL = '全部'
const activeTag = ref(ALL)

// 從所有作品彙整不重複的技術標籤
const tags = computed(() => [ALL, ...new Set(projects.flatMap(p => p.tags))])

const filtered = computed(() =>
  activeTag.value === ALL
    ? projects
    : projects.filter(p => p.tags.includes(activeTag.value)),
)
</script>

<template>
  <div class="max-w-295 mx-auto px-5 md:px-10 pt-16 pb-24">

    <!-- 頁面標題 -->
    <h1 v-reveal class="font-hanken font-bold text-3xl md:text-[40px] text-neutral tracking-[0.01em]">
      作品集
    </h1>

    <!-- ── 標籤篩選 chips ─────────────────────────── -->
    <div v-reveal="80" class="flex flex-wrap gap-2.5 mt-8 md:mt-10" role="group" aria-label="依技術篩選作品">
      <button
        v-for="tag in tags"
        :key="tag"
        class="px-4.5 py-1.75 rounded-full text-sm font-semibold font-manrope
               border cursor-pointer transition-all duration-200"
        :class="activeTag === tag
          ? 'bg-primary text-white border-primary'
          : 'bg-transparent text-primary border-nav-border/60 hover:bg-secondary/50'"
        :aria-pressed="activeTag === tag"
        @click="activeTag = tag"
      >{{ tag }}</button>
    </div>

    <!-- ── 作品格線 ──────────────────────────────── -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
      <ProjectCard
        v-for="(project, i) in filtered"
        :key="project.id"
        v-reveal="(i % 3) * 80"
        :project="project"
        :isFavorite="favorites.has(project.id)"
        @view-detail="router.push(`/projects/${$event}`)"
        @toggle-favorite="favorites.toggle($event)"
      />
    </div>

    <!-- 篩選後無結果（保險用，正常標籤都至少有一件作品） -->
    <p v-if="filtered.length === 0" class="mt-16 text-center text-neutral/60 font-manrope">
      沒有符合「{{ activeTag }}」的作品。
    </p>

    <!-- ── 收藏計數 ──────────────────────────────── -->
    <div v-if="favorites.ids.length > 0"
         class="flex items-center gap-2 mt-12 text-sm font-manrope text-primary font-medium">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
        fill="currentColor" stroke="currentColor" stroke-width="1.6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06
                 a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78
                 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
      已收藏：{{ favorites.ids.length }} 個
    </div>

  </div>
</template>
