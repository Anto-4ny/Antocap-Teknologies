<template>
  <v-app-bar flat color="white" class="elevation-2" height="90">
    <v-container fluid>
      <v-row align="center" justify="space-between" no-gutters class="px-4">
        <!-- Logo -->
        <v-col cols="auto" class="d-flex align-center">
          <v-img
            :src="logo"
            alt="Antocap Teknologies Logo"
            height="40"
            width="40"
            class="mr-3"
          ></v-img>
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
            class="mx-1 text-black font-weight-medium"
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

    <!-- Mobile Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      right
      temporary
      scrim
      class="bg-white elevation-24"
      :width="300"
      style="z-index: 3000;"
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

        <!-- Auth Links -->
        <v-list-item @click="drawer = false" class="px-3 py-2">
          <v-btn
            text
            block
            href="/signup"
            class="justify-start text-black font-weight-medium"
            style="text-transform: none;"
          >
            <v-icon left color="green" class="mr-3">fas fa-user-plus</v-icon>
            Sign Up
          </v-btn>
        </v-list-item>

        <v-list-item @click="drawer = false" class="px-3 py-2">
          <v-btn
            text
            block
            href="/login"
            class="justify-start text-black font-weight-medium"
            style="text-transform: none;"
          >
            <v-icon left color="blue" class="mr-3">fas fa-sign-in-alt</v-icon>
            Login
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'
import logo from '@/assets/Antocap-logo.jpg'

const drawer = ref(false)

const menuItems = [
  { title: 'Home', href: '/', icon: 'fas fa-home' },
  { title: 'About Us', href: '/about', icon: 'fas fa-info-circle' },
  { title: 'Services', href: '/services', icon: 'fas fa-tools' },
  { title: 'Projects Completed', href: '/project', icon: 'fas fa-check-circle' },
  { title: 'Blog', href: '/blog', icon: 'fas fa-blog' },
  { title: 'Testimonials', href: '/testimonials', icon: 'fas fa-comments' },
  { title: 'Get Started', href: '/contact', icon: 'fas fa-envelope' }
]
</script>

<style scoped>
.v-app-bar {
  z-index: 2100;
}
.v-navigation-drawer {
  height: 100vh;
}
</style>
