<template>
  <v-container fluid class="py-16 mt-10" data-aos="fade-up">
    <v-row justify="center" class="text-center mb-10">
      <v-col cols="12" md="8">
        <h5 class="text-primary mb-2">Client Testimonials</h5>
        <h1 class="mb-4">What Our Clients Say</h1>
        <p class="text-grey-darken-1">
          Trusted by clients worldwide — here's what they say about working with Antocap Teknologies.
        </p>
      </v-col>
    </v-row>

    <!-- Carousel of testimonials -->
    <div class="testimonial-carousel" data-aos="zoom-in">
      <transition-group name="fade" tag="div" class="testimonial-wrapper">
        <v-card
          v-for="(review, index) in [visibleReview]"
          :key="index"
          class="testimonial-card elevation-10 text-center pa-6 mx-auto"
        >
          <v-img
            :src="review.profile_photo_url"
            height="120px"
            width="120px"
            class="mb-4 mx-auto rounded-circle"
          />
          <h3 class="mb-1">{{ review.author_name }}</h3>
          <div class="d-flex justify-center align-center mb-2">
            <v-icon v-for="n in 5" :key="n" color="yellow darken-2">mdi-star</v-icon>
            <span class="ml-2 text-grey-darken-1">{{ review.rating }} / 5</span>
          </div>
          <p class="text-grey-darken-2 font-italic">"{{ review.text }}"</p>
          <v-btn
            @click="viewFullReview(review.author_url)"
            class="mt-4"
            color="primary"
            variant="outlined"
          >
            Read Full Review
          </v-btn>
        </v-card>
      </transition-group>
    </div>

    <!-- Button to view live Google reviews -->
    <div class="text-center mt-10">
      <v-btn
        color="success"
        variant="flat"
        size="large"
        href="https://www.google.com/search?q=Antocap+Teknologies+Nairobi+Kenya&hl=en#lrd=0x182f110f69fd6f09:0xb7d6a9a5289db58b,1"
        target="_blank"
      >
        View Live Google Reviews
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

const reviews = ref([
  {
    author_name: 'James Mwangi',
    profile_photo_url: 'https://via.placeholder.com/150',
    rating: 5,
    text: 'Antocap Teknologies gave my business a whole new professional look. I highly recommend their services.',
    author_url: 'https://maps.google.com'
  },
  {
    author_name: 'Sarah Njeri',
    profile_photo_url: 'https://via.placeholder.com/150',
    rating: 4.9,
    text: 'Amazing experience working with their team. Delivered our mobile app ahead of schedule!',
    author_url: 'https://maps.google.com'
  },
  {
    author_name: 'Michael Otieno',
    profile_photo_url: 'https://via.placeholder.com/150',
    rating: 5,
    text: 'They transformed our outdated website into something stunning and user-friendly.',
    author_url: 'https://maps.google.com'
  }
])

const visibleReviewIndex = ref(0)
const visibleReview = ref(reviews.value[0])

const startAutoScroll = () => {
  setInterval(() => {
    visibleReviewIndex.value =
      (visibleReviewIndex.value + 1) % reviews.value.length
    visibleReview.value = reviews.value[visibleReviewIndex.value]
  }, 6000) // change every 6s
}

const viewFullReview = (url) => {
  window.open(url, '_blank')
}

onMounted(() => {
  startAutoScroll()
})

// SEO metadata
useHead({
  title: 'Testimonials | Antocap Teknologies Reviews',
  meta: [
    { name: 'description', content: 'See what satisfied clients are saying about Antocap Teknologies. Rated 4.9+ stars on Google!' },
    { name: 'keywords', content: 'testimonials, client feedback, software reviews, Antocap Teknologies, Nairobi IT services' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Top Client Reviews | Antocap Teknologies' },
    { property: 'og:description', content: '4.9+ Star Rating | Trusted Tech Solutions by Antocap Teknologies. Read our verified client testimonials.' },
    { property: 'og:url', content: 'https://www.antocapteknologies.com/testimonials' },
    { property: 'og:image', content: 'https://www.antocapteknologies.com/logo.png' },
    { name: 'twitter:title', content: 'Client Testimonials | Antocap Teknologies' },
    { name: 'twitter:description', content: 'Read verified reviews and testimonials from happy clients of Antocap Teknologies.' },
    { name: 'twitter:image', content: 'https://www.antocapteknologies.com/logo.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.antocapteknologies.com/testimonials' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "Organization",
          "name": "Antocap Teknologies"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.9",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "James Mwangi"
        }
      })
    }
  ]
})
</script>

<style scoped>
.testimonial-carousel {
  position: relative;
  overflow: hidden;
  max-width: 600px;
  margin: 0 auto;
  min-height: 380px;
}

.testimonial-wrapper {
  transition: opacity 0.6s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.testimonial-card {
  max-width: 500px;
  margin: 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 20px;
}

.testimonial-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
}

.rounded-circle {
  border-radius: 50%;
  object-fit: cover;
}
</style>
