<template>
  <div v-if="!props.mobile">
    <div v-for="(item, index) in projects" :key="index" class="content font-sans">
      
      <a :href="item.link" target="_blank" class="grid grid-cols-4 gap-4 hover:text-b-teal-100 hover:cursor-pointer hover:opacity-100 project-img">
          <img class="text-sm leading-6 col-span-1 w-42 h-28 2xl:w-[200px] 2xl:h-[130px] pt-2" :src="item.img" /> 
          <div class="leading-6 col-span-3 pt-0">
              <div class="flex items-center space-x-2">
                  <p class="font-semibold title">{{ item.title }}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"/></svg>
              </div>
              <p class="description text-white opacity-85">{{ item.description }}</p>
          </div>
        </a>
    </div>
  </div>

  <div v-else class="">
    <h2 class="text-2xl font-bold pt-10 pb-4">PROJECTS</h2>
    <div v-for="(item, index) in projects" :key="index" class="mobile-content font-sans">
      <p class="text-xl font-semibold">{{ item.title }}</p>
      <a :href="item.link" target="_blank" class="">
          <img class="text-sm leading-6 col-span-1 w-[100%] h-[50%] py-2" :src="item.img" /> 
          <div class="leading-6 col-span-3 pt-0">
              <p class="text-md text-white opacity-85">{{ item.description }}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"/>
              </svg>
              </p>
              
          </div>
      </a>
    </div>
  </div>

</template>

<script setup>
const props = defineProps({
    mobile: {
        type: Boolean,
        default: false
    }
});
const projects = [
  {
    img: '/assets/projects/dm.jpg',
    title: 'Datamango Website • Datamango',
    description: 'Rebuilt the Datamango website using Nuxt and Tailwind CSS, enhancing user experience and responsiveness.',
    link: 'https://datamango.io/',
  },
  {
    img: '/assets/projects/ArcoCyber.jpg',
    title: 'Arco Cyber • Datamango',
    description: 'Developed and implemented new features and cyber framework mappings, addressing pentest vulnerabilities. Conducted QA, fixed bugs, and optimized the codebase for enhanced security and performance. Utilized Vue 3, Vuex, Pinia, GraphQL, Node.js, and Hasura to improve functionality and user experience.',
    link: 'https://platform.arcocyber.com/auth/register',
  },
  {
    img: '/assets/projects/triton.jpg',
    title: 'Atlantis Swimming App • Datamango',
    description: 'Designed, developed, and tested the Atlantis Swimming App, now ready for deployment on the App Store and Google Play. Built with Vue 3, Ionic, Capacitor, GraphQL, and Hasura, and integrated a Node.js server with an in-house subscription model and receipt validation. Completed in 5 months, with client feedback and testing via TestFlight and Android APK.',
    link: 'https://play.google.com/store/apps/details?id=com.tritontraining.atlantis&hl=en_GB&pli=1',
  },
  {
    img: '/assets/projects/smartSettings.jpg',
    title: 'SmartSettings • Personal Project',
    description: 'Developed a platform focused on the importance of security and privacy in smart home devices. The website features informative blogs, actionable insights, and step-by-step guides to help users secure popular smart home devices. Designed to empower non-tech-savvy users through clear, accessible guidance.',
    link: 'https://smartsettings.netlify.app/',
  }
]
</script>

<style scoped>
.content {
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  padding: 4%;
  padding-top: 20pt;
  padding-bottom: 20pt;
}

.title{
  font-size: 1.1rem;
}

.description{
  font-size: 0.9rem;
}

.content:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 8pt;
  transition: all 0.3s ease-in-out;
}

.project-img {
  transition: filter 0.3s ease-in-out;
  padding-top: 4pt;
  filter: grayscale(100%);
}

.project-img:hover {
  filter: grayscale(0%);
}

.content:hover > img {
  filter: grayscale(0%);
  transition: all 0.3s ease-in-out;
  color: #64ffda;
}

.mobile-content {
    line-height: 1.8;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.85);
    padding-bottom: 2rem;
}

@media (min-width: 2048px) {
    .title {
        font-size: 1.5rem;
    }

    .description{
        font-size: 1.1rem;
    }
}
</style>