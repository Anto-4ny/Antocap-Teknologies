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

import carousel0 from '@/assets/carousel0.webp'
import carousel1 from '@/assets/carousel1.jpg'
import carousel2 from '@/assets/carousel2.jpg'
import carousel3 from '@/assets/carousel3.webp';
import carousel4 from '@/assets/carousel4.jpg'
import carousel5 from '@/assets/carousel5.png'
import carousel6 from '@/assets/carousel6.png'

const slides = ref([
  {
    src: carousel1,
    title: 'Website Development Excellence',
    description: 'Crafting modern, responsive websites tailored by Antocap Teknologies.',
    alt: 'Website Development by Antocap Teknologies'
  },
  {
    src: carousel0,
    title: 'Web & Billing Systems Integration',
    description: 'Robust website solutions integrated with seamless billing systems.',
    alt: 'Web and Billing Systems'
  },
  {
    src: carousel2,
    title: 'Boost Your Online Presence',
    description: 'Helping businesses stand out with powerful online visibility strategies.',
    alt: 'Online Presence Solutions'
  },
  {
    src: carousel3,
    title: 'Custom App Development',
    description: 'Building user-friendly mobile and web apps tailored to your goals.',
    alt: 'App Development Services'
  },
  {
    src: carousel4,
    title: 'Social Media Integration',
    description: 'Linking your brand to audiences through smart social media connections.',
    alt: 'Social Media Integration'
  },
  {
    src: carousel5,
    title: 'SEO & Google Rankings',
    description: 'Optimizing your digital footprint to rank higher and reach wider.',
    alt: 'SEO and Google Optimization'
  },
  {
    src: carousel6,
    title: 'Efficient Management Systems',
    description: 'Streamlining operations with tailored management system solutions.',
    alt: 'Business Management Systems'
  },
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
  background-color: rgba(0, 0, 0, 0.527); 
  z-index: 2;
}

.text-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  color: #ffd700; 
  text-align: center;
  z-index: 3;
  background: rgba(0, 0, 0, 0.3); 
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
  color: #ffd700; 
}
</style>
