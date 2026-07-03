<script setup>
// 全站統一的段落標題：英文眉標（// 前綴）+ 標題 + 分隔線
defineProps({
  overline: String,          // 英文眉標，自動加上 // 前綴，可省略
  title:    { type: String, required: true },
  divider:  { type: Boolean, default: true },  // 是否顯示分隔線
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

    <!-- 分隔線 -->
    <div v-if="divider" class="flex items-center mt-3.5" aria-hidden="true">
      <div class="flex-1 h-[1.5px] bg-neutral"></div>
    </div>
  </div>
</template>
