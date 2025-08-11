<template>

    <TopHeroSection />
    <v-divider class="my-0" color="gold" thickness="1" />

    <CarouselSection />
    <v-divider class="my-0" color="gold" thickness="2" />

    <PremiumServices />
    <v-divider class="my-0" color="gold" thickness="2" />

    <!-- Pricing Plans Section -->
    <section class="py-16 px-4" style="background-color: #000; color: #fff">
      <v-container>
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

        <div v-for="(service, i) in services" :key="i" class="mb-16">
          <h2 class="text-h5 font-weight-bold mb-6 white--text">
            <v-icon :color="service.color" class="mr-2">{{ service.icon }}</v-icon>
            {{ service.name }}
          </h2>

          <v-row dense>
            <v-col
              v-for="(plan, j) in service.plans"
              :key="j"
              cols="12"
              sm="6"
              md="4"
              class="mb-4"
            >
              <v-card
                class="pa-4"
                style="background-color: #111; border: 1px solid gold; border-radius: 16px; box-shadow: 0 4px 12px rgba(255, 215, 0, 0.2);"
              >
                <v-card-title class="font-weight-bold text-h6 gold-accent">
                  {{ plan.name }}
                </v-card-title>

                <v-card-subtitle class="white-accent mb-2">
                  {{ plan.description }}
                </v-card-subtitle>

                <div class="mb-4">
                  <div class="white-accent mb-1">
                    <strong class="white--text">KES:</strong> {{ plan.kes.toLocaleString() }}
                  </div>
                  <div class="white-accent">
                    <strong class="white--text">USD:</strong> ${{ plan.usd.toFixed(2) }}
                  </div>
                </div>

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

                <v-btn color="yellow-darken-2" rounded block :to="`/contact?service=${service.name}`">
                  Get Started
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- Explore All Pricing Button -->
        <v-row justify="center">
          <v-col cols="12" md="4" class="text-center">
            <v-btn color="amber darken-3" class="mt-8" rounded large to="/pricing">
              <v-icon left>mdi-arrow-right-bold-box</v-icon>
              View All Pricing Plans
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

import TopHeroSection from '@/components/TopHeroSection.vue'
import CarouselSection from '@/components/CarouselSection.vue'
import PremiumServices from '@/components/PremiumServices.vue'
import SocialProofSection from '@/components/SocialProofSection.vue'
import FooterBanner from '@/components/FooterBanner.vue'
import WhyChoose from '@/components/WhyChoose.vue'

const services = [
  {
    name: 'Website Development Prices',
    icon: 'mdi-web',
    color: 'light-blue',
    plans: [
      {
        name: 'Basic',
        description: 'Simple and elegant single-page website.',
        kes: 25000,
        usd: 155,
        features: [
          { text: 'A single clean page for your business.', included: true },
          { text: 'Looks great on phones and computers.', included: true },
          { text: 'Helps people find your site on Google.', included: true },
          { text: 'Cannot update content yourself.', included: false },
          { text: 'No product buying/selling.', included: false },
        ],
      },
      {
        name: 'Advanced',
        description: 'Multi-page professional business website.',
        kes: 55000,
        usd: 426,
        features: [
          { text: 'Includes Home, About, Services, etc.', included: true },
          { text: 'Works smoothly on all screen sizes.', included: true },
          { text: 'Makes your site easier to find online.', included: true },
          { text: 'You can edit your website anytime.', included: true },
          { text: 'Not made for selling products online.', included: false },
        ],
      },
      {
        name: 'Premium',
        description: 'Advanced website with premium features.',
        kes: 85000,
        usd: 658,
        features: [
          { text: 'Perfect for b/s with lots of information.', included: true },
          { text: 'Higher chance to appear at the top on Google.', included: true },
          { text: 'Full control to update and manage your content.', included: true },
          { text: 'Sell your products or services online.', included: true },
          { text: '1 year support.', included: true },
        ],
      },
    ],
  },
]

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
/*styles for the pricing part*/
.gradient-gold-text {
  background: linear-gradient(90deg, gold, orange);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 0%;
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
</style>
