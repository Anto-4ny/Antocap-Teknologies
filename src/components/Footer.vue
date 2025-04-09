<template>
  <footer class="custom-footer" data-aos="fade-up" data-aos-duration="1000">
    <v-container fluid>
      <v-row class="d-flex flex-wrap justify-space-between">

        <!-- Logo & About -->
        <v-col cols="12" sm="4" class="mb-4 mb-sm-0" data-aos="fade-up" data-aos-delay="100">
          <div class="d-flex align-center">
            <v-img
              :src="logo"
              alt="Antocap Teknologies Logo"
              height="90"
              width="90"
              class="mr-3"
            />
          </div>
          <p class="mt-2 text-black-70" style="max-width: 300px;">
            Antocap Teknologies provides top-tier solutions in IT, software development, cybersecurity, and digital innovation.
          </p>
        </v-col>

        <!-- Quick Links -->
        <v-col cols="12" sm="4" class="text-center text-sm-left mb-4 mb-sm-0" data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-xl font-weight-bold mb-2 text-dark">Quick Links</h3>
          <nav aria-label="Footer Navigation">
            <v-list class="text-lg text-black">
              <v-list-item link to="/about">About Us</v-list-item>
              <v-list-item link to="/contact">Contact Us</v-list-item>
              <v-list-item link to="/service">Our Services</v-list-item>
              <v-list-item link to="/project">Our Projects</v-list-item>
              <v-list-item link to="/blog">Latest Blog</v-list-item>
            </v-list>
          </nav>
        </v-col>

        <!-- Contact & Social -->
        <v-col cols="12" sm="4" class="text-center text-sm-left" data-aos="fade-up" data-aos-delay="300">
          <h3 class="text-xl font-weight-bold mb-2 text-dark">Contact Us</h3>
          <address>
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
          </address>

          <!-- Social Icons -->
          <div class="d-flex justify-center justify-sm-start">
            <v-btn icon href="https://www.facebook.com/AntocapTechnologies" class="mr-2" aria-label="Facebook">
              <i class="fab fa-facebook-f" style="color: #1877F2;"></i>
            </v-btn>
            <v-btn icon href="https://twitter.com/AntocapTech" class="mr-2" aria-label="Twitter">
              <i class="fab fa-twitter" style="color: #1DA1F2;"></i>
            </v-btn>
            <v-btn icon href="https://www.instagram.com/AntocapTechnologies" class="mr-2" aria-label="Instagram">
              <i class="fab fa-instagram" style="color: #E1306C;"></i>
            </v-btn>
            <v-btn icon href="https://www.linkedin.com/company/antocap-technologies" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in" style="color: #0077B5;"></i>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Divider -->
      <hr class="my-6" style="border-top: 3px solid #ccc; width: 95%; margin: auto;" />

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

    <!-- Back to Top Button -->
    <v-btn
      class="back-to-top fixed-bottom right-6 mb-4"
      fab
      small
      color="white"
      @click="scrollToTop"
      aria-label="Back to top"
    >
      <i class="fas fa-arrow-up" style="color: #0d6efd;"></i>
    </v-btn>
  </footer>
</template>

<script setup>
import { VFooter, VContainer, VRow, VCol, VImg, VList, VListItem, VIcon, VBtn } from 'vuetify/components'
import logo from '@/assets/Antocap-logo.jpg'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.custom-footer {
  background-color: hsl(180, 12%, 92%);
  padding-top: 3rem;
  padding-bottom: 2rem;
  width: 100%;
  color: #222;
}

.text-black {
  color: #111 !important;
}

.text-black-70 {
  color: rgba(0, 0, 0, 0.7);
}

.v-icon {
  font-size: 22px;
}

hr {
  border: none;
  border-top: 3px solid #da0c0c;
}

.back-to-top {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 10;
  background-color: #07f1f1;
}
</style>
