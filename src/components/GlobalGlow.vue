<template>
    <div v-if="!isMobile" class="fixed inset-0 pointer-events-none z-50">
        <div ref="glowOverlay" class="glow-overlay"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const glowOverlay = ref(null);
const isMobile = ref(false);

const checkScreen = () => {
    isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
    checkScreen();
    window.addEventListener('resize', checkScreen);

    const overlay = glowOverlay.value;

    const handleMouseMove = (event) => {
        if (isMobile.value) return;
        
        const { clientX: x, clientY: y } = event;

        overlay.style.setProperty("--glow-x", `${x}px`);
        overlay.style.setProperty("--glow-y", `${y}px`);
        overlay.style.setProperty("--glow-opacity", "1");
    };

    const handleMouseLeave = () => {
        if (isMobile.value) return;
        
        overlay.style.setProperty("--glow-opacity", "0");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkScreen);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseleave", handleMouseLeave);
});
</script>

<style>
:root {
    --glow-color: rgba(0, 255, 255, 0.10);
    --glow-size: 35rem;
}

.glow-overlay {
    position: fixed;
    inset: 0;
    pointer-events: none;
    user-select: none;
    opacity: var(--glow-opacity, 0);
    background: var(--glow-color);
    mask: radial-gradient(
        var(--glow-size) var(--glow-size) at var(--glow-x) var(--glow-y),
        rgba(0, 255, 255, 0.8) 0%,   
        rgba(0, 255, 255, 0.7) 5%,
        rgba(0, 255, 255, 0.6) 10%,   
        rgba(0, 255, 255, 0.5) 15%,
        rgba(0, 255, 255, 0.4) 20%,
        #00ffff4d 25%,   
        transparent 50%                
    );
    -webkit-mask: radial-gradient(
        var(--glow-size) var(--glow-size) at var(--glow-x) var(--glow-y),
        rgba(0, 255, 255, 0.7) 0%,    
        rgba(0, 255, 255, 0.6) 5%,
        rgba(0, 255, 255, 0.5) 10%,   
        rgba(0, 255, 255, 0.4) 15%,
        rgba(0, 255, 255, 0.3) 20%,
        rgba(0, 255, 255, 0.2) 25%,   
        transparent 60%               
    );
    transition: opacity 0.4s ease;
    will-change: opacity, mask;
    z-index: 9999;
}
</style>