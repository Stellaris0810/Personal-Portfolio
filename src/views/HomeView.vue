<script setup>
import { useRouter } from 'vue-router'
import ProfileCard from '@/components/ProfileCard.vue'
import ProjectCarousel from '@/components/ProjectCarousel.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import BaseButton from '@/components/BaseButton.vue'
import { projects } from '@/data/projects.js'
import { skills } from '@/data/skills.js'
import myPhoto from '@/assets/Img/myPhoto.png'

const router = useRouter()

const intro = '我的名字是黃偉綸，畢業於亞洲大學資工系，目前是前端設計學習者，對待前端就如同其他我所熱愛的事物一樣，持續精進自己的能力，並且將所學投入到實務當中。透過了解網站背景及使用者的需求，設計出合理且吸引人的UI/UX介面，將設計與Vue.js還有JavaScript精準融合，創造出生動且有趣的網站。'

// 首頁只輪播標記為 featured 的精選作品
const featured = projects.filter(p => p.featured)

// 技能速覽只取有 Devicon 圖示的項目
const skillPreview = skills.filter(s => s.iconClass)
</script>

<template>
  <div class="w-full py-12">

    <!-- ── Hero + 個人簡介 ─────────────────────────── -->
    <ProfileCard
      name="黃偉綸"
      title="前端設計學習者"
      welcomeText="歡迎來到我的網站"
      :intro="intro"
      :image="myPhoto"
    />

    <!-- ── 精選作品 ────────────────────────────────── -->
    <section class="max-w-295 mx-auto px-5 md:px-10 mt-20 md:mt-28">
      <SectionHeading v-reveal overline="Selected Works" title="精選作品" />

      <div v-reveal="120" class="mt-10 md:mt-14">
        <ProjectCarousel :projects="featured" />
      </div>

      <div class="flex justify-center mt-10">
        <BaseButton variant="outlined" arrow @click="router.push('/projects')">
          查看所有作品
        </BaseButton>
      </div>
    </section>

    <!-- ── 技能速覽 ────────────────────────────────── -->
    <section class="max-w-295 mx-auto px-5 md:px-10 mt-20 md:mt-28">
      <SectionHeading v-reveal overline="Skills" title="技能速覽" />

      <div v-reveal="100" class="flex flex-wrap justify-center gap-x-10 gap-y-8 mt-10 md:mt-14">
        <RouterLink
          v-for="skill in skillPreview"
          :key="skill.name"
          to="/skills"
          class="group flex flex-col items-center gap-2.5 no-underline"
        >
          <i
            :class="skill.iconClass"
            class="text-[42px] text-neutral/60 transition-colors duration-300 group-hover:text-primary"
          ></i>
          <span class="font-manrope text-xs tracking-[0.08em] text-neutral/50
                       transition-colors duration-300 group-hover:text-primary">
            {{ skill.name }}
          </span>
        </RouterLink>
      </div>
    </section>

    <!-- ── 聯絡 CTA ────────────────────────────────── -->
    <section class="max-w-295 mx-auto px-5 md:px-10 mt-20 md:mt-28 mb-8">
      <div v-reveal class="text-center py-14 md:py-20 border-y border-nav-border/40">
        <span class="block text-xs tracking-[0.4em] uppercase text-primary/70
                     font-semibold font-manrope mb-4">// Contact</span>

        <h2 class="font-hanken font-bold text-2xl md:text-3xl text-neutral mb-4">
          想與我聊聊或合作嗎？
        </h2>

        <p class="font-manrope font-light text-[15px] leading-loose text-neutral/70 mb-10">
          歡迎透過 Email 與我聯繫，或到 GitHub 看看我的程式碼。
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <BaseButton
            href="mailto:a10427362@gmail.com"
            arrow
            class="w-full sm:w-auto min-w-45"
          >與我聯絡</BaseButton>
          <BaseButton
            href="https://github.com/stellaris0810"
            target="_blank"
            rel="noopener"
            variant="inverted"
            class="w-full sm:w-auto min-w-45"
          >GitHub</BaseButton>
        </div>
      </div>
    </section>

  </div>
</template>
