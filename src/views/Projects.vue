<template>
  <section class="projects-section">
    <v-container>
      <!-- Heading -->
      <div class="section-heading" data-aos="fade-down">
        <h2 class="gold-gradient">Our Completed Projects</h2>
        <p class="subtitle">Showcasing digital excellence across industries</p>
      </div>

      <!-- Loop through Categories -->
      <div
        v-for="(category, i) in projects"
        :key="i"
        class="category-wrapper"
      >
        <!-- Category Title -->
        <div class="category-heading" data-aos="fade-up">
          <v-icon :icon="category.icon" class="category-icon"></v-icon>
          <h3>{{ category.category }}</h3>
        </div>

        <!-- Swiper -->
        <swiper
          :modules="[Autoplay, Navigation]"
          :slides-per-view="2"
          :space-between="12"
          :loop="true"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          :navigation="{ prevEl: `.prev-${i}`, nextEl: `.next-${i}` }"
          :breakpoints="{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 5 }
          }"
          class="projects-swiper"
        >
          <swiper-slide
            v-for="(project, j) in category.projects"
            :key="j"
          >
            <div class="project-card" data-aos="fade-up" data-aos-delay="100">
              <!-- Image -->
              <div class="card-image">
                <img :src="project.image" alt="project preview" />
              </div>

              <!-- Content -->
              <div class="card-content">
                <h4>{{ project.title }}</h4>
                <p>{{ project.description }}</p>
                <a :href="project.link" target="_blank">
                  <v-btn class="gold-btn mt-2">View</v-btn>
                </a>
              </div>
            </div>
          </swiper-slide>

          <!-- Category-specific Nav -->
          <v-btn icon class="nav-btn prev-btn" :class="`prev-${i}`">
            <v-icon icon="mdi-chevron-left" />
          </v-btn>
          <v-btn icon class="nav-btn next-btn" :class="`next-${i}`">
            <v-icon icon="mdi-chevron-right" />
          </v-btn>
        </swiper>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.projects-section {
  width: 100%;
  padding: 3rem 0;
  background: linear-gradient(180deg, #000, #111);
  overflow-x: hidden;
  margin-top: 2%;
}

.projects-section .v-container {
  max-width: 95% !important;
}

.section-heading {
  text-align: center;
  margin-bottom: 2rem;
}

.gold-gradient {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #ffd700, #b8860b);
  -webkit-background-clip: text;
   background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  color: #ccc;
  font-size: 0.9rem;
}

/* Category Heading */
.category-wrapper {
  margin-bottom: 2rem;
  position: relative;
}
.category-heading {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.6rem;
}
.category-heading h3 {
  color: #ffd700;
  font-size: 1rem;
  font-weight: 600;
}
.category-icon {
  color: #ffd700;
  font-size: 1rem;
}

/* Swiper custom nav */
.nav-btn {
  background: linear-gradient(90deg, #ffd700, #b8860b);
  color: #000 !important;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  z-index: 10;
  opacity: 1;
}
.prev-btn { left: 2px; }
.next-btn { right: 2px; }
.nav-btn .v-icon { font-size: 0.9rem; }

/* Ultra Compact Project Cards */
.project-card {
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 8px rgba(255, 215, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  max-width: 220px;
  margin: 0 auto;
}
.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(255, 215, 0, 0.25);
}

/* Image with aspect ratio */
.card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}
.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Compact content */
.card-content {
  padding: 0.5rem;
}
.card-content h4 {
  font-size: 0.8rem;
  font-weight: 600;
  color: #ffd700;
  margin-bottom: 0.2rem;
}
.card-content p {
  font-size: 0.7rem;
  line-height: 1.1;
  color: #ccc;
  height: 28px; /* keep short descriptions aligned */
  overflow: hidden;
}

/* Tiny button */
.gold-btn {
  background: linear-gradient(90deg, #ffd700, #b8860b);
  color: #000 !important;
  border-radius: 12px;
  font-size: 0.65rem;
  font-weight: 500;
  padding: 2px 6px;
  min-height: unset;
}
</style>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Example imports (replace with real ones from your assets folder)
import aiLife from '@/assets/ai-life.jpg';
import antocap from '@/assets/Antocap-logo.jpg';
import moovin from '@/assets/moovin.png';
import dickyways from '@/assets/dickyways.jpg';
import halon from '@/assets/halon.jpg';
import allekey from '@/assets/allekey.jpg';
import chestermac from '@/assets/chestermac.jpg';
import polarhomes from '/client-logos/polarhomes-logo.jpg';
import cleaningtreks from '@/assets/cleaningtreks.jpeg';
import jubazone from '@/assets/jubazone.webp';
import subscription from '@/assets/subscription.png';
import property from '@/assets/property.png';
import billing from '@/assets/billings.png';
import producttrace from '/client-logos/product-trace-ltd-logo.png';
import sanfiat from '/client-logos/sanfiat-logo.png';
import quantum from '/client-logos/quantumincome-logo.jpg';
import jobtask from '@/assets/jobtask.jpg';

const projects = [
  {
    category: 'Service Websites',
    icon: 'mdi-web',
    projects: [
      { title: 'Antocap Teknologies', description: 'Our flagship website showcasing premium IT and digital solutions.', link: 'https://antocapteknologies.com/', image: antocap },
      { title: 'Dickyways Tours & Travels', description: 'A dynamic travel booking site with integrated payments and itinerary management.', link: 'https://anto-4ny.github.io/dickyways/', image: dickyways },
      { title: 'Halon Graphics', description: 'A creative agency website highlighting modern branding and graphic design services.', link: 'https://anto-4ny.github.io/halon-graphics/', image: halon },
      { title: 'Allekey Tours & Travels', description: 'A sleek travel portal designed for easy bookings and destination showcases.', link: 'https://anto-4ny.github.io/allekey/', image: allekey },
      { title: 'Chestermac Consultants', description: 'A professional KRA services portal with client-focused user experience.', link: 'https://anto-4ny.github.io/chestermac/', image: chestermac },
      { title: 'Polarhomes', description: 'A modern accommodation and Airbnb-style booking site built for reliability.', link: 'https://polarhomes.org/', image: polarhomes },
      { title: 'Cleaning Treks', description: 'A Scandinavian cleaning service website designed with clean UI and local SEO.', link: 'https://www-cleaninigtreks-com.vercel.app/', image: cleaningtreks }
    ]
  },
    {
    category: 'SEO Optimizations',
    icon: 'mdi-trending-up',
    projects: [
      { title: 'Product Trace Limited', description: 'SEO campaign ranking "barcodes in Kenya" on Google’s first page.', link: 'https://www.product-traceltd.com/', image: producttrace },
      { title: 'Antocap Teknologies', description: 'Ongoing SEO strategies boosting visibility and brand authority.', link: 'https://antocapteknologies.com/', image: antocap },
      { title: 'Polarhomes', description: 'Local SEO optimization ranking for keywords like "accommodation in JKIA".', link: 'https://polarhomes.org/', image: polarhomes },
      { title: 'Sanfiat Technologies', description: 'SEO-focused affiliate platform with competitive keyword targeting.', link: 'https://sanfiat.antocapteknologies.com/', image: sanfiat }
    ]
  },
  {
    category: 'eCommerce Solutions',
    icon: 'mdi-cart-outline',
    projects: [
      { title: 'Jubazone E-commerce', description: 'A fully functional e-commerce platform with secure checkout and product management.', link: 'https://jubazone.co.ke/', image: jubazone }
    ]
  },
    {
    category: 'Affiliate Websites',
    icon: 'mdi-handshake-outline',
    projects: [
      { title: 'Quantum Income', description: 'A high-conversion affiliate platform with secure online payment systems.', link: 'https://quantumincome.org/', image: quantum },
      { title: 'Sanfiat Technologies', description: 'Affiliate marketing site integrated with MPESA STK push for instant payments.', link: 'https://sanfiat.antocapteknologies.com/', image: sanfiat }
    ]
  },
    {
    category: 'Artificial Intelligence (AI)',
    icon: 'mdi-robot',
    projects: [
      {
        title: 'AI Life Simulation',
        description: 'A next-gen life simulator that mimics real human interaction using advanced AI models.',
        link: 'https://ai-chatbot-rho-three-50.vercel.app/',
        image: aiLife
      },
      {
        title: 'Moovin Property Management',
        description: 'An AI-powered property platform with automated tenant support and intelligent dashboards.',
        link: 'https://moovin-eight.vercel.app/',
        image: moovin
      }
    ]
  },
  {
    category: 'Management Systems',
    icon: 'mdi-cog-outline',
    projects: [
      { title: 'Subscription Management', description: 'A SaaS platform for handling recurring subscriptions and customer billing.', link: 'https://subsmart-website.vercel.app/', image: subscription },
      { title: 'Property Management System', description: 'A complete real estate system for landlords, tenants, and admin operations.', link: 'https://moovin-eight.vercel.app/dashboard/', image: property }
    ]
  },
  {
    category: 'Android Mobile Apps',
    icon: 'mdi-cellphone',
    projects: [
      { title: 'JobTask Mobile App', description: 'An Android app for booking services like barbers and handymen, with real-time tracking.', link: 'https://play.google.com/store/apps/details?id=com.jobtaskukportalss&hl=en&pli=1', image: jobtask }
    ]
  },
    {
    category: 'Billing Systems',
    icon: 'mdi-cash-register',
    projects: [
      { title: 'Coming Soon', description: 'Innovative billing systems with automation and multi-currency support—launching soon.', link: '', image: billing }
    ]
  }
];
</script>

