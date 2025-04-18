<template>
    <div v-if="!props.mobile" class="">
        <div 
            v-for="(item, index) in experience" 
            :key="index" 
            class="content font-sans"
            :class="{ 'dimmed': hoveredIndex !== null && hoveredIndex !== index }"
            @mouseover="hoveredIndex = index"
            @mouseleave="hoveredIndex = null"
        >
            <p class="date">{{ item.date }}</p>
            <h3 class="font-semibold title">{{ item.title }} | <span class="">{{ item.company }}</span></h3>
            <p class="leading-6 description">{{ item.description }}</p>
        </div>
    </div>
    <div v-else class="">
        <h2 class="text-2xl font-bold pt-10 pb-4">EXPERIENCE</h2>
        <div v-for="(item, index) in experience" :key="index" class="mobile-content font-sans">
            <p class="text-md">{{ item.date }}</p>
            <h3 class="font-semibold text-lg">{{ item.title }} | <span class="">{{ item.company }}</span></h3>
            <p class="leading-6">{{ item.description }}</p>
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

const experience = [
    {
        company: 'Datamango, United Kingdom',
        title: 'Developer',
        date: '2023 - PRESENT',
        description: 'Responsible for managing the full development lifecycle at Datamango, including the design, testing, and deployment of web and mobile applications. Designed wireframes in Figma to enhance usability and visual consistency. Built and deployed a cross-platform mobile application using Vue3, Ionic, and Capacitor within five months. Conducted end-to-end testing with Cypress to ensure high-quality, bug-free releases. Created and managed technical documentation to support onboarding and collaboration, and developed an Excel-based timesheet system to improve project tracking and resource allocation.'
    },
    {
        company: 'University of Nottingham, UK',
        title: 'Science Student Consultant',
        date: '2022 - 2023',
        description: 'Led cross-faculty projects within the Science Faculty at the University of Nottingham, applying Agile methodologies to improve academic initiatives and student engagement. Organised a postgraduate event that achieved a 95% satisfaction rate, demonstrating strong planning and coordination skills. Authored a detailed handbook to support postgraduate students in navigating academic and career transitions, enhancing institutional support resources.'
    },
    {
        company: 'University of Nottingham, UK',
        title: 'MSc Computer Science with Cyberphysical Systems - Student',
        date: '2021 - 2023',
        description: 'Completed coursework and research focused on End-User Perspective of Privacy And Security Controls in Smart Home Devices .'
    },
    {
        company: 'ITC Infotech, India',
        title: 'Associate IT Consultant',
        date: '2020 - 2021',
        description: 'Designed and tested digital platforms for US-based clients, resulting in a 25% improvement in development efficiency. Optimised debugging processes to reduce issue resolution time by 50%. Ensured secure and accurate data handling using Microsoft 365 and SQL. Maintained consistent and effective communication with clients, contributing to a 15% enhancement in project implementation timelines.'
    }
];

import { ref } from 'vue';
const hoveredIndex = ref(null);
</script>

<style scoped>
.content {
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.85);
    padding: 4%;
    padding-top: 20pt;
    padding-bottom: 20pt;
    transition: opacity 0.3s ease-in-out;
}

.content:hover{
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    border-radius: 8pt;
    transition: all 0.3s ease-in;
}

.content:hover > h3 {
    color: #64ffda;
    transition: all 0.3s ease-in;
}

.mobile-content {
    line-height: 1.8;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.85);
    padding-bottom: 2rem;
}

.date {
    font-size: 0.9rem;
}

.title {
    font-size: 1.1rem;
}

.description{
    font-size: 0.9rem;
}

.dimmed {
    opacity: 0.50;
}

@media (min-width: 2048px) {
    .date {
        font-size: 1.2rem;
    }

    .title {
        font-size: 1.5rem;
    }

    .description{
        font-size: 1.1rem;
    }
}
</style>