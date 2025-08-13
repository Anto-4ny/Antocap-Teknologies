<template>

    <TopHeroSection />
      <v-divider class="my-0" color="gold" thickness="0" />
    <CarouselSection />
      <v-divider class="my-0" color="gold" thickness="2" />

    <PremiumServices />
    <v-divider class="my-0" color="gold" thickness="2" />

    <!-- Pricing Plans Section -->
<section class="py-16 px-4" style="background-color: #000; color: #fff">
  <v-container>
    <!-- Section title -->
    <v-row justify="center" class="mb-12">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="text-h4 font-weight-bold gradient-gold-text mb-4">
          <v-icon color="amber darken-3" class="mr-2">mdi-cash-multiple</v-icon>
          Pricing Plans
        </h1>
        <p class="text-subtitle-1 gold-faded-text">
          Explore our affordable and flexible pricing options tailored to your needs. Prices listed in both KES and USD.
        </p>
      </v-col>
    </v-row>

    <!-- Services Loop -->
    <div v-for="(service, i) in services" :key="i" class="mb-16">
      <h2 class="text-h5 font-weight-bold mb-6 white--text">
        <v-icon :color="service.color" class="mr-2">{{ service.icon }}</v-icon>
        {{ service.name }}
      </h2>

      <!-- Swiper Carousel -->
      <Swiper
        :modules="[Navigation, Autoplay]"
        :slides-per-view="1"
        :space-between="20"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }"
        :navigation="{
          prevEl: `.swiper-prev-${i}`,
          nextEl: `.swiper-next-${i}`
        }"
        :autoplay="{ delay: 10000, disableOnInteraction: false }"
        :speed="1000"
        loop
        class="pricing-swiper"
      >
        <!-- Pricing Cards -->
        <SwiperSlide v-for="(plan, j) in service.plans" :key="j">
          <v-card class="pa-4 position-relative pricing-card d-flex flex-column">
            <div class="save-badge">
              SAVE {{ calcSavePercent(plan.wasKes, plan.kes) }}%
            </div>

            <v-card-title class="font-weight-bold text-h6 gold-accent">
              {{ plan.name }}
            </v-card-title>

            <v-card-subtitle
              class="white-accent mb-3"
              style="white-space: normal; line-height: 1.4; min-height: 60px;"
            >
              {{ plan.description }}
            </v-card-subtitle>

            <!-- Price Details -->
            <div class="mb-4">
              <div class="white-accent mb-1">
                <strong class="white--text">was:</strong>
                <span class="line-through mr-2" style="opacity: 0.7;">
                  {{ plan.wasKes.toLocaleString() }} kes
                </span>
              </div>
              <div class="white-accent mb-3">
                <strong class="white--text">NOW:</strong>
                <span class="gold-accent">
                  {{ plan.kes.toLocaleString() }} kes
                </span>
              </div>
              <div class="white-accent mb-1">
                <strong class="white--text">was:</strong>
                <span class="line-through mr-2" style="opacity: 0.7;">
                  ${{ plan.wasUsd.toFixed(2) }}
                </span>
              </div>
              <div class="white-accent">
                <strong class="white--text">NOW:</strong>
                <span class="gold-accent">
                  ${{ plan.usd.toFixed(2) }}
                </span>
              </div>
            </div>

            <!-- Features -->
            <v-list dense class="mb-4">
              <v-list-item
                v-for="(feature, k) in plan.features"
                :key="k"
                class="px-0"
              >
                <v-icon
                  :color="feature.included ? 'green' : 'red'"
                  size="20"
                  class="mr-2"
                >
                  {{ feature.included ? 'mdi-check-circle' : 'mdi-close-circle' }}
                </v-icon>
                <span class="white--text">{{ feature.text }}</span>
              </v-list-item>
            </v-list>

            <v-spacer></v-spacer>

            <!-- CTA Button -->
            <v-btn
              color="yellow-darken-2"
              rounded
              block
              large
              class="mt-auto"
              :to="`/contact?service=${service.name}`"
            >
              Get Started
            </v-btn>
          </v-card>
        </SwiperSlide>

        <!-- Custom Navigation Arrows -->
        <div :class="`swiper-prev-${i} custom-nav-btn`">
          <v-icon color="gold" size="36">mdi-chevron-left-circle</v-icon>
        </div>
        <div :class="`swiper-next-${i} custom-nav-btn`">
          <v-icon color="gold" size="36">mdi-chevron-right-circle</v-icon>
        </div>
      </Swiper>
    </div>

    <!-- Explore All Pricing Button -->
    <v-row justify="center">
      <v-col cols="12" md="4" class="text-center">
        <v-btn color="amber darken-3" class="mt-8" rounded large to="/pricing">
          <v-icon left>mdi-arrow-right-bold-box</v-icon>
          View All Our Pricing Plans
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</section>

    <v-divider class="my-0" color="gold" thickness="2" />

    <WhyChoose />
 
    <SocialProofSection />

    <FooterBanner />
</template>


<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useHead } from '@vueuse/head';

import { isDarkMode, toggleTheme } from '@/composables/useTheme.js';

import TopHeroSection from '@/components/TopHeroSection.vue';
import CarouselSection from '@/components/CarouselSection.vue';
import PremiumServices from '@/components/PremiumServices.vue';
import SocialProofSection from '@/components/SocialProofSection.vue';
import FooterBanner from '@/components/FooterBanner.vue';
import WhyChoose from '@/components/WhyChoose.vue';

// Reactive services data
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; 


// Pricing data
const services = ref([
  {
    name: 'Website Development Prices',
    icon: 'mdi-web',
    color: 'light-blue',
    plans: [
      {
        name: 'Basic Website',
        description: 'A modern, single-page website perfect for startups or personal brands.',
        wasKes: 30000,
        kes: 25000,
        wasUsd: 185,
        usd: 155,
        features: [
          { text: 'Sleek one-page design tailored to your brand.', included: true },
          { text: 'Fully responsive for mobile, tablet, and desktop.', included: true },
          { text: 'Basic SEO to get you found on Google.', included: true },
          { text: 'Up to 3 content updates in the first month.', included: true },
          { text: 'E-commerce functionality.', included: false },
        ],
      },
      {
        name: 'Advanced Website',
        description: 'Multi-page professional website ideal for growing businesses.',
        wasKes: 68000,
        kes: 55000,
        wasUsd: 500,
        usd: 426,
        features: [
          { text: 'Up to 7 custom-designed pages (Home, About, Services, etc.).', included: true },
          { text: 'Advanced responsive design & animations.', included: true },
          { text: 'Enhanced SEO setup & analytics integration.', included: true },
          { text: 'Full content management system (CMS).', included: true },
          { text: 'Basic e-commerce integration.', included: false },
        ],
      },
      {
        name: 'Premium Website',
        description: 'Fully-featured website with powerful tools for scaling your business.',
        wasKes: 100000,
        kes: 85000,
        wasUsd: 775,
        usd: 658,
        features: [
          { text: 'Unlimited pages with advanced layouts.', included: true },
          { text: 'Priority SEO for higher Google rankings.', included: true },
          { text: 'Full e-commerce store with secure payments.', included: true },
          { text: 'Advanced CMS with user roles & permissions.', included: true },
          { text: '12 months premium support & maintenance.', included: true },
        ],
      },
            {
        name: 'Ultimate Website',
        description: 'Custom web app with all features.',
        wasKes: 140000,
        kes: 135000,
        wasUsd: 775,
        usd: 658,
        features: [
          { text: 'Designed specially for your brand and users.', included: true },
          { text: 'Private area for customers or staff to log in.', included: true },
          { text: 'Connects to other apps or systems.', included: true },
          { text: 'Stores your business or user data safely.', included: true },
          { text: 'We’re here to assist you for 2 full years.', included: true },
        ],
      },
    ],
  },
]);

// Helper
function calcSavePercent(was, now) {
  return Math.round(((was - now) / was) * 100);
}

// SEO meta
useHead({
  title: 'Antocap Teknologies | Leading IT Solutions, Web & Software Development, SEO Services, pos systems',
  meta: [
    { name: 'description', content: 'Antocap Teknologies offers innovative IT solutions, web development, software & app development, SEO services, pos systems. We help businesses achieve growth through cutting-edge technology and custom-built solutions.' },
    { name: 'keywords', content: 'pos, point of sale systems, IT solutions, web development, app development, SEO services, software development, AI-powered automation, cloud services, technology solutions' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Antony Ndambuki' },
    { name: 'google-site-verification', content: '5hBLXfg-cAkfTMQDRDlg4h78fQ8fo6xtex41hVJFlz4' },
    { property: 'og:title', content: 'Antocap Teknologies | IT Solutions, Web Development, SEO, POS' },
    { property: 'og:description', content: 'Antocap Teknologies provides top-notch IT solutions, web design, software development, SEO services, and AI-powered automation to boost your business.' },
    { property: 'og:url', content: 'https://antocapteknologies.com' },
    { property: 'og:image', content: 'https://antocapteknologies.com/logo.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Antocap Teknologies | IT & Web Solutions' },
    { name: 'twitter:description', content: 'Empowering businesses with innovative IT solutions, custom software, web design, and SEO services.' },
    { name: 'twitter:image', content: 'https://antocapteknologies.com/logo.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://antocapteknologies.com' }
  ]
});

// Structured data for homepage
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Antocap Teknologies",
        "url": "https://antocapteknologies.com",
        "logo": "https://antocapteknologies.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+254757492614",
          "contactType": "Customer Service",
          "areaServed": "KE",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://www.facebook.com/AntocapTeknologies",
          "https://www.instagram.com/antocap_technologies",
          "https://twitter.com/AntocapTech"
        ]
      })
    }
  ]
});
</script>

<style>
.gradient-gold-text {
  background: linear-gradient(90deg, gold, orange);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gold-accent {
  color: gold;
}

.gold-faded-text {
  color: rgba(255, 215, 0, 0.7);
}

.white-accent {
  color: white;
}

.save-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: gold;
  color: black;
  font-weight: bold;
  padding: 10px 18px;
  border-radius: 50px;
  font-size: 0.9rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
}

/* Make the entire pricing card a column so content pushes button down */
.pricing-card {
  background-color: #111;
  border: 1px solid gold;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.2);
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* pushes footer/button to bottom */
  padding: 16px;
}

/* Style for the Get Started button */
.pricing-card .v-btn {
  font-weight: bold;
  font-size: 1rem;
  background-color: gold !important;
  color: black !important;
  margin-top: auto; 
  padding: 2px 0;
}

.custom-nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 45%;
  z-index: 10;
  cursor: pointer;
}
.swiper-button-prev,
.swiper-button-next {
  background: transparent;
}
[class*="swiper-prev"] {
  left: 5px; /* Move left arrow outside carousel */
  color: gold;
}
[class*="swiper-next"] {
  right: 5px; /* Move right arrow outside carousel */
  color: gold;
}
</style>


