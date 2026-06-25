// v-reveal：元素捲入視窗時淡入上移
// 用法：v-reveal            → 無延遲
//      v-reveal="120"      → 延遲 120ms（做交錯效果用）
export const reveal = {
  mounted(el, binding) {
    el.classList.add('reveal')

    const delay = Number(binding.value) || 0
    if (delay) el.style.transitionDelay = `${delay}ms`

    // 尊重「減少動態效果」的系統設定，直接顯示不播動畫
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('reveal-visible')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('reveal-visible')
            io.unobserve(el) // 只播一次
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    io.observe(el)
    el._revealObserver = io
  },
  unmounted(el) {
    if (el._revealObserver) el._revealObserver.disconnect()
  },
}
