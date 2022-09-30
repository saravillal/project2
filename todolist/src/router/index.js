import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AuthView from '../views/AuthView.vue';
import SignInView from '../views/SignInView.vue';
import TasksView from '../views/TasksView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignInView,
  },
  {
    path: '/tasksView',
    name: 'tasksView',
    component: TasksView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
