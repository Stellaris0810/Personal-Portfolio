<script setup>
import { computed } from 'vue'
import SkillCard from '@/components/SkillCard.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { skills } from '@/data/skills.js'

// 依 category 分組，維持資料檔中的出現順序
const groups = computed(() => {
  const order = []
  const map = {}
  for (const skill of skills) {
    if (!map[skill.category]) {
      map[skill.category] = []
      order.push(skill.category)
    }
    map[skill.category].push(skill)
  }
  return order.map(name => ({ name, items: map[name] }))
})

// 各分組的英文眉標
const overlines = {
  '核心前端': 'Core Frontend',
  '開發工具': 'Dev Tools',
  '設計工具': 'Design Tools',
}
</script>

<template>
  <div class="max-w-295 mx-auto px-5 md:px-10 pt-16 pb-24">

    <!-- 頁面標題 -->
    <h1 v-reveal class="font-hanken font-bold text-3xl md:text-[40px] text-neutral tracking-[0.01em]">
      我的技能
    </h1>

    <!-- 技能分組 -->
    <section
      v-for="group in groups"
      :key="group.name"
      class="mt-12 md:mt-16"
    >
      <SectionHeading v-reveal :overline="overlines[group.name]" :title="group.name" />

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 md:mt-10">
        <SkillCard
          v-for="(skill, i) in group.items"
          :key="skill.name"
          v-reveal="(i % 4) * 80"
          :name="skill.name"
          :level="skill.level"
          :iconSrc="skill.iconSrc"
        />
      </div>
    </section>

  </div>
</template>
