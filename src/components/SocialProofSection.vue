<template>
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

    <!-- Carousel for Client Logos -->
    <carousel
      :items-to-show="4"
      :autoplay="2500"
      wrap-around
      pause-autoplay-on-hover
      class="partner-carousel"
      :breakpoints="{
        1024: { itemsToShow: 4 },
        768: { itemsToShow: 3 },
        576: { itemsToShow: 2 },
        0: { itemsToShow: 1 },
      }"
    >
      <slide v-for="(partner, index) in partners" :key="index">
        <div class="d-flex justify-center align-center logo-border-wrapper">
          <a :href="partner.url" target="_blank" rel="noopener" class="partner-link">
            <img :src="partner.logo" alt="logo" height="60" class="client-logo" />
          </a>
        </div>
      </slide>
    </carousel>

<!-- Wrap v-row with a div and put the ref on that div -->
<div ref="statsRef">
  <v-row class="text-center text-white mt-10" justify="center">
    <v-col cols="12" sm="4">
      <h3 class="gold-text text-h4 font-weight-bold">{{ count1 }}+</h3>
      <p class="text-subtitle-2 text-grey-lighten-1">Projects Delivered</p>
    </v-col>
    <v-col cols="12" sm="4">
      <h3 class="gold-text text-h4 font-weight-bold">{{ count2 }}%</h3>
      <p class="text-subtitle-2 text-grey-lighten-1">Client Retention</p>
    </v-col>
    <v-col cols="12" sm="4">
      <h3 class="gold-text text-h4 font-weight-bold">{{ count3 }}+</h3>
      <p class="text-subtitle-2 text-grey-lighten-1">Industries Served</p>
    </v-col>
  </v-row>
</div>

    <!-- CTA -->
    <v-row justify="center" class="mt-12">
      <v-col cols="12" sm="auto">
        <v-btn
          class="gold-gradient-btn rounded-pill px-8 py-4 text-white font-weight-bold text-subtitle-1"
          to="/contact"
          elevation="10"
          block
        >
          Work With Us
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

// Partners logos
const partners = ref([
  { logo: '/client-logos/Antocap-logo.jpg', url: 'https://antocapteknologies.com' },
  { logo: '/client-logos/polarhomes-logo.jpg', url: 'https://polarhomes.org' },
  { logo: '/client-logos/product-trace-ltd-logo.png', url: 'https://producttraceltd.com' },
  { logo: '/client-logos/sanfiat-logo.png', url: 'https://sanfiat.antocapteknologies.com' },
  { logo: '/client-logos/quantumincome-logo.jpg', url: 'https://quantumincome.org' }
])

// Count animation
const count1 = ref(0)
const count2 = ref(0)
const count3 = ref(0)
const statsRef = ref(null)

function animateCount(refVar, target, duration = 1000) {
  let start = 0
  const increment = Math.ceil(target / (duration / 20))
  const interval = setInterval(() => {
    start += increment
    if (start >= target) {
      refVar.value = target
      clearInterval(interval)
    } else {
      refVar.value = start
    }
  }, 20)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animateCount(count1, 600)
        animateCount(count2, 96.7)
        animateCount(count3, 15)
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  if (statsRef.value) observer.observe(statsRef.value)
})
</script>

<style scoped>
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
  width: 100%;
  max-width: 300px;
}
.gold-gradient-btn:hover {
  background: linear-gradient(135deg, #b8860b, #FFD700);
}

.partner-carousel {
  margin-bottom: 2rem;
  padding: 0 1rem;
}

/* Logo shine border */
.logo-border-wrapper {
  padding: 0.75rem;
  border-radius: 12px;
  background: linear-gradient(45deg, #FFD700, #111, #FFD700);
  background-size: 400% 400%;
  animation: shine-border 4s linear infinite;
}

@keyframes shine-border {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.client-logo {
  transition: transform 0.3s ease;
  max-width: 140px;
}

.client-logo:hover {
  transform: scale(1.1);
}

.partner-link {
  display: inline-block;
  max-width: 100%;
  padding: 0.5rem;
}
</style>
