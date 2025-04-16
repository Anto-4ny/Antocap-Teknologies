<template>
  <footer
    class="custom-footer"
    data-aos="fade-up"
    data-aos-duration="1000"
    itemscope
    itemtype="https://schema.org/Organization"
  >
    <v-container fluid>
      <v-row class="d-flex flex-wrap justify-space-between">

        <!-- Logo & About -->
        <v-col
          cols="12"
          sm="4"
          class="mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
          itemprop="department"
          itemscope
          itemtype="https://schema.org/Organization"
        >
          <div class="d-flex align-center justify-center justify-sm-start">
            <v-img
              :src="logo"
              alt="Antocap Teknologies Logo"
              height="90"
              width="90"
              class="mr-3"
              itemprop="logo"
              lazy-src
            />
          </div>
          <p
            class="mt-3 text-black-70 text-center text-sm-left"
            style="max-width: 320px;"
            itemprop="description"
          >
            Antocap Teknologies provides top-tier solutions in IT, software development, cybersecurity, and digital innovation.
          </p>
        </v-col>

        <v-col
  cols="12"
  sm="4"
  class="mb-6 text-center text-sm-left"
  data-aos="fade-up"
  data-aos-delay="200"
  role="navigation"
  aria-label="Quick navigation links"
>
  <h3 class="text-xl font-weight-bold mb-3 text-dark">Quick Links</h3>
  <v-list class="text-lg text-black">
    <v-list-item 
      link 
      to="/about" 
      aria-label="Navigate to the About Us page"
    >
      <v-icon left color="green" class="mr-2">mdi-check-circle</v-icon>
      About Us
    </v-list-item>

    <v-list-item 
      link 
      to="/contact" 
      aria-label="Navigate to the Contact Us page"
    >
      <v-icon left color="green" class="mr-2">mdi-check-circle</v-icon>
      Contact Us
    </v-list-item>

    <v-list-item 
      link 
      to="/service" 
      aria-label="Navigate to the Our Services page"
    >
      <v-icon left color="green" class="mr-2">mdi-check-circle</v-icon>
      Our Services
    </v-list-item>

    <v-list-item 
      link 
      to="/project" 
      aria-label="Navigate to the Our Projects page"
    >
      <v-icon left color="green" class="mr-2">mdi-check-circle</v-icon>
      Our Projects
    </v-list-item>

    <v-list-item 
      link 
      to="/blog" 
      aria-label="Navigate to the Latest Blog page"
    >
      <v-icon left color="green" class="mr-2">mdi-check-circle</v-icon>
      Latest Blog
    </v-list-item>
  </v-list>
</v-col>

      <!-- Contact & Social -->
<v-col
  cols="12"
  sm="4"
  class="text-center text-sm-left"
  data-aos="fade-up"
  data-aos-delay="300"
>
  <h3 class="text-xl font-weight-bold mb-3 text-dark">Contact Us</h3>
  <v-list class="text-lg text-black mb-3">
    <v-list-item
      link
      :href="'https://www.google.com/maps/place/Utawala,+Nairobi,+Kenya'"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Our office location in Utawala, Nairobi, Kenya"
      itemprop="address"
      itemscope
      itemtype="https://schema.org/PostalAddress"
    >
      <v-icon left color="red">mdi-map-marker</v-icon>
      <span itemprop="addressLocality">Utawala, Nairobi, Kenya</span>
    </v-list-item>
    <v-list-item
      link
      :href="'tel:+254757492614'"
      aria-label="Call Antocap Teknologies at +254 757 492 614"
    >
      <v-icon left color="green">mdi-phone</v-icon>
      <span itemprop="telephone">+254 757 492 614</span>
    </v-list-item>
    <v-list-item
      link
      :href="'mailto:antocaptechnologies@gmail.com'"
      aria-label="Email Antocap Teknologies at antocaptechnologies@gmail.com"
    >
      <v-icon left color="orange">mdi-email</v-icon>
      <span itemprop="email">antocaptechnologies@gmail.com</span>
    </v-list-item>
  </v-list>

  <!-- Social Icons -->
  <div
    class="d-flex justify-center justify-sm-start flex-wrap"
    role="group"
    aria-label="Connect with us on social media"
  >
    <v-btn
      icon
      href="https://www.facebook.com/AntocapTechnologies"
      target="_blank"
      rel="noopener noreferrer"
      class="mr-2 mb-2"
      aria-label="Visit Antocap Teknologies on Facebook"
    >
      <v-icon color="#1877F2">mdi-facebook</v-icon>
    </v-btn>
    <v-btn
      icon
      href="https://twitter.com/AntocapTech"
      target="_blank"
      rel="noopener noreferrer"
      class="mr-2 mb-2"
      aria-label="Visit Antocap Teknologies on Twitter"
    >
      <v-icon color="#1DA1F2">mdi-twitter</v-icon>
    </v-btn>
    <v-btn
      icon
      href="https://www.instagram.com/AntocapTechnologies"
      target="_blank"
      rel="noopener noreferrer"
      class="mr-2 mb-2"
      aria-label="Visit Antocap Teknologies on Instagram"
    >
      <v-icon color="#E1306C">mdi-instagram</v-icon>
    </v-btn>
    <v-btn
      icon
      href="https://www.linkedin.com/company/antocap-technologies"
      target="_blank"
      rel="noopener noreferrer"
      class="mr-2 mb-2"
      aria-label="Visit Antocap Teknologies on LinkedIn"
    >
      <v-icon color="#0077B5">mdi-linkedin</v-icon>
    </v-btn>
    <v-btn
      icon
      href="https://wa.me/254757492614"
      target="_blank"
      rel="noopener noreferrer"
      class="mr-2 mb-2"
      aria-label="Chat with Antocap Teknologies on WhatsApp"
    >
      <v-icon color="#25D366">mdi-whatsapp</v-icon>
    </v-btn>
    <v-btn
      icon
      href="https://www.youtube.com/@AntocapTechnologies"
      target="_blank"
      rel="noopener noreferrer"
      class="mb-2"
      aria-label="Watch Antocap Teknologies on YouTube"
    >
      <v-icon color="#FF0000">mdi-youtube</v-icon>
    </v-btn>
  </div>
</v-col>
</v-row>

      <!-- Divider -->
      <hr class="my-6" />

      <!-- Footer Bottom -->
      <v-row class="justify-space-between flex-wrap">
        <v-col cols="12" sm="6" class="text-center text-sm-left mb-2 mb-sm-0">
          <p class="text-sm text-black-70">
            <a href="https://www.antocapteknologies.com/" class="text-dark" aria-label="Visit Antocap Teknologies official website">Antocap Teknologies</a>, All rights reserved.
          </p>
        </v-col>
        <v-col cols="12" sm="6" class="text-center text-sm-right">
          <p class="text-sm text-black-70">
            Designed by <a href="https://www.antocapteknologies.com/" class="text-dark" aria-label="Antocap Teknologies as the designer of the site">Antocap Teknologies</a>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </footer>

  <!-- Back to Top Button -->
  <v-btn
    v-if="showScrollButton"
    class="back-to-top"
    fab
    large
    @click="scrollToTop"
    aria-label="Scroll back to the top of the page"
    title="Back to Top"
  >
    <v-icon size="28" color="white">mdi-arrow-up</v-icon>
  </v-btn>

  <!-- WhatsApp Contact Button -->
  <v-btn
    v-if="showScrollButtonn"
    class="whatsApp"
    fab
    large
    @click="openWhatsApp"
    aria-label="Open WhatsApp to chat with Antocap Teknologies"
    title="Chat on WhatsApp"
  >
    <v-icon size="28" color="white">mdi-whatsapp</v-icon>
  </v-btn>
</template>

<script setup>
import logo from '@/assets/Antocap-logo.jpg'
import { ref, onMounted, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'

const showScrollButton = ref(false)
const showScrollButtonn = ref(true)

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const openWhatsApp = () => {
  const phoneNumber = '+254757492614'
  const message = 'Hello, are you available for discussion'
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

useHead({
  title: 'Antocap Teknologies | Premium IT Solutions in Kenya & Worldwide',
  meta: [
    { name: 'description', content: 'Antocap Teknologies delivers high-end software development, cybersecurity, automation bots, digital solutions and remote IT services globally from Nairobi, Kenya.' },
    { name: 'keywords', content: 'Antocap Teknologies, Antony Ndambuki, Nairobi IT services, software development in Kenya, remote IT support, how to get cybersecurity services in Kenya, Utawala software company, website developers in Nairobi, best IT company in Kenya, AI bots Kenya, professional IT consulting, recover hacked accounts, forgotten PIN recovery, remote computer installation services' },
    { name: 'author', content: 'Antony Ndambuki' },
    { name: 'google-site-verification', content: '5hBLXfg-cAkfTMQDRDlg4h78fQ8fo6xtex41hVJFlz4' },
    
    // Open Graph (Facebook, LinkedIn, etc.)
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.antocapteknologies.com/' },
    { property: 'og:title', content: 'Antocap Teknologies | Premium IT & AI Solutions' },
    { property: 'og:description', content: 'Get premium IT services including website development, cybersecurity, bots, and remote support with Antocap Teknologies, led by CEO Antony Ndambuki.' },
    { property: 'og:image', content: 'https://www.antocapteknologies.com/assets/Antocap-logo.jpg' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: 'https://www.antocapteknologies.com/' },
    { name: 'twitter:title', content: 'Antocap Teknologies | Premium IT & AI Solutions' },
    { name: 'twitter:description', content: 'Explore high-end digital and remote IT services from Nairobi to the world with Antocap Teknologies.' },
    { name: 'twitter:image', content: 'https://www.antocapteknologies.com/assets/Antocap-logo.jpg' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Antocap Teknologies",
        "alternateName": "Antocap",
        "url": "https://www.antocapteknologies.com",
        "logo": "https://www.antocapteknologies.com/assets/Antocap-logo.jpg",
        "founder": {
          "@type": "Person",
          "name": "Antony Ndambuki"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Utawala",
          "addressLocality": "Nairobi",
          "addressCountry": "KE"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+254757492614",
          "contactType": "customer support",
          "areaServed": ["KE", "US", "GB", "CA", "AU", "UG", "TZ", "ZA"],
          "availableLanguage": ["English"]
        },
        "sameAs": [
          "https://www.facebook.com/AntocapTechnologies",
          "https://twitter.com/AntocapTech",
          "https://www.instagram.com/AntocapTechnologies",
          "https://www.linkedin.com/company/antocap-technologies",
          "https://wa.me/254757492614",
          "https://www.youtube.com/@AntocapTechnologies"
        ]
      })
    }
  ]
})
</script>

<style scoped>
.custom-footer {
  background-color: hsl(180, 12%, 92%);
  padding: 3rem 1rem 2rem;
  width: 100%;
  color: #222;
}

.text-black {
  color: #111 !important;
}

.text-black-70 {
  color: rgba(0, 0, 0, 0.7);
}

hr {
  border: none;
  border-top: 3px solid #da0c0c;
  width: 95%;
  margin: auto;
}

.back-to-top {
  position: fixed;
  bottom: 4rem; /* Raised a bit higher */
  right: 2rem;
  z-index: 9999;
  background: linear-gradient(135deg, #0d6efd, #07f1f1);
  color: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  border-radius: 50%;
}

.back-to-top:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
}

.whatsApp {
  position: fixed;
  bottom: 8rem; /* Raised a bit higher */
  right: 2rem;
  z-index: 9999;
  background: #25d366;
  color: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  border-radius: 50%;
}

.whatsApp:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
}
</style>
