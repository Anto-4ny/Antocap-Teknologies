<template>
  <footer class="custom-footer" data-aos="fade-up" data-aos-duration="1000">
    <v-container fluid>
      <v-row class="d-flex flex-wrap justify-space-between">

        <!-- Logo & About -->
        <v-col cols="12" sm="4" class="mb-6" data-aos="fade-up" data-aos-delay="100">
          <div class="d-flex align-center justify-center justify-sm-start">
            <v-img
              :src="logo"
              alt="Antocap Teknologies Logo"
              height="90"
              width="90"
              class="mr-3"
            />
          </div>
          <p class="mt-3 text-black-70 text-center text-sm-left" style="max-width: 320px;">
            Antocap Teknologies provides top-tier solutions in IT, software development, cybersecurity, and digital innovation.
          </p>
        </v-col>

        <!-- Quick Links -->
        <v-col cols="12" sm="4" class="mb-6 text-center text-sm-left" data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-xl font-weight-bold mb-3 text-dark">Quick Links</h3>
          <v-list class="text-lg text-black">
            <v-list-item link to="/about">
              <v-icon left color="green" class="mr-2">mdi-check-circle</v-icon>
              About Us
            </v-list-item>
            <v-list-item link to="/contact">
              <v-icon left color="green" class="mr-2">mdi-check-circle</v-icon>
              Contact Us
            </v-list-item>
            <v-list-item link to="/service">
              <v-icon left color="green" class="mr-2">mdi-check-circle</v-icon>
              Our Services
            </v-list-item>
            <v-list-item link to="/project">
              <v-icon left color="green" class="mr-2">mdi-check-circle</v-icon>
              Our Projects
            </v-list-item>
            <v-list-item link to="/blog">
              <v-icon left color="green" class="mr-2">mdi-check-circle</v-icon>
              Latest Blog
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Contact & Social -->
        <v-col cols="12" sm="4" class="text-center text-sm-left" data-aos="fade-up" data-aos-delay="300">
          <h3 class="text-xl font-weight-bold mb-3 text-dark">Contact Us</h3>
          <v-list class="text-lg text-black mb-3">
            <v-list-item link :href="'https://www.google.com/maps/place/Utawala,+Nairobi,+Kenya'" target="_blank">
              <v-icon left color="red">mdi-map-marker</v-icon>
              Utawala, Nairobi, Kenya
            </v-list-item>
            <v-list-item link :href="'tel:+254757492614'">
              <v-icon left color="green">mdi-phone</v-icon>
              +254 757 492 614
            </v-list-item>
            <v-list-item link :href="'mailto:antocaptechnologies@gmail.com'">
              <v-icon left color="orange">mdi-email</v-icon>
              antocaptechnologies@gmail.com
            </v-list-item>
          </v-list>

          <!-- Social Icons -->
          <div class="d-flex justify-center justify-sm-start flex-wrap">
            <v-btn icon href="https://www.facebook.com/AntocapTechnologies" class="mr-2 mb-2" aria-label="Facebook">
              <v-icon color="#1877F2">mdi-facebook</v-icon>
            </v-btn>

            <v-btn icon href="https://twitter.com/AntocapTech" class="mr-2 mb-2" aria-label="Twitter">
              <v-icon color="#1DA1F2">mdi-twitter</v-icon>
            </v-btn>

            <v-btn icon href="https://www.instagram.com/AntocapTechnologies" class="mr-2 mb-2" aria-label="Instagram">
              <v-icon color="#E1306C">mdi-instagram</v-icon>
            </v-btn>

            <v-btn icon href="https://www.linkedin.com/company/antocap-technologies" class="mr-2 mb-2" aria-label="LinkedIn">
              <v-icon color="#0077B5">mdi-linkedin</v-icon>
            </v-btn>

            <v-btn icon href="https://wa.me/254757492614" class="mr-2 mb-2" aria-label="WhatsApp">
              <v-icon color="#25D366">mdi-whatsapp</v-icon>
            </v-btn>

            <v-btn icon href="https://www.youtube.com/@AntocapTechnologies" class="mb-2" aria-label="YouTube">
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
            <a href="https://www.antocapteknologies.com/" class="text-dark">Antocap Teknologies</a>, All rights reserved.
          </p>
        </v-col>
        <v-col cols="12" sm="6" class="text-center text-sm-right">
          <p class="text-sm text-black-70">
            Designed by <a href="https://www.antocapteknologies.com/" class="text-dark">Antocap Teknologies</a>
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
  aria-label="Back to top"
>
  <v-icon size="28" color="white">mdi-arrow-up</v-icon>
</v-btn>
</template>

<script setup>
import logo from '@/assets/Antocap-logo.jpg'

import { ref, onMounted, onUnmounted } from 'vue'

const showScrollButton = ref(false)

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
</style>
