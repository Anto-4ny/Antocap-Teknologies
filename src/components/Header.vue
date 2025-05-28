<template>
  <section :class="{ 'dark-bg': isDarkMode, 'light-bg': !isDarkMode }">
    <v-app-bar flat class="elevation-3 black-bg" height="90">
      <v-container fluid>
        <v-row align="center" justify="space-between" no-gutters class="px-4">
          <!-- Logo and Brand -->
          <v-col cols="auto" class="d-flex align-center">
            <router-link to="/" class="d-flex align-center">
              <v-img :src="logo" alt="Antocap Teknologies Logo" height="60" width="70" class="mr-3" />
              <div class="brand-text">
                <div class="brand-main">Antocap</div>
                <div class="brand-sub">Teknologies</div>
              </div>
            </router-link>
          </v-col>

          <!-- Desktop Nav Links -->
          <v-col cols="auto" class="d-none d-md-flex justify-end align-center">
            <v-btn
              v-for="item in menuItems"
              :key="item.title"
              text
              class="mx-2 nav-link"
              :href="item.href"
            >
              {{ item.title }}
            </v-btn>
          </v-col>

          <!-- Hamburger Button -->
          <v-btn icon class="d-md-none gold-text" @click="drawer = true">
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
      class="elevation-24 pure-black"
      :width="300"
      style="z-index: 3000;"
    >
      <v-list dense class="pure-black">
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
            class="justify-start drawer-link"
            style="text-transform: none;"
          >
            <v-icon left :class="item.color" class="mr-3">{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-list-item>

        <v-divider class="gold-border my-2"></v-divider>

        <v-list-item class="px-3 py-2">
          <v-btn block href="/signup" class="gold-btn">Sign Up</v-btn>
        </v-list-item>
        <v-list-item class="px-3 py-2">
          <v-btn block href="/login" class="gold-btn">Login</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import { isDarkMode } from '@/composables/useTheme.js';
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
        latitude: -1.2711, 
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
.black-bg {
  background-color: #000 !important;
}
.pure-black {
  background-color: #000 !important;
}
.gold-text {
  color: #d4af37 !important;
}
.gold-border {
  border-color: #d4af37 !important;
}
.nav-link {
  color: #fff !important;
  font-weight: 500;
  text-transform: none;
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #d4af37;
  transition: width 0.3s ease-in-out;
}
.nav-link:hover::after {
  width: 100%;
}
.brand-text {
  color: #fff;
}
.brand-main {
  font-size: 22px;
  font-weight: 700;
}
.brand-sub {
  font-size: 14px;
  color: #d4af37;
  font-weight: 500;
}

a {
  text-decoration: none !important;
}

.gold-btn {
  background-color: #d4af37 !important;
  color: #000 !important;
  font-weight: bold;
  text-transform: none;
  padding: 10px;
  font-size: 16px;
}
.drawer-link {
  color: #fff !important;
  font-weight: 500;
  text-transform: none;
  background-color: transparent !important;
}
.text-blue {
  color: #2196f3 !important;
}
.text-green {
  color: #4caf50 !important;
}
.text-deep-orange {
  color: #ff5722 !important;
}
.text-purple {
  color: #9c27b0 !important;
}
.text-pink {
  color: #e91e63 !important;
}
</style>

