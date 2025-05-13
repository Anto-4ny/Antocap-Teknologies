<template>
  <v-container fluid>
    <!-- Section Heading -->
    <v-row class="py-24" data-aos="fade-up">
      <v-col cols="12" class="text-center mb-16" data-aos="fade-down" data-aos-duration="1000">
        <div class="heading-container">
          <h2 class="premium-heading">Premium Services</h2>
          <div class="line-container">
            <hr class="line-left" />
            <hr class="line-right" />
          </div>
          <h3 class="headline font-weight-light text-gray-800 mt-2">
            Revolutionizing Digital Experiences
          </h3>
          <p class="text-lg text-gray-600 mt-4">
            We create cutting-edge solutions designed to elevate your business to new heights.
            Experience innovation like never before.
          </p>
        </div>
      </v-col>

      <!-- Detailed View -->
      <template v-if="selectedService !== null">
        <v-col cols="12" class="d-flex justify-center">
          <!-- ✅ Added ref here -->
          <v-card
            class="elevation-12 text-center pa-6"
            color="#ffffff"
            style="border-radius: 20px; max-width: 700px;"
            ref="serviceCard"
          >
            <v-icon
              :color="services[selectedService].iconColor"
              size="60"
              class="mb-4"
            >
              {{ services[selectedService].icon }}
            </v-icon>

            <h3 class="text-h6 font-weight-bold mt-2">
              {{ services[selectedService].title }}
            </h3>

            <p class="mt-3">{{ services[selectedService].fullDescription }}</p>

            <v-btn color="green" class="mt-4" @click="selectedService = null">
              Back to Services
            </v-btn>
          </v-card>
        </v-col>
      </template>

      <!-- Services Grid -->
      <template v-else>
        <v-col
          v-for="(service, index) in displayedServices"
          :key="index"
          cols="12" sm="6" md="4"
          class="d-flex justify-center mb-6"
          :data-aos="'zoom-in-up'"
          :data-aos-delay="100 * (index % 3)"
        >
          <v-card
            class="elevation-6 text-center px-4 py-5"
            color="#ffffff"
            style="border-radius: 16px; min-height: 100%; width: 100%; max-width: 320px;"
            v-tilt
          >
            <v-icon :color="service.iconColor" size="50" class="mb-3">
              {{ service.icon }}
            </v-icon>

            <h3 class="text-subtitle-1 font-weight-bold">{{ service.title }}</h3>
            <p class="text-body-2 mt-2">{{ service.shortDescription }}</p>

            <v-btn color="green" class="mt-4" @click="selectService(index)">
              Learn More
            </v-btn>
          </v-card>
        </v-col>

        <!-- Show All Button -->
        <v-col cols="12" class="text-center" v-if="!showAll">
          <v-btn color="green" @click="showAll = true">Show All Services</v-btn>
        </v-col>

        <!-- CTA -->
        <v-col cols="12" class="text-center mt-8" data-aos="fade-up" data-aos-delay="200">
          <v-btn color="green" to="/contact" class="rounded">
            Book any of our above Services
          </v-btn>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>
  
  <script setup>
  import { ref, computed, nextTick } from 'vue';
  import 'vanilla-tilt';

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

const selectedService = ref(null)
const showAll = ref(false)
const services = ref([
{
  title: 'Website Development',
  shortDescription: 'Custom-built, responsive websites with sleek design, high performance, and SEO optimization.',
  fullDescription: 'Our team specializes in designing and developing custom websites that cater to your business’s unique needs. We use modern technologies like Vue.js, React, and WordPress to create websites that are not only visually stunning but also optimized for performance. From small landing pages to large e-commerce platforms, we ensure a mobile-first approach, lightning-fast load times, and excellent SEO practices that help your site rank higher and drive more organic traffic. Whether you`re looking for a brand-new website or an upgrade to your existing one, we offer tailored solutions that reflect your brand’s personality and engage your target audience.',
  icon: 'mdi-web',
  iconColor: 'blue'
},
{
  title: 'Software & App Development',
  shortDescription: 'Efficient, secure, and scalable software and mobile apps tailored to your business needs.',
  fullDescription: 'We provide end-to-end software and app development services, delivering secure, fast, and scalable solutions. Whether you need a custom-built management system or a mobile app for iOS/Android, our team uses cutting-edge technologies like Laravel, Node.js, Flutter, and Firebase to create seamless, user-friendly experiences. We focus on crafting apps and software solutions that streamline your business processes, improve user engagement, and boost productivity. From wireframing and development to deployment and maintenance, we offer comprehensive services to ensure your app runs smoothly at all stages of its lifecycle. Our solutions are designed to scale with your business, ensuring longevity and continued performance.',
  icon: 'mdi-application-cog',
  iconColor: 'deep-purple'
},
  {
  title: 'Graphic Design',
  shortDescription: 'High-impact visuals, branding, and creative designs that captivate.',
  fullDescription: 'Our talented design team crafts visually compelling assets that reflect your brand’s identity and leave a lasting impression. We specialize in logo creation, business cards, brochures, social media graphics, marketing posters, UI/UX mockups, and more. Whether you’re launching a new brand or refreshing an existing one, we bring your vision to life with consistency, creativity, and professional polish.',
  icon: 'mdi-palette',
  iconColor: 'red'
},
{
  title: 'SEO Optimization',
  shortDescription: 'Increase organic traffic with targeted SEO strategies.',
  fullDescription: 'We help your website climb search engine rankings through in-depth SEO audits, targeted keyword research, technical optimization, schema markup, performance tuning, and powerful backlink building. Our strategies are tailored to improve your visibility, domain authority, and conversion rates — whether you`re a local business, eCommerce brand, or service provider aiming to grow online.',
  icon: 'mdi-chart-line',
  iconColor: 'green'
},
  {
  title: 'Content Writing',
  shortDescription: 'High-quality, SEO-optimized content tailored to grow your online presence.',
  fullDescription: 'We deliver expertly written content that connects with your target audience and boosts search engine rankings. From blog posts, product descriptions, service pages, to social media captions, each piece is tailored to your brand voice, strategically structured for SEO, and designed to engage readers while driving conversions. Ideal for businesses aiming to increase visibility and authority online.',
  icon: 'mdi-pencil',
  iconColor: 'orange'
},
{
  title: 'Remote Windows Installations',
  shortDescription: 'Secure, full-featured remote Windows setup with no in-person visit needed.',
  fullDescription: 'Need a fresh Windows installation without leaving your location? We offer remote installation of all Windows versions, including activation, driver setup, essential software, and performance tuning. Perfect for new systems, corrupted setups, or upgrades — all handled safely over the internet by certified professionals. Fast, convenient, and secure service from anywhere.',
  icon: 'mdi-microsoft-windows',
  iconColor: 'blue-darken-2'
},
  {
  title: 'Computer Maintenance',
  shortDescription: 'Professional onsite diagnostics, system upgrades, and performance tuning.',
  fullDescription: 'We offer full-spectrum computer support at your location — including hardware diagnostics and upgrades (RAM, storage, power supply), OS and software troubleshooting, virus/malware removal, and performance enhancements. Whether you`re dealing with slow systems, boot failures, or device conflicts, we ensure your computer runs reliably, securely, and at peak speed. Ideal for both individuals and small businesses.',
  icon: 'mdi-laptop',
  iconColor: 'teal'
},
{
  title: 'IT Consultation',
  shortDescription: 'Expert tech advice to streamline operations, improve security, and scale efficiently.',
  fullDescription: 'We deliver strategic IT consulting tailored to your goals — whether you’re a startup, growing business, or enterprise. Our expertise covers digital transformation, infrastructure setup (cloud/on-prem), cybersecurity best practices, network optimization, automation, and software recommendations. We help you reduce costs, increase productivity, and future-proof your technology stack with scalable, secure, and modern solutions.',
  icon: 'mdi-headset',
  iconColor: 'indigo'
},
  {
  title: 'Bot Creation',
  shortDescription: 'Automate your business with smart bots for websites, social media, and communication platforms.',
  fullDescription: 'We build intelligent, custom bots that automate repetitive tasks, enhance user interaction, and streamline your workflow. From website chatbots that handle customer inquiries to social media bots that post updates, respond to messages, and gather leads — we deliver scalable, secure, and flexible automation using APIs, AI, and modern backend technologies. Perfect for marketing, support, and operations across platforms like Facebook, Instagram, WhatsApp, and your website.',
  icon: 'mdi-robot',
  iconColor: 'cyan'
},
{
  title: 'Account Recovery & Device Support',
  shortDescription: 'Recover hacked or locked accounts and resolve device issues quickly and securely.',
  fullDescription: 'Locked out or hacked? We help you regain control of email, social media, and other online accounts through secure recovery procedures. We also diagnose and resolve issues on your devices — whether it’s a phone, tablet, or computer. Our services include malware removal, system optimization, data protection, and restoring access to your critical tools and accounts. Support is offered remotely or onsite depending on your needs.',
  icon: 'mdi-shield-lock',
  iconColor: 'pink'
},
  {
  title: 'PIN Recovery (PC/Devices)',
  shortDescription: 'Regain access to your computer or device when you forget your PIN. Fast, secure, and reliable solutions for Windows, Android, and more.',
  fullDescription: 'Locked out of your PC or mobile device due to a forgotten PIN? We offer professional PIN recovery services that are fast, secure, and fully compliant with legal standards. Whether it’s a Windows login PIN, Android screen lock, or any device access code, our experts use non-destructive methods to restore your access without data loss. Ideal for personal, business, or academic use, our service ensures your digital life gets back on track quickly and safely.',
  icon: 'mdi-lock-reset',
  iconColor: 'brown'
}

])
const displayedServices = computed(() =>
  showAll.value ? services.value : services.value.slice(0, 6)
)

const serviceCard = ref(null)

function selectService(index) {
  selectedService.value = index
  nextTick(() => {
    if (serviceCard.value) {
      serviceCard.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}
</script>
  
  <style scoped>
.service-card {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
}

.icon-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.icon-circle:hover {
  transform: scale(1.1);
}

.v-btn {
  background-color: #4CAF50 !important;
  color: white !important;
  font-weight: 600;
  text-transform: none;
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
  margin-top: 8%;
}

@media (max-width: 600px) {
  .premium-heading {
    margin-top: 20%;
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
  