<script setup>
//引入RouterView來使用
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <!-- 無障礙：鍵盤使用者可直接跳過導覽列 -->
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100
           focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-xs
           font-manrope text-sm"
  >跳至主要內容</a>

  <!-- 全站共用導覽列 -->
  <NavBar />

  <!-- RouterView讓這裡成為所有頁面的入口 -->
  <main id="main" class="min-h-screen bg-bg">
    <RouterView />
  </main>

  <!-- 全站共用頁尾 -->
  <Footer />
</template>

<style scoped></style>
