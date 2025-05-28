<template>
  <section :class="{ 'dark-bg': isDarkMode, 'light-bg': !isDarkMode }">
  <v-row align="center" justify="center" class="text-center premium-footer-banner">
    <v-col cols="12" md="10" lg="8" data-aos="fade-up">
      <v-card
        class="glass-banner px-6 py-10 rounded-2xl elevation-12"
        style="backdrop-filter: blur(14px); background: rgba(0, 0, 0, 0.8);"
      >
        <!-- Divider Top -->
        <v-divider class="mb-6" color="gold lighten-1" thickness="2"></v-divider>

        <h2 class="display-1 font-weight-black mb-4 gradient-gold-text">
          Join the Digital Revolution with Antocap Teknologies
        </h2>

        <p class="text-grey-lighten-1 mb-6 text-lg font-weight-light">
          Let’s turn your idea into a
          <span class="gold-text">premium digital experience</span> that scales and excels across every platform.
        </p>

        <v-btn
          to="/contact"
          class="gold-btn rounded-pill px-8 py-4 text-lg font-weight-bold"
          aria-label="Contact us to get in touch"
          elevation="10"
          block
        >
          Get In Touch
        </v-btn>

        <!-- Divider Bottom -->
        <v-divider class="mt-8" color="gold lighten-1" thickness="2"></v-divider>
      </v-card>
    </v-col>
  </v-row>
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

.premium-footer-banner {
  background: linear-gradient(145deg, #000000, #0e0e0e, #1a1a1a);
  padding: 6rem 1rem;
}

.gold-text {
  color: #FFD700;
}

.gold-btn {
  background: linear-gradient(135deg, #FFD700, #b8860b);
  color: #000;
  transition: all 0.3s ease;
}
.gold-btn:hover {
  background: linear-gradient(135deg, #b8860b, #FFD700);
  color: #000;
  box-shadow: 0 0 20px #FFD700;
}

.glass-banner {
  border: 1px solid rgba(255, 215, 0, 0.2);
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.1), 0 0 80px rgba(255, 215, 0, 0.05) inset;
}

.gradient-gold-text {
  background: linear-gradient(90deg, #FFD700, #FFA500, #FFD700);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
</style>
