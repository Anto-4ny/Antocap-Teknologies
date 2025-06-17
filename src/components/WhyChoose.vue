<template>
  <section :class="{ 'dark-bg': isDarkMode, 'light-bg': !isDarkMode }">
    <section class="why-choose-section">
      <v-container>
        <v-row class="text-center justify-center">
          <v-col cols="12" data-aos="fade-up">
            <h2 class="display-1 font-weight-black gradient-gold-text animate-title mb-10">
              Why Choose Antocap Teknologies?
            </h2>
          </v-col>

          <v-col cols="12" sm="6" md="4" data-aos="fade-up" data-aos-delay="100">
            <v-icon size="64" class="icon mb-2" color="amber">mdi-star-circle</v-icon>
            <h3 class="text-h6 font-weight-bold mb-2 gradient-gold-text">Premium Quality</h3>
            <p class="text-grey-lighten-2 px-4">
              We craft every solution with precision and luxury in mind.
            </p>
          </v-col>

          <v-col cols="12" sm="6" md="4" data-aos="fade-up" data-aos-delay="200">
            <v-icon size="64" class="icon mb-2" color="cyan">mdi-speedometer</v-icon>
            <h3 class="text-h6 font-weight-bold mb-2 gradient-gold-text">Speed & Performance</h3>
            <p class="text-grey-lighten-2 px-4">
              Our systems are optimized for speed, SEO, and seamless user experience.
            </p>
          </v-col>

          <v-col cols="12" sm="6" md="4" data-aos="fade-up" data-aos-delay="300">
            <v-icon size="64" class="icon mb-2" color="deep-purple">mdi-account-group</v-icon>
            <h3 class="text-h6 font-weight-bold mb-2 gradient-gold-text">Client-Centered</h3>
            <p class="text-grey-lighten-2 px-4">
              We work closely with our clients to deliver solutions that meet real business needs.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>

<script setup>
import { isDarkMode } from '@/composables/useTheme.js';
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

.why-choose-section {
  padding: 4rem 1rem;
  border-top: 1px solid rgba(255, 215, 0, 0.1);
  border-bottom: 1px solid rgba(255, 215, 0, 0.1);
}

.gradient-gold-text {
  background: linear-gradient(90deg, #FFD700, #FFB700, #FFD700);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: shimmer 4s infinite linear;
}

@keyframes shimmer {
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
}

.animate-title {
  animation: fadeInUp 1s ease both;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
