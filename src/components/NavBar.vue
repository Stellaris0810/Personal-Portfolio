<script setup>
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <nav class="sticky top-0 z-50 bg-nav-bg shadow-[0_1px_0_0_#B3A9A5]">
    <div class="w-full px-10 h-14 flex items-center justify-between">

      <!-- 左側 Logo -->
      <RouterLink to="/" class="font-playfair italic text-primary text-xl tracking-wide">
        Stellaris's Web
      </RouterLink>

      <!-- 右側導覽 -->
      <div class="flex items-center gap-8">
        <RouterLink
          to="/"
          class="text-sm text-neutral hover:text-primary transition-colors pb-0.5"
          :class="route.path === '/' ? 'border-b border-neutral font-medium' : ''"
        >首頁</RouterLink>

        <RouterLink
          to="/skills"
          class="text-sm text-neutral hover:text-primary transition-colors pb-0.5"
          :class="route.path === '/skills' ? 'border-b border-neutral font-medium' : ''"
        >專業技能</RouterLink>

        <RouterLink
          to="/projects"
          class="text-sm text-neutral hover:text-primary transition-colors pb-0.5"
          :class="route.path.startsWith('/projects') ? 'border-b border-neutral font-medium' : ''"
        >作品集</RouterLink>

        <!-- 人形圖示 -->
        <button class="text-neutral hover:text-primary transition-colors cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
        </button>
      </div>

    </div>
  </nav>
</template>
