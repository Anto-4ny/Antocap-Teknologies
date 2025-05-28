<template>
  <section :class="{ 'dark-bg': isDarkMode, 'light-bg': !isDarkMode }">
  <v-container fluid class="social-proof-section py-16">
    <!-- Section Heading -->
    <v-row justify="center" class="mb-12">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="gold-text display-1 font-weight-bold mb-2">Trusted by Industry Leaders</h2>
        <p class="text-grey-lighten-2 text-lg font-weight-light">
          Our commitment to excellence has earned the trust of top brands across multiple industries.
        </p>
      </v-col>
    </v-row>

    <!-- Client Logos -->
    <v-row justify="center" align="center" class="logo-row mb-10">
      <v-col
        v-for="(logo, index) in clientLogos"
        :key="index"
        cols="6"
        sm="4"
        md="2"
        class="d-flex justify-center align-center"
      >
        <v-img
          :src="logo"
          width="120"
          height="60"
          contain
          class="client-logo"
        />
      </v-col>

      <!-- Placeholder for future logos -->
      <v-col cols="12" class="text-center mt-6">
        <v-btn color="gold" class="text-black rounded-pill px-6" variant="flat" elevation="6">
          More Partners Coming Soon
        </v-btn>
      </v-col>
    </v-row>

    <!-- Quick Stats -->
    <v-row class="text-center text-white mt-10" justify="center">
      <v-col cols="12" sm="4">
        <h3 class="gold-text text-h4 font-weight-bold">500+</h3>
        <p class="text-subtitle-2 text-grey-lighten-1">Projects Delivered</p>
      </v-col>
      <v-col cols="12" sm="4">
        <h3 class="gold-text text-h4 font-weight-bold">95%</h3>
        <p class="text-subtitle-2 text-grey-lighten-1">Client Retention</p>
      </v-col>
      <v-col cols="12" sm="4">
        <h3 class="gold-text text-h4 font-weight-bold">10+</h3>
        <p class="text-subtitle-2 text-grey-lighten-1">Industries Served</p>
      </v-col>
    </v-row>

    <!-- CTA -->
    <v-row justify="center" class="mt-12">
      <v-btn class="gold-gradient-btn rounded-pill px-8 py-4 text-white text-lg font-weight-bold" to="/contact" elevation="10">
        Work With Us
      </v-btn>
    </v-row>
  </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { isDarkMode } from '@/composables/useTheme.js';

const clientLogos = ref([
  new URL('@/assets/client-logos/Antocap-logo.jpg', import.meta.url).href,
  new URL('@/assets/client-logos/Antoca-logo-2.jpg', import.meta.url).href,
  new URL('@/assets/client-logos/logo3.png', import.meta.url).href,
  new URL('@/assets/client-logos/logo4.png', import.meta.url).href,
  new URL('@/assets/client-logos/logo5.png', import.meta.url).href,
])
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

.social-proof-section {
  background: linear-gradient(135deg, #000000, #111111, #0d0d0d);
  color: white;
  border-top: 1px solid rgba(255, 215, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.gold-text {
  color: #FFD700;
}

.gold-gradient-btn {
  background: linear-gradient(135deg, #FFD700, #b8860b);
  transition: 0.3s;
}
.gold-gradient-btn:hover {
  background: linear-gradient(135deg, #b8860b, #FFD700);
}

.client-logo {
  filter: drop-shadow(0 2px 5px rgba(255, 215, 0, 0.2));
  transition: transform 0.3s ease;
}
.client-logo:hover {
  transform: scale(1.1);
}
</style>
