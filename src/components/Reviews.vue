<template>
    <div>
      <!-- Desktop View -->
      <div v-if="!props.mobile" class="flip-container">
        <div
          v-for="(item, index) in rec"
          :key="index"
          class="flip-card"
          @click="toggle(index)"
        >
          <div :class="['flip-card-inner', { flipped: flippedCards[index] }]">
            <!-- Front side: Recommendation text -->
            <div class="flip-card-front content">
              <p>"{{ item.recommendation }}"</p>
            </div>
            <!-- Back side: Logo and Title -->
            <div class="flip-card-back content">
              <img
                :src="item.image"
                alt="Logo"
                class="logo-image"
              />
              <p class="text-lg font-bold">{{ item.name }}</p>
              <p class="card-title">{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Mobile View -->
      <div v-else class="">
        <h2 class="text-2xl font-bold pt-10 pb-4">RECOMMENDATIONS</h2>
        <div
          v-for="(item, index) in rec"
          :key="index"
          class="mobile-card mb-6"
        >
          <p class="mb-2">{{ item.recommendation }}</p>
          <div class="flex items-center">
            <img
              :src="item.image"
              alt="Profile Image"
              class="w-16 h-16 border-portfolio-teal-dark border-2 rounded-full mr-4"
            />
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
    image: "/assets/projects/datamango_logo.jpeg"
  },
  {
    recommendation: "Binitha is a superb developer and cybersecurity expert. During our time together at Datamango, Binitha consistently demonstrated her technical ability and incredible capacity to learn new skills quickly. Technical expertise aside, Binitha is kind and exceptionally helpful - always willing to lend a hand and share knowledge, and approached every task with enthusiasm and a keen problem-solving attitude - an absolute pleasure to work with!",
    name: "Sam Packham",
    title: "Internal Operations & Support Manager",
    image: "/assets/projects/datamango_logo.jpeg"
  },
  {
    recommendation: "Binitha is a talented developer who consistently delivers high-quality work. Her attention to detail and problem-solving skills are impressive.",
    name: "Camila",
    title: "Developer",
    image: "/assets/projects/datamango_logo.jpeg"  
  }
];

const flippedCards = ref(rec.map(() => false));


const toggle = (index) => {
  flippedCards.value[index] = !flippedCards.value[index];
};
</script>

<style scoped>
.flip-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 4%;
}

.flip-card {
  background-color: transparent;
  width: 100%;
  perspective: 1000px;
  cursor: pointer;
}

.flip-card-inner {
  display: grid;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card-inner.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    grid-area: 1 / 1;
  backface-visibility: hidden;
  border-radius: 8pt;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
}

.flip-card-front {
  color: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
}


.flip-card-back {
  color: rgba(255, 255, 255, 0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
}

.logo-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 1rem;
  border-radius: 8%;
}

.card-title {
  font-size: 1.1rem;
  font-weight: bold;
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

.content {
  padding: 1.5rem;
  line-height: 1.8;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.85);
  border-radius: 8pt;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

@media (min-width: 2048px) {
    .content {
        font-size: 1.3rem;
    }
}
</style>
