<template>
    <section :class="{ 'dark-bg': isDarkMode, 'light-bg': !isDarkMode }">
  <v-container fluid class="top-section" data-aos="fade-up" data-aos-duration="1000">
    <v-row class="d-flex align-center">
      <!-- Left Text -->
      <v-col cols="12" md="6" data-aos="fade-right" data-aos-duration="1200">
        <div class="text-left">
          <h1 class="jump-heading">Innovating the Future of Technology</h1>
          <h2 class="medium-desc">Pushing the boundaries of software development.</h2>
          <p class="small-desc">Transforming businesses with powerful and scalable solutions.</p>

          <div class="button-container mt-6 d-flex flex-column flex-md-row align-start" data-aos="fade-up" data-aos-delay="200">
            <v-btn
              color="gold"
              text="black"
              class="luxury-btn mb-4 mb-md-0 mr-md-4"
              href="/contact"
              aria-label="Contact us to get started with our services"
            >
              Get Started
            </v-btn>

            <v-btn
              color="white"
              class="luxury-btn"
              href="/services"
              aria-label="Explore our services in detail"
            >
              Explore Our Services
            </v-btn>
          </div>
        </div>
      </v-col>

      <!-- Right GIF -->
      <v-col cols="12" md="6" class="d-flex justify-center position-relative gif-container" data-aos="fade-left" data-aos-duration="1200">
        <v-img :src="gifSource" alt="Technology Animation" height="400px" contain loading="lazy" class="gif-image" />
        <div class="gif-overlay" />
      </v-col>
    </v-row>
  </v-container>
  </section>
</template>

<script setup>
import { isDarkMode } from '@/composables/useTheme.js';
import gifSource from '@/assets/bJk.gif'
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

@keyframes jumpLoop {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.top-section {
  padding-top: 90px;
  background-color: #000;
  color: #fff;
}

@media (max-width: 768px) {
  .top-section {
margin-bottom: 0%;
  }
}

.jump-heading {
  color: #ffd700;
  animation: jumpLoop 2s infinite ease-in-out;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

@media (max-width: 600px) {
  .jump-heading {
    margin-top: 2%;
    font-size: 1.5rem;
  }
}

.medium-desc {
  font-size: 1.5rem;
  color: #ccc;
  font-weight: 400;
  margin-top: 1rem;
  line-height: 1.4;
}

@media (max-width: 600px) {
  .medium-desc {
    margin-top: 2%;
    font-size: 1rem;
  }
}

.small-desc {
  font-size: 1.125rem;
  color: #999;
  font-weight: 400;
  margin-top: 1rem;
  line-height: 1.6;
}

@media (max-width: 600px) {
  .small-desc {
    margin-top: 2%;
    font-size: 1rem;
  }
}

.luxury-btn {
  background-color: gold;
  color: black;
  border-radius: 25px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

@media (max-width: 600px) {
  .luxury-btn {
    margin-top: 1%;
    font-size: 0.7rem;
    border-radius: 12px;
    font-weight: 300;
  }
}

.luxury-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  background-color: #111;
}

.gif-container {
  position: relative;
}

@media (max-width: 600px) {
  .gif-container {
    max-width: 100%;
    margin: auto;
    margin-bottom: 0%;
    margin-top: 0%;
  }
}

.gif-image {
  z-index: 1;
}

.gif-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
}
</style>
