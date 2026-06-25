<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()

// 手機漢堡選單開關
const menuOpen = ref(false)
// 換頁時自動收合選單
watch(() => route.path, () => { menuOpen.value = false })
</script>

<template>
  <nav class="sticky top-0 z-50 bg-nav-bg shadow-[0_1px_0_0_#B3A9A5]">
    <div class="w-full px-5 md:px-10 h-14 flex items-center justify-between">

      <!-- 左側 Logo -->
      <RouterLink to="/" class="font-playfair italic text-primary text-xl tracking-wide">
        Stellaris's Web
      </RouterLink>

      <!-- 右側導覽（桌機顯示） -->
      <div class="hidden md:flex items-center gap-8">
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
        <!-- <button class="text-neutral hover:text-primary transition-colors cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
        </button> -->
      </div>

      <!-- 漢堡按鈕（手機顯示） -->
      <button
        class="md:hidden text-neutral hover:text-primary transition-colors cursor-pointer p-1"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        aria-label="選單"
      >
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="1.6"
          stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="1.6"
          stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

    </div>

    <!-- 手機展開選單 -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-show="menuOpen" class="md:hidden bg-nav-bg border-t border-nav-border/30 px-5 pb-3">
        <RouterLink
          to="/"
          class="block py-3 text-sm text-neutral hover:text-primary transition-colors border-b border-nav-border/20"
          :class="route.path === '/' ? 'text-primary font-medium' : ''"
        >首頁</RouterLink>

        <RouterLink
          to="/skills"
          class="block py-3 text-sm text-neutral hover:text-primary transition-colors border-b border-nav-border/20"
          :class="route.path === '/skills' ? 'text-primary font-medium' : ''"
        >專業技能</RouterLink>

        <RouterLink
          to="/projects"
          class="block py-3 text-sm text-neutral hover:text-primary transition-colors"
          :class="route.path.startsWith('/projects') ? 'text-primary font-medium' : ''"
        >作品集</RouterLink>
      </div>
    </transition>
  </nav>
</template>
