<template>
    <div>
        <!-- Desktop View -->
        <div v-if="!props.mobile" class="px-8 pb-12">
            <div class="grid grid-cols-1 xl:grid-cols-2 xl:gap-4">
                <div
                    v-for="(item, index) in rec"
                    :key="index"
                    class="flip-card cursor-pointer"
                    :class="{ 'xl:col-span-2': rec.length % 2 !== 0 && index === rec.length - 1 }"
                    @click="toggle(index)">
                    <div :class="['flip-card-inner', { flipped: flippedCards[index] }]">
                        <div class="flip-card-front content">
                            <p>{{ item.recommendation }}</p>
                        </div>
                        <div class="flip-card-back content flex flex-col items-center justify-center">
                            <img :src="item.image" alt="Profile Image" class="w-24 h-24 border-portfolio-teal-dark border-2 rounded-full my-4" />
                            <p class="text-lg font-semibold text-center">{{ item.name }} - {{ item.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile View -->
        <div v-else class="">
            <h2 class="text-2xl font-bold pt-10 pb-4">RECOMMENDATIONS</h2>
            <div v-for="(item, index) in rec" :key="index" class="mobile-card mb-6">
                <p class="mb-2">{{ item.recommendation }}</p>
                <div class="flex items-center">
                    <img :src="item.image" alt="Profile Image" class="w-16 h-16 border-portfolio-teal-dark border-2 rounded-full mr-4" />
                    <div>
                        <p class="text-base font-semibold">{{ item.name }}</p>
                        <p class="text-sm text-gray-500">{{ item.title }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    mobile: {
        type: Boolean,
        default: false
    }
});
const rec = [
    {
        recommendation: "I had the pleasure of working with Binitha when she joined us on a cybersecurity-focused internship during her master’s. She quickly proved herself as a talented and driven developer and we were able to take her on full-time. She handled complex dev tasks and contributed to client-facing work, and brought infectious enthusiasm to the team. Her passion for cybersecurity and ability to learn fast made her an invaluable asset. A real team player with a bright future ahead. Thanks Bini!",
        name: "Dave Westbrook",
        title: "Chief Operating Officer",
        image: "src/assets/projects/datamango_logo.jpeg"
    },
    {
        recommendation: "Binitha is a superb developer and cybersecurity expert. During our time together at Datamango, Binitha consistently demonstrated her technical ability and incredible capacity to learn new skills quickly. Technical expertise aside, Binitha is kind and exceptionally helpful - always willing to lend a hand and share knowledge, and approached every task with enthusiasm and a keen problem-solving attitude - an absolute pleasure to work with!",
        name: "Sam Packham",
        title: "Internal Operations & Support Manager",
        image: "src/assets/projects/datamango_logo.jpeg"
    },
    {
        recommendation: "Binitha is a talented developer who consistently delivers high-quality work. Her attention to detail and problem-solving skills are impressive.",
        name: "Camila",
        title: "Developer",
        image: "src/assets/projects/datamango_logo.jpeg"  
    }
]

const flippedCards = ref(rec.map(() => false));

const toggle = (index) => {
    flippedCards.value[index] = !flippedCards.value[index];
};
</script>

<style scoped>
.flip-card {
  perspective: 1000px;
  width: 100%;
  min-height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flip-card-inner {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
  position: relative; /* Ensure proper positioning */
}

.flip-card-inner.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  width: 100%;
  backface-visibility: hidden;
  border-radius: 8pt;
  position: absolute; /* Ensure both sides overlap perfectly */
  top: 0;
  left: 0;
}

.flip-card-front {
  z-index: 2;
}

.flip-card-back {
    width: 100%;
    transform: rotateY(180deg);
}

.content {
    line-height: 1.8;
    font-size: 1rem;
    padding: 8%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    color: rgba(255, 255, 255, 0.85);
}

.mobile-card {
    padding: 14px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.5;
    font-size: 1rem;
}
</style>