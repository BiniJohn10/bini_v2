import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Blogs from '../views/Blogs.vue';

const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/blogs', name: 'Blogs', component: Blogs },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
