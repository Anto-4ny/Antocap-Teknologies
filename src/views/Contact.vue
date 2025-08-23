<template>
  <v-container fluid class="py-16 mt-10 bg-black text-white">
    <v-container>
      <!-- Header -->
      <v-row justify="center" class="text-center mb-12" data-aos="fade-up">
        <v-col cols="12" md="8">
          <h5 class="text-gold tracking-widest mb-2">LET'S CONNECT</h5>
          <h1 class="mb-4 font-extrabold text-3xl md:text-4xl">We’d Love to Hear From You</h1>
          <p class="text-grey text-lg">
            Have a project in mind? Drop us a message, and we’ll get back to you shortly.
          </p>
        </v-col>
      </v-row>

      <!-- Contact Info -->
      <v-row class="mb-12" justify="center" align="stretch" dense>
        <v-col cols="12" md="4" data-aos="fade-up">
          <v-card class="contact-card pa-6 h-100" elevation="8">
            <div class="icon-circle mb-4 mx-auto">
              <v-icon color="gold" size="34">mdi-map-marker</v-icon>
            </div>
            <h4 class="text-gold mb-2 text-center">Address</h4>
            <p class="text-grey text-center">
              <a href="https://goo.gl/maps/VFMiwm69jWkHxZwZA" target="_blank" class="text-white underline">
                Nairobi, Kenya
              </a>
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" data-aos="fade-up" data-aos-delay="100">
          <v-card class="contact-card pa-6 h-100" elevation="8">
            <div class="icon-circle mb-4 mx-auto">
              <v-icon color="gold" size="34">mdi-phone</v-icon>
            </div>
            <h4 class="text-gold mb-2 text-center">Call Us</h4>
            <p class="text-grey text-center">
              <a href="tel:+254757492614" class="text-white underline">
                +254 757 492 614
              </a>
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" data-aos="fade-up" data-aos-delay="200">
          <v-card class="contact-card pa-6 h-100" elevation="8">
            <div class="icon-circle mb-4 mx-auto">
              <v-icon color="gold" size="34">mdi-email</v-icon>
            </div>
            <h4 class="text-gold mb-2 text-center">Email Us</h4>
            <p class="text-grey text-center">
              <a href="mailto:antocaptechnologies@gmail.com" class="text-white underline">
                antocaptechnologies@gmail.com
              </a>
            </p>
          </v-card>
        </v-col>
      </v-row>

      <!-- Form + Business Hours -->
      <v-row>
        <!-- Contact Form -->
        <v-col cols="12"  data-aos="fade-up" data-aos-delay="300">
          <v-card class="form-card pa-6" elevation="6">
            <h3 class="text-gold mb-6 text-xl font-semibold">Send Us a Message</h3>
            <v-form ref="formRef" v-model="valid" @submit.prevent="submitForm">
              <v-text-field
                v-model="form.name"
                label="Your Name"
                variant="outlined"
                density="comfortable"
                :rules="[rules.required('Name is required')]"
                class="mb-4 white-input"
              />
              <v-text-field
                v-model="form.email"
                label="Your Email"
                type="email"
                variant="outlined"
                density="comfortable"
                :rules="[rules.required('Email is required'), rules.email]"
                class="mb-4 white-input"
              />
              <v-select
                v-model="form.project"
                label="Select Services"
                multiple
                :items="services.map(s => s.name)"
                variant="outlined"
                density="comfortable"
                :rules="[rules.arrayMin(1, 'Pick at least one service')]"
                class="mb-4 white-input"
                chips
              />
              <v-textarea
                v-model="form.message"
                label="Describe your project in detail"
                rows="4"
                variant="outlined"
                density="comfortable"
                :rules="[rules.required('Message is required'), rules.minLen(10)]"
                class="mb-6 white-input"
              />
              <v-btn
                class="gold-btn w-100"
                type="submit"
                :loading="loading"
                :disabled="!valid || loading"
              >
                Send Message
              </v-btn>
            </v-form>
          </v-card>
        </v-col>

        <!-- Business Hours -->
        <v-col cols="12" data-aos="fade-up" data-aos-delay="400">
          <v-card class="form-card pa-6" elevation="6">
            <h3 class="text-gold mb-6 text-xl font-semibold">Our Business Hours</h3>
            <v-list class="transparent-list">
              <v-list-item><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</v-list-item>
              <v-list-item><strong>Saturday:</strong> 9:00 AM - 4:00 PM</v-list-item>
              <v-list-item><strong>Sunday:</strong> Closed</v-list-item>
            </v-list>
            <p class="mt-6 text-grey">
              Feel free to reach out during these hours. We’ll respond promptly!
            </p>
          </v-card>
        </v-col>
      </v-row>

      <!-- Snackbar Feedback -->
      <v-snackbar
        v-model="snackbar.show"
        :timeout="3000"
        location="bottom center"
        class="rounded-lg"
      >
        {{ snackbar.message }}
      </v-snackbar>
    </v-container>
  </v-container>
</template>

<script setup>
import { useHead } from '@vueuse/head'

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
      src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
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

import { ref } from 'vue'

const formRef = ref(null)
const valid = ref(false)
const loading = ref(false)
const snackbar = ref({ show: false, message: '' })

const form = ref({
  name: '',
  email: '',
  project: [],
  message: '',
  _gotcha: ''
})

const services = ref([
  { id: 1, name: 'Website Development' },
  { id: 2, name: 'Software & App Development' },
  { id: 3, name: 'Graphic Design' },
  { id: 4, name: 'Point of Sale (POS)' },
  { id: 5, name: 'SEO Services' },
  { id: 6, name: 'Automation' },
  { id: 7, name: 'Management Systems' },
  { id: 8, name: 'Billing Systems' },
  { id: 9, name: 'Web & App Revamping' },
  { id: 10, name: 'IT Support' }
])

const rules = {
  required: (msg = 'Required') => (v) => (!!v && (Array.isArray(v) ? v.length > 0 : String(v).trim().length > 0)) || msg,
  arrayMin: (n, msg) => (v) => (Array.isArray(v) && v.length >= n) || msg,
  minLen: (n) => (v) => (v && String(v).trim().length >= n) || `Minimum ${n} characters`,
  email: (v) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(String(v)) || 'Enter a valid email'
}

const resetForm = () => {
  form.value = { name: '', email: '', project: [], message: '', _gotcha: '' }
  formRef.value?.resetValidation()
}

const submitForm = async () => {
  const isValid = await formRef.value?.validate()
  if (!isValid || form.value._gotcha) return

  loading.value = true
  try {
    const response = await fetch('https://formspree.io/f/xqazjobw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        services: form.value.project,
        message: form.value.message
      })
    })

    if (response.ok) {
      snackbar.value = { show: true, message: '✅ Message sent successfully!' }
      resetForm()
    } else {
      snackbar.value = { show: true, message: '❌ Failed to send message. Try again.' }
    }
  } catch (e) {
    console.error(e)
    snackbar.value = { show: true, message: '⚠️ An error occurred. Try again.' }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.bg-black {
  background: #000 !important;
}

.text-gold {
  color: #d4af37 !important;
}

.text-grey {
  color: rgba(255, 255, 255, 0.7) !important;
}

.contact-card,
.form-card {
  background: #111 !important;
  color: #fff !important;
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 14px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.contact-card:hover,
.form-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 18px rgba(212, 175, 55, 0.4);
}

.icon-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #d4af37;
}

/* Inputs */
.white-input .v-field {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.25) !important;
  border-radius: 10px;
}
.white-input .v-field__input {
  color: #fff !important;
}
.white-input .v-label,
.white-input .v-label.v-field-label {
  color: rgba(255, 255, 255, 0.75) !important;
}
.white-input input::placeholder,
.white-input textarea::placeholder {
  color: rgba(255, 255, 255, 0.55) !important;
}
.white-input .v-field.v-field--focused {
  border: 1px solid #d4af37 !important;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
}

/* Gold Button */
.gold-btn {
  background: #d4af37 !important;
  color: #000 !important;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 8px;
  transition: background 0.3s ease;
}
.gold-btn:hover {
  background: #b9972a !important;
}

/* List */
.transparent-list .v-list-item,
.transparent-list .v-list-item * {
  color: black !important;
}
</style>
