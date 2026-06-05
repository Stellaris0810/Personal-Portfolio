<script setup>
import NavBar from '@/components/NavBar.vue'
import ProfileCard from '@/components/ProfileCard.vue'
import myPhoto from '@/assets/Img/myPhoto.jpg'

const intro = 'Hi，我的名字是黃偉綸，畢業於資工系，目前是前端設計學習者，對待前端就如同其他我所熱愛的事物一樣，持續精進自己的能力，並且將所學投入到實務當中。透過了解網站背景及使用者的需求，設計出合理且吸引人的UI/UX介面，將設計與Vue.js還有JavaScript精準融合，創造出生動且有趣的網站。'
</script>

<template>
  <div class="min-h-screen bg-bg font-manrope text-neutral">
    <NavBar />

    <main class="w-full py-12">
      <ProfileCard
        name="黃偉綸"
        title="前端設計學習者"
        welcomeText="歡迎來到我的網站"
        :intro="intro"
        :image="myPhoto"
      />
    </main>
  </div>
</template>
