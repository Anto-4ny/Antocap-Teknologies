<template>
  <v-container fluid class="top-section" data-aos="fade-up" data-aos-duration="1000">
    <v-row class="d-flex align-center">
      <v-col cols="12" md="6" data-aos="fade-right" data-aos-duration="1200">
        <div class="text-left">
          <h1 class="jump-blue">Innovating the Future of Technology</h1>
          <h2 class="medium-desc">Pushing the boundaries of software development.</h2>
          <p class="small-desc">Transforming businesses with powerful and scalable solutions.</p>

          <div class="button-container mt-6" data-aos="fade-up" data-aos-delay="200">
            <!-- 'Get Started' Button -->
            <v-btn
              color="primary"
              class="luxury-btn mr-4"
              href="/contact"
              aria-label="Contact us to get started with our services"
            >
              Get Started
            </v-btn>
            <!-- 'Learn More' Button -->
            <v-btn
            color="secondary"
            class="luxury-btn"
            href="/services"
            aria-label="Explore our services in detail"
          >
            Explore Our Services
          </v-btn>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="6" class="d-flex justify-center" data-aos="fade-left" data-aos-duration="1200">
        <!-- Using native lazy loading for performance -->
        <v-img :src="gifSource" alt="Technology Animation" height="400px" contain loading="lazy" />
      </v-col>
    </v-row>

    <!-- Carousel Section -->
    <v-container fluid data-aos="fade-up" data-aos-duration="1000">
      <v-carousel cycle height="500" hide-delimiter-background show-arrows="hover" interval="5000">
        <template v-for="(slide, index) in slides" :key="index">
          <v-carousel-item>
            <template v-if="loadedImages[index]">
              <!-- Lazy load images in the carousel -->
              <v-img
                :src="slide.src"
                :alt="slide.alt"
                class="image-with-overlay"
                height="500"
                cover
                loading="lazy"
                :width="900"
                :height="500"
              />
            </template>
            <div v-else class="loading-placeholder">
              <v-progress-circular indeterminate color="primary" />
            </div>

            <div class="image-overlay">
              <h2 class="text-h4 font-weight-bold mb-2">{{ slide.title }}</h2>
              <p class="text-subtitle-1">{{ slide.description }}</p>
            </div>
          </v-carousel-item>
        </template>
      </v-carousel>

      <!-- Display 3 Main Services -->
      <v-row class="py-24" data-aos="fade-up">
        <v-spacer></v-spacer>
  
        <!-- Section Heading -->
        <v-col cols="12" class="text-center mb-16" data-aos="fade-down" data-aos-duration="1000">
            <div class="heading-container">
                <h2 class="premium-heading">Premium Services</h2>
                <div class="line-container">
                  <hr class="line-left">
                  <hr class="line-right">
                </div>
                <h3 class="headline font-weight-light text-gray-800 mt-2">Revolutionizing Digital Experiences</h3>
                <p class="text-lg text-gray-600 mt-4">
                  We create cutting-edge solutions designed to elevate your business to new heights.
                  Experience innovation like never before.
                </p>
            </div>
        </v-col>

        <!-- Service Cards -->
        <v-col
          v-for="(service, index) in services"
          :key="index"
          cols="12" sm="6" md="4"
          class="d-flex justify-center mb-6"
          :data-aos="'zoom-in-up'"
          :data-aos-delay="100 * (index % 3)"
        >
          <v-card
            class="elevation-12 service-card text-center pa-6"
            :style="{ background: service.bgColor }"
          >
            <!-- Use plain <i> instead of <v-icon> for Font Awesome -->
            <i
              class="text-white mb-4"
              :class="service.icon"
              style="font-size: 60px"
            ></i>
            <h3 class="text-h5 font-weight-bold mt-4">{{ service.title }}</h3>
            <p class="text-white mt-3">{{ service.description }}</p>
          </v-card>
        </v-col>

        <!-- EXPLORE MORE BUTTON-->
        <v-col cols="12" class="text-center mt-8" data-aos="fade-up" data-aos-delay="200">
          <!-- 'Explore More' Button -->
          <v-btn
            color="primary"
            to="/services"
            class="rounded"
            aria-label="Discover our range of services"
          >
            Explore More of Our Services
          </v-btn>
        </v-col>
      </v-row>

      <!-- Why Choose Us -->
      <v-row class="text-center mb-16">
        <v-col cols="12">
          <h2 class="text-h4 font-weight-bold mb-6" data-aos="fade-up">Why Choose Antocap Teknologies?</h2>
        </v-col>
        <v-col cols="12" md="4" data-aos="fade-up" data-aos-delay="100">
          <v-icon size="48" color="success" class="mb-3">mdi-star-circle</v-icon>
          <h3 class="text-h6 font-weight-medium mb-2">Premium Quality</h3>
          <p>We craft every solution with precision and luxury in mind.</p>
        </v-col>
        <v-col cols="12" md="4" data-aos="fade-up" data-aos-delay="200">
          <v-icon size="48" color="info" class="mb-3">mdi-speedometer</v-icon>
          <h3 class="text-h6 font-weight-medium mb-2">Speed & Performance</h3>
          <p>Our systems are optimized for speed, SEO, and seamless user experience.</p>
        </v-col>
        <v-col cols="12" md="4" data-aos="fade-up" data-aos-delay="300">
          <v-icon size="48" color="purple" class="mb-3">mdi-account-group</v-icon>
          <h3 class="text-h6 font-weight-medium mb-2">Client-Centered</h3>
          <p>We work closely with our clients to deliver solutions that meet real business needs.</p>
        </v-col>
      </v-row>

      <!-- Footer Banner -->
      <v-row align="center" justify="center" class="text-center">
        <v-col cols="12" md="8" data-aos="fade-up">
          <v-card class="py-8 px-6 rounded-xl elevation-10" style="background: linear-gradient(135deg, #0077b6, #00b4d8);">
            <h2 class="text-h4 font-weight-bold text-white mb-4">Join the Digital Revolution with Antocap Teknologies</h2>
            <p class="text-white mb-4">Let’s turn your idea into a premium digital experience that scales and excels.</p>
            <v-btn
              to="/contact"
              color="white"
              text
              large
              class="font-weight-bold"
              aria-label="Contact us to get in touch"
            >
              Get In Touch
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>


<script setup>
import { ref, onMounted } from 'vue';

import gifSource from '@/assets/bJk.gif';

// ✅ Import only .jpg images from the assets folder
import itJpg from '@/assets/it.jpg';
import cloudJpg from '@/assets/cloud.jpg';
import automationJpg from '@/assets/automation2.jpg';
import { useHead } from '@vueuse/head';

const slides = ref([
  {
    src: itJpg,
    title: 'Innovative IT Solutions',
    description: 'Leading the future of technology with cutting-edge solutions.',
    alt: 'Innovative IT Solutions'
  },
  {
    src: cloudJpg,
    title: 'Advanced Cloud Services',
    description: 'Seamless integration with secure and scalable cloud solutions.',
    alt: 'Advanced Cloud Services'
  },
  {
    src: automationJpg,
    title: 'AI-Powered Automation',
    description: 'Harnessing artificial intelligence to drive efficiency and growth.',
    alt: 'AI-Powered Automation'
  }
]);

const loadedImages = ref(Array(slides.value.length).fill(false));

onMounted(() => {
  slides.value.forEach((slide, index) => {
    const img = new Image();
    img.src = slide.src;
    img.onload = () => {
      loadedImages.value[index] = true;
    };
  });
});

const services = ref([
  { title: 'Website Development', 
    description: 'Custom-built, high-performance websites with sleek designs, optimized for speed, SEO, and user experience. At Antocap Teknologies, we leverage the latest technologies to create responsive, visually appealing websites that perform well in search engines, boosting your online presence.', 
    icon: 'fas fa-laptop-code', 
    bgColor: 'linear-gradient(145deg, #00b4d8 0%, #0077b6 100%)' },
  { title: 'Software & App Development', 
   description: 'Robust, scalable, and efficient software tailored to streamline operations. We create business apps, tools, and management systems with a focus on functionality and user-friendly interfaces. Our apps are built with cutting-edge frameworks and ensure high performance, security, and seamless integration with existing systems. SEO-optimized apps for greater visibility and engagement.',
   icon: 'fas fa-code',
   bgColor: 'linear-gradient(145deg, #00b4d8 0%, #0077b6 100%)' },
 
   {
  title: 'SEO Optimization',
  description: 'Comprehensive SEO services designed to improve your website\'s visibility on search engines. From keyword research and on-page SEO to link-building strategies, we help increase your organic traffic and drive results. At Antocap Teknologies, we focus on optimizing your site for better ranking, faster loading times, and user-friendly experience to ensure long-term success.',
  icon: 'fas fa-search',
  bgColor: '#8f94fb', // Keep the same background color for consistency
}

]);

// Limiting the services to display only 3 on the homepage
const limitedServices = services.value.slice(0, 3);

// SEO meta
useHead({
  title: 'Antocap Teknologies | Leading IT Solutions, Web & Software Development, SEO Services',
  meta: [
    { name: 'description', content: 'Antocap Teknologies offers innovative IT solutions, web development, software & app development, and SEO services. We help businesses achieve growth through cutting-edge technology and custom-built solutions.' },
    { name: 'keywords', content: 'IT solutions, web development, app development, SEO services, software development, AI-powered automation, cloud services, technology solutions' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Antony Ndambuki' },
    { name: 'google-site-verification', content: '5hBLXfg-cAkfTMQDRDlg4h78fQ8fo6xtex41hVJFlz4' },
    { property: 'og:title', content: 'Antocap Teknologies | IT Solutions, Web Development, SEO' },
    { property: 'og:description', content: 'Antocap Teknologies provides top-notch IT solutions, web design, software development, SEO services, and AI-powered automation to boost your business.' },
    { property: 'og:url', content: 'https://www.antocapteknologies.com' },
    { property: 'og:image', content: 'https://www.antocapteknologies.com/logo.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Antocap Teknologies | IT & Web Solutions' },
    { name: 'twitter:description', content: 'Empowering businesses with innovative IT solutions, custom software, web design, and SEO services.' },
    { name: 'twitter:image', content: 'https://www.antocapteknologies.com/logo.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.antocapteknologies.com' }
  ]
})

// Structured data for homepage
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Antocap Teknologies",
        "url": "https://www.antocapteknologies.com",
        "logo": "https://www.antocapteknologies.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+254757492614",
          "contactType": "Customer Service",
          "areaServed": "KE",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://www.facebook.com/AntocapTeknologies",
          "https://www.instagram.com/antocap_technologies",
          "https://twitter.com/AntocapTech"
        ]
      })
    }
  ]
})
</script>

<style scoped>
@keyframes jumpLoop {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.top-section {
  padding-top: 90px;
  padding-bottom: 80px;
}

.jump-blue {
  color: #1e88e5;
  animation: jumpLoop 2s infinite ease-in-out;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.medium-desc {
  font-size: 1.5rem;
  color: #444;
  font-weight: 400;
  margin-top: 1rem;
  line-height: 1.4;
}

.small-desc {
  font-size: 1.125rem;
  color: #666;
  font-weight: 400;
  margin-top: 1rem;
  line-height: 1.6;
}

.luxury-btn {
  background: #000;
  color: #fff;
  border-radius: 25px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.luxury-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.image-with-overlay {
  position: relative;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
  color: #fff;
  text-align: center;
}

.loading-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  background: #f5f5f5;
}

.v-carousel__prev, .v-carousel__next {
  font-size: 24px;
  color: white;
}

.v-carousel__prev:hover, .v-carousel__next:hover {
  color: #ff4081;
}


.service-card {
    border-radius: 15px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  .service-icon {
    transition: transform 0.3s ease;
  }
  
  .service-card:hover .service-icon {
    transform: scale(1.2);
  }
  
  .v-btn {
    font-weight: 600;
    padding: 10px 20px;
  }
  
  .text-white {
    color: white;
  }
  
  .text-indigo-600 {
    color: #5c6bc0;
  }
  
  .text-gray-600 {
    color: #757575;
  }
  
  .text-gray-800 {
    color: #424242;
  }
  
  .text-center {
    text-align: center;
  }

  .mb-16 {
  margin-top: 8%; /* adds space above the section */
}

/* Premium Services Heading */
.premium-heading {
  font-size: 2.5rem;  /* Large size */
  color: #1E88E5;  /* Blue color */
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  animation: jump 1.5s ease-in-out infinite;  /* Jumping effect */
  margin-bottom: 0.5rem;
}

@media (max-width: 600px) {
  .premium-heading {
    margin-top: 10%;
  }
}

@keyframes jump {
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-10px);
  }
}

/* Line Container */
.line-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.line-left, .line-right {
  width: 25%;
  border: none;
  height: 2px;
}

.line-left {
  background: linear-gradient(90deg, #00c6ff, #0072ff); /* Left line gradient */
  margin-right: 10px;
}

.line-right {
  background: linear-gradient(90deg, #ff512f, #dd2476); /* Right line gradient */
  margin-left: 10px;
}

/* Subtitle and Description Styling */
.headline {
  font-size: 1.75rem;
  color: #333;
  font-weight: 300;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75;
  color: #666;
}

.text-gray-600 {
  color: #444;
  font-weight: 400;
  margin-top: 1.5rem;
}
</style>
