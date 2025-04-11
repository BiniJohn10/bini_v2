import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import 'animate.css'
import router from './router/index.js';

createApp(App)
    .use(router)
    .mount('#app');

