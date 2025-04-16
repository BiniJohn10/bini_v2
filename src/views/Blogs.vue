<template>
      <div class="p-[10%]">
            <div class="group pb-5 cursor-pointer text-lg 3xl:text-2xl" @click="goTo('/')">
                  <span class="transition-all duration-300"> ← </span>
                  <span class="font-bold transition-all group-hover:underline">Binitha John</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div v-for="(item, index) in projects" :key="index" class="blog-card">
                        <a :href="item.link" target="_blank" class="block">
                              <img :src="item.img" alt="Project Image" class="w-full h-[200px] object-cover rounded-t-md" />
                              <div class="p-4 rounded-b-md">
                                    <p class="text-sm text-gray-400 mb-1">{{ item.year }}</p>
                                    <h3 class="text-lg font-bold mb-2">{{ item.title }}</h3>
                              </div>
                        </a>
                  </div>
            </div>
      </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goTo = (section) => {
      router.push({ path: `${section}` });
};
const props = defineProps({
      mobile: {
            type: Boolean,
            default: false
      }
});
const projects = [
      {
            img: '/assets/Blogs/dm.jpg',
            title: 'Enhance Your Cyber Security: Why A Human-Centric Approach Is Important',
            year: '2023',
            link: 'https://datamango.io/news/enhance-your-cyber-security-why-a-human-centric-approach-is-important',
      },
      {
            img: '/assets/Blogs/lock.png',
            title: 'Protecting Your Privacy: Understanding the Risks of Data Collected by Smart Home Devices',
            year: '2025',
            link: 'https://smartsettings.netlify.app/protecting',
      }
];
</script>

<style scoped>
.content {
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.85);
      padding: 4%;
      transition: opacity 0.3s ease-in-out;
}

.blog-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.blog-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}
.blog-card img {
      transition: transform 0.3s ease;
}
</style>