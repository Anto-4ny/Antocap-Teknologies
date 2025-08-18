<template>
  <section class="premium-section">
    <v-container>
      <!-- Heading -->
      <div class="section-heading" data-aos="fade-down">
        <h2 class="gold-gradient">Premium Services</h2>
        <p class="subtitle">Where technology meets luxury — tailored for you.</p>
      </div>

      <!-- Swiper Carousel -->
      <swiper
        :modules="[Autoplay, Navigation]"
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :navigation="{ prevEl: '.custom-prev', nextEl: '.custom-next' }"
        :breakpoints="{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 }
        }"
        class="premium-swiper"
      >
        <swiper-slide
          v-for="(service, index) in services"
          :key="index"
        >
          <div class="service-card" data-aos="fade-up" data-aos-delay="100">
            <!-- Image -->
            <div class="card-image" :style="{ backgroundImage: `url(${service.image})` }">
              <div class="image-overlay">
                <v-icon :icon="service.icon" class="service-icon"></v-icon>
              </div>
            </div>

            <!-- Content -->
            <div class="card-content">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <RouterLink :to="`/${service.slug}`">
                <v-btn class="gold-btn mt-3">{{ service.title }}</v-btn>
              </RouterLink>
            </div>
          </div>
        </swiper-slide>

        <!-- Custom Navigation Buttons -->
        <v-btn icon class="nav-btn custom-prev">
          <v-icon icon="mdi-chevron-left" />
        </v-btn>
        <v-btn icon class="nav-btn custom-next">
          <v-icon icon="mdi-chevron-right" />
        </v-btn>
      </swiper>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import webdev from '@/assets/webdev.webp';
import appDevImg from '@/assets/appDev.jpg';
import seoImg from '@/assets/seo.jpg';
import posImg from '@/assets/pos.png';
import managementImg from '@/assets/management.jpg';
import revampImg from '@/assets/revamp.jpg';
import automationImg from '@/assets/automation.jpg';
import itSupportImg from '@/assets/itSupport.jpg';
import graphicdesign from '@/assets/design.png';

const services = ref([
  { title: 'Website Development', description: 'Elegant, fast, and responsive websites crafted for maximum impact.', icon: 'mdi-web', image: webdev, slug: 'services/website-development' },
  { title: 'App Development', description: 'Scalable mobile and desktop applications for the modern era.', icon: 'mdi-cellphone', image: appDevImg, slug: 'services/software-app-development' },
  { title: 'SEO Optimization', description: 'Boost your visibility with precision-targeted SEO strategies.', icon: 'mdi-chart-line', image: seoImg, slug: 'services/seo' },
  { title: 'POS Systems', description: 'Luxury retail & restaurant POS solutions for seamless transactions.', icon: 'mdi-cash-register', image: posImg, slug: 'services/pos-softwares' },
  { title: 'Management Systems', description: 'Streamline operations with custom management software.', icon: 'mdi-office-building-cog', image: managementImg, slug: 'services/management-systems' },
  { title: 'Web Revamping', description: 'Transform outdated sites into premium digital experiences.', icon: 'mdi-refresh', image: revampImg, slug: 'services/web-app-revamping' },
  { title: 'Automation', description: 'Save time and costs with advanced automation solutions.', icon: 'mdi-robot', image: automationImg, slug: 'services/automation' },
  { title: 'IT Support', description: 'Reliable and responsive IT support for your business.', icon: 'mdi-laptop', image: itSupportImg, slug: 'services/it-support' },
  { title: 'Graphic Design', description: 'High-impact visuals, branding, and creative designs that captivate your audience.', icon: 'mdi-draw', image: graphicdesign, slug: 'services/graphic-design' }
]);
</script>

<style scoped>
/* Full-width section without unwanted scrollbars */
.premium-section {
  width: 100%;
  padding: 4rem 0;
  background: linear-gradient(180deg, #000, #111);
  overflow-x: hidden; 
}

/* Override Vuetify's default container constraints */
.premium-section .v-container {
  max-width: 90% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
}

/* Rows and columns should never cause overflow */
.premium-section .v-row,
.premium-section .v-col {
  margin: 0 !important;
  max-width: 100% !important;
}

/* Heading styles */
.section-heading {
  text-align: center;
  margin-bottom: 2rem;
}

.gold-gradient {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(to right, #ffd700, #b8860b);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  color: #ccc;
  font-size: 1.1rem;
}

/* Hide Swiper default arrows */
.premium-swiper .swiper-button-prev::after,
.premium-swiper .swiper-button-next::after {
  display: none;
}

/* Custom nav buttons */
.nav-btn {
  background: linear-gradient(90deg, #ffd700, #b8860b);
  color: black !important;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.custom-prev {
  left: 5px;
}

.custom-next {
  right: 5px;
}

/* Fade in on hover */
.premium-swiper:hover .nav-btn {
  opacity: 1;
}

/* Card styles */
.service-card {
  background: #1a1a1a;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(255, 215, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(255, 215, 0, 0.3);
}

/* Image area */
.card-image {
  height: 160px;
  background-size: cover;
  background-position: center;
  position: relative;
}
.image-overlay {
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.service-icon {
  font-size: 2rem;
  color: #ffd700;
}

/* Text content */
.card-content {
  padding: 1rem;
}
.card-content h3 {
  font-size: 1.1rem;
  color: #ffd700;
  margin-bottom: 0.5rem;
}
.card-content p {
  color: #ccc;
  font-size: 0.9rem;
}

/* Button */
.gold-btn {
  background: linear-gradient(90deg, #ffd700, #b8860b);
  color: #000 !important;
  border-radius: 25px;
  font-weight: 400;
  padding: 4px 8px;
}
</style>
