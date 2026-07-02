<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SectionHeading from '@/components/SectionHeading.vue'
import TagBadge from '@/components/TagBadge.vue'
import { projects } from '@/data/projects.js'

const route  = useRoute()
const router = useRouter()

const project = computed(() => projects.find(p => p.id === route.params.id))

// ── 上一個 / 下一個作品（頭尾循環）──────────────────
const index = computed(() => projects.findIndex(p => p.id === route.params.id))
const prevProject = computed(() =>
  index.value === -1 ? null : projects[(index.value - 1 + projects.length) % projects.length])
const nextProject = computed(() =>
  index.value === -1 ? null : projects[(index.value + 1) % projects.length])
</script>

<template>
  <div class="max-w-295 mx-auto px-5 md:px-10 pt-16 pb-24">

    <!-- ── 返回按鈕 ──────────────────────────────── -->
    <button
      class="inline-flex items-center gap-2 mb-4.5 text-[15px] text-neutral
             font-manrope bg-transparent border-none cursor-pointer
             transition-colors duration-200 hover:text-primary"
      @click="router.push('/projects')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5M12 5l-7 7 7 7"/>
      </svg>
      回到作品列表
    </button>

    <!-- ── 找不到作品 ─────────────────────────────── -->
    <div v-if="!project" class="py-20 text-center text-neutral/60 font-manrope">
      找不到此作品。
    </div>

    <template v-else>

      <!-- ── 專案標題 ──────────────────────────────── -->
      <h1 class="font-hanken font-bold text-3xl md:text-[44px] text-primary leading-tight mb-7">
        {{ project.title }}
      </h1>

      <!-- ── 大圖區（有圖顯示圖片，否則棋盤格佔位）──── -->
      <div v-reveal class="w-full h-56 sm:h-72 md:h-95 rounded-md overflow-hidden">
        <img
          v-if="project.image"
          :src="project.image"
          :alt="project.title"
          decoding="async"
          class="w-full h-full object-cover"
        />
        <div v-else class="detail-hero w-full h-full flex items-center
                            justify-center text-[#C0A79D]">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="1.1"
            stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </div>
      </div>

      <!-- ── 技術標籤 ──────────────────────────────── -->
      <div class="flex gap-2.5 flex-wrap my-7">
        <TagBadge v-for="tag in project.stack" :key="tag" :label="tag" size="md" />
      </div>

      <!-- ── 專案敘述 ──────────────────────────────── -->
      <SectionHeading overline="About" title="專案敘述" />

      <!-- ── 描述 + 連結卡片（手機單欄、桌機兩欄）──── -->
      <div v-reveal class="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 mt-8 md:mt-12 items-start">

        <!-- 左：詳細描述 + 功能亮點 -->
        <div>
          <p class="font-manrope font-light text-base leading-loose
                    text-neutral/80 tracking-[0.02em] text-justify">
            {{ project.desc }}
          </p>

          <!-- 功能亮點 -->
          <template v-if="project.highlights?.length">
            <h3 class="font-hanken font-bold text-lg text-primary tracking-[0.12em] mt-10 mb-5">
              功能亮點
            </h3>
            <ul class="flex flex-col gap-3.5">
              <li
                v-for="item in project.highlights"
                :key="item"
                class="flex items-start gap-3 font-manrope font-light text-[15px]
                       leading-[1.9] text-neutral/80"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"
                  class="shrink-0 mt-1.5 text-primary">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                {{ item }}
              </li>
            </ul>
          </template>
        </div>

        <!-- 右：浮動連結卡片 -->
        <aside class="link-card rounded-2xl p-6 flex flex-col gap-3.5
                      bg-nav-bg shadow-[0_14px_40px_rgba(93,64,55,0.12)]">

          <span class="text-[13px] text-neutral/60 tracking-widest font-manrope">
            連結
          </span>

          <!-- GitHub -->
          <a
            :href="project.github"
            target="_blank"
            rel="noopener"
            class="gh-btn flex items-center justify-center gap-2.5
                   py-3.5 rounded-md text-sm font-semibold font-manrope
                   bg-neutral text-white border border-neutral
                   transition-all duration-200 cursor-pointer no-underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
            GitHub
          </a>

          <!-- Demo -->
          <a
            :href="project.demo"
            target="_blank"
            rel="noopener"
            class="demo-btn flex items-center justify-center gap-2.5
                   py-3.5 rounded-md text-sm font-semibold font-manrope
                   bg-transparent text-neutral border border-neutral/40
                   transition-all duration-200 cursor-pointer no-underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="1.6"
              stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10
                       15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            Demo
          </a>

        </aside>
      </div>

      <!-- ── 上一個 / 下一個作品 ─────────────────────── -->
      <nav
        v-if="prevProject && nextProject"
        class="grid grid-cols-2 gap-4 mt-16 md:mt-20 pt-8 border-t border-nav-border/40"
        aria-label="作品導覽"
      >
        <RouterLink
          :to="`/projects/${prevProject.id}`"
          class="group flex flex-col items-start gap-1.5 no-underline"
        >
          <span class="flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase
                       text-neutral/50 font-semibold font-manrope">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"
              class="transition-transform duration-300 group-hover:-translate-x-1">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            上一個作品
          </span>
          <span class="font-hanken font-bold text-neutral transition-colors duration-200
                       group-hover:text-primary">
            {{ prevProject.title }}
          </span>
        </RouterLink>

        <RouterLink
          :to="`/projects/${nextProject.id}`"
          class="group flex flex-col items-end text-right gap-1.5 no-underline"
        >
          <span class="flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase
                       text-neutral/50 font-semibold font-manrope">
            下一個作品
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"
              class="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
          <span class="font-hanken font-bold text-neutral transition-colors duration-200
                       group-hover:text-primary">
            {{ nextProject.title }}
          </span>
        </RouterLink>
      </nav>

    </template>
  </div>
</template>

<style scoped>
/* 大圖棋盤格佔位背景 */
.detail-hero {
  background-color: #E0D8D5;
  background-image:
    linear-gradient(45deg, #F5F5F1 25%, transparent 25%),
    linear-gradient(-45deg, #F5F5F1 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #F5F5F1 75%),
    linear-gradient(-45deg, transparent 75%, #F5F5F1 75%);
  background-size: 40px 40px;
  background-position: 0 0, 0 20px, 20px -20px, -20px 0;
}

.gh-btn:hover  { opacity: 0.82; }
.demo-btn:hover { background: #2C2C2C; color: #fff; border-color: #2C2C2C; }
</style>
