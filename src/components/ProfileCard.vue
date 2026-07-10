<script setup>
import { useRouter } from 'vue-router'
import SectionHeading from '@/components/SectionHeading.vue'
import BaseButton from '@/components/BaseButton.vue'

defineProps({
  name: String,
  title: String,
  intro: String,
  image: String,
  welcomeText: String,
})

const router = useRouter()
</script>

<template>
  <div class="w-full px-5 md:px-16">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center py-6">
      <div v-reveal class="flex flex-col items-center md:items-end text-center md:text-left justify-center w-full order-2 md:order-1">
        <div>
          <span class="text-xs md:text-sm tracking-[0.4em] uppercase text-primary opacity-70 font-semibold font-manrope mb-4 md:mb-6 block">
          // {{ welcomeText }}
        </span>

        <h1 class="font-hanken font-bold text-neutral leading-[1.2] tracking-wide mb-6 md:mb-8 text-4xl sm:text-5xl lg:text-6xl">
          你好，我是<span class="text-primary font-extrabold block mt-2 lg:mt-3">{{ name }}</span>
        </h1>

        <div class="flex items-center justify-center md:justify-start gap-4 mb-10 md:mb-14">
          <div class="w-8 h-[1.5px] bg-primary opacity-40"></div>
          <p class="font-manrope text-base md:text-lg text-neutral opacity-60 font-medium tracking-[0.15em]">
            {{ title }}
          </p>
        </div>

        <BaseButton
          arrow
          class="w-full sm:w-auto min-w-45"
          @click="router.push('/skills')"
        >了解更多</BaseButton>
        </div>

      </div>

      <div v-reveal="120" class="flex justify-center md:justify-start w-full order-1 md:order-2">
        <div class="w-full max-w-95 lg:max-w-110 overflow-hidden rounded-xs bg-white p-3 border border-nav-border/40 shadow-md aspect-3/4 select-none">
          <img :src="image" :alt="name" fetchpriority="high"
          class="w-full h-full object-cover object-top filter saturate-[0.96] contrast-[1.01]" />
        </div>
      </div>
    </div>

    <div v-reveal class="max-w-240 mx-auto">
      <SectionHeading overline="Profile" title="個人簡介" />

      <div class="pt-4 mt-8">
        <p class="font-manrope font-light text-[15px] md:text-base leading-loose text-neutral opacity-80 tracking-wider text-start mx-auto max-w-240">
          {{ intro }}
        </p>
      </div>
    </div>

  </div>
</template>
