<template>
  <v-container
    fluid
    class="about-page py-12 px-4 px-md-12"
    style="background-color: #f5f7fa;"
  >
    <!-- Hero Section -->
    <section role="region" aria-labelledby="about-title">
      <v-row align="center" justify="center" class="text-center mb-12" data-aos="fade-down">
        <v-col cols="12" md="8">
          <h1 id="about-title" class="text-h3 font-weight-bold mb-4">About Antocap Teknologies</h1>
          <p class="text-subtitle-1">
            Founded by Antony Ndambuki in August 2024, Antocap Teknologies is a premium software development company committed to innovation, excellence, and client success.
          </p>
        </v-col>
      </v-row>
    </section>

    <!-- Image and CEO Info -->
    <section aria-labelledby="ceo-heading">
      <v-row align="center" justify="center" class="mb-16">
        <v-col cols="12" md="5" data-aos="fade-right">
          <v-img
            :src="AntonyNdambuki"
            alt="Portrait of Antony Ndambuki, Founder of Antocap Teknologies"
            aspect-ratio="2/3"
            class="rounded-xl elevation-10"
            cover
            lazy-src="/lazy-placeholder.jpg"
            loading="lazy"
          />
        </v-col>
        <v-col cols="12" md="7" data-aos="fade-left">
          <h2 id="ceo-heading" class="text-h4 font-weight-bold mb-3">Meet Our Founder</h2>
          <p class="text-body-1">
            Antony Ndambuki, a young and experienced software engineer, founded Antocap Teknologies with a mission to deliver transformative digital solutions.
            Under his leadership, we’ve helped businesses unlock their digital potential with cutting-edge software, apps, websites, and IT support.
          </p>
        </v-col>
      </v-row>
    </section>

    <!-- Mission & Vision -->
    <section aria-label="Company Mission and Vision" class="mb-16">
      <v-row>
        <v-col cols="12" md="6" data-aos="zoom-in-up">
          <v-card class="pa-6 rounded-xl elevation-6" role="region" aria-labelledby="mission-heading">
            <v-icon size="48" class="mb-2" color="primary" aria-hidden="true">mdi-rocket-launch</v-icon>
            <h3 id="mission-heading" class="text-h5 font-weight-bold mb-2">Our Mission</h3>
            <p>
              To empower businesses by building innovative, secure, and user-friendly software solutions that enhance performance, growth, and digital visibility.
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" data-aos="zoom-in-up" data-aos-delay="200">
          <v-card class="pa-6 rounded-xl elevation-6" role="region" aria-labelledby="vision-heading">
            <v-icon size="48" class="mb-2" color="secondary" aria-hidden="true">mdi-eye</v-icon>
            <h3 id="vision-heading" class="text-h5 font-weight-bold mb-2">Our Vision</h3>
            <p>
              To become a globally recognized leader in software innovation, delivering luxurious and premium digital solutions tailored to client success.
            </p>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <!-- Why Choose Us -->
    <section role="region" aria-labelledby="why-choose-heading" class="text-center mb-16">
      <v-row>
        <v-col cols="12">
          <h2 id="why-choose-heading" class="text-h4 font-weight-bold mb-6" data-aos="fade-up">Why Choose Antocap Teknologies?</h2>
        </v-col>

        <v-col cols="12" md="4" data-aos="fade-up" data-aos-delay="100">
          <v-icon size="48" color="success" class="mb-3" aria-hidden="true">mdi-star-circle</v-icon>
          <h3 class="text-h6 font-weight-medium mb-2">Premium Quality</h3>
          <p>We craft every solution with precision and luxury in mind.</p>
        </v-col>

        <v-col cols="12" md="4" data-aos="fade-up" data-aos-delay="200">
          <v-icon size="48" color="info" class="mb-3" aria-hidden="true">mdi-speedometer</v-icon>
          <h3 class="text-h6 font-weight-medium mb-2">Speed & Performance</h3>
          <p>Our systems are optimized for speed, SEO, and seamless user experience.</p>
        </v-col>

        <v-col cols="12" md="4" data-aos="fade-up" data-aos-delay="300">
          <v-icon size="48" color="purple" class="mb-3" aria-hidden="true">mdi-account-group</v-icon>
          <h3 class="text-h6 font-weight-medium mb-2">Client-Centered</h3>
          <p>We work closely with our clients to deliver solutions that meet real business needs.</p>
        </v-col>
      </v-row>
    </section>

    <SocialProofSection />
    <FooterBanner />
  </v-container>
</template>


<script setup>
import SocialProofSection from '@/components/SocialProofSection.vue'
import FooterBanner from '@/components/FooterBanner.vue'

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
.about-page {
  font-family: 'Inter', sans-serif;
  margin-top: 5%;
}

@media (max-width: 600px) {
  .about-page {
    margin-top: 20%;
  }
}
</style>
