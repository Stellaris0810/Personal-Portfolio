<script setup>
import NavBar from '@/components/NavBar.vue'
import SkillCard from '@/components/SkillCard.vue'
import { skills } from '@/data/skills.js'
</script>

<template>
  <div class="min-h-screen bg-bg">
    <NavBar />

    <main class="max-w-295 mx-auto px-10 pt-16 pb-24">

      <!-- 頁面標題 -->
      <h1 class="font-hanken font-bold text-[40px] text-neutral tracking-[0.01em]">
        我的技能
      </h1>

      <!-- 技能卡片格線 -->
      <div class="grid grid-cols-4 gap-6 mt-18">
        <SkillCard
          v-for="skill in skills"
          :key="skill.name"
          :name="skill.name"
          :level="skill.level"
          :iconClass="skill.iconClass"
          :iconSvg="skill.iconSvg"
        />
      </div>

    </main>
  </div>
</template>
