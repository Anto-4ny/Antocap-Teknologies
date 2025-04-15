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
import favicon from './assets/Antocap-logo.jpg'

// Dynamically update favicon
const setFavicon = () => {
  let link = document.querySelector("link[rel~='icon']")
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    link.type = 'image/png'
    document.head.appendChild(link)
  }
  link.href = favicon
}
setFavicon()

// SEO Metadata
useMeta({
  title: 'Antocap Teknologies | Software, App & Website Development in Nairobi, Kenya',
  meta: [
    { name: 'description', content: 'Antocap Teknologies is a leading software development company in Utawala, Nairobi, Kenya, offering software, websites, ecommerce, bots, SEO, and IT consulting services.' },
    { name: 'keywords', content: 'Antocap Teknologies, software development Nairobi, app development Kenya, ecommerce websites Nairobi, SEO services Kenya, IT consultation, bot creation, web design Kenya, Antony Ndambuki' },
    { name: 'author', content: 'Antony Ndambuki' },

    // Open Graph
    { property: 'og:title', content: 'Antocap Teknologies | Software, Websites & SEO in Nairobi, Kenya' },
    { property: 'og:description', content: 'Founded by Antony Ndambuki, Antocap Teknologies builds premium software, apps, and websites. Trusted in Nairobi and beyond.' },
    { property: 'og:image', content: favicon },
    { property: 'og:url', content: 'https://www.antocapteknologies.com/' },
    { property: 'og:type', content: 'website' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Antocap Teknologies - Premium Software & IT Services in Kenya' },
    { name: 'twitter:description', content: 'From software and app dev to SEO and bots, Antocap Teknologies delivers excellence across Africa.' },
    { name: 'twitter:image', content: favicon },
  ],
  script: [
    {
      type: 'application/ld+json',
      content: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Antocap Teknologies",
        "url": "https://www.antocapteknologies.com/",
        "logo": favicon,
        "founder": {
          "@type": "Person",
          "name": "Antony Ndambuki",
          "jobTitle": "Software Engineer",
          "description": "A young and experienced software engineer, founder of Antocap Teknologies in August 2024."
        },
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
          "https://www.linkedin.com/company/antocapteknologies",
          "https://www.youtube.com/@antocapteknologies",
          "https://www.tiktok.com/@antocapteknologies"
        ],
        "description": "Antocap Teknologies is a software and IT solutions company based in Nairobi, Kenya. We provide web and mobile development, ecommerce, SEO, bots, IT consultation, and more.",
        "serviceArea": {
          "@type": "Place",
          "name": "Africa"
        }
      })
    }
  ]
})
</script>

<style scoped>
/* You can add shared layout styles here */
</style>
