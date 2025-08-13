<template>
  <v-app :class="{ 'light-mode': !isDarkMode, 'dark-mode': isDarkMode }">
    <!-- Theme Toggle Button -->
    <div class="theme-toggle" @click="toggleTheme">
      <v-icon
        :class="{ 'bulb-on': !isDarkMode, 'bulb-off': isDarkMode }"
        size="40"
      >mdi-lightbulb</v-icon>
    </div>

    <!-- Header, Content, Footer -->
    <Header />
    <router-view />
    <Footer />
  </v-app>
</template>

<script setup>
import { useMeta } from 'vue-meta'
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import favicon from './assets/Antocap-logo.jpg'

const isDarkMode = ref(true)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

// Load theme preference from localStorage
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  }
})

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

const publicImageUrl = 'https://antocapteknologies.com/Antocap-logo.jpg'

// SEO Metadata
useMeta({
  title: 'Antocap Teknologies | Software, App & Website Development in Nairobi, Kenya',
  meta: [
    {
      name: 'description',
      content:
        'Antocap Teknologies is a top software development company in Utawala, Nairobi, Kenya. We offer professional software, mobile apps, ecommerce websites, SEO, bots, and IT consulting services.'
    },
    {
      name: 'keywords',
      content:
        'Antocap Teknologies, software development Nairobi, app development Kenya, ecommerce websites Nairobi, SEO services Kenya, IT consulting, bot creation, web design Kenya, Antony Ndambuki, website developers Nairobi'
    },
    { name: 'author', content: 'Antony Ndambuki' },
    { name: 'google-site-verification', content: '5hBLXfg-cAkfTMQDRDlg4h78fQ8fo6xtex41hVJFlz4' },

    // Open Graph
    {
      property: 'og:title',
      content:
        'Antocap Teknologies | Premium Software, Websites & SEO in Nairobi, Kenya'
    },
    {
      property: 'og:description',
      content:
        'Antocap Teknologies, founded by Antony Ndambuki, delivers premium software, mobile apps, ecommerce websites, bots, and SEO services in Nairobi and across Africa.'
    },
    { property: 'og:image', content: publicImageUrl },
    { property: 'og:url', content: 'https://antocapteknologies.com/' },
    { property: 'og:type', content: 'website' },

    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content:
        'Antocap Teknologies - Premium Software & IT Services in Kenya'
    },
    {
      name: 'twitter:description',
      content:
        'From software and app development to SEO and automation bots, Antocap Teknologies delivers trusted IT solutions across Africa.'
    },
    { name: 'twitter:image', content: publicImageUrl }
  ],

  // Structured Data
  script: [
    {
      type: 'application/ld+json',
      content: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Antocap Teknologies",
        "url": "https://antocapteknologies.com/",
        "logo": publicImageUrl,
        "founder": {
          "@type": "Person",
          "name": "Antony Ndambuki",
          "jobTitle": "Software Engineer",
          "description": "Antony Ndambuki, a skilled software engineer, founded Antocap Teknologies in August 2024 to deliver innovative digital solutions."
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Utawala",
          "addressLocality": "Nairobi",
          "addressRegion": "Nairobi County",
          "postalCode": "00100",
          "addressCountry": "Kenya"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+254757492614",
          "contactType": "Customer Service",
          "areaServed": "Africa",
          "availableLanguage": ["English", "Swahili"]
        },
        "sameAs": [
          "https://www.facebook.com/antocapteknologies",
          "https://twitter.com/antocapteknologies",
          "https://www.instagram.com/antocap__teknologies",
          "https://www.linkedin.com/company/antocapteknologies",
          "https://www.youtube.com/@antocapteknologies",
          "https://www.tiktok.com/@antocapteknologies"
        ],
        "description":
          "Antocap Teknologies is a Nairobi-based software and IT solutions company offering custom software, mobile apps, ecommerce platforms, SEO, bots, and consulting services.",
        "serviceArea": [
          { "@type": "Place", "name": "Kenya" },
          { "@type": "Place", "name": "Africa" }
        ]
      })
    }
  ]
});
</script>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 6%;
  right: 5%;
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

.dark-mode {
  background-color: #000 !important;
  color: #fff !important;
}

.light-mode {
  background-color: #f9f9f9 !important;
  color: #111 !important;
}
</style>
