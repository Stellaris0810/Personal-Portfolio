<script setup>
defineProps({
  name:      String,
  level:     Number,
  iconClass: String,
  iconSvg:   String,
})
</script>

<template>
  <div class="skill-card bg-white border border-[rgba(179,169,165,0.4)] rounded
              flex flex-col items-center gap-4 pt-8.5 pb-5.5
              transition-all duration-300 cursor-default">

    <!-- Devicon 圖示 -->
    <i v-if="iconClass" :class="[iconClass, 'text-[56px] text-neutral block']"></i>
    <!-- 自訂 SVG 圖示（無 Devicon 的技能，如 RWD） -->
    <span v-else-if="iconSvg" class="text-neutral" v-html="iconSvg"></span>

    <!-- 技能名稱 -->
    <span class="font-manrope text-lg font-medium text-neutral">{{ name }}</span>

    <!-- 熟練度星星 -->
    <div class="flex" style="letter-spacing: 4px;">
      <span
        v-for="i in 5"
        :key="i"
        class="text-sm"
        :class="i <= level ? 'text-primary' : 'text-[#C0A79D]'"
      >★</span>
    </div>

  </div>
</template>

<style scoped>
.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(93, 64, 55, 0.08);
}
</style>
