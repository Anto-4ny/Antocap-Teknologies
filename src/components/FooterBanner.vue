<template>
  <section
    :class="{ 'dark-bg': isDarkMode, 'light-bg': !isDarkMode }"
    class="no-outer-spacing"
  >
    <v-row align="center" justify="center" class="text-center premium-footer-banner">
      <v-col cols="12" md="10" lg="8" data-aos="fade-up">
        <v-card
          class="glass-banner px-6 py-8 rounded-2xl elevation-12"
          style="backdrop-filter: blur(14px); background: rgba(0, 0, 0, 0.8);"
        >
          <!-- Top Divider -->
          <v-divider class="mb-5" color="gold lighten-1" thickness="2"></v-divider>

          <h2 class="display-1 font-weight-black mb-2 gradient-gold-text">
            Join the Digital Revolution with Antocap Teknologies
          </h2>

          <p class="text-grey-lighten-1 mb-4 text-md font-weight-light">
            Building <span class="gold-text">bold</span>, scalable, and sleek digital platforms for ambitious brands.
          </p>

         <!-- Optional Feature Highlights -->
            <v-row justify="center" class="mb-4">
              <v-col cols="12" sm="4" class="text-center">
                <v-icon size="36" color="yellow-darken-2" class="mb-1">mdi-flash</v-icon>
                <p class="gold-text font-weight-medium">Fast Deployment</p>
              </v-col>
              <v-col cols="12" sm="4" class="text-center">
                <v-icon size="36" color="pink-darken-2" class="mb-1">mdi-shield-lock</v-icon>
                <p class="gold-text font-weight-medium">Secure Systems</p>
              </v-col>
              <v-col cols="12" sm="4" class="text-center">
                <v-icon size="36" color="blue-darken-2" class="mb-1">mdi-earth</v-icon>
                <p class="gold-text font-weight-medium">Global Reach</p>
              </v-col>
            </v-row>

          <!-- Call to Action -->
          <v-btn
            to="/contact"
            class="gold-btn rounded-pill px-8 py-3 text-lg font-weight-bold"
            aria-label="Contact us"
            elevation="10"
          >
            Get In Touch
          </v-btn>

          <!-- Bottom Divider -->
          <v-divider class="mt-6" color="gold lighten-1" thickness="2"></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>


<script setup>
import { isDarkMode } from '@/composables/useTheme.js';
</script>

<style scoped>
.no-outer-spacing {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  padding: 0 !important;
}

.premium-footer-banner {
  background: linear-gradient(145deg, #000000, #0e0e0e, #1a1a1a);
  padding: 3rem 1rem; 
}

.gold-text {
  color: white;
}

.gold-btn {
  background: linear-gradient(135deg, #FFD700, #b8860b);
  color: #000;
  transition: all 0.3s ease;
}
.gold-btn:hover {
  background: linear-gradient(135deg, #b8860b, #FFD700);
  box-shadow: 0 0 20px #FFD700;
}

.glass-banner {
  border: 1px solid rgba(255, 215, 0, 0.2);
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.1), 0 0 80px rgba(255, 215, 0, 0.05) inset;
  padding: 2rem !important;
}

.gradient-gold-text {
  background: linear-gradient(90deg, #FFD700, #FFA500, #FFD700);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
</style>
