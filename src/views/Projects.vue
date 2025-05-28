<template>
    <v-container fluid class="py-16 mt-10 bg-grey-4" data-aos="fade-up">
        <v-row justify="center" class="text-center mb-10">
    <v-col cols="12" md="8">
      <h5 class="text-primary mb-2">Our Completed Projects</h5>
      <h1 class="mb-4 animated-heading">
        <span class="blue-heading-text">Our Completed Projects</span>
      </h1>
      <p class="text-grey-darken-1">
        At Antocap Teknologies, we take pride in delivering tailored solutions to our clients, from cutting-edge websites to complex management systems. Explore our portfolio of successful projects that showcase our expertise across various industries.
      </p>
    </v-col>
  </v-row>
  
      <!-- Project Categories -->
      <v-row class="mb-10" justify="center" align="center">
        <v-col v-for="(category, index) in projects" :key="index" cols="12" md="4" data-aos="fade-up" :data-aos-delay="100 * (index % 3)">
          <v-card
            class="elevation-12 service-card text-center pa-6"
            :style="{ background: 'linear-gradient(145deg, #00b4d8 0%, #0077b6 100%)' }"
          >
            <v-icon class="text-black service-icon" size="60">mdi-web</v-icon>
            <h3 class="text-h5 font-weight-bold mt-4">{{ category.category }}</h3>
            <v-list>
              <v-list-item-group>
                <v-list-item v-for="(project, index) in category.projects" :key="index">
                  <v-list-item-content>
                    <v-list-item-title>
                      <v-btn
                        :href="project.link"
                        class="text-white project-link-btn"
                        depressed
                        block
                      >
                        {{ project.title }}
                      </v-btn>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    <SocialProofSection />
    <FooterBanner />
  </v-container>
</template>


<script setup>
import SocialProofSection from '@/components/SocialProofSection.vue'
import FooterBanner from '@/components/FooterBanner.vue'

  import { ref } from 'vue'
  import { useHead } from '@vueuse/head'
  
  // List of completed projects with links and descriptions for each category
  const projects = ref([
        {
      category: 'Artificial Inteligence(Ai)',
      projects: [
        {
          title: 'Ai Life simulation',
          link: 'https://ai-chatbot-rho-three-50.vercel.app/', 
        },
      ]
    },
    {
      category: 'Services Websites',
      projects: [
        {
          title: 'Antocap Teknologies',
          link: 'https://antocapteknologies.com/', 
        },
                {
          title: 'Polarhomes',
          link: 'https://polarhomes.org/', 
        },
           {
          title: 'Cleaning Treks website',
          link: 'https://www-cleaninigtreks-com.vercel.app/', 
        },
      ]
    },
    {
      category: 'eCommerce Solutions',
      projects: [
        {
          title: 'Jubazone E-commerce Website',
          link: 'https://jubazone.co.ke/',
        }
      ]
    },
    {
      category: 'Management Systems',
      projects: [
        {
          title: 'Subscription Management',
          link: 'https://subsmart-website.vercel.app/',
        },
        {
          title: 'coming soon',
          link: '', 
        },
      ]
    },
    {
      category: 'Billing Systems',
      projects: [
        {
          title: 'Subsmart Subscription management',
          link: 'https://subsmart-website.vercel.app/', 
        },
        {
          title: 'coming soon',
          link: '', 
        },
      ]
    },
    {
      category: 'SEO Optimizations',
      projects: [
        {
          title: 'SEO for Product Trace Limited',
          link: 'https://www.product-traceltd.com/',
        },
        {
          title: 'SEO for Antocap Teknologies',
          link: 'https://antocapteknologies.com/', 
        },
        {
          title: 'SEO for Sanfiat Technologies',
          link: 'https://sanfiat.antocapteknologies.com/', 
        },
        {
          title: 'SEO for Polarhomes',
          link: 'https://polarhomes.org/', 
        },
      ]
    },
    {
      category: 'Affiliate Websites',
      projects: [
        {
          title: 'Quantum Market Website',
          link: 'https://quantumincome.org/',
        },
        {
          title: 'Sanfiat Technologies Website',
          link: 'https://sanfiat.antocapteknologies.com/',
        },
      ]
    },
    {
      category: 'Mobile Apps',
      projects: [
        {
          title: 'JobTask Mobile App',
          link: 'https://play.google.com/store/apps/details?id=com.jobtaskukportalss&hl=en&pli=1',
        }
      ]
    },
  ])

  useHead({
  title: 'Projects | Antocap Teknologies - Websites, Apps, SEO & More',
  meta: [
    { name: 'description', content: 'Explore completed projects by Antocap Teknologies including websites, mobile apps, billing systems, SEO optimization, affiliate platforms, and more.' },
    { name: 'keywords', content: 'Antocap Teknologies projects, website development, eCommerce, SEO, affiliate websites, management systems, billing software, mobile app development, Kenya tech company' },
    { name: 'author', content: 'Antocap Teknologies' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'google-site-verification', content: '5hBLXfg-cAkfTMQDRDlg4h78fQ8fo6xtex41hVJFlz4' },

    // Open Graph
    { property: 'og:title', content: 'Projects | Antocap Teknologies' },
    { property: 'og:description', content: 'Check out our top-tier website projects, mobile apps, SEO work, and more!' },
    { property: 'og:image', content: 'https://antocapteknologies.com/images/projects-preview.jpg' },
    { property: 'og:url', content: 'https://antocapteknologies.com/projects' },
    { property: 'og:type', content: 'website' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Projects | Antocap Teknologies' },
    { name: 'twitter:description', content: 'Explore our portfolio of tech projects including websites, SEO work, and mobile apps.' },
    { name: 'twitter:image', content: 'https://antocapteknologies.com/images/projects-preview.jpg' }
  ],
  script: [
    // JSON-LD Structured Data
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Our Projects - Antocap Teknologies",
        "description": "Showcase of completed and upcoming projects by Antocap Teknologies including eCommerce, SEO, apps, and websites.",
        "url": "https://antocapteknologies.com/projects",
        "publisher": {
          "@type": "Organization",
          "name": "Antocap Teknologies",
          "url": "https://antocapteknologies.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://antocapteknologies.com/logo.png"
          },
          "sameAs": [
            "https://www.facebook.com/antocapteknologies",
            "https://www.instagram.com/antocapteknologies",
            "https://www.linkedin.com/company/antocapteknologies",
            "https://www.twitter.com/antocapteks",
            "https://www.youtube.com/@antocapteknologies"
          ]
        }
      })
    },
    // Breadcrumb Schema
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://antocapteknologies.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://antocapteknologies.com/projects"
          }
        ]
      })
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://antocapteknologies.com/project' }
  ]
})

  </script>
  
  <style scoped>
  .service-card {
    background: white !important;
    color: rgb(19, 6, 6);
  }
  
  .service-icon {
    font-size: 3rem;
  }
  
  .project-link-btn {
    background-color: green;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .project-link-btn:hover {
    background-color: #00b4d8;
  }
  
  .project-link-btn:focus {
    outline: none;
  }

  .animated-heading {
  font-size: 3.5rem;
  font-weight: bold;
  color: #0077b6; 
  display: inline-block;
  animation: jump 1s infinite ease-in-out;
  text-align: center;
}

.blue-heading-text {
  color: #0077b6; 
}

.double-line {
  font-size: 3.5rem;
  font-weight: bold;
  color: #0077b6;
  margin-left: 10px;
  margin-right: 10px;
}

@keyframes jump {
  0% {
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
  100% {
    transform: translateY(0);
  }
}
  </style>
  