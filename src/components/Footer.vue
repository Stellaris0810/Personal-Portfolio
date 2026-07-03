<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-nav-bg border-t border-nav-border/40">
    <div class="max-w-295 mx-auto px-5 md:px-10 py-10
                flex flex-col md:flex-row items-center md:items-end
                justify-between gap-8 text-center md:text-left">

      <!-- 品牌 / 署名 -->
      <div v-reveal>
        <div class="font-playfair italic text-primary text-xl tracking-wide">
          Stellaris's Web
        </div>
        <!-- <p class="font-manrope text-sm text-neutral/60 mt-2">
          前端設計學習者 · 黃偉綸
        </p> -->
        <p class="font-manrope text-xs text-neutral/45 mt-3">
          © {{ year }} 黃偉綸. All rights reserved.
        </p>
      </div>

      <!-- 聯絡資訊 -->
      <div v-reveal="100" class="flex flex-col items-center md:items-end gap-3.5">
        <span class="font-manrope text-lg tracking-[0.2em] uppercase text-primary/70 font-semibold">
          聯絡我
        </span>

        <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">

          <!-- Email -->
          <a
            href="mailto:a10427362@gmail.com"
            class="flex items-center gap-2 text-sm text-neutral hover:text-primary
                   transition-colors font-manrope no-underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="1.6"
              stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-10 6L2 7"/>
            </svg>
            a10427362@gmail.com
          </a>

          <!-- 電話 -->
          <a
            href="tel:0916706040"
            class="flex items-center gap-2 text-sm text-neutral hover:text-primary
                   transition-colors font-manrope no-underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="1.6"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07
                       19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3
                       a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91
                       a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7
                       A2 2 0 0 1 22 16.92z"/>
            </svg>
            0916706040
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/stellaris0810"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 text-sm text-neutral hover:text-primary
                   transition-colors font-manrope no-underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.49
                       0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49
                       -.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85
                       .09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75
                       -.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 7.07
                       c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71
                       .64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.91
                       0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.26
                       C22 6.58 17.52 2 12 2z"/>
            </svg>
            GitHub
          </a>

        </div>
      </div>

    </div>
  </footer>
</template>
