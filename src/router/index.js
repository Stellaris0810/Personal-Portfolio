import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',            component: HomeView },
    { path: '/skills',      component: SkillsView },
    { path: '/projects',    component: ProjectsView },
    { path: '/projects/:id', component: ProjectDetailView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
