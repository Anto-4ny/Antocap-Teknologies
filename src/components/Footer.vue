<template>
  <section class="dark-bg">
    <footer
      class="custom-footer"
      data-aos="fade-up"
      data-aos-duration="1000"
      itemscope
      itemtype="https://schema.org/Organization"
    >
      <v-container fluid>
        <v-row class="justify-space-between flex-wrap">

          <!-- Logo & About -->
          <v-col
            cols="12"
            sm="4"
            class="footer-col text-center"
            data-aos="fade-up"
            data-aos-delay="100"
            itemprop="department"
            itemscope
            itemtype="https://schema.org/Organization"
          >
            <v-img
              :src="logo"
              alt="Antocap Teknologies Logo"
              height="60"
              width="60"
              class="mb-3 mx-auto"
              itemprop="logo"
              lazy-src
            />
            <p class="footer-about mx-auto" itemprop="description">
              Antocap Teknologies provides top-tier solutions in IT, software development, cybersecurity, and digital innovation.
            </p>
          </v-col>

          <!-- Quick Links -->
          <v-col
            cols="12"
            sm="4"
            class="footer-col"
            data-aos="fade-up"
            data-aos-delay="200"
            role="navigation"
            aria-label="Quick navigation links"
          >
            <h3 class="footer-title text-center text-sm-left">Quick Links</h3>
            <v-row>
              <v-col cols="6">
                <v-list class="footer-list">
                  <v-list-item link to="/"><span>Home</span></v-list-item>
                  <v-list-item link to="/about"><span>About Us</span></v-list-item>
                  <v-list-item link to="/pricing"><span>Pricing</span></v-list-item>
                  <v-list-item link to="/contact"><span>Contact Us</span></v-list-item>
                </v-list>
              </v-col>
              <v-col cols="6">
                <v-list class="footer-list">
                  <v-list-item link to="/service"><span>Our Services</span></v-list-item>
                  <v-list-item link to="/project"><span>Our Projects</span></v-list-item>
                  <v-list-item link to="/blog"><span>Latest Blog</span></v-list-item>
                  <v-list-item link to="/testimonials"><span>Rating & Reviews</span></v-list-item> 
                </v-list>
              </v-col>
            </v-row>
          </v-col>

          <!-- Contact & Social -->
          <v-col
            cols="12"
            sm="4"
            class="footer-col text-center text-sm-left"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 class="footer-title text-center text-sm-left">Contact Us</h3>
            <v-list class="footer-list">
              <v-list-item
                link
                :href="'https://www.google.com/maps/place/Utawala,+Nairobi,+Kenya'"
                target="_blank"
                rel="noopener noreferrer"
                itemprop="address"
                itemscope
                itemtype="https://schema.org/PostalAddress"
              >
                <span itemprop="addressLocality">Utawala, Nairobi, Kenya</span>
              </v-list-item>
              <v-list-item link :href="'tel:+254757492614'">
                <span itemprop="telephone">+254 757 492 614</span>
              </v-list-item>
              <v-list-item link :href="'mailto:antocaptechnologies@gmail.com'">
                <span itemprop="email">antocaptechnologies@gmail.com</span>
              </v-list-item>
            </v-list>

            <!-- Social Icons -->
            <div class="d-flex justify-center justify-sm-start flex-wrap mt-2">
              <v-btn icon href="https://www.facebook.com/AntocapTechnologies" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Facebook">
                <v-icon color="#1877F2">mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon href="https://twitter.com/AntocapTech" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Twitter">
                <v-icon color="#1DA1F2">mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon href="https://www.instagram.com/AntocapTechnologies" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Instagram">
                <v-icon color="#E1306C">mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon href="https://www.linkedin.com/company/antocap-technologies" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="LinkedIn">
                <v-icon color="#0077B5">mdi-linkedin</v-icon>
              </v-btn>
              <v-btn icon href="https://www.youtube.com/@AntocapTechnologies" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="YouTube">
                <v-icon color="#FF0000">mdi-youtube</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <hr class="footer-divider" />

        <!-- Footer Bottom -->
        <v-row class="justify-space-between flex-wrap mt-2">
          <v-col cols="12" sm="6" class="text-center text-sm-left">
            <p class="footer-note">
              <a href="https://www.antocapteknologies.com/" class="text-gold">Antocap Teknologies</a>, All rights reserved.
            </p>
          </v-col>
          <v-col cols="12" sm="6" class="text-center text-sm-right">
            <p class="footer-note">
              Designed by <a href="https://www.antocapteknologies.com/" class="text-gold">Antocap Teknologies</a>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </footer>

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
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'

import { isDarkMode } from '@/composables/useTheme.js';
import logo from '@/assets/Antocap-logo.jpg'


const showScrollButtonn = ref(true)

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
.dark-bg {
  background-color: #000;
  color: #fff;
}

.custom-footer {
  background-color: #000;
  padding: 3rem 1rem 2rem;
  font-family: 'Segoe UI', sans-serif;
  border-top: 4px solid gold;
}

.footer-col {
  margin-bottom: 2rem;
}

.footer-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: gold;
  margin-bottom: 1rem;
}

.footer-about {
  color: #ccc;
  max-width: 280px;
  font-size: 0.95rem;
}

.footer-list {
  padding: 0;
  background: transparent;
}

.footer-list .v-list-item {
  background-color: transparent !important;
  padding: 0.2rem 0;
}

.footer-list .v-list-item span {
  color: #fff;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.footer-list .v-list-item:hover span {
  color: gold;
}

.text-gold {
  color: gold;
}

.footer-divider {
  border: none;
  border-top: 1px solid #444;
  margin: 1.5rem 0;
}

.footer-note {
  color: #bbb;
  font-size: 0.85rem;
}

.social-btn {
  margin: 0.3rem 0.4rem 0 0;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.social-btn:hover {
  transform: scale(1.1);
}

.whatsApp {
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  z-index: 9999;
  background: #25d366;
  color: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  border-radius: 12px;
}

.whatsApp:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
}
</style>
