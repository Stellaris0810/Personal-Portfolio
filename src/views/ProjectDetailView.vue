<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import { projects } from '@/data/projects.js'

const route  = useRoute()
const router = useRouter()

const project = computed(() => projects.find(p => p.id === route.params.id))
</script>

<template>
  <div class="min-h-screen bg-bg">
    <NavBar />

    <main class="max-w-295 mx-auto px-5 md:px-10 pt-16 pb-24">

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
          <span
            v-for="tag in project.stack"
            :key="tag"
            class="inline-block px-4.5 py-1.75 rounded-full bg-secondary text-primary text-sm font-semibold font-manrope">
            {{ tag }}
          </span>
        </div>

        <!-- ── 專案敘述標題 + 箭頭分隔線 ────────────────── -->
        <h2 class="font-hanken font-bold text-[22px] text-primary tracking-[0.12em]">
          專案敘述
        </h2>
        <div class="flex items-center mt-3.5 mb-0">
          <div class="flex-1 h-[1.5px] bg-neutral"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"
            class="-ml-1 text-neutral">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>

        <!-- ── 描述 + 連結卡片（手機單欄、桌機兩欄）──── -->
        <div v-reveal class="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 mt-8 md:mt-12 items-start">

          <!-- 左：詳細描述 -->
          <p class="font-manrope font-light text-base leading-loose
                    text-neutral/80 tracking-[0.02em] text-justify">
            {{ project.desc }}
          </p>

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

      </template>
    </main>
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
