<script setup>
const props = defineProps({
  project:    Object,
  isFavorite: Boolean,
})

const emit = defineEmits(['view-detail', 'toggle-favorite'])
</script>

<template>
  <div class="proj-card flex flex-col bg-white border border-[rgba(179,169,165,0.4)]
              rounded-[10px] overflow-hidden transition-all duration-300
              shadow-[0_1px_2px_rgba(44,44,44,0.06)]">

    <!-- ── 封面縮圖 ───────────────────────────────── -->
    <div class="thumb relative flex items-center justify-center h-50 text-[#C0A79D]">

      <!-- 有圖片就顯示，否則顯示棋盤格佔位 -->
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="1.2"
        stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>

      <!-- 收藏按鈕 -->
      <button
        class="absolute top-3.5 right-3.5 w-[38px] h-[38px] rounded-full bg-white
               flex items-center justify-center transition-all duration-200
               shadow-[0_1px_2px_rgba(44,44,44,0.06)] cursor-pointer"
        :class="isFavorite ? 'text-[#c0392b]' : 'text-primary'"
        @click="emit('toggle-favorite', project.id)"
        aria-label="收藏"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
          :fill="isFavorite ? 'currentColor' : 'none'"
          stroke="currentColor" stroke-width="1.6"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06
                   a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78
                   1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>
    </div>

    <!-- ── 卡片內容 ───────────────────────────────── -->
    <div class="flex flex-col gap-2.5 p-5 flex-1">

      <!-- 技術標籤 -->
      <div class="flex gap-2 flex-wrap">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="inline-block px-[13px] py-1 rounded-full bg-secondary
                 text-primary text-[13px] font-semibold font-manrope"
        >{{ tag }}</span>
      </div>

      <!-- 標題 -->
      <h3 class="font-hanken font-bold text-[22px] text-neutral leading-tight">
        {{ project.title }}
      </h3>

      <!-- 摘要 -->
      <p class="text-sm text-neutral/60 leading-[1.7] flex-1 font-manrope">
        {{ project.summary }}
      </p>

      <!-- 查看作品按鈕 — 不可使用 RouterLink，改用 emit -->
      <button
        class="view-btn w-full border border-primary bg-primary text-white
               font-manrope font-semibold text-[13px] tracking-[0.06em]
               py-[11px] rounded-xs cursor-pointer mt-1.5
               transition-all duration-300"
        @click="emit('view-detail', project.id)"
      >
        查看作品
      </button>

    </div>
  </div>
</template>

<style scoped>
/* 縮圖棋盤格佔位背景 */
.thumb {
  background-color: #E0D8D5;
  background-image:
    linear-gradient(45deg, #F5F5F1 25%, transparent 25%),
    linear-gradient(-45deg, #F5F5F1 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #F5F5F1 75%),
    linear-gradient(-45deg, transparent 75%, #F5F5F1 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0;
}

/* Hover 浮起 */
.proj-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(93, 64, 55, 0.08);
}

/* 按鈕 Hover 反色 */
.view-btn:hover {
  background: transparent;
  color: #5D4037;
}
</style>
