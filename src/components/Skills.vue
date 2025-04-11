<template>
    <section ref="skillsRef" :class="mobile ? 'mobile-content' : 'content'">
        <h2 v-if="props.mobile" class="text-2xl font-bold pt-10 pb-4 text-white">SKILLS</h2>
        <div class="space-y-12">
            <div 
            v-for="(category, index) in skills" 
            :key="index" 
            class="space-y-6"
            >
            <h2 class="text-2xl font-semibold text-gray-800 text-white opacity-85">
                {{ category.category }}
            </h2>
            <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <div 
                v-for="(item, idx) in category.items" 
                :key="idx" 
                class="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                >
                <img :src="item.icon" :alt="item.name" class="w-12 h-12 mb-2" />
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ item.name }}</span>
                </div>
            </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
const skillsRef = ref(null);
const props = defineProps({
    mobile: {
        type: Boolean,
        default: false
    }
});
const skills = [
    {
        category: 'Front-End Development',
        items: [
        { name: 'Vue 3', icon: '/src/assets/skills/vue3.svg' },
        { name: 'JavaScript', icon: '/src/assets/skills/javascript.svg' },
        { name: 'Nuxt.js', icon: '/src/assets/skills/nuxt.svg' },
        { name: 'Tailwind CSS', icon: '/src/assets/skills/tailwind.svg' },
        { name: 'HTML5', icon: '/src/assets/skills/html5.svg' },
        { name: 'CSS3', icon: '/src/assets/skills/css3.svg' },
        ],
    },
    {
        category: 'Back-End Development',
        items: [
        { name: 'Node.js', icon: '/src/assets/skills/nodejs.svg' },
        { name: 'GraphQL', icon: '/src/assets/skills/graphql.svg' },
        { name: 'Python', icon: '/src/assets/skills//python.svg' },
        { name: 'Hasura', icon: '/src/assets/skills/hasura.svg' },
        { name: 'PostgreSQL', icon: '/src/assets/skills/postgresql.svg' },
        ],
    },
    {
        category: 'Mobile Development',
        items: [
        { name: 'Ionic', icon: '/src/assets/skills/ionic.svg' },
        { name: 'Capacitor', icon: '/src/assets/skills/capacitorjs.svg' },
        { name: 'Xcode', icon: '/src/assets/skills/xcode.png' },
        { name: 'Android Studio', icon: '/src/assets/skills/android.png' },
        ],
    },
    {
        category: 'Version Control, Testing & Collaboration',
        items: [
        { name: 'Git', icon: '/src/assets/skills/git.svg' },
        { name: 'GitHub', icon: '/src/assets/skills/github.svg' },
        { name: 'Cypress', icon: '/src/assets/skills/cypress.svg' },
        { name: 'Linear', icon: '/src/assets/skills/linear.svg' },
        { name: 'Jira', icon: '/src/assets/skills/jira.svg' },
        { name: 'Slack', icon: '/src/assets/skills/slack.svg' },
        { name: 'Notion', icon: '/src/assets/skills/notion.svg' },
        { name: 'Microsoft 365', icon: '/src/assets/skills/microsoft.svg' },
        ],
    },
    {
        category: 'Design & Prototyping',
        items: [
        { name: 'Figma', icon: '/src/assets/skills/figma.svg' }
        ],
    },
];
</script>

<style scoped>
.content {
    line-height: 1.8;
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.85);
    padding: 4%;
    padding-top: 20pt;
    padding-bottom: 20pt;
}

.mobile-content {
    line-height: 1.8;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.85);
    padding-top: 10pt;
    padding-bottom: 10pt;
}
</style>