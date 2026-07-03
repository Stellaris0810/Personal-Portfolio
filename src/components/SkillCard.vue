<script setup>
const props = defineProps({
  name:    String,
  level:   Number,  // 支援半顆星，如 4.5
  iconSrc: String,  // public/icons/ 下的圖檔路徑
})

// 第 i 顆星的填色比例：4.5 → 前 4 顆 100%、第 5 顆 50%
function starFill(i) {
  return `${Math.min(Math.max((props.level - i + 1) * 100, 0), 100)}%`
}
</script>

<template>
  <div class="skill-card bg-white border border-[rgba(179,169,165,0.4)] rounded
              flex flex-col items-center gap-4 pt-8.5 pb-5.5
              transition-all duration-300 cursor-default">

    <!-- 技能圖示 -->
    <img :src="iconSrc" :alt="name" loading="lazy"
         class="w-14 h-14 object-contain block" />

    <!-- 技能名稱 -->
    <span class="font-manrope text-lg font-medium text-neutral">{{ name }}</span>

    <!-- 熟練度星星：灰星為底，棕星依比例裁切覆蓋（支援半顆星） -->
    <div class="flex gap-1" :aria-label="`熟練度 ${level} / 5`">
      <span v-for="i in 5" :key="i" class="relative text-sm text-[#C0A79D]">
        ★
        <span
          class="absolute inset-y-0 left-0 overflow-hidden text-primary"
          :style="{ width: starFill(i) }"
        >★</span>
      </span>
    </div>

  </div>
</template>

<style scoped>
.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(93, 64, 55, 0.08);
}
</style>
