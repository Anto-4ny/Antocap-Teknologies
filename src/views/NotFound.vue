<template>
  <v-container class="not-found-container text-center">
    <h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p class="text-lg mb-6">Oops! The page you're looking for doesn't exist or has been moved.</p>
    <v-btn color="primary" class="go-home-btn" to="/" rounded elevation="2">
      Go Back Home
    </v-btn>
  </v-container>
</template>

<script setup>
import { useHead } from '@vueuse/head'
// Full SEO for 404 Page
useHead({
  title: '404 - Page Not Found | Antocap Teknologies',
  meta: [
    { name: 'description', content: 'Page not found - Antocap Teknologies. This page no longer exists or was moved. Return to our homepage for premium web and software services in Nairobi.' },
    { name: 'keywords', content: '404, page not found, Antocap Teknologies, return to homepage, website error, not found, Nairobi tech company, software development Kenya, web design, seo services, tech firm and agency in kenya, software development company in nairobi' },
    { name: 'robots', content: 'index, follow' },
    { name: 'google-site-verification', content: '5hBLXfg-cAkfTMQDRDlg4h78fQ8fo6xtex41hVJFlz4' },

    // Open Graph
    { property: 'og:title', content: '404 - Page Not Found | Antocap Teknologies' },
    { property: 'og:description', content: 'The page you’re looking for can’t be found. Head back to Antocap Teknologies homepage.' },
    { property: 'og:image', content: 'https://antocapteknologies.com/assets/Antocap-logo.jpg' },
    { property: 'og:url', content: 'https://antocapteknologies.com/NotFound' },

    // Twitter Card
    { name: 'twitter:title', content: '404 - Page Not Found | Antocap Teknologies' },
    { name: 'twitter:description', content: 'Oops! This page is missing. Click to return to our homepage.' },
    { name: 'twitter:image', content: 'https://antocapteknologies.com/assets/Antocap-logo.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },

    // Canonical
    { rel: 'canonical', href: 'https://antocapteknologies.com/404' }
  ],
  script: [
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
            "name": "404 Not Found",
            "item": "https://antocapteknologies.com/NotFound"
          }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.not-found-container {
  margin-top: 20%;
  font-family: 'Inter', sans-serif;
}

@media (max-width: 600px) {
  .not-found-container {
    margin-top: 20%;
  }
}

.go-home-btn {
  font-weight: bold;
  text-transform: uppercase;
  padding: 12px 24px;
}
</style>
