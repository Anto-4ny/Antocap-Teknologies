<template>
  <div class="home-page">
    <!-- Title -->
    <h1 id="about-title" class="display-2 font-weight-black gradient-gold-text text-center mb-8">
      About Antocap Teknologies
    </h1>

    <CarouselSection />

    <v-divider class="my-8" color="gold" thickness="2" />

    <v-container fluid class="about-page py-12 px-4 px-md-12">
      <!-- Hero Section -->
      <section role="region" aria-labelledby="about-title" class="mb-12">
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="12" md="8">
            <p class="text-subtitle-1 gold-faded-text">
              Founded by <strong class="gold-accent">Antony Ndambuki</strong> in August 2024,
              <strong class="gold-accent">Antocap Teknologies</strong> is a premium software development company
              committed to innovation, excellence, and client success.
            </p>
          </v-col>
        </v-row>
      </section>

      <!-- CEO Info -->
      <section aria-labelledby="ceo-heading" class="mb-16">
        <v-row align="center" justify="center">
          <v-col cols="12" md="4" class="text-center mb-6 mb-md-0">
            <v-avatar size="160" class="elevation-10 border-gold">
              <v-img :src="AntonyNdambuki" alt="Portrait of Antony Ndambuki" cover class="rounded-circle" />
            </v-avatar>
          </v-col>
          <v-col cols="12" md="8" class="text-center text-md-left">
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

      <PremiumServices />

      <v-divider class="my-8" color="gold" thickness="2" />

      <!-- Mission & Vision -->
      <section aria-label="Company Mission and Vision" class="mb-16">
        <v-row>
          <v-col cols="12" md="6" data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
            <v-card class="pa-6 rounded-xl elevation-8 glass-dark" role="region" aria-labelledby="mission-heading">
              <v-icon size="48" class="mb-3 gold-icon">mdi-rocket-launch</v-icon>
              <h3 id="mission-heading" class="text-h5 font-weight-bold mb-3 gradient-gold-text">Our Mission</h3>
              <p class="gold-faded-text">
                To empower businesses by building innovative, secure, and user-friendly software solutions that enhance
                performance, growth, and digital visibility.
              </p>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
            <v-card class="pa-6 rounded-xl elevation-8 glass-dark" role="region" aria-labelledby="vision-heading">
              <v-icon size="48" class="mb-3 gold-icon">mdi-eye</v-icon>
              <h3 id="vision-heading" class="text-h5 font-weight-bold mb-3 gradient-gold-text">Our Vision</h3>
              <p class="gold-faded-text">
                To become a globally recognized leader in software innovation, delivering luxurious and premium digital
                solutions tailored to client success.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <!-- Extras -->
      <WhyChoose data-aos="fade-up" data-aos-delay="100" />
      <SocialProofSection data-aos="fade-up" data-aos-delay="150" />
      <FooterBanner data-aos="fade-up" data-aos-delay="200" />
      <Testimonials />
    </v-container>
  </div>
</template>


<script setup>
import { ref } from 'vue'

import CarouselSection from '@/components/CarouselSection.vue';
import PremiumServices from '@/components/PremiumServices.vue';
import SocialProofSection from '@/components/SocialProofSection.vue'
import FooterBanner from '@/components/FooterBanner.vue'
import WhyChoose from '@/components/WhyChoose.vue'
import Testimonials from './Testimonials.vue';

import { useHead } from '@vueuse/head'
import AntonyNdambuki from '@/assets/CEO-Antony-Ndambuki.jpg'
import logo from '@/assets/Antocap-logo.jpg'

const siteUrl = 'https://antocapteknologies.com'
const pageUrl = `${siteUrl}/about`
const imageUrl = `${siteUrl}${logo}`

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
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
}

.about-page {
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

.gold-faded-text {
  color: rgba(255, 215, 0, 0.85);
}

.border-gold {
  border: 3px solid #ffd700;
}

.glass-dark {
  backdrop-filter: blur(12px);
  background: rgba(0, 0, 0, 0.65);
  border: 1px solid rgba(255, 215, 0, 0.25);
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.15);
}

.gold-icon {
  color: #ffd700;
}
</style>