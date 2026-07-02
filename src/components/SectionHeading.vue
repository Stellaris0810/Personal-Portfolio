<script setup>
// 全站統一的段落標題：英文眉標（// 前綴）+ 標題 + 箭頭分隔線（品牌簽名元素）
defineProps({
  overline: String,          // 英文眉標，自動加上 // 前綴，可省略
  title:    { type: String, required: true },
  arrow:    { type: Boolean, default: true },  // 是否顯示箭頭分隔線
})
</script>

<template>
  <div>
    <span
      v-if="overline"
      class="block text-xs tracking-[0.4em] uppercase text-primary/70
             font-semibold font-manrope mb-3"
    >// {{ overline }}</span>

    <h2 class="font-hanken font-bold text-[22px] md:text-2xl text-primary tracking-[0.12em]">
      {{ title }}
    </h2>

    <!-- 箭頭分隔線 -->
    <div v-if="arrow" class="flex items-center mt-3.5" aria-hidden="true">
      <div class="flex-1 h-[1.5px] bg-neutral"></div>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"
        class="-ml-1 text-neutral">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </div>
  </div>
</template>
