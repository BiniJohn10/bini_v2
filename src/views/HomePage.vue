<template>
    <div v-if="!mobile" class="layout">
        <div class="sidebar font-sans lg:pl-40 pt-28 pl-28" @wheel="handleSidebarScroll">
            <div class="text-white">
            <h1 class="font-bold lg:text-5xl md:text-4xl text-3xl">Binitha John</h1>
            <p class="lg:text-xl md:text-lg text-sm opacity-85">Front End Developer</p>
            <span class="text-sm opacity-85 flex items-center"> United Kingdom
                <img src="/icons/location.svg" class="w-5 h-5 ml-1" alt="Location icon"/>
            </span>
        </div>
    
            <div class="nav pt-20">
            <ul>
                <li v-for="item in sections" :key="item.id">
                <a
                    :href="'#' + item.id"
                    :class="{ active: activeSection === item.id }"
                    class="nav-link"
                >
                {{ item.label }}
                
                </a>
                </li>
            </ul>
            </div>
    
            <div class="social-icons">
                    <div v-for="social in socials" :key="social.id">
                        <a :href="social.link" target="_blank">
                        <i :class="social.icon"></i>
                        </a>
                    </div>
            </div>
        </div>
    
        <main ref="mainContent" class="content font-sans pr-28 pl-2">
            <div
            id="about"
            class="content-section pt-[7rem] pl-[4%] pr-[4%]"
            :ref="setSectionRef"
            >
            <p>
                Hey, I'm Bini, I'm passionate about learning and creating awesome
                web and mobile apps. While I’ve been honing my skills for the past
                few years, I’m excited to continue growing and tackling new
                challenges.
            </p>
            <p class="pt-4">I’m a Front-End Developer at 
                <a class="dm cursor-pointer font-bold" href="https://datamango.io/" target="_blank">
                <span>D</span><span>a</span><span>t</span><span>a</span><span>m</span><span>a</span><span>n</span><span>g</span><span>o</span>
                </a>, 
                where I contribute to building responsive web and mobile applications 
                using modern frameworks like Vue3 and Ionic. I work across the development 
                lifecycle—from interface design and prototyping in Figma to testing and writing 
                clear documentation to support collaboration and onboarding.</p>
    
            <p class="pt-4">My background includes experience in consulting, academia, and IT services, 
                where I’ve led projects, improved internal processes, and developed solutions 
                that support both users and teams. I enjoy learning, refining how things work, 
                and being part of a team that values quality and impact.</p>

            <p class="pt-4">Outside of tech, I love to cook, bake, and unwind with a good book (especially murder mysteries!). 
                I’m also a huge 
                <a 
                    class="dm cursor-pointer font-bold" 
                    href="https://www.doctorwho.tv/" 
                    target="_blank" 
                    @mouseover="showGif = true" 
                    @mouseleave="showGif = false">
                    <span>D</span><span>o</span><span>c</span><span>t</span><span>o</span><span>r</span> <span>W</span><span>h</span><span>o</span>
                </a>, 
                fan — science fiction, adventure, a lot of time travel? What’s not to love!
            </p>
            
            </div>
            <div v-if="showGif" class="doctor-who-gif">
                <img src="/src/assets/docwho.gif" alt="Doctor Who Gif" />
            </div>
            <section id="resume" class="pt-[5.6rem]" :ref="setSectionRef">
            <Experience />
            </section>
    
            <section id="projects" class="pt-[5.6rem]" :ref="setSectionRef">
            <Projects />
            </section>

            <section id="skills" class="pt-[5.6rem]" :ref="setSectionRef">
                <Skills/>
            </section>

            <section id="review" class="pt-[5.6rem]" :ref="setSectionRef">
                <Review/>
            </section>
        </main>
    </div>

    <!-- Mobile View -->
    <div v-if="mobile" class="w-full p-4" :style="{ boxShadow: hasScrolled ? '0 4px 6px rgba(0, 128, 128, 0.2)' : '' }">
        <div class="flex justify-between items-center">
            <!-- Logo/Name Area -->
            <div class="font-sans p-4">
                <div class="text-white">
                    <h1 class="font-bold text-4xl">Binitha John</h1>
                    <p class="text-lg opacity-85">Front End Developer</p>
                    <span class="text-sm opacity-85 flex items-center"> United Kingdom
                        <img src="/icons/location.svg" class="w-5 h-5 ml-1" alt="Location icon"/>
                    </span>

                    <div class="flex gap-4 my-8 text-white opacity-85">
                        <div v-for="social in socials" :key="social.id">
                            <a :href="social.link" target="_blank" class="text-2xl">
                            <i :class="social.icon"></i>
                            </a>
                        </div>
                    </div>
                    <main ref="mainContent" class="content font-sans">
                    <div
                    id="about"
                    class="content-section"
                    :ref="setSectionRef"
                    >
                    <p>
                        Hey, I'm Bini, I'm passionate about learning and creating awesome
                        web and mobile apps. While I’ve been honing my skills for the past
                        few years, I’m excited to continue growing and tackling new
                        challenges.
                    </p>
                    <p class="pt-4">I’m a Front-End Developer at 
                        <a class="dm cursor-pointer font-bold" href="https://datamango.io/" target="_blank">
                        <span>D</span><span>a</span><span>t</span><span>a</span><span>m</span><span>a</span><span>n</span><span>g</span><span>o</span>
                        </a>, 
                        where I contribute to building responsive web and mobile applications 
                        using modern frameworks like Vue3 and Ionic. I work across the development 
                        lifecycle—from interface design and prototyping in Figma to testing and writing 
                        clear documentation to support collaboration and onboarding.</p>
            
                    <p class="pt-4">My background includes experience in consulting, academia, and IT services, 
                        where I’ve led projects, improved internal processes, and developed solutions 
                        that support both users and teams. I enjoy learning, refining how things work, 
                        and being part of a team that values quality and impact.</p>

                    <p class="pt-4">Outside of tech, I love to cook, bake, and unwind with a good book (especially murder mysteries!). 
                        I’m also a huge 
                        <a 
                            class="dm cursor-pointer font-bold" 
                            href="https://www.doctorwho.tv/" 
                            target="_blank" 
                            @mouseover="showGif = true" 
                            @mouseleave="showGif = false">
                            <span>D</span><span>o</span><span>c</span><span>t</span><span>o</span><span>r</span> <span>W</span><span>h</span><span>o</span>
                        </a>, 
                        fan — science fiction, adventure, a lot of time travel? What’s not to love!
                    </p>
                    
                    </div>
                    <div v-if="showGif" class="doctor-who-gif">
                        <img src="/src/assets/docwho.gif" alt="Doctor Who Gif" />
                    </div>
                    <section id="resume" :ref="setSectionRef">
                    <Experience :mobile="true"/>
                    </section>
            
                    <section id="projects" :ref="setSectionRef">
                    <Projects :mobile="true" />
                    </section>

                    <section id="skills" :ref="setSectionRef">
                        <Skills :mobile="true"/>
                    </section>

                    <section id="review" :ref="setSectionRef">
                        <Review :mobile="true"/>
                    </section>
                </main>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue';
import Experience from '../components/Experience.vue';
import Projects from '../components/Projects.vue';
import Skills from '../components/Skills.vue';
import Review from '../components/Reviews.vue';

const showGif = ref(false);
const mobile = ref(false);
const mobileNav = ref(false);
const hasScrolled = ref(false);

const toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value;
};

const handleMobileTabClick = (tab) => {
    handleTabClick(tab);
    mobileNav.value = false;
};

const checkScreen = () => {
    mobile.value = window.innerWidth <= 768;
};

const handleScroll = () => {
    hasScrolled.value = window.scrollY > 0;
};

const sections = [
    { id: 'about', label: 'ABOUT', icon: '/icons/location.svg' },
    { id: 'resume', label: 'EXPERIENCE', icon: '/icons/location.svg' },
    { id: 'projects', label: 'PROJECTS', icon: '/icons/location.svg' },
    { id: 'skills', label: 'SKILLS', icon: '/icons/location.svg' },
    { id: 'review', label: 'REVIEWS', icon: '/icons/location.svg' },
];

const socials = [
    { id: 'LinkedIn', link: 'https://www.linkedin.com/in/binitha-ann-j-18a9a1181/', icon: 'fab fa-linkedin' },
    { id: 'GitHub', link: 'https://github.com/BiniJohn10', icon: 'fab fa-github' },
    { id: 'Mail', link: 'mailto:binijoann@gmail.com', icon: 'fas fa-envelope' } // Changed icon prefix to "fas"
];

const activeSection = ref('about');
const sectionRefs = [];
const mainContent = ref(null);

const setSectionRef = (el) => {
    if (el) sectionRefs.push(el);
};

let observer = null;

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id;
            }
            });
        },
        { threshold: 0.6 }
        );
    
    sectionRefs.forEach((section) => observer.observe(section));
});

onBeforeUnmount(() => {
    if (observer) observer.disconnect();
});

const handleSidebarScroll = (e) => {
    if (mainContent.value) {
        const sidebar = e.currentTarget;
        const scrollSpeedFactor = mainContent.value.scrollHeight / sidebar.scrollHeight;
        mainContent.value.scrollTop += e.deltaY * scrollSpeedFactor;
    }
    e.preventDefault();
};

onMounted(() => {
    checkScreen();
    window.addEventListener('resize', checkScreen);
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkScreen);
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.layout {
    display: flex;
    height: 100vh;
    color: white;
    opacity: 85%;
    font-family: sans-serif;
}

.sidebar {
    min-width: 45%;
    display: flex;
    flex-direction: column;
}

.nav ul {
    list-style: none;
    padding: 0;
}

.nav li {
    margin-bottom: 1rem;
}

.nav-link {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    transition: transform 0.3s, color 0.3s;
    color: white;
    opacity: 0.85;
    transform-origin: left;
}

.nav-link.active,
.nav-link:hover {
    font-weight: bold;
    transform: scale(1.1);
    opacity: 1;
}

.icon {
    width: 16px;
    height: 16px;
}

.social-icons {
    display: flex;
    margin-top: auto;
    padding-bottom: 7rem;
    gap: 1rem;
    color: rgba(255, 255, 255, 0.85);
}

.social-icons a {
    font-size: 1.5rem;
    transition: color 0.3s;
}

.social-icons a:hover {
    color: rgba(255, 255, 255, 1);
}

/* Main Content */
.content {
    flex-grow: 1;
    overflow-y: auto;
    scroll-behavior: smooth;
    padding-bottom: 4rem;
}

/* .content-section {
    padding-top: 5.8rem;
} */

.content-section p {
    font-size: 1.1rem;
    line-height: 1.8;
    white-space: pre-line;
    color: rgba(255, 255, 255, 0.85);
}

@media (max-width: 768px) {
    .content-section p {
        font-size: 1rem;
    }
}

.content-section strong {
    color: #ffffff;
}

.dm span {
    display: inline-block;
    transition: color 0.2s ease;
    color: white;
}

.dm:hover span {
    animation: colorFill 0.3s forwards;
    scale: 1.1;
}

.dm:hover span:nth-child(1) {
    animation-delay: 0s;
}
.dm:hover span:nth-child(2) {
    animation-delay: 0.05s;
}
.dm:hover span:nth-child(3) {
    animation-delay: 0.1s;
}
.dm:hover span:nth-child(4) {
    animation-delay: 0.15s;
}
.dm:hover span:nth-child(5) {
    animation-delay: 0.2s;
}
.dm:hover span:nth-child(6) {
    animation-delay: 0.25s;
}
.dm:hover span:nth-child(7) {
    animation-delay: 0.3s;
}
.dm:hover span:nth-child(8) {
    animation-delay: 0.35s;
}
.dm:hover span:nth-child(9) {
    animation-delay: 0.4s;
}

@keyframes colorFill {
    0% {
        color: white;
    }
    100% {
        color: #64ffda;
    }
}

.doctor-who-gif {
    position: absolute; /* Position it absolutely to control the placement */
    top: 6rem; /* Adjust the position as needed */
    left: 25%;
    transform: translateX(50%);
    opacity: 1;
    transition: opacity 0.3s ease;  /* Fade-in effect */
}

.doctor-who-gif img {
    max-width: 100px; /* Adjust the size of the gif */
}

/* When hover, show the gif */
.doctor-who-gif img {
    opacity: 1;
}
</style>
