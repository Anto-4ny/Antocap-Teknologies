<template>
  <div :class="['home-page', { 'light-mode': !isDarkMode }]">
    <!-- Theme Toggle -->
    <div class="theme-toggle" @click="toggleTheme">
      <v-icon
        :class="{ 'bulb-on': !isDarkMode, 'bulb-off': isDarkMode }"
        size="40"
        aria-label="Toggle light/dark mode"
      >mdi-lightbulb</v-icon>
    </div>

    <v-container fluid class="about-page py-12 px-4 px-md-12">
      <!-- Hero Section -->
      <section role="region" aria-labelledby="about-title">
        <v-row align="center" justify="center" class="text-center mb-12">
          <v-col cols="12" md="8">
            <h1 id="about-title" class="display-2 font-weight-black gradient-gold-text mb-4">
              About Antocap Teknologies
            </h1>
            <p class="text-subtitle-1 gold-faded-text">
              Founded by <strong class="gold-accent">Antony Ndambuki</strong> in August 2024,
              <strong class="gold-accent">Antocap Teknologies</strong> is a premium software development company
              committed to innovation, excellence, and client success.
            </p>
          </v-col>
        </v-row>
      </section>

      <!-- CEO Info -->
      <section aria-labelledby="ceo-heading">
        <v-row align="center" justify="center" class="mb-16">
          <v-col cols="12" md="4" class="text-center mb-6 mb-md-0">
            <v-avatar size="160" class="elevation-10">
              <v-img :src="AntonyNdambuki" alt="Portrait of Antony Ndambuki" cover class="rounded-circle" />
            </v-avatar>
          </v-col>
          <v-col cols="12" md="8">
            <h2 id="ceo-heading" class="text-h4 font-weight-bold mb-3 gradient-gold-text">
              Meet Our Founder
            </h2>
            <p class="text-body-1 gold-faded-text">
              <strong class="gold-accent">Antony Ndambuki</strong>, a young and experienced software engineer,
              founded Antocap Teknologies to deliver transformative digital solutions. We've helped businesses unlock
              their potential through cutting-edge software, websites, apps, and IT support.
            </p>
          </v-col>
        </v-row>
      </section>

<!-- Services Section -->
<section aria-labelledby="services-heading" class="mb-16" role="region">
  <v-row align="center" justify="center" class="mb-12">
    <v-col cols="12" md="8" class="text-center">
      <h2 id="services-heading" class="text-h4 font-weight-bold mb-4 gradient-gold-text">
        Our Services
      </h2>
      <p class="text-subtitle-1 gold-faded-text">
        At <strong class="gold-accent">Antocap Teknologies</strong>, we offer a wide range of cutting-edge digital services
        tailored to meet both individual and business needs.
      </p>
    </v-col>
  </v-row>

  <v-container fluid>
    <v-row>
      <v-col
        v-for="(service, index) in services"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        class="mb-8"
        data-aos="fade-up"
        data-aos-once="true"
        :data-aos-delay="index * 100"
        role="article"
        :aria-label="`${service.title} service`"
      >
        <div class="d-flex align-center mb-3 cursor-pointer" @click="expanded === index ? expanded = null : expanded = index">
          <v-icon :color="service.color" class="mr-2" size="32" aria-hidden="true">{{ service.icon }}</v-icon>
          <h3 class="text-subtitle-1 font-weight-bold white--text mb-0">{{ service.title }}</h3>
        </div>

        <v-expand-transition>
          <div v-if="expanded === index" class="pl-6 mt-2" aria-expanded="true">
            <p class="white--text mb-3" :aria-label="service.description">{{ service.description }}</p>

            <v-btn
              color="yellow-darken-2"
              class="mr-2 mb-2"
              size="small"
              rounded
              to="/contact"
              aria-label="Contact us about {{ service.title }}"
            >
              Contact Us
            </v-btn>

            <v-btn
              color="primary"
              class="mr-2 mb-2"
              size="small"
              rounded
              :to="`/pricing#${service.title.toLowerCase().replace(/[^a-z]+/g, '-')}`"
              aria-label="View pricing for {{ service.title }}"
            >
              View Pricing
            </v-btn>

            <v-btn
              color="green"
              class="mb-2"
              size="small"
              rounded
              to="/projects"
              aria-label="See projects related to {{ service.title }}"
            >
              View Projects
            </v-btn>
          </div>
        </v-expand-transition>

        <div v-if="expanded !== index" class="mt-2">
          <v-btn
            color="white"
            variant="outlined"
            size="small"
            class="text-capitalize"
            @click="expanded = index"
            aria-label="Learn more about {{ service.title }}"
          >
            Learn More
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</section>

      <!-- Mission & Vision -->
      <section aria-label="Company Mission and Vision" class="mb-16">
        <v-row>
          <v-col cols="12" md="6" data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
            <v-card class="pa-6 rounded-xl elevation-8 glass-dark text-white" role="region" aria-labelledby="mission-heading">
              <v-icon size="48" class="mb-2 gold-icon">mdi-rocket-launch</v-icon>
              <h3 id="mission-heading" class="text-h5 font-weight-bold mb-2 gradient-gold-text">Our Mission</h3>
              <p class="gold-faded-text">
                To empower businesses by building innovative, secure, and user-friendly software solutions that enhance
                performance, growth, and digital visibility.
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
            <v-card class="pa-6 rounded-xl elevation-8 glass-dark text-white" role="region" aria-labelledby="vision-heading">
              <v-icon size="48" class="mb-2 gold-icon">mdi-eye</v-icon>
              <h3 id="vision-heading" class="text-h5 font-weight-bold mb-2 gradient-gold-text">Our Vision</h3>
              <p class="gold-faded-text">
                To become a globally recognized leader in software innovation, delivering luxurious and premium digital
                solutions tailored to client success.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <!-- Additional Sections -->
      <div data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
        <WhyChoose />
      </div>

      <div data-aos="fade-up" data-aos-once="true" data-aos-delay="150">
        <SocialProofSection />
      </div>

      <div data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
        <FooterBanner />
      </div>
      <Testimonials />
    </v-container>
  </div>
</template>


<script setup>
import { ref } from 'vue'

import SocialProofSection from '@/components/SocialProofSection.vue'
import FooterBanner from '@/components/FooterBanner.vue'
import WhyChoose from '@/components/WhyChoose.vue'
import Testimonials from './Testimonials.vue';
import { isDarkMode, toggleTheme } from '@/composables/useTheme.js';

import { useHead } from '@vueuse/head'
import AntonyNdambuki from '@/assets/CEO-Antony-Ndambuki.jpg'
import logo from '@/assets/Antocap-logo.jpg'

const siteUrl = 'https://antocapteknologies.com'
const pageUrl = `${siteUrl}/about`
const imageUrl = `${siteUrl}${logo}`

const expanded = ref(null);

const services = [
  {
    icon: 'mdi-web',
    title: 'Website Design & Development',
    color: 'light-blue',
    description: 'We build stunning, responsive websites tailored to your brand and optimized for performance.'
  },
  {
    icon: 'mdi-android',
    title: 'App Development',
    color: 'green',
    description: 'We create fast, scalable Android and iOS apps using modern technologies and intuitive design.'
  },
  {
    icon: 'mdi-briefcase-outline',
    title: 'Management Systems',
    color: 'indigo',
    description: 'From school systems to inventory tools, we develop smart management software for operations.'
  },
  {
    icon: 'mdi-cash-register',
    title: 'Billing Systems',
    color: 'orange',
    description: 'Custom billing and invoicing solutions that simplify and automate your business transactions.'
  },
  {
    icon: 'mdi-chart-line',
    title: 'SEO Services',
    color: 'purple',
    description: 'Boost your visibility on Google with our data-driven SEO strategies and audits.'
  },
  {
    icon: 'mdi-robot',
    title: 'Bot Creation',
    color: 'teal',
    description: 'From chatbots to automation bots, we craft powerful solutions to streamline workflows.'
  },
  {
    icon: 'mdi-desktop-classic',
    title: 'Computer Maintenance',
    color: 'red',
    description: 'We offer reliable onsite and remote maintenance to keep your systems running smoothly.'
  },
  {
    icon: 'mdi-lock-reset',
    title: 'PC PIN Recovery',
    color: 'amber',
    description: 'Locked out of your computer? We securely recover or reset forgotten passwords or PINs.'
  },
  {
    icon: 'mdi-shield-refresh',
    title: 'Account/Device Unhacking',
    color: 'deep-purple',
    description: 'Recover hacked social media or computer accounts with our expert digital security services.'
  },
  {
    icon: 'mdi-server',
    title: 'IT Services',
    color: 'cyan',
    description: 'We provide a full range of IT support, infrastructure setup, and cloud solutions.'
  }
];

useHead({
  title: 'About Us - Antocap Teknologies',
  meta: [
    // Basic Meta
    {
      name: 'description',
      content:
        'Learn more about Antocap Teknologies, founded by Antony Ndambuki. Explore our premium IT services, digital solutions, software innovation, and commitment to excellence.'
    },
    {
      name: 'keywords',
      content:
        'Antocap Teknologies, Antony Ndambuki, software development, app development, IT company, tech startup, full stack development, frontend, backend, mobile apps, cloud computing, AI, SaaS, IT support, cybersecurity, tech consultancy, digital agency, UI/UX, DevOps, ecommerce development, database design, system automation, enterprise solutions'
    },
    { name: 'author', content: 'Antony Ndambuki' },
    { name: 'robots', content: 'index, follow' },
    {
      name: 'google-site-verification',
      content: '5hBLXfg-cAkfTMQDRDlg4h78fQ8fo6xtex41hVJFlz4'
    },

    // Open Graph
    { property: 'og:title', content: 'About Antocap Teknologies' },
    {
      property: 'og:description',
      content:
        'Founded by Antony Ndambuki in 2024, Antocap Teknologies is a premium tech company delivering digital excellence.'
    },
    { property: 'og:image', content: imageUrl },
    { property: 'og:url', content: pageUrl },
    { property: 'og:type', content: 'website' },

    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'About Antocap Teknologies' },
    {
      name: 'twitter:description',
      content:
        'Discover the story behind Antocap Teknologies and our founder Antony Ndambuki.'
    },
    { name: 'twitter:image', content: imageUrl }
  ],
  link: [
    { rel: 'canonical', href: pageUrl },
    { rel: 'alternate', hreflang: 'en', href: pageUrl },
    { rel: 'alternate', hreflang: 'sw', href: `${pageUrl}?lang=sw` }
  ],
  script: [
    // Organization Structured Data
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Antocap Teknologies',
        url: siteUrl,
        logo: imageUrl,
        founder: {
          '@type': 'Person',
          name: 'Antony Ndambuki',
          jobTitle: 'CEO & Founder',
          url: pageUrl,
          sameAs: [
            'https://www.linkedin.com/in/antony',
            'https://github.com/Anto-4ny'
          ]
        },
        foundingDate: '2024-08',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Utawala',
          addressRegion: 'Nairobi',
          addressCountry: 'KE'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'antocaptechnologies@gmail.com',
          contactType: 'Customer Support',
          availableLanguage: ['English', 'Swahili']
        },
        sameAs: [
          'https://www.facebook.com/antocap',
          'https://www.instagram.com/antocap'
        ]
      })
    },

    // WebSite Structured Data
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: siteUrl,
        name: 'Antocap Teknologies',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      })
    },

    // WebPage Structured Data
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'About Us - Antocap Teknologies',
        url: pageUrl,
        description:
          'Learn more about Antocap Teknologies, our founder Antony Ndambuki, and our mission to deliver transformative digital experiences.'
      })
    },

    // Breadcrumb Structured Data
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About',
            item: pageUrl
          }
        ]
      })
    },

    // Service Structured Data
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType:
          'Custom Software Development, Web & App Design, Tech Consultation',
        provider: {
          '@type': 'Organization',
          name: 'Antocap Teknologies',
          url: siteUrl
        },
        areaServed: {
          '@type': 'Country',
          name: 'Kenya'
        },
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: `${siteUrl}/contact`
        }
      })
    }
  ]
})
</script>

<style scoped>
.home-page {
  background-color: #0a0a0a;
  color: #ffffff;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.home-page.light-mode {
  background-color: #f9f9f9;
  color: #1a1a1a;
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

.about-page {
  font-family: 'Inter', sans-serif;
  margin-top: 5%;
}

@media (max-width: 600px) {
  .about-page {
    margin-top: 20%;
  }
}

.gradient-gold-text {
  background: linear-gradient(to right, #ffd700, #fff8dc);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gold-accent {
  color: #ffd700;
}

.text-soft-white {
  color: rgba(255, 255, 255, 0.85);
}

.icon-blue {
  color: #2196f3;
}
.icon-green {
  color: #4caf50;
}
.icon-teal {
  color: #009688;
}

.border-gold {
  border: 4px solid #ffd700;
}

.glass-dark {
  backdrop-filter: blur(14px);
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 215, 0, 0.2);
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.1);
}

</style>
