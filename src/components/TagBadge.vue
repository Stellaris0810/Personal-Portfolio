<script setup>
// 技術標籤 chip：作品卡與詳細頁共用
defineProps({
  label: { type: String, required: true },
  size:  { type: String, default: 'sm' },  // sm＝卡片、md＝詳細頁
})
</script>

<template>
  <span
    class="inline-block rounded-full bg-secondary text-primary font-semibold font-manrope"
    :class="size === 'md' ? 'px-4.5 py-1.75 text-sm' : 'px-[13px] py-1 text-[13px]'"
  >{{ label }}</span>
</template>
