<template>
    <section :class="{ 'dark-bg': isDarkMode, 'light-bg': !isDarkMode }">
  <v-container fluid data-aos="fade-up" data-aos-duration="1000">
    <v-carousel
      cycle
      height="500"
      hide-delimiter-background
      show-arrows="hover"
      interval="5000"
    >
      <template v-for="(slide, index) in slides" :key="index">
        <v-carousel-item>
          <div class="carousel-image-container">
            <template v-if="loadedImages[index]">
              <v-img
                :src="slide.src"
                :alt="slide.alt"
                class="image-with-overlay"
                height="500"
                cover
                loading="lazy"
              />
              <div class="dark-overlay" />
              <div class="text-overlay">
                <h2 class="text-h4 font-weight-bold mb-2">{{ slide.title }}</h2>
                <p class="text-subtitle-1">{{ slide.description }}</p>
              </div>
            </template>
            <div v-else class="loading-placeholder">
              <v-progress-circular indeterminate color="primary" />
            </div>
          </div>
        </v-carousel-item>
      </template>
    </v-carousel>
  </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { isDarkMode } from '@/composables/useTheme.js';

import itJpg from '@/assets/it.jpg'
import cloudJpg from '@/assets/cloud.jpg'
import automationJpg from '@/assets/automation2.jpg'
import gifSource from '@/assets/bJk.gif';

const slides = ref([
  {
    src: itJpg,
    title: 'Innovative IT Solutions',
    description: 'Leading the future of technology with cutting-edge solutions.',
    alt: 'Innovative IT Solutions'
  },
  {
    src: cloudJpg,
    title: 'Advanced Cloud Services',
    description: 'Seamless integration with secure and scalable cloud solutions.',
    alt: 'Advanced Cloud Services'
  },
  {
    src: automationJpg,
    title: 'AI-Powered Automation',
    description: 'Harnessing artificial intelligence to drive efficiency and growth.',
    alt: 'AI-Powered Automation'
  },
    {
    src: gifSource,
    title: 'AI-Powered Automation',
    description: 'Harnessing artificial intelligence to drive efficiency and growth.',
    alt: 'AI-Powered Automation'
  }
])

const loadedImages = ref(Array(slides.value.length).fill(false))

onMounted(() => {
  slides.value.forEach((slide, index) => {
    const img = new Image()
    img.src = slide.src
    img.onload = () => {
      loadedImages.value[index] = true
    }
  })
})
</script>

<style scoped>
.dark-bg {
  background-color: #000;
  color: #fff;
}

.light-bg {
  background-color: #fff;
  color: #000;
}

.carousel-image-container {
  position: relative;
  height: 100%;
  top: 0;
}

.image-with-overlay {
  position: relative;
  z-index: 1;
  height: 100%;
}

.dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45); /* blackish overlay */
  z-index: 2;
}

.text-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  color: #ffd700; /* gold text */
  text-align: center;
  z-index: 3;
  background: rgba(0, 0, 0, 0.3); /* subtle black bg behind text */
  border-top: 1px solid #fff;
}

.loading-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  background: #1a1a1a;
}

.v-carousel__prev,
.v-carousel__next {
  font-size: 24px;
  color: #fff;
}

.v-carousel__prev:hover,
.v-carousel__next:hover {
  color: #ffd700; /* gold hover */
}
</style>
