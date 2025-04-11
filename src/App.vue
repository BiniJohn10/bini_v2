<template>
  <div class="min-h-screen bg-gradient">
      <router-view></router-view>
    </div>
    <GlobalGlow />
</template>
  
<script setup>
import { useRouter } from 'vue-router';
import GlobalGlow from './components/GlobalGlow.vue';

const router = useRouter();

const handleTabChange = (tab) => {
  switch(tab) {
    case 'Home Page':
      router.push('/');
      break;
    case 'Resume':
      router.push('/resume');
      break;
    case 'Projects':
      router.push('/projects');
      break;
  }
};
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(to bottom, #064e3b, #002a2a); /* teal-dark to black */
  min-height: 100vh;
}
</style>