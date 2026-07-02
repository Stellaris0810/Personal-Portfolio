<script setup>
// 設計系統定義的按鈕：primary / secondary / inverted / outlined 四種變體
// Hover 反色、箭頭右移、按下微縮，皆與設計板規格一致
defineProps({
  variant: { type: String, default: 'primary' },
  size:    { type: String, default: 'md' },     // md＝CTA、sm＝卡片內按鈕
  arrow:   { type: Boolean, default: false },   // 是否附帶右移箭頭
  href:    String,                              // 有給 href 時渲染成 <a>（外部連結、mailto）
})

const variantClass = {
  primary:   'bg-primary text-white border-primary hover:bg-transparent hover:text-primary',
  secondary: 'bg-secondary text-primary border-secondary hover:bg-transparent',
  inverted:  'bg-neutral text-white border-neutral hover:bg-transparent hover:text-neutral',
  outlined:  'bg-transparent text-primary border-primary hover:bg-primary hover:text-white',
}
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href || undefined"
    class="group inline-flex items-center justify-center border rounded-xs
           font-manrope font-semibold cursor-pointer shadow-sm no-underline
           transition-all duration-300 active:scale-[0.98]"
    :class="[
      variantClass[variant],
      size === 'md'
        ? 'h-12 px-8 gap-4 text-xs tracking-[0.2em] uppercase'
        : 'py-2.75 px-5 gap-2 text-[13px] tracking-[0.06em]',
    ]"
  >
    <slot />
    <svg
      v-if="arrow"
      xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2.5"
      stroke-linecap="round" stroke-linejoin="round"
      class="transition-transform duration-300 group-hover:translate-x-1.5"
    >
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  </component>
</template>
