<template>
  <v-app-bar flat color="white" class="elevation-2" height="90">
    <v-container fluid>
      <v-row align="center" justify="space-between" no-gutters class="px-4">
        <!-- Logo -->
        <v-col cols="auto" class="d-flex align-left">
          <router-link to="/">
            <v-img
              :src="logo"
              alt="Antocap Teknologies Logo"
              height="60"
              width="70"
              class="mr-3"
            ></v-img>
          </router-link>
          <div class="font-weight-bold text-black">
            <div style="font-size: 20px;">Antocap</div>
            <div style="font-size: 14px;">Teknologies</div>
          </div>
        </v-col>

        <!-- Desktop Nav Links -->
        <v-col class="d-none d-md-flex justify-end align-center" cols="auto">
          <v-btn
            v-for="item in menuItems"
            :key="item.title"
            text
            class="mx-1 text-black font-weight-medium nav-link"
            :href="item.href"
            style="min-width: auto;"
          >
            {{ item.title }}
          </v-btn>
        </v-col>

        <!-- Hamburger for Mobile -->
        <v-btn icon class="d-md-none text-black" @click="drawer = true">
          <v-icon size="28">mdi-menu</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>

  <!-- Mobile Drawer -->
  <v-navigation-drawer
  v-model="drawer"
  right
  temporary
  scrim
  class="bg-white elevation-24"
  :width="300"
  style="z-index: 3000;"
  aria-label="Mobile navigation drawer"
  name="mobile-drawer"
>
    <v-list dense>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        @click="drawer = false"
        class="px-3 py-2"
      >
        <v-btn
          text
          block
          :href="item.href"
          class="justify-start text-black font-weight-medium"
          style="text-transform: none;"
        >
          <v-icon left color="primary" class="mr-3">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

  <v-list-item class="px-3 py-2">
  <v-btn
    text
    block
    href="/signup"
    class="justify-start text-white font-weight-medium"
    style="text-transform: none; background-color: green;"
    aria-label="Sign up for an account"
    name="signup-button"
  >
    Sign Up
  </v-btn>
</v-list-item>
<v-list-item class="px-3 py-2">
  <v-btn
    text
    block
    href="/login"
    class="justify-start text-white font-weight-medium green-bg"
    style="text-transform: none; background-color: green;"
    aria-label="Login to your account"
    name="login-button"
  >
    Login
  </v-btn>
</v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import logo from '@/assets/Antocap-logo.jpg'

const drawer = ref(false)

const menuItems = [
  { title: 'Home', href: '/', icon: 'mdi-home' },
  { title: 'About Us', href: '/about', icon: 'mdi-information' },
  { title: 'Services', href: '/services', icon: 'mdi-tools' },
  { title: 'Projects', href: '/project', icon: 'mdi-check-circle' },
  { title: 'Blog', href: '/blog', icon: 'mdi-pencil' },
  { title: 'Testimonials', href: '/testimonials', icon: 'mdi-comment-quote' },
  { title: 'Get Started', href: '/contact', icon: 'mdi-email' }
]

const logoUrl = 'https://www.antocapteknologies.com/logo.png'

useHead({
  title: 'Antocap Teknologies | World’s Leading Software & IT Company',
  meta: [
    { name: 'description', content: 'Antocap Teknologies is the leading global software and IT solutions provider. We offer software development, web & app design, SEO, IT consultancy, and more from Nairobi to the world.' },
    { name: 'keywords', content: 'best software company in the world, global IT solutions, website development Kenya, SEO agency Nairobi, mobile app developers Africa, Antony Ndambuki Antocap ceo, professional IT services, global tech company, software engineers Africa, ecommerce website development, Antocap Teknologies Nairobi Kenya, premier software firm, Antocap web agency, best website developer' },
    { name: 'author', content: 'Antocap Teknologies' },
    { name: 'robots', content: 'index, follow' },
    { name: 'google-site-verification', content: '5hBLXfg-cAkfTMQDRDlg4h78fQ8fo6xtex41hVJFlz4' },
    
    // Open Graph
    { property: 'og:site_name', content: 'Antocap Teknologies' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.antocapteknologies.com/' },
    { property: 'og:title', content: 'Antocap Teknologies | World’s Leading Software & IT Company' },
    { property: 'og:description', content: 'Revolutionizing IT & software globally. From Nairobi to the world, Antocap Teknologies delivers the best in software development, design, and tech solutions.' },
    { property: 'og:image', content: logoUrl },
    
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Antocap Teknologies | World’s Leading Software & IT Company' },
    { name: 'twitter:description', content: 'Leading the future of software, tech, and IT solutions from Kenya to the globe.' },
    { name: 'twitter:image', content: logoUrl },
    { name: 'twitter:site', content: '@antocap' },
    { name: 'twitter:creator', content: '@antocap' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.antocapteknologies.com/' },
    { rel: 'icon', href: '/Antocap-logo.jpg' }
  ],
  
  script: [
  {
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Antocap Teknologies',
      image: 'https://www.antocapteknologies.com/logo.png',
      url: 'https://www.antocapteknologies.com/',
      telephone: '+254757492614',
      email: 'antocaptechnologies@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Utawala',
        addressLocality: 'Nairobi',
        addressRegion: 'Nairobi',
        postalCode: '00100',
        addressCountry: 'KE'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -1.2711,  // Example for Utawala Nairobi
        longitude: 36.9368
      },
      openingHours: 'Mo-Su 08:00-22:00',
      priceRange: '$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '214'
      },
      sameAs: [
        'https://twitter.com/antocap',
        'https://www.linkedin.com/company/antocap-teknologies',
        'https://www.facebook.com/antocapteknologies'
      ],
      founder: {
        '@type': 'Person',
        name: 'Antony Ndambuki'
      },
      foundingDate: '2024-08-01',
      description: 'We are the best software and IT solutions company in the world. Based in Nairobi, Kenya — serving Africa to the world with websites, apps, SEO, and more.',
      makesOffer: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Development',
            description: 'Professional and modern website design and development for all industries.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            description: 'Cross-platform apps for Android and iOS using latest technologies.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO & Digital Marketing',
            description: 'Increase your visibility and conversions with our SEO & marketing strategies.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'software development',
            description: 'Custom IT solutions, security, web design, seo, apps, infrastructure, and automation consulting.'
          }
        }
      ]
    })
  }
]
});
</script>


<style scoped>
.v-app-bar {
  z-index: 2100;
}

.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
}
.nav-link::before {
  top: -4px;
  background: rgb(13, 236, 5);
}
.nav-link::after {
  bottom: -8px;
  background: rgb(230, 5, 5);
}

.red-bg {
  background-color: rgb(235, 12, 12) !important;
}

.v-btn:nth-child(7) {
  background-color: rgb(8, 247, 67) !important;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
}

.v-navigation-drawer {
  position: absolute;
  top: 0;
  max-height: fit-content;
}
</style>

