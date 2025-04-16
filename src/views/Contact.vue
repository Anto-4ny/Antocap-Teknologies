<template>
  <v-container fluid class="py-16 mt-10 bg-grey-lighten-4">
    <v-container>
      <!-- Header with AOS animation -->
      <v-row justify="center" class="text-center mb-10" data-aos="fade-up">
        <v-col cols="12" md="8">
          <h5 class="text-primary mb-2">Let's Connect</h5>
          <h1 class="mb-4">We'd Love to Hear from You</h1>
          <p class="text-grey-darken-1">
            Have a question or project in mind? Fill out the form below, and we'll get back to you as soon as possible.
          </p>
        </v-col>
      </v-row>

      <!-- Contact Info Boxes with AOS -->
      <v-row class="mb-10" justify="center" align="center">
        <v-col cols="12" md="4" data-aos="fade-up">
          <v-card class="bg-primary text-white pa-5" elevation="5">
            <v-row no-gutters align="center">
              <div class="rounded-circle bg-white d-flex justify-center align-center" style="width: 60px; height: 60px;">
                <i class="fas fa-map-marker-alt text-primary" style="font-size: 24px;"></i>
              </div>
              <div class="ms-4">
                <h4>Address</h4>
                <a href="https://goo.gl/maps/VFMiwm69jWkHxZwZA" target="_blank" class="text-white text-decoration-underline">
                  Nairobi, Kenya
                </a>
              </div>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" data-aos="fade-up" data-aos-delay="100">
          <v-card class="bg-primary text-white pa-5" elevation="5">
            <v-row no-gutters align="center">
              <div class="rounded-circle bg-white d-flex justify-center align-center" style="width: 60px; height: 60px;">
                <i class="fas fa-phone-alt" style="color: #28a745; font-size: 24px;"></i>
              </div>
              <div class="ms-4">
                <h4>Call Us</h4>
                <a href="tel:+254757492614" class="text-white text-decoration-underline">
                  +254 757 492 614
                </a>
              </div>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" data-aos="fade-up" data-aos-delay="200">
          <v-card class="bg-primary text-white pa-5" elevation="5">
            <v-row no-gutters align="center">
              <div class="rounded-circle bg-white d-flex justify-center align-center" style="width: 60px; height: 60px;">
                <i class="fas fa-envelope" style="color: #ffc107; font-size: 24px;"></i>
              </div>
              <div class="ms-4">
                <h4>Email Us</h4>
                <a href="mailto:antocaptechnologies@gmail.com" class="text-white text-decoration-underline">
                  antocaptechnologies@gmail.com
                </a>
              </div>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <!-- Form with AOS -->
      <v-row>
        <v-col cols="12" md="6" data-aos="fade-up" data-aos-delay="300">
          <v-card class="pa-5" elevation="3">
            <v-form ref="formRef" v-model="valid" @submit.prevent="submitForm">
              <v-text-field
                v-model="form.name"
                label="Your Name"
                variant="outlined"
                :rules="[v => !!v || 'Name is required']"
                class="mb-4"
              />
              <v-text-field
                v-model="form.email"
                label="Your Email"
                type="email"
                variant="outlined"
                :rules="[v => !!v || 'Email is required']"
                class="mb-4"
              />
              <v-select
                v-model="form.project"
                label="Select Services (multiple)"
                multiple
                :items="services.map(s => s.name)"
                :rules="[v => !!v.length || 'At least one service is required']"
                outlined
                class="mb-4"
              />
              <v-textarea
                v-model="form.message"
                label="Message"
                rows="4"
                variant="outlined"
                :rules="[v => !!v || 'Message is required']"
                class="mb-4"
              />
              <v-btn color="primary" type="submit" :disabled="!valid">
                Send Message
              </v-btn>
            </v-form>
          </v-card>
        </v-col>

        <!-- Business Hours -->
        <v-col cols="12" md="6" data-aos="fade-up" data-aos-delay="400">
          <v-card class="pa-5 bg-grey-lighten-3" elevation="1">
            <h4 class="text-primary mb-4">Our Business Hours</h4>
            <v-list>
              <v-list-item><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</v-list-item>
              <v-list-item><strong>Saturday:</strong> 10:00 AM - 2:00 PM</v-list-item>
              <v-list-item><strong>Sunday:</strong> Closed</v-list-item>
            </v-list>
            <p class="mt-4 text-grey-darken-1">
              Feel free to reach out to us during these hours. We will do our best to respond promptly!
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

const formRef = ref(null)
const valid = ref(false)
const form = ref({
  name: '',
  email: '',
  project: [],
  message: ''
})

const services = ref([
  { id: 1, name: 'Website Development' },
  { id: 2, name: 'Software & App Development' },
  { id: 3, name: 'Graphic Design' },
  { id: 4, name: 'Content Writing & Creation' },
  { id: 5, name: 'Computer Maintenance (Onsite)' },
  { id: 6, name: 'Remote Windows Installations' },
  { id: 7, name: 'IT Consulting' },
  { id: 8, name: 'SEO Services' },
  { id: 9, name: 'Bot Creation' },
  { id: 10, name: 'Account Recovery & Device Support' },
  { id: 11, name: 'PIN Recovery (PC/Devices)' },
]);

const submitForm = async () => {
  const isValid = await formRef.value?.validate()
  if (isValid) {
    try {
      const response = await fetch("https://formspree.io/f/xqazjobw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form.value),
      })

      if (response.ok) {
        alert('Message sent successfully!')
        form.value = { name: '', email: '', project: [], message: '' }
        formRef.value.resetValidation()
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error(error)
      alert('An error occurred. Please try again.')
    }
  }
}

// SEO Metadata
useHead({
  title: 'Contact Us | Antocap Teknologies',
  meta: [
    { name: 'description', content: 'Reach out to Antocap Teknologies for premium website development, mobile app creation, IT consulting, SEO, and technical support. Based in Utawala, Nairobi, Kenya.' },
    { name: 'keywords', content: 'Contact Antocap Teknologies, web developers Nairobi, software company Kenya, app developers Nairobi, IT support Kenya, SEO experts Kenya, mobile app design, tech company Nairobi, computer maintenance, hacked account recovery, remote windows installation, content writing Nairobi, premium tech services Kenya, Utawala developers, Antocap contact' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Antocap Teknologies' },
    { name: 'google-site-verification', content: '5hBLXfg-cAkfTMQDRDlg4h78fQ8fo6xtex41hVJFlz4' },

    // Open Graph
    { property: 'og:title', content: 'Contact Antocap Teknologies' },
    { property: 'og:description', content: 'Let’s collaborate on your next digital project. Contact us for expert IT solutions and tech support in Nairobi.' },
    { property: 'og:image', content: 'https://antocapteknologies.com/assets/Antocap-logo.jpg' },
    { property: 'og:url', content: 'https://antocapteknologies.com/contact' },
    { property: 'og:type', content: 'website' },

    // Twitter Card
    { name: 'twitter:title', content: 'Contact Antocap Teknologies' },
    { name: 'twitter:description', content: 'Need help with a tech project? Talk to our expert team at Antocap Teknologies.' },
    { name: 'twitter:image', content: 'https://antocapteknologies.com/assets/Antocap-logo.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },

    // Canonical
    { rel: 'canonical', href: 'https://antocapteknologies.com/contact' }
  ],
  script: [
    // ContactPage Schema
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Us - Antocap Teknologies',
        description: 'Official contact page for Antocap Teknologies in Nairobi, Kenya. We offer expert IT services, app & web development, and consulting.',
        url: 'https://antocapteknologies.com/contact',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+254757492614',
          contactType: 'customer service',
          areaServed: 'KE',
          availableLanguage: ['English']
        }
      })
    },

    // LocalBusiness Schema
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Antocap Teknologies",
        "image": "https://antocapteknologies.com/Antocap-logo.jpg",
        "url": "https://antocapteknologies.com",
        "telephone": "+254757492614",
        "email": "antocaptechnologies@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Utawala",
          "addressLocality": "Nairobi",
          "addressCountry": "KE"
        },
        "description": "Antocap Teknologies provides premium software development, app creation, SEO, IT consulting, and web solutions across Kenya.",
        "sameAs": [
          "https://www.facebook.com/AntocapTeknologies",
          "https://www.instagram.com/antocapteknologies",
          "https://twitter.com/antocapteknologies",
          "https://www.linkedin.com/company/antocap-teknologies",
          "https://www.youtube.com/@antocapteknologies"
        ]
      })
    },

    // Breadcrumb Schema
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://antocapteknologies.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact Us",
            "item": "https://antocapteknologies.com/contact"
          }
        ]
      })
    },

    // Google Tag
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' // Replace with your actual GA ID
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      `
    }
  ]
});

</script>
