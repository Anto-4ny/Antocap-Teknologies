<template>
  <v-container fluid class="about-page py-12 px-4 px-md-12" style="background-color: #f5f7fa;">
    <!-- Hero Section -->
    <v-row align="center" justify="center" class="text-center mb-12" data-aos="fade-down">
      <v-col cols="12" md="8">
        <h1 class="text-h3 font-weight-bold mb-4">About Antocap Teknologies</h1>
        <p class="text-subtitle-1">Founded by Antony Ndambuki in August 2024, Antocap Teknologies is a premium software development company committed to innovation, excellence, and client success.</p>
      </v-col>
    </v-row>

    <!-- Image and CEO Info -->
    <v-row align="center" justify="center" class="mb-16">
      <v-col cols="12" md="5" data-aos="fade-right">
        <v-img
          :src="AntonyNdambuki"
          alt="CEO Antony Ndambuki"
          aspect-ratio="0"
          width="270"
          height="500"
          class="rounded-xl elevation-10"
        />
      </v-col>
      <v-col cols="12" md="7" data-aos="fade-left">
  <h2 class="text-h4 font-weight-bold mb-3">Meet Our Founder</h2>
  <p class="text-body-1">
    Antony Ndambuki, a young and experienced software engineer, founded Antocap Teknologies with a mission to deliver transformative digital solutions. 
    Under his leadership, we’ve helped businesses unlock their digital potential with cutting-edge software, apps, websites, and IT support.
  </p>
</v-col>
    </v-row>

    <!-- Mission & Vision -->
    <v-row class="mb-16">
      <v-col cols="12" md="6" data-aos="zoom-in-up">
        <v-card class="pa-6 rounded-xl elevation-6">
          <v-icon size="48" class="mb-2" color="primary">mdi-rocket-launch</v-icon>
          <h3 class="text-h5 font-weight-bold mb-2">Our Mission</h3>
          <p>To empower businesses by building innovative, secure, and user-friendly software solutions that enhance performance, growth, and digital visibility.</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" data-aos="zoom-in-up" data-aos-delay="200">
        <v-card class="pa-6 rounded-xl elevation-6">
          <v-icon size="48" class="mb-2" color="secondary">mdi-eye</v-icon>
          <h3 class="text-h5 font-weight-bold mb-2">Our Vision</h3>
          <p>To become a globally recognized leader in software innovation, delivering luxurious and premium digital solutions tailored to client success.</p>
        </v-card>
      </v-col>
    </v-row>

    <!-- Why Choose Us -->
    <v-row class="text-center mb-16">
      <v-col cols="12">
        <h2 class="text-h4 font-weight-bold mb-6" data-aos="fade-up">Why Choose Antocap Teknologies?</h2>
      </v-col>
      <v-col cols="12" md="4" data-aos="fade-up" data-aos-delay="100">
        <v-icon size="48" color="success" class="mb-3">mdi-star-circle</v-icon>
        <h3 class="text-h6 font-weight-medium mb-2">Premium Quality</h3>
        <p>We craft every solution with precision and luxury in mind.</p>
      </v-col>
      <v-col cols="12" md="4" data-aos="fade-up" data-aos-delay="200">
        <v-icon size="48" color="info" class="mb-3">mdi-speedometer</v-icon>
        <h3 class="text-h6 font-weight-medium mb-2">Speed & Performance</h3>
        <p>Our systems are optimized for speed, SEO, and seamless user experience.</p>
      </v-col>
      <v-col cols="12" md="4" data-aos="fade-up" data-aos-delay="300">
        <v-icon size="48" color="purple" class="mb-3">mdi-account-group</v-icon>
        <h3 class="text-h6 font-weight-medium mb-2">Client-Centered</h3>
        <p>We work closely with our clients to deliver solutions that meet real business needs.</p>
      </v-col>
    </v-row>

    <!-- Footer Banner -->
    <v-row align="center" justify="center" class="text-center">
      <v-col cols="12" md="8" data-aos="fade-up">
        <v-card class="py-8 px-6 rounded-xl elevation-10" style="background: linear-gradient(135deg, #0077b6, #00b4d8);">
          <h2 class="text-h4 font-weight-bold text-white mb-4">Join the Digital Revolution with Antocap Teknologies</h2>
          <p class="text-white mb-4">Let’s turn your idea into a premium digital experience that scales and excels.</p>
         <v-btn to="/contact" color="white" text large class="font-weight-bold">Get In Touch</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import AntonyNdambuki from '@/assets/CEO-Antony-Ndambuki.jpg'

useHead({
  title: 'About Us - Antocap Teknologies',
  meta: [
    { name: 'description', content: 'Learn more about Antocap Teknologies, founded by Antony Ndambuki. Discover our mission, vision, values, and commitment to premium software development.' },
    { name: 'keywords', content: 'Antocap Teknologies, Antony Ndambuki, software development, mission, vision, about, IT company, premium tech, software solutions' },
    { property: 'og:title', content: 'About Antocap Teknologies' },
    { property: 'og:description', content: 'Founded by Antony Ndambuki in August 2024, Antocap Teknologies is a premium tech company offering luxurious digital solutions.' },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>

<style scoped>
.about-page {
  font-family: 'Inter', sans-serif;
  margin-top: 10%;
}
</style>
