import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Resume from '../views/Resume.vue';
import Projects from '../views/Projects.vue';

const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/resume', name: 'Resume', component: Resume },
    { path: '/projects', name: 'Projects', component: Projects },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
