<script setup>
import { useRouter } from 'vue-router'

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
  <div class="w-full px-10 md:px-16">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center py-6">
      <div class="flex flex-col items-end text-left justify-center w-full">
        <div>
          <span class="text-xs md:text-sm tracking-[0.4em] uppercase text-primary opacity-70 font-semibold font-manrope mb-4 md:mb-6 block">
          {{ welcomeText }}
        </span>

        <h1 class="font-hanken font-bold text-neutral leading-[1.2] tracking-wide mb-6 md:mb-8 text-4xl sm:text-5xl lg:text-6xl">
          你好，我是<span class="text-primary font-extrabold block mt-2 lg:mt-3">{{ name }}</span>
        </h1>

        <div class="flex  items-center gap-4 mb-10 md:mb-14">
          <div class="w-8 h-[1.5px] bg-primary opacity-40"></div>
          <p class="font-manrope text-base md:text-lg text-neutral opacity-60 font-medium tracking-[0.15em]">
            {{ title }}
          </p>
        </div>

        <button @click="router.push('/skills')" 
        class="w-full sm:w-auto min-w-[180px] h-12 flex items-center justify-center gap-4 px-8 bg-primary text-white text-xs font-semibold font-manrope tracking-[0.2em] uppercase rounded-xs cursor-pointer border border-primary hover:bg-transparent hover:text-primary shadow-sm transition-all duration-300 transform active:scale-[0.98]">
          了解更多
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 arrow-icon">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
        </div>
        
      </div>

      <div class="flex justify-start  w-full">
        <div class="w-full max-w-[380px] lg:max-w-[440px] overflow-hidden rounded-xs bg-white p-3 border border-nav-border/40 shadow-md aspect-[3/4] select-none">
          <img :src="image" :alt="name" 
          class="w-full h-full object-cover object-top filter saturate-[0.96] contrast-[1.01]" />
        </div>
      </div>
    </div>

    <div>
      <h2 class="font-hanken text-xl md:text-2xl font-bold text-primary tracking-[0.12em] uppercase mb-6">
        個人簡介
      </h2>

      <div class="flex items-center my-8 px-4">
        <div class="flex-1 h-[1.5px] bg-neutral"></div>
      </div>

      <div class="pt-4">
        <p class="font-manrope font-light text-[15px] md:text-[16px] leading-[2] text-neutral opacity-80 tracking-wider text-start mx-auto max-w-[960px]">
          {{ intro }}
        </p>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* 讓按鈕的箭頭在 Hover 時產生位移效果 */
button:hover .arrow-icon {
  transform: translateX(6px);
}
</style>