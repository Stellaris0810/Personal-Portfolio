<script setup>
//引入RouterView來使用
import {RouterView} from 'vue-router';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <!-- RouterView讓這裡成為所有頁面的入口 -->
  <RouterView></RouterView>
  <!-- 全站共用頁尾 -->
  <Footer />
</template>

<style scoped></style>
