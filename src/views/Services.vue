<template>
    <v-container fluid>
      <!-- Services Section -->
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
        <v-col cols="12" class="text-center mt-8" data-aos="fade-up" data-aos-delay="200">
          <v-btn color="green" to="/contact" class="rounded">
            Book any of our above Services
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>  
  
  <script setup>
  import { ref } from 'vue';

  import { useHead } from '@vueuse/head' 

  useHead({
  title: 'Premium IT Services | Antocap Teknologies',
  meta: [
    { name: 'description', content: 'Discover Antocap Teknologies’ premium services including website development, app creation, content writing, bot creation, IT consultation, and more.' },
    { name: 'keywords', content: 'Website Development Kenya, App Development Nairobi, IT Services Kenya, Graphic Design, Content Creation, Bot Development, Remote Support, SEO Services Kenya, Software Development, IT Consultancy, UI/UX Design, Branding, Cybersecurity, Computer Repair, Digital Marketing, Online Branding, System Optimization, Database Management, Cloud Solutions, IT Infrastructure, Full-stack Development' },
    { name: 'google-site-verification', content: '5hBLXfg-cAkfTMQDRDlg4h78fQ8fo6xtex41hVJFlz4' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'language', content: 'English' },
    { property: 'og:title', content: 'Premium Services - Antocap Teknologies' },
    { property: 'og:description', content: 'Explore our innovative and scalable digital solutions crafted to elevate your business.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://antocapteknologies.com/services' },
    { property: 'og:image', content: 'https://antocapteknologies.com/Antocap-logo.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Premium Services - Antocap Teknologies' },
    { name: 'twitter:description', content: 'Explore our innovative and scalable digital solutions crafted to elevate your business.' },
    { name: 'twitter:image', content: 'https://antocapteknologies.com/Antocap-logo.jpg' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Antocap Teknologies',
        url: 'https://antocapteknologies.com',
        logo: 'https://antocapteknologies.com/Antocap-logo.jpg',
        image: 'https://antocapteknologies.com/Antocap-logo.jpg',
        description: 'Antocap Teknologies offers premium IT services including website development, app development, graphic design, IT support, remote installations, and more.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Utawala',
          addressRegion: 'Nairobi',
          addressCountry: 'KE'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+254757492614',
          contactType: 'Customer Service'
        },
        founder: {
          '@type': 'Person',
          name: 'Antony Ndambuki'
        },
        sameAs: [
          'https://facebook.com/antocapteknologies',
          'https://instagram.com/antocapteknologies',
          'https://twitter.com/antocaptech',
          'https://linkedin.com/company/antocapteknologies'
        ]
      })
    }
  ]
})

  // Define all the services with the same professional background color
const services = ref([
  {
    title: 'Website Development',
    description: 'Custom-built, high-performance websites with sleek designs, optimized for speed, SEO, and user experience. At Antocap Teknologies, we leverage the latest technologies to create responsive, visually appealing websites that perform well in search engines, boosting your online presence.',
    icon: 'fas fa-laptop-code',
    bgColor: 'black', 
  },
  {
    title: 'Software & App Development',
    description: 'Robust, scalable, and efficient software tailored to streamline operations. We create business apps, tools, and management systems with a focus on functionality and user-friendly interfaces. Our apps are built with cutting-edge frameworks and ensure high performance, security, and seamless integration with existing systems. SEO-optimized apps for greater visibility and engagement.',
    icon: 'fas fa-code',
    bgColor: 'linear-gradient(145deg, #00b4d8 0%, #0077b6 100%)', 
  },
  {
    title: 'Graphic Design',
    description: 'Crafting visually stunning logos, branding, and marketing materials. Stand out in a crowded marketplace with elite-level designs. Our graphic design services include brand identity creation, web design, social media graphics, and promotional materials. We ensure every design reflects your brand\'s vision and targets the right audience while being SEO-friendly.',
    icon: 'fas fa-paint-brush',
    bgColor: 'linear-gradient(145deg, #00b4d8 0%, #0077b6 100%)', 
  },
  {
    title: 'Content Writing & Creation',
    description: 'Providing high-quality content for websites, blogs, and more. Our writing is tailored to engage your audience and boost SEO. At Antocap Teknologies, we create content that not only resonates with your audience but also adheres to the latest SEO trends, ensuring your content ranks well on search engines and attracts organic traffic.',
    icon: 'fas fa-pencil-alt',
    bgColor: 'linear-gradient(145deg, #00b4d8 0%, #0077b6 100%)', 
  },
  {
    title: 'Computer Maintenance (Onsite)',
    description: 'Keep your computers running smoothly with our professional maintenance services, including hardware upgrades, system optimizations, and troubleshooting. Whether it’s a slow system or faulty hardware, we provide fast, reliable solutions to ensure your devices are in top condition, all while ensuring your data is secure.',
    icon: 'fas fa-tools',
    bgColor: 'linear-gradient(145deg, #00b4d8 0%, #0077b6 100%)', 
  },
  {
    title: 'Remote Windows Installations',
    description: 'Fast and secure remote installations of Windows OS, making your systems ready in no time, no matter where you are. We ensure a smooth installation process, with a focus on system security and optimization for peak performance, all while reducing downtime.',
    icon: 'fas fa-desktop',
    bgColor: 'linear-gradient(145deg, #00b4d8 0%, #0077b6 100%)', 
  },
  {
    title: 'Bot Creation',
    description: 'Developing advanced bots for various platforms to automate tasks and improve user engagement. Whether for social media, customer support, or workflow automation, we create intelligent bots that provide real-time solutions and drive efficiency, all while ensuring the system is secure and scalable.',
    icon: 'fas fa-robot',
    bgColor: 'linear-gradient(145deg, #00b4d8 0%, #0077b6 100%)', 
  },
  {
    title: 'IT Consultation',
    description: 'Consult with us for strategic guidance in technology adoption, system architecture, and more. Our IT experts provide tailored advice for your business, helping you implement the right tech stack, optimize operations, and future-proof your organization. We also focus on ensuring that your IT infrastructure is scalable and optimized for both performance and SEO.',
    icon: 'fas fa-laptop',
    bgColor: 'linear-gradient(145deg, #00b4d8 0%, #0077b6 100%)', 
  },
  {
    title: 'Account Recovery & Device Support',
    description: 'Assisting in recovering hacked accounts and troubleshooting device issues to get you back on track. Our team ensures you regain access to your accounts safely and provides ongoing device support to maintain security and functionality. We focus on quick resolutions and ensuring your data is safe and secure.',
    icon: 'fas fa-shield-alt',
    bgColor: 'linear-gradient(145deg, #00b4d8 0%, #0077b6 100%)', 
  },
  {
    title: 'PIN Recovery (PC/Devices)',
    description: 'Helping you recover forgotten PINs for your devices to restore access quickly and securely. We ensure that the recovery process is smooth and your device remains secure throughout, offering peace of mind with minimal downtime.',
    icon: 'fas fa-lock',
    bgColor: 'linear-gradient(145deg, #00b4d8 0%, #0077b6 100%)', 
  }
  ]);
  </script>
  
  <style scoped>
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
    color: rgb(216, 33, 33);
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
  margin-top: 8%; 
}

/* Premium Services Heading */
.premium-heading {
  font-size: 2.5rem; 
  color: #1E88E5; 
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  animation: jump 1.5s ease-in-out infinite; 
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
  background: linear-gradient(90deg, #0ddb28, hsl(118, 95%, 47%)); 
  margin-right: 10px;
}

.line-right {
  background: linear-gradient(90deg, #4c55d6, #030b70); 
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
  