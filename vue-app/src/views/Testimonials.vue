<template>
    <v-container fluid class="py-16 mt-10" data-aos="fade-up">
      <v-row justify="center" class="text-center mb-10">
        <v-col cols="12" md="8">
          <h5 class="text-primary mb-2">Client Testimonials</h5>
          <h1 class="mb-4">What Our Clients Say</h1>
          <p class="text-grey-darken-1">
            Read the latest reviews from our clients on Google Business.
          </p>
        </v-col>
      </v-row>
  
      <v-row class="mb-10" justify="center">
        <v-col v-for="(review, index) in reviews" :key="index" cols="12" md="4" data-aos="fade-up" :data-aos-delay="100 * (index % 2)">
          <v-card class="elevation-12 text-center pa-4" style="background: white; color: black; height: auto;">
            <v-img :src="review.profile_photo_url || 'https://via.placeholder.com/150'" height="150px" class="mb-4" style="border-radius: 50%;" />
            <div class="d-flex justify-center align-center mb-2">
              <v-icon color="yellow darken-2">mdi-star</v-icon>
              <span class="text-grey-darken-1">{{ review.rating }} / 5</span>
            </div>
            <p class="text-grey-darken-2">{{ review.text }}</p>
            <v-btn @click="viewFullReview(review.author_url)" class="mt-4" color="primary" text>Read Full Review</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const apiKey = 'AIzaSyB7t1wWHhPYBitqKC4SJ8lqP1WMLDefCxo' // Replace with your actual API key
  const placeId = 'ChIJVxNBRxKJwogRygE6r3BxPOY' // Replace with your Google Business Profile Place ID
  
  const reviews = ref([])
  
  // Fetch reviews from Google Places API
  const fetchReviews = async () => {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=review&key=${apiKey}`
    
    try {
      const response = await axios.get(url)
      if (response.data.result.reviews) {
        reviews.value = response.data.result.reviews
      } else {
        console.log('No reviews found')
      }
    } catch (error) {
      console.error('Error fetching reviews:', error)
    }
  }
  
  // Open Google Business profile to view full reviews
  const viewFullReview = (url) => {
    window.open(url, '_blank')
  }
  
  // Fetch reviews when the component is mounted
  onMounted(() => {
    fetchReviews()
  })
  </script>
  
  <style scoped>
  .v-card {
    background: white !important;
    color: black;
    transition: transform 0.3s ease;
  }
  
  .v-card:hover {
    transform: translateY(-10px);
  }
  
  .v-btn {
    border-radius: 5px;
  }
  
  .v-btn:hover {
    background-color: #00b4d8;
  }
  
  .v-btn:focus {
    outline: none;
  }
  
  .d-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  </style>
  