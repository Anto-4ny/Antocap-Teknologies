<template>
  <section :class="{ 'dark-bg': isDarkMode, 'light-bg': !isDarkMode }">
    <v-app-bar
      flat
      class="elevation-3 black-bg"
      :height="80"
      :style="{ width: appBarWidth, transition: 'width 0.4s ease-in-out' }"
      data-aos="fade-down"
      data-aos-duration="600"
    >
      <v-container fluid>
        <v-row align="center" justify="space-between" no-gutters class="px-4">
          <!-- Logo -->
          <v-col cols="auto" class="d-flex align-center">
            <router-link to="/" class="d-flex align-center">
              <v-img
                :src="logo"
                alt="Antocap Teknologies Logo"
                height="60"
                width="70"
                class="mr-3"
              />
            </router-link>
          </v-col>

          <!-- Desktop Nav -->
          <v-col cols="auto" class="d-none d-md-flex justify-end align-center">
            <router-link
              v-for="item in menuItems"
              :key="item.title"
              :to="item.href"
              class="mx-2 nav-link"
              :class="{ active: $route.path === item.href }"
            >
              {{ item.title }}
            </router-link>
          </v-col>

          <!-- Mobile Menu Button -->
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
      :width="260"
      style="z-index: 3000;"
    >
      <v-list dense class="pure-black">
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          @click="drawer = false"
          class="px-3 py-2"
        >
          <router-link
            :to="item.href"
            class="drawer-link"
            :class="{ active: $route.path === item.href }"
          >
            <v-icon left class="mr-3">{{ item.icon }}</v-icon>
            {{ item.title }}
          </router-link>
        </v-list-item>
        <v-divider class="gold-border my-2"></v-divider>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import { isDarkMode } from '@/composables/useTheme.js';
import logo from '@/assets/Antocap-logo.jpg'

import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";

const drawer = ref(false);
const route = useRoute();

const menuItems = [
  { title: "Home", href: "/", icon: "mdi-home" },
  { title: "About Us", href: "/about", icon: "mdi-information" },
  { title: "Services", href: "/services", icon: "mdi-tools" },
  { title: "Pricing", href: "/pricing", icon: "mdi-cash" },
  { title: "Projects", href: "/project", icon: "mdi-check-circle" },
  { title: "Contact Us", href: "/contact", icon: "mdi-email" },
  { title: "Blog", href: "/blog", icon: "mdi-pencil" },
  { title: "Rating & Reviews", href: "/testimonials", icon: "mdi-comment-quote" }
];

const appBarWidth = ref("100%");

const handleScroll = () => {
  appBarWidth.value = window.scrollY > 50 ? "100%" : "97%";
};

onMounted(() => {
  AOS.init();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const logoUrl = 'https://antocapteknologies.com/logo.png'

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
    { property: 'og:url', content: 'https://antocapteknologies.com/' },
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
    { rel: 'canonical', href: 'https://antocapteknologies.com/' },
    { rel: 'icon', href: '/Antocap-logo.jpg' }
  ],
  
  script: [
  {
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Antocap Teknologies',
      image: 'https://antocapteknologies.com/logo.png',
      url: 'https://antocapteknologies.com/',
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
  color: #fff;
  font-weight: 500;
  text-transform: none;
  padding: 8px 12px;
  border-radius: 3px;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
}
.nav-link:hover {
  background-color: rgba(212, 175, 55, 0.15);
}
.nav-link.active {
  background-color: #d4af37;
  color: #000 !important;
}
.drawer-link {
  display: flex;
  align-items: center;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  text-decoration: none;
}
.drawer-link.active {
  background-color: #d4af37;
  color: #000 !important;
}
</style>

