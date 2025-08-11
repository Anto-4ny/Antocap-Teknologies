<template>
    <section>
  <section
    :class="[
      'premium-section',
      'relative',
      'py-16',
      'px-4'
    ]"
  >

    <v-container>
      <!-- Section Heading -->
      <v-col cols="12" class="text-center mb-16" data-aos="fade-down" data-aos-duration="1000">
        <div class="heading-container">
          <h2 class="premium-heading" aria-label="Premium Services Section Heading">Premium Services</h2>
          <div class="line-container">
            <hr class="line-left" />
            <v-icon color="gold" class="mx-4" aria-hidden="true">mdi-diamond-stone</v-icon>
            <hr class="line-right" />
          </div>
          <h3 class="headline font-weight-light mt-2" aria-label="Subheading about innovation">
            Revolutionizing Digital Experiences
          </h3>
          <p class="description mt-4" aria-label="Section description">
            We create cutting-edge solutions designed to elevate your business to new heights.
            Experience innovation like never before.
          </p>
        </div>
      </v-col>

      <!-- Service Cards -->
      <v-row>
        <v-col
          v-for="(service, index) in services"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          class="d-flex justify-center mb-10"
        >
          <div
            class="tilt-card"
            ref="tiltCards"
            role="region"
            :aria-label="`Service card for ${service.title}`"
          >
            <v-card
              class="premium-card pa-6 text-center"
              elevation="12"
              :aria-labelledby="`service-title-${index}`"
              :aria-describedby="`service-desc-${index}`"
            >
              <!-- Icon -->
              <div
                class="icon-circle mb-5"
                :style="{ backgroundColor: service.iconBg }"
                aria-hidden="true"
              >
                <v-icon :icon="service.icon" size="38" class="text-white"></v-icon>
              </div>

              <!-- Title -->
              <h3
                class="text-h6 font-weight-bold mb-2 text-gold"
                :id="`service-title-${index}`"
              >
                {{ service.title }}
              </h3>

              <!-- Description -->
              <p
                class="text-body-2 text-light-gray mb-4"
                :id="`service-desc-${index}`"
              >
                {{ service.description }}
              </p>

              <!-- Descriptive Link Button -->
              <RouterLink
                :to="`/${service.slug}#${service.title.replace(/\s+/g, '-').toLowerCase()}`"
                class="text-decoration-none"
                :aria-label="`Learn more about ${service.title}`"
              >
                <v-btn class="gold-btn mt-2" elevation="4">
                  About {{ service.title }}
                </v-btn>
              </RouterLink>
            </v-card>
          </div>
        </v-col>
      </v-row>

      <!-- Explore More Button -->
      <v-col cols="12" class="text-center mt-8" data-aos="fade-up" data-aos-delay="200">
        <v-btn
          to="/services"
          class="gold-btn px-8 py-3"
          elevation="6"
          aria-label="Explore all our services"
        >
          Explore all Our Services
        </v-btn>
      </v-col>
    </v-container>
  </section>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { isDarkMode } from '@/composables/useTheme.js';


// Services data with accessible labels and consistent structure
const services = ref([
  {
    title: 'Website Development',
    description: 'High-performance, SEO-friendly websites built for speed, responsiveness, and aesthetics.',
    icon: 'mdi-web',
    iconBg: '#FFD700',
    slug: 'services',
    ariaLabel: 'Learn more about Website Development',
  },
  {
    title: 'Software & App Development',
    description: 'Robust mobile & desktop apps designed for scalability, performance, and security.',
    icon: 'mdi-application-brackets',
    iconBg: '#C0B283',
    slug: 'services',
    ariaLabel: 'Learn more about Software and App Development services',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your online visibility with smart keyword targeting and technical SEO.',
    icon: 'mdi-chart-line',
    iconBg: '#B8860B',
    slug: 'services',
    ariaLabel: 'Learn more about SEO Optimization services',
  },
]);

// Tilt card DOM elements will be initialized with VanillaTilt on mount
const tiltCards = ref([]);

onMounted(async () => {
  await nextTick();
  tiltCards.value.forEach(card => {
    window.VanillaTilt?.init(card, {
      max: 20,
      speed: 500,
      glare: true,
      'max-glare': 0.25,
    });
  });
});
</script>

<style scoped>
.premium-heading {
  font-size: 1.7rem;
  font-weight: 800;
  text-transform: uppercase;
  background: linear-gradient(to right, #ffd700, #ffcc00);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.75rem;
  margin-top: 0%;
}

.headline {
  font-size: 1rem;
  color: #e0e0e0;
  font-weight: 300;
}

.description {
  font-size: 1.125rem;
  color: #b0b0b0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

.line-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.25rem;
}

.line-left,
.line-right {
  width: 25%;
  border: none;
  height: 2px;
  background: linear-gradient(90deg, #ffd700, #ffcc00);
}

.premium-card {
  position: relative;
  border-radius: 20px;
  background-color: #1e1e1e;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 40px rgba(255, 215, 0, 0.05);
  transition: transform 0.4s ease, box-shadow 0.3s ease;
  z-index: 2;
}

.premium-card:hover {
  transform: scale(1.03);
  box-shadow: 0 20px 50px rgba(255, 215, 0, 0.1);
}


.icon-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 6px 15px rgba(255, 215, 0, 0.2);
  transition: transform 0.4s ease;
}

.premium-card:hover .icon-circle {
  transform: scale(1.15);
  box-shadow: 0 0 35px rgb(223, 222, 220);
  transform: translateY(-4px);
}

.text-gold {
  color: #ffd700;
}

.text-light-gray {
  color: #c0c0c0;
}

.gold-btn {
  background: linear-gradient(90deg, #ffd700, #ffcc00);
  color: #1a1a1a !important;
  font-weight: 600;
  border-radius: 999px;
  text-transform: none;
  transition: background 0.3s ease;
}

.gold-btn:hover {
  background: linear-gradient(90deg, #ffcc00, #ffd700);
}

.tilt-card {
  width: 100%;
}
</style>

