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

const publicImageUrl = 'https://www.antocapteknologies.com/Antocap-logo.jpg'

// SEO Metadata
useMeta({
  title: 'Antocap Teknologies | Software, App & Website Development in Nairobi, Kenya',
  meta: [
    { name: 'description', content: 'Antocap Teknologies is a leading software development company in Utawala, Nairobi, Kenya, offering software, websites, ecommerce, bots, SEO, and IT consulting services.' },
    { name: 'keywords', content: 'Antocap Teknologies, software development Nairobi, app development Kenya, ecommerce websites Nairobi, SEO services Kenya, IT consultation, bot creation, web design Kenya, Antony Ndambuki' },
    { name: 'author', content: 'Antony Ndambuki' },
    { name: 'google-site-verification', content: '5hBLXfg-cAkfTMQDRDlg4h78fQ8fo6xtex41hVJFlz4' },

    { property: 'og:title', content: 'Antocap Teknologies | Software, Websites & SEO in Nairobi, Kenya' },
    { property: 'og:description', content: 'Antocap Teknologies is a leading software development company in Utawala, Nairobi, Kenya, offering software, websites, ecommerce, bots, SEO, and IT consulting services. Founded by Antony Ndambuki, Antocap Teknologies builds premium software, apps, and websites. Trusted in Nairobi and beyond.' },
    { property: 'og:image', content: publicImageUrl },
    { property: 'og:url', content: 'https://www.antocapteknologies.com/' },
    { property: 'og:type', content: 'website' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Antocap Teknologies - Premium Software & IT Services in Kenya' },
    { name: 'twitter:description', content: 'From software and app dev to SEO and bots, Antocap Teknologies delivers excellence across Africa.' },
    { name: 'twitter:image', content: publicImageUrl }
  ],
  script: [
    {
      type: 'application/ld+json',
      content: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Antocap Teknologies",
        "url": "https://www.antocapteknologies.com/",
        "logo": publicImageUrl,
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
