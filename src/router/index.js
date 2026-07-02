import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const SITE_TITLE = "Stellaris's Web"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 首頁直接載入；其餘頁面動態 import 做 code splitting
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('@/views/SkillsView.vue'),
      meta: { title: '我的技能' },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue'),
      meta: { title: '作品集' },
    },
    {
      path: '/projects/:id',
      name: 'project-detail',
      component: () => import('@/views/ProjectDetailView.vue'),
      meta: { title: '作品詳細' },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

// 依路由更新分頁標題，例如「作品集｜Stellaris's Web」
router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title}｜${SITE_TITLE}` : SITE_TITLE
})

export default router
