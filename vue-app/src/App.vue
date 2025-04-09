<template>
  <v-app>
    <!-- Global Header -->
    <Header />

    <!-- Router View for Pages -->
    <router-view />

    <!-- Global Footer -->
    <Footer />
  </v-app>
</template>

<script setup>
import { useMeta } from 'vue-meta'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import '@fortawesome/fontawesome-free/css/all.css';


// Setting SEO metadata using vue-meta (recommended for Vue)
useMeta({
  title: 'Software Development Company in Nairobi, Kenya | Web & Mobile Apps - Antocap Teknologies',
  meta: [
    { name: 'description', content: 'Looking for the best software development company in Nairobi, Kenya? We build fast, modern, and scalable websites and apps.' },
    { name: 'keywords', content: 'software development company in Nairobi, Kenya, web development in Africa, custom mobile apps Nairobi, Antocap Teknologies' },
    { property: 'og:title', content: 'Antocap Teknologies - Software & Website Development in Nairobi, Kenya' },
    { property: 'og:description', content: 'Antocap Teknologies provides custom software solutions, websites, and apps for businesses across Africa.' },
    { property: 'og:image', content: 'https://www.antocapteknologies.com/img/Antocap-logo.jpg' },
    { property: 'og:url', content: 'https://www.antocapteknologies.com/' },
    { property: 'og:type', content: 'website' }
  ],
  script: [
    {
      type: 'application/ld+json',
      content: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Antocap Teknologies",
        "url": "https://www.antocapteknologies.com/",
        "logo": "https://www.antocapteknologies.com/img/Antocap-logo.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Utawala",
          "addressLocality": "Nairobi",
          "addressCountry": "Kenya"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+254757492614",
          "contactType": "customer service"
        },
        "sameAs": [
          "https://www.facebook.com/antocapteknologies",
          "https://twitter.com/antocapteknologies",
          "https://www.instagram.com/antocap__teknologies",
          "https://www.linkedin.com/company/antocapteknologies"
        ]
      })
    }
  ]
})
</script>

<style scoped>
/* You can add shared layout styles here */
</style>
