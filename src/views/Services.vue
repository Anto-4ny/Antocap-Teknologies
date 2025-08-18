
  <template>
  <v-container fluid class="services-section">
    <v-row class="py-16" align="center" justify="center">
      <v-col cols="12" class="text-center mb-12">
        <h2 class="premium-heading">Our Premium Services</h2>
      </v-col>

      <!-- Services Grid -->
      <v-col
        v-for="(service, index) in displayedServices"
        :key="index"
        cols="12" sm="6" md="4"
        class="d-flex justify-center"
        data-aos="fade-up"
      >
        <v-card class="service-card">
          <!-- Image with Icon Overlay -->
          <div class="card-image">
            <img :src="service.image" alt="service background" />
            <div class="icon-overlay">
              <v-icon :color="service.iconColor" size="40">
                {{ service.icon }}
              </v-icon>
            </div>
          </div>

          <!-- Content -->
          <div class="card-overlay">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.shortDescription }}</p>

            <div class="button-group">
              <v-btn class="gold-btn" :to="`/services/${service.slug}`">
                Learn More
              </v-btn>
              <v-btn class="white-btn" to="/contact">
                Get Service
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- CTA Button -->
      <v-col cols="12" class="text-center mt-12" v-if="!showAll">
        <v-btn class="gold-btn" @click="showAll = true">
          Show All Services
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

  <script setup>
  import { ref, computed } from 'vue';
  import 'vanilla-tilt'; 


// Show all toggle
const showAll = ref(false)

// All services
const services = ref([
  {
    title: 'Website Development',
    slug: 'website-development',
    shortDescription: 'Custom-built, responsive websites with sleek design, high performance, and SEO optimization.',
    icon: 'mdi-web',
    iconColor: 'gold',
    image: new URL('@/assets/webdev.webp', import.meta.url).href
  },
  {
    title: 'Software & App Development',
    slug: 'software-app-development',
    shortDescription: 'Efficient, secure, and scalable software and mobile apps tailored to your business needs.',
    icon: 'mdi-application-cog',
    iconColor: 'gold',
    image: new URL('@/assets/appDev.jpg', import.meta.url).href
  },
  {
    title: 'Graphic Design',
    slug: 'graphic-design',
    shortDescription: 'High-impact visuals, branding, and creative designs that captivate your audience.',
    icon: 'mdi-palette',
    iconColor: 'gold',
    image: new URL('@/assets/design.png', import.meta.url).href
  },
  {
    title: 'SEO',
    slug: 'seo',
    shortDescription: 'Boost visibility, rank higher, and increase organic traffic with modern SEO strategies.',
    icon: 'mdi-magnify',
    iconColor: 'gold',
    image: new URL('@/assets/seo.jpg', import.meta.url).href
  },
  {
    title: 'Automation',
    slug: 'automation',
    shortDescription: 'Streamline operations and reduce costs with cutting-edge automation solutions.',
    icon: 'mdi-robot',
    iconColor: 'gold',
    image: new URL('@/assets/automation.jpg', import.meta.url).href
  },
  {
    title: 'POS Softwares',
    slug: 'pos-softwares',
    shortDescription: 'Smart, reliable, and secure POS systems for retail and hospitality businesses.',
    icon: 'mdi-cash-register',
    iconColor: 'gold',
    image: new URL('@/assets/pos.png', import.meta.url).href
  },
  {
    title: 'Management Systems',
    slug: 'management-systems',
    shortDescription: 'Enterprise-grade management platforms to handle your operations with ease.',
    icon: 'mdi-domain',
    iconColor: 'gold',
    image: new URL('@/assets/management.jpg', import.meta.url).href
  },
  {
    title: 'Billing Systems',
    slug: 'billing-systems',
    shortDescription: 'Seamless billing and invoicing solutions for businesses of all sizes.',
    icon: 'mdi-receipt-text',
    iconColor: 'gold',
    image: new URL('@/assets/billing.png', import.meta.url).href
  },
  {
    title: 'Web & App Revamping',
    slug: 'web-app-revamping',
    shortDescription: 'Modernize your existing platforms with premium redesigns and optimizations.',
    icon: 'mdi-refresh',
    iconColor: 'gold',
    image: new URL('@/assets/revamp.jpg', import.meta.url).href
  },
  {
    title: 'IT Support',
    slug: 'it-support',
    shortDescription: 'Reliable, round-the-clock IT support for uninterrupted business growth.',
    icon: 'mdi-headset',
    iconColor: 'gold',
    image: new URL('@/assets/itSupport.jpg', import.meta.url).href
  }
])

// Show only first 6 until expanded
const displayedServices = computed(() =>
  showAll.value ? services.value : services.value.slice(0, 6)
)

import { useHead } from '@vueuse/head'

  useHead({
  title: 'Premium IT Services | Antocap Teknologies',
  meta: [
    { name: 'description', content: 'Discover Antocap Teknologies’ premium services including website development, app creation, content writing, bot creation, IT consultation, and more.' },
    { name: 'keywords', content: 'Website Development Kenya, App Development Nairobi, IT Services Kenya, Graphic Design, Content Creation, Bot Development, Remote Support, SEO Services Kenya, Software Development, IT Consultancy, UI/UX Design, Branding, Cybersecurity, Computer Repair, Digital Marketing, Online Branding, System Optimization, Database Management, Cloud Solutions, IT Infrastructure, Full-stack Development' },
    { name: 'google-site-verification', content: '5hBLXfg-cAkfTMQDRDlg4h78fQ8fo6xtex41hVJFlz4' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'language', content: 'English' },
    { property: 'og:title', content: 'Premium Services - Antocap Teknologies' },
    { property: 'og:description', content: 'Explore our innovative and scalable digital solutions crafted to elevate your business.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://antocapteknologies.com/services' },
    { property: 'og:image', content: 'https://antocapteknologies.com/Antocap-logo.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Premium Services - Antocap Teknologies' },
    { name: 'twitter:description', content: 'Explore our innovative and scalable digital solutions crafted to elevate your business.' },
    { name: 'twitter:image', content: 'https://antocapteknologies.com/Antocap-logo.jpg' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Antocap Teknologies',
        url: 'https://antocapteknologies.com',
        logo: 'https://antocapteknologies.com/Antocap-logo.jpg',
        image: 'https://antocapteknologies.com/Antocap-logo.jpg',
        description: 'Antocap Teknologies offers premium IT services including website development, app development, graphic design, IT support, remote installations, and more.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Utawala',
          addressRegion: 'Nairobi',
          addressCountry: 'KE'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+254757492614',
          contactType: 'Customer Service'
        },
        founder: {
          '@type': 'Person',
          name: 'Antony Ndambuki'
        },
        sameAs: [
          'https://facebook.com/antocapteknologies',
          'https://instagram.com/antocapteknologies',
          'https://twitter.com/antocaptech',
          'https://linkedin.com/company/antocapteknologies'
        ]
      })
    }
  ]
})
</script>
  
<style scoped>
.services-section {
  background: #000;
  color: #fff;
}

.premium-heading {
  font-size: 2.5rem;
  font-weight: bold;
  color: gold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

/* Service Card */
.service-card {
  position: relative;
  width: 100%;
  max-width: 360px;
  border-radius: 18px;
  overflow: hidden;
  background: #111;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
}

/* Image Section */
.card-image {
  position: relative;
}
.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  opacity: 0.5;
}
.icon-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid gold;
  border-radius: 50%;
  padding: 15px;
}

/* Content */
.card-overlay {
  padding: 1.5rem;
  text-align: center;
}
.service-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 1rem 0 0.5rem;
  color: #fff;
}
.service-description {
  font-size: 0.95rem;
  color: #ccc;
  margin-bottom: 1.5rem;
  min-height: 60px;
}

/* Buttons */
.button-group {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  flex-wrap: wrap;
}
.gold-btn {
  background: gold !important;
  color: black !important;
  font-weight: bold;
  border-radius: 25px;
  padding: 0.5rem 1.2rem;
  text-transform: none;
}
.gold-btn:hover {
  background: white !important;
  color: black !important;
}
.white-btn {
  background: transparent !important;
  border: 2px solid gold !important;
  color: gold !important;
  font-weight: bold;
  border-radius: 25px;
  padding: 0.5rem 1.2rem;
  text-transform: none;
}
.white-btn:hover {
  background: gold !important;
  color: black !important;
}
</style>