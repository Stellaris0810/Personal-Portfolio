<template>
  <div class="min-h-screen bg-slate-100 p-8 flex flex-col items-center justify-center">
    
    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 transition-all duration-300 hover:shadow-2xl">
      
      <div class="h-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
      
      <div class="p-6">
        <h2 class="text-2xl font-bold text-slate-800 tracking-wide mb-2 flex items-center gap-2">
          <span class="w-3 h-6 bg-indigo-500 rounded-full inline-block"></span>
          Tailwind 測試面板
        </h2>
        
        <p class="text-sm text-slate-500 mb-6">
          目前測試組件：<span class="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600">{{ componentName }}</span>
        </p>

        <div class="grid grid-cols-2 gap-4 mb-6">
          
          <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
            <span class="block text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">響應式狀態</span>
            <div class="text-lg font-bold text-indigo-900">
              數量：{{ count }} 個
            </div>
          </div>

          <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
            <span class="block text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">主題類型</span>
            <div class="text-lg font-bold text-emerald-900">
              {{ themeType }}
            </div>
          </div>
          
        </div>

        <div class="flex flex-col gap-3">
          
          <button 
            type="button"
            class="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-medium rounded-xl shadow-lg shadow-indigo-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            基礎互動按鈕
          </button>

          <div class="mt-2 text-center text-xs text-slate-400 before:content-['•'] before:text-red-500 before:mr-1 before:font-bold">
            如果看到漂亮的排版、圓角與漸層，代表 Tailwind 運作正常！
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import '@/assets/Css/main.css'

const props = defineProps({
  componentName: {
    type: String,
    required: false,
    default: 'TailwindTester.vue'
  },
  themeType: {
    type: String,
    required: false,
    default: '預設標準版'
  },
  count: {
    type: Number,
    required: false,
    default: 99
  }
});
</script>

<style scoped>

</style>