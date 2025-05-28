<template>
  <section :class="{ 'dark-bg': isDarkMode, 'light-bg': !isDarkMode }">
  <section class="why-choose-section">
    <v-container>
      <v-row class="text-center">
        <v-col cols="12" data-aos="fade-up">
          <h2
            class="display-1 font-weight-black gradient-gold-text animate-title mb-10"
          >
            Why Choose Antocap Teknologies?
          </h2>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="choose-box glow-border animate-box">
            <v-icon size="64" class="icon mb-4" color="amber">mdi-star-circle</v-icon>
            <h3 class="text-h6 font-weight-bold mb-2 gradient-gold-text">Premium Quality</h3>
            <p class="text-grey-lighten-2">
              We craft every solution with precision and luxury in mind.
            </p>
          </div>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="choose-box glow-border animate-box">
            <v-icon size="64" class="icon mb-4" color="cyan">mdi-speedometer</v-icon>
            <h3 class="text-h6 font-weight-bold mb-2 gradient-gold-text">Speed & Performance</h3>
            <p class="text-grey-lighten-2">
              Our systems are optimized for speed, SEO, and seamless user experience.
            </p>
          </div>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="choose-box glow-border animate-box">
            <v-icon size="64" class="icon mb-4" color="deep-purple">mdi-account-group</v-icon>
            <h3 class="text-h6 font-weight-bold mb-2 gradient-gold-text">Client-Centered</h3>
            <p class="text-grey-lighten-2">
              We work closely with our clients to deliver solutions that meet real business needs.
            </p>
          </div>
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
  background: linear-gradient(135deg, #0c0c0c, #1a1a1a);
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

.choose-box {
  background: rgba(255, 255, 255, 0.03);
  padding: 1.5rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.05);
}

.choose-box:hover {
  box-shadow: 0 0 35px rgb(223, 222, 220);
  transform: translateY(-4px);
}

.glow-border {
  border: 1px solid rgba(255, 215, 0, 0.2);
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.2), 0 0 20px rgba(255, 215, 0, 0.1);
}

.animate-title {
  animation: fadeInUp 1s ease both;
}

.animate-box {
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
