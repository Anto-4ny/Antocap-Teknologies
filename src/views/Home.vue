<template>
  <div :class="['home-page', { 'light-mode': !isDarkMode }]">
    <div class="theme-toggle" @click="toggleTheme">
      <v-icon
        :class="{ 'bulb-on': !isDarkMode, 'bulb-off': isDarkMode }"
        size="40"
      >mdi-lightbulb</v-icon>
    </div>

    <TopHeroSection />
    <CarouselSection />
    <PremiumServices />
    <WhyChoose />
    <SocialProofSection />
    <FooterBanner />
  </div>
</template>


<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useHead } from '@vueuse/head';

import { isDarkMode, toggleTheme } from '@/composables/useTheme.js';

import TopHeroSection from '@/components/TopHeroSection.vue'
import CarouselSection from '@/components/CarouselSection.vue'
import PremiumServices from '@/components/PremiumServices.vue'
import SocialProofSection from '@/components/SocialProofSection.vue'
import FooterBanner from '@/components/FooterBanner.vue'
import WhyChoose from '@/components/WhyChoose.vue'



// SEO meta
useHead({
  title: 'Antocap Teknologies | Leading IT Solutions, Web & Software Development, SEO Services',
  meta: [
    { name: 'description', content: 'Antocap Teknologies offers innovative IT solutions, web development, software & app development, and SEO services. We help businesses achieve growth through cutting-edge technology and custom-built solutions.' },
    { name: 'keywords', content: 'IT solutions, web development, app development, SEO services, software development, AI-powered automation, cloud services, technology solutions' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Antony Ndambuki' },
    { name: 'google-site-verification', content: '5hBLXfg-cAkfTMQDRDlg4h78fQ8fo6xtex41hVJFlz4' },
    { property: 'og:title', content: 'Antocap Teknologies | IT Solutions, Web Development, SEO' },
    { property: 'og:description', content: 'Antocap Teknologies provides top-notch IT solutions, web design, software development, SEO services, and AI-powered automation to boost your business.' },
    { property: 'og:url', content: 'https://www.antocapteknologies.com' },
    { property: 'og:image', content: 'https://www.antocapteknologies.com/logo.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Antocap Teknologies | IT & Web Solutions' },
    { name: 'twitter:description', content: 'Empowering businesses with innovative IT solutions, custom software, web design, and SEO services.' },
    { name: 'twitter:image', content: 'https://www.antocapteknologies.com/logo.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.antocapteknologies.com' }
  ]
})

// Structured data for homepage
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Antocap Teknologies",
        "url": "https://www.antocapteknologies.com",
        "logo": "https://www.antocapteknologies.com/logo.png",
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
})
</script>

<style scoped>
.home-page {
  background-color: #000;
  color: #fff;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.home-page.light-mode {
  background-color: #f9f9f9;
  color: #222;
}

.theme-toggle {
  position: fixed;
  top: 90px;
  right: 20px;
  cursor: pointer;
  z-index: 1000;
}

.theme-toggle .v-icon {
  transition: color 0.3s ease, text-shadow 0.3s ease;
  color: #ffd700;
}

.theme-toggle .bulb-off {
  opacity: 0.6;
  filter: grayscale(1);
}

.theme-toggle .bulb-on {
  color: #ffd700;
  text-shadow: 0 0 10px #ffd700, 0 0 20px #ffea00;
}
</style>
