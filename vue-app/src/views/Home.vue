<template>
  <v-container fluid data-aos="fade-up" data-aos-duration="1000">
    <!-- Top Section with additional space for extra items -->
    <div class="top-section" data-aos="fade-up" data-aos-duration="1000">
      <v-row class="d-flex align-center">
        <v-col cols="12" md="6" data-aos="fade-right" data-aos-duration="1200">
          <div class="text-left">
            <!-- Large Description -->
            <h1 class="display-2 font-weight-bold jump-blue">Innovating the Future of Technology</h1>
            <!-- Medium Description -->
            <h2 class="text-md md:text-lg text-gray-800 mt-2">Pushing the boundaries of software development.</h2>
            <!-- Small Description -->
            <p class="text-sm text-gray-600 mt-2">Transforming businesses with powerful and scalable solutions.</p>
          </div>
          <!-- Buttons below the descriptions -->
          <div class="button-container mt-4" data-aos="fade-up" data-aos-delay="200">
            <v-btn color="primary" href="/contact" class="luxury-btn mr-4">Get Started</v-btn>
            <v-btn color="secondary" href="/services" class="luxury-btn">Learn More</v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="d-flex justify-center" data-aos="fade-left" data-aos-duration="1200">
          <v-img
            :src="gifSource"
            alt="Technology Animation"
            class="d-block"
            height="400px"
            width="auto"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>

  <!-- Carousel Section -->
  <div data-aos="fade-up" data-aos-duration="1000">
    <v-carousel
      cycle
      height="500"
      hide-delimiter-background
      show-arrows="hover"
      interval="5000"
    >
      <template v-for="(slide, index) in slides" :key="index">
        <v-carousel-item>
          <!-- Display the image only if it has loaded -->
          <template v-if="loadedImages[index]">
            <v-img
              :src="slide.src"
              :alt="slide.alt"
              class="d-block image-with-overlay"
              height="500"
              max-width="calc(100% - 10px)"
              cover
            />
          </template>

          <!-- Loading spinner while the image is loading -->
          <div v-else class="loading-placeholder">
            <v-progress-circular indeterminate color="primary" />
          </div>

          <!-- Overlay with title and description -->
          <div class="image-overlay" data-aos="fade-up" data-aos-delay="300">
            <h2 class="text-h4 font-weight-bold mb-2">{{ slide.title }}</h2>
            <p class="text-h6">{{ slide.description }}</p>
          </div>
        </v-carousel-item>
      </template>
    </v-carousel>
  </div>

  <!-- Display 3 Main Services -->
  <v-row class="py-24 mt-16" data-aos="fade-up" data-aos-duration="1000">
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

    <!-- Limited Services Loop -->
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

    <!-- Explore More Button -->
    <v-col cols="12" data-aos="zoom-in" data-aos-delay="500" class="text-center mt-4">
      <v-btn
        color="black"
        to="/services"
        class="luxury-btnn px-8 py-4 text-white text-lg font-weight-bold"
        elevation="10"
        rounded
      >
        Explore More Services
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
       <v-btn to="/contact" color="white" text large class="font-weight-bold">Get In Touch</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import gifSource from '@/assets/bjk.gif';

// ✅ Import only .jpg images from the assets folder
import itJpg from '@/assets/it.jpg';
import cloudJpg from '@/assets/cloud.jpg';
import automationJpg from '@/assets/automation2.jpg';

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
</script>

<style scoped>
/* Jumping Animation */
@keyframes jumpLoop {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

/* Apply blue color and animation to the big headline */
.jump-blue {
  color: #1e88e5; /* Sleek blue */
  animation: jumpLoop 2s infinite ease-in-out;
  font-size: 3.5rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

/* Top Section Styling */
.top-section {
  padding-bottom: 20px;
  margin-top: 10%; /* Reduced space at the top */
}

/* Large Description (Heading 1) */
.text-left h1 {
  font-size: 3.5rem; /* Reduced font size for large description */
  font-weight: bold;
  color: #333;
  letter-spacing: -0.5px;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

/* Medium Description (Heading 2) */
.text-left h2 {
  font-size: 1.5rem; /* More moderate size for the medium description */
  color: #444;
  font-weight: 300;
  margin-top: 1rem;
  letter-spacing: -0.5px;
  line-height: 1.4;
}

/* Small Description (Paragraph) */
.text-left p {
  font-size: 1.125rem; /* Slightly reduced size for the small description */
  color: #666;
  font-weight: 400;
  margin-top: 1rem;
  line-height: 1.6;
}

/* Buttons Styling */
.button-container {
  margin-top: 2rem;
}

/* Luxury Button Styling */
.luxury-btn {
  background: #000; /* Solid black background */
  color: #fff; /* White text */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  border-radius: 25px; /* Slightly smaller border radius */
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
}

.luxury-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.luxury-btn + .luxury-btn {
  margin-left: 1rem;
}

.image-with-overlay {
  position: relative;
  padding: 0 5px; /* Add 5px padding to the left and right */
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%); /* Darker background for more contrast */
  color: white;
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
  color: #ff4081; /* Hover color for the arrows */
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

.mt-16 {
  margin-top: 4rem; /* adds space above the section */
}

.luxury-btnn {
  background-color: black;  /* Set the background color to black */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);  /* Adjusted box shadow for black button */
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
}

.luxury-btnn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);  /* Enhanced shadow effect on hover */
}

/* Premium Services Heading */
.premium-heading {
  font-size: 4rem;  /* Large size */
  color: #1E88E5;  /* Blue color */
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  animation: jump 1.5s ease-in-out infinite;  /* Jumping effect */
  margin-bottom: 0.5rem;
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
