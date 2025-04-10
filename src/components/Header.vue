<template>
  <v-app-bar flat color="white" class="elevation-2" height="90">
    <v-container fluid>
      <v-row align="center" justify="space-between" no-gutters class="px-4">
        <!-- Logo -->
        <v-col cols="auto" class="d-flex align-center">
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
    style="z-index: 3000; position: absolute;"
  >
    <v-list dense>
      <!-- Navigation Links -->
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

      <!-- Sign Up and Login Buttons -->
      <v-list-item class="px-3 py-2">
        <v-btn
          text
          block
          href="/signup"
          class="justify-start text-white font-weight-medium red-bg"
          style="text-transform: none;"
        >
          Sign Up
        </v-btn>
      </v-list-item>
      <v-list-item class="px-3 py-2">
        <v-btn
          text
          block
          href="/login"
          class="justify-start text-white font-weight-medium red-bg"
          style="text-transform: none;"
        >
          Login
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import logo from '@/assets/Antocap-logo.jpg'

const drawer = ref(false)

const menuItems = [
  { title: 'Home', href: '/', icon: 'mdi-home' },
  { title: 'About Us', href: '/about', icon: 'mdi-information' },
  { title: 'Services', href: '/services', icon: 'mdi-tools' },
  { title: 'Projects Completed', href: '/project', icon: 'mdi-check-circle' },
  { title: 'Blog', href: '/blog', icon: 'mdi-blogger' },
  { title: 'Testimonials', href: '/testimonials', icon: 'mdi-comment-quote' },
  { title: 'Get Started', href: '/contact', icon: 'mdi-email' }
]
</script>

<style scoped>
.v-app-bar {
  z-index: 2100;
}
.v-navigation-drawer {
  height: 100vh;
  position: fixed;
  top: 0;
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
</style>
