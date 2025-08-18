<template>
  <div class="bg-black text-white min-h-screen py-16">
    <v-container>
      <!-- Service Title -->
      <v-row align="center" justify="center" class="mb-12" data-aos="fade-down">
        <v-col cols="12" class="text-center">
          <h1
            class="text-h3 text-sm-h2 font-weight-bold text-uppercase letter-spacing-lg"
            style="color: #d4af37;"
          >
            {{ service.title }}
          </h1>
          <div class="mx-auto mt-2" style="width: 80px; height: 3px; background: #d4af37;"></div>
        </v-col>
      </v-row>

      <!-- Main Info Section -->
      <v-row align="center" justify="center" class="gy-12">
        <!-- Service Image -->
        <v-col cols="12" md="6" class="d-flex justify-center" data-aos="fade-right">
          <v-img
            :src="service.image"
            :alt="service.title"
            max-height="480"
            aspect-ratio="1.6"
            class="rounded-lg elevation-16"
            cover
          />
        </v-col>

        <!-- Service Info -->
        <v-col cols="12" md="6" class="text-left" data-aos="fade-left">
          <p class="text-body-2 mb-8" style="color: #ccc; line-height: 1.8;">
            {{ service.description }}
          </p>

          <!-- Features -->
          <v-list v-if="service.features.length" density="compact" bg-color="transparent">
            <v-list-item
              v-for="(feature, i) in service.features"
              :key="i"
              class="px-0"
            >
              <template #prepend>
                <v-icon color="gold" size="22">{{ feature.icon }}</v-icon>
              </template>
              <v-list-item-title class="text-body-2" style="color: #fff;">
                {{ feature.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>

          <!-- Buttons (always horizontal if space allows) -->
          <v-row class="mt-12" justify="start" align="center" dense>
            <v-col cols="12" sm="auto">
              <router-link to="/contact">
                <v-btn
                  color="gold"
                  variant="flat"
                  size="large"
                  rounded="pill"
                  elevation="8"
                  class="px-10 text-body-2 font-weight-bold mr-sm-6"
                >
                  Get Service
                </v-btn>
              </router-link>
            </v-col>

            <v-col cols="12" sm="auto">
              <router-link to="/services">
                <v-btn
                  color="gold"
                  variant="outlined"
                  size="large"
                  rounded="pill"
                  class="px-10 text-body-2 font-weight-bold"
                >
                  Back to Services
                </v-btn>
              </router-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- Portfolio / Samples Section -->
      <v-row class="mt-16" data-aos="fade-up">
        <v-col cols="12" class="text-center mb-10">
          <h2 class="text-h5 font-weight-bold text-uppercase" style="color: #d4af37;">
            Featured Projects
          </h2>
          <div class="mx-auto mt-2" style="width: 60px; height: 2px; background: #d4af37;"></div>
        </v-col>

        <v-col
          v-for="(project, i) in service.projects"
          :key="i"
          cols="12"
          md="4"
          class="d-flex"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <v-card class="bg-black elevation-12 rounded-lg w-100">
            <v-img
              :src="project.image"
              :alt="project.name"
              height="130"
              class="rounded-t-lg"
              cover
            />
            <v-card-text class="pa-6">
              <h3 class="text-subtitle-1 font-weight-bold mb-2" style="color: #fff;">
                {{ project.name }}
              </h3>
              <p class="text-body-2 mb-4" style="color: #aaa;">
                {{ project.description }}
              </p>
              <v-btn
                :href="project.link"
                target="_blank"
                color="gold"
                variant="outlined"
                rounded="pill"
                size="small"
                class="text-body-2 font-weight-bold"
              >
                View Live
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"

const images = {
  "web-development": new URL("@/assets/webdev.webp", import.meta.url).href,
  "graphic-design": new URL("@/assets/design.png", import.meta.url).href,
  "seo": new URL("@/assets/seo.jpg", import.meta.url).href,
  "automation": new URL("@/assets/automation.jpg", import.meta.url).href,
  "pos-softwares": new URL("@/assets/pos.png", import.meta.url).href,
  "management-systems": new URL("@/assets/management.jpg", import.meta.url).href,
  "billing-systems": new URL("@/assets/billing.png", import.meta.url).href,
  "web-app-revamping": new URL("@/assets/revamp.jpg", import.meta.url).href,
  "it-support": new URL("@/assets/itSupport.jpg", import.meta.url).href,
  "app-development": new URL("@/assets/appDev.jpg", import.meta.url).href,
  "default": new URL("@/assets/bjk.gif", import.meta.url).href,
}

// route
const route = useRoute()
const slug = route.params.slug

// services data with portfolio samples
const services = {
  "website-development": {
    title: "Web Development",
    description:
      "We craft ultra-fast, secure, and modern digital experiences for premium brands. From elegant landing pages to powerful enterprise platforms, our builds embody precision, performance, and prestige.",
    features: [
      { icon: "mdi-cellphone-link", text: "Responsive & Mobile-First" },
      { icon: "mdi-magnify", text: "SEO Optimized Architecture" },
      { icon: "mdi-speedometer", text: "Lightning Performance" },
      { icon: "mdi-palette", text: "Refined Modern UI/UX" },
    ],
    image: images["web-development"],
    projects: [
      {
        name: "Antocap Teknologies",
        description: "Software development company website",
        link: "https://antocapteknologies.com",
        image: new URL("@/assets/Antocap-logo.jpg", import.meta.url).href,
      },
    ],
  },

  "software-app-development": {
    title: "App Development",
    description:
      "We craft high-performance mobile and desktop applications that merge innovation with seamless user experiences.",
    features: [
      { icon: "mdi-android", text: "Android Development" },
      { icon: "mdi-apple", text: "iOS Development" },
      { icon: "mdi-desktop-mac", text: "Cross-Platform Apps" },
      { icon: "mdi-cellphone", text: "Modern Mobile Experiences" },
    ],
    image: images["app-development"],
    projects: [],
  },

  "graphic-design": {
    title: "Graphic Design",
    description:
      "Our design atelier transforms your brand into a statement of prestige. From timeless logos to captivating campaigns, we merge creativity and luxury aesthetics into every detail.",
    features: [
      { icon: "mdi-brush", text: "Logos & Elite Branding" },
      { icon: "mdi-post", text: "Premium Posters & Campaigns" },
      { icon: "mdi-card-account-details-outline", text: "Luxury Business Cards" },
      { icon: "mdi-instagram", text: "Elegant Social Media Kits" },
    ],
    image: images["graphic-design"],
    projects: [
    ],
  },

  "seo": {
    title: "SEO Optimization",
    description:
      "We optimize your digital presence with cutting-edge SEO strategies that drive visibility, organic growth, and premium traffic.",
    features: [
      { icon: "mdi-google", text: "Google Rankings Boost" },
      { icon: "mdi-chart-line", text: "Keyword & Market Research" },
      { icon: "mdi-link", text: "High-Authority Backlinking" },
      { icon: "mdi-web", text: "On-page & Off-page SEO" },
    ],
    image: images["seo"],
    projects: [
      {
        name: "Product Trace limited",
        description: "Boosted global rankings by 100% in 3 months. Keywords such as 'barcodes in kenya'",
        link: "https://www.product-traceltd.com/",
        image: new URL("/client-logos/product-trace-ltd-logo.png", import.meta.url).href,
      },
    ],
  },

  "automation": {
    title: "Business Automation",
    description:
      "Transform repetitive workflows into smart, automated systems that save time and increase efficiency.",
    features: [
      { icon: "mdi-robot", text: "Process Automation" },
      { icon: "mdi-database", text: "Data Integration" },
      { icon: "mdi-cloud-sync", text: "Cloud Automation" },
      { icon: "mdi-clock-fast", text: "Time & Cost Efficiency" },
    ],
    image: images["automation"],
    projects: [
    ],
  },

  "pos-softwares": {
    title: "POS Softwares",
    description:
      "Robust POS solutions tailored for businesses of all scales, blending speed, reliability, and security.",
    features: [
      { icon: "mdi-cash-register", text: "Fast Checkout Process" },
      { icon: "mdi-barcode-scan", text: "Barcode & QR Support" },
      { icon: "mdi-file-chart", text: "Sales & Reports Analytics" },
      { icon: "mdi-account-group", text: "Multi-user & Roles" },
    ],
    image: images["pos-softwares"],
    projects: [
    ],
  },

  "management-systems": {
    title: "Management Systems",
    description:
      "Custom-built systems that empower organizations to manage resources, teams, and workflows with ease.",
    features: [
      { icon: "mdi-account-tie", text: "Employee Management" },
      { icon: "mdi-school", text: "School & Academic Portals" },
      { icon: "mdi-warehouse", text: "Inventory & Fleet Management" },
      { icon: "mdi-domain", text: "Custom Enterprise Solutions" },
    ],
    image: images["management-systems"],
    projects: [
    ],
  },

  "billing-systems": {
    title: "Billing Systems",
    description:
      "Secure billing solutions that streamline invoicing, payments, and financial tracking for businesses.",
    features: [
      { icon: "mdi-receipt", text: "Automated Invoicing" },
      { icon: "mdi-credit-card", text: "Multiple Payment Gateways" },
      { icon: "mdi-lock", text: "Secure Transactions" },
      { icon: "mdi-chart-bar", text: "Revenue & Expense Reports" },
    ],
    image: images["billing-systems"],
    projects: [
    ],
  },

  "web-app-revamping": {
    title: "Web & App Revamping",
    description:
      "We breathe new life into outdated platforms, enhancing design, functionality, and performance.",
    features: [
      { icon: "mdi-refresh", text: "Modern Redesign" },
      { icon: "mdi-speedometer", text: "Performance Upgrades" },
      { icon: "mdi-security", text: "Enhanced Security" },
      { icon: "mdi-cellphone-link", text: "Cross-platform Optimization" },
    ],
    image: images["web-app-revamping"],
    projects: [
      {
        name: "Antocap Teknologies",
        description: "Revamped the whole software development website with modern UI.",
        link: "https://antocapteknologies.com/",
        image: new URL("@/assets/Antocap-logo.jpg", import.meta.url).href,
      },
    ],
  },

  "it-support": {
    title: "IT Support",
    description:
      "Reliable, 24/7 IT support ensuring seamless operations and minimal downtime for businesses.",
    features: [
      { icon: "mdi-headset", text: "24/7 Support Desk" },
      { icon: "mdi-shield-check", text: "Cybersecurity Monitoring" },
      { icon: "mdi-update", text: "System Maintenance" },
      { icon: "mdi-cloud", text: "Cloud Backup & Recovery" },
    ],
    image: images["it-support"],
    projects: [
    ],
  },
}

// fallback
const service = services[slug] || {
  title: "Service Not Found",
  description: "The requested service does not exist.",
  features: [],
  image: images["default"],
  projects: [],
}
</script>


<style scoped>
.bg-black {
  background-color: #000;
}
.text-white {
  color: #fff;
}
.text-gold {
  color: #d4af37;
}
.letter-spacing-lg {
  letter-spacing: 4px;
}
</style>
