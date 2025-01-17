import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AnimeDetailsView from '../views/AnimeDetailsView.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/anime/:id', component: AnimeDetailsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
