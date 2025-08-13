<template>
  <section :class="{ 'dark-bg': isDarkMode, 'light-bg': !isDarkMode }">
    <v-app-bar
      flat
      class="elevation-3 black-bg"
      :height="80"
      :style="{
        width: appBarWidth,
        margin: appBarWidth !== '100%' ? '0 auto' : '0',
        transition: 'width 0.4s ease-in-out, margin 0.4s ease-in-out'
      }"
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

          <!-- Desktop Navigation -->
          <v-col cols="auto" class="d-none d-md-flex justify-end align-center">
            <router-link
              v-for="item in menuItems"
              :key="item.title"
              :to="item.href"
              class="mx-2 nav-link"
              :class="{ active: route.path.startsWith(item.href) }"
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
            :class="{ active: route.path.startsWith(item.href) }"
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
import { isDarkMode } from '@/composables/useTheme.js'
import logo from '@/assets/Antocap-logo.jpg'
import { ref, onMounted, onUnmounted } from "vue"
import { useRoute } from "vue-router"
import AOS from "aos"
import "aos/dist/aos.css"

const drawer = ref(false)
const route = useRoute()

const menuItems = [
  { title: "Home", href: "/", icon: "mdi-home" },
  { title: "About Us", href: "/about", icon: "mdi-information" },
  { title: "Services", href: "/services", icon: "mdi-tools" },
  { title: "Pricing", href: "/pricing", icon: "mdi-cash" },
  { title: "Projects", href: "/project", icon: "mdi-check-circle" },
  { title: "Contact Us", href: "/contact", icon: "mdi-email" },
  { title: "Blog", href: "/blog", icon: "mdi-pencil" },
  { title: "Rating & Reviews", href: "/testimonials", icon: "mdi-comment-quote" }
]

const appBarWidth = ref("97%")

const handleScroll = () => {
  appBarWidth.value = window.scrollY > 50 ? "100%" : "97%"
}

onMounted(() => {
  AOS.init()
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<style scoped>
.black-bg {
  background-color: #000 !important;
}

.v-app-bar {
  overflow-x: hidden;
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
