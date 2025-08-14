<template>
  <section class="testimonials-section">
    <div class="section-header" data-aos="fade-up">
      <h5 class="gold-text">Client Testimonials</h5>
      <h1 class="white-text">What Our Clients Say</h1>
      <p class="subtitle">17+ clients worldwide giving us 5-star ratings.</p>
    </div>

    <swiper
      :modules="[Autoplay, Pagination, Navigation]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      grab-cursor
      class="testimonial-swiper"
    >
      <swiper-slide v-for="(review, index) in reviews" :key="index">
        <div class="testimonial-card" data-aos="zoom-in">
          <div class="rating">
            <v-icon v-for="n in 5" :key="n" color="gold">mdi-star</v-icon>
            <span class="rating-text">{{ review.rating }} / 5</span>
          </div>
          <p class="review-text">"{{ review.text }}"</p>
          <h3 class="author">{{ review.author_name }}</h3>
          <v-btn
            variant="outlined"
            class="read-btn"
            @click="openReview(review.author_url)"
          >
            Read Full Review
          </v-btn>
        </div>
      </swiper-slide>

      <!-- Prev Button -->
      <div class="swiper-button-prev custom-nav">
        <v-icon color="gold" size="36" >mdi-chevron-left</v-icon>
      </div>

      <!-- Next Button -->
      <div class="swiper-button-next custom-nav">
        <v-icon color="gold" size="36">mdi-chevron-right</v-icon>
      </div>
    </swiper>

<div class="review-buttons">
  <a
    href="https://www.google.com/search?q=Antocap+Teknologies+Nairobi+Kenya&hl=en#lrd=0x182f110f69fd6f09:0xb7d6a9a5289db58b,1"
    target="_blank"
    class="btn-gold-filled"
  >
    View All Google Reviews
  </a>

  <a
    href="https://g.page/r/CQ5FS1IVO9AgEAE/review"
    target="_blank"
    class="btn-gold-outline"
  >
    Add Your Review
  </a>
</div>

    <p class="text-center text-gray-400 mt-4 text-sm">
      Click <strong>"Add Your Review"</strong>, sign in with your Google account,
      and share your experience with Antocap Teknologies.
    </p>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const reviews = ref([
  { author_name: 'Vivian Wachera', rating: 5, text: 'best software dev company ever existed,swift web ,stable systems, I would recommend them anytime anyday', author_url: 'https://www.google.com/maps/contrib/101455520754077800398/reviews/@-1.3341177,36.9484666,13z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D' },
  { author_name: 'Bran John', rating: 5, text: 'Best software developments across the Globe', author_url: 'https://www.google.com/maps/contrib/113995765225577808101/reviews/@-1.2850584,36.9715242,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D' },
  { author_name: 'Joseph Shimekha', rating: 5, text: 'best of best software Devs across the globe ,my management system so stable ,love it', author_url: 'https://www.google.com/maps/contrib/104780153246109806535/reviews/@-1.2850584,36.9715242,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D' },
  { author_name: 'WINFRED KAVATA', rating: 5, text: 'The heart of best development services,,I really love their services,24/7 customer care support ☺️ ❤️💯', author_url: 'https://www.google.com/maps/contrib/105496096478394389865/reviews/@-1.3341177,36.9484666,13z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D' },
  { author_name: 'Gladies Musani', rating: 5, text: 'I really love the best services management systems, Am enjoying currently at my fam', author_url: 'https://www.google.com/maps/contrib/101317554278355070751/reviews/@-1.3341177,36.9484666,13z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D'},
  { author_name: 'Francis Oundo', rating: 5, text: 'Best software company, cutting edge across the globe ,Very professional stuffs 🙂 24/7 customer care support,omg I love it💯💯', author_url: 'https://www.google.com/maps/contrib/103795196361263344853/reviews/@-1.2850584,36.9715242,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D' },
  { author_name: 'Ayub mushila', rating: 5, text: 'The best software development services across Nairobi', author_url: 'https://www.google.com/maps/contrib/114028242106956139533/reviews/@-1.2850584,36.9715242,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D' },
  { author_name: 'Faith Lavender', rating: 5, text: 'Best software Devs ever existed in this century,I love their services', author_url: 'https://www.google.com/maps/contrib/109105833806124783877/reviews/@-1.2850584,36.9715242,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D' },
  { author_name: 'Mutala Samuel', rating: 5, text: 'Best software company across the globe rn ,best services ,and professional workers', author_url: 'https://www.google.com/maps/contrib/101677309392798889040/reviews/@-1.2850584,36.9715242,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D' },
  { author_name: 'David Mark', rating: 5, text: 'I would frankly say that the performance you prevail is of higher ranking,, we really appreciated your work in our company.', author_url: 'https://www.google.com/maps/contrib/101209729652644868672/reviews/@-1.3382574,36.8945127,13z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D' },
  { author_name: 'Priscah Pius', rating: 5, text: 'ANTOCAP TEKNOLOGIES , BEST OF THE BEST. INSTANT DELIVERY!!!. ANTOCAP NEVER DISAPPOINTS!!.', author_url: 'https://www.google.com/maps/contrib/101430350068495673362/reviews/@-1.2850584,36.9715242,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D' },
  { author_name: 'Fid Techs', rating: 5, text: 'The best services 👌I wholely loved working with them', author_url: 'https://www.google.com/maps/contrib/107250277185547562549/reviews/@-1.3341177,36.9484666,13z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D' },
  { author_name: 'Davies Anto', rating: 5, text: 'its amazing to work with antocap tecknologies,this is where you get top class services in third world solutions.', author_url: 'https://www.google.com/maps/contrib/109644899606567148616/reviews/@-1.2850584,36.9715242,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D' },
  { author_name: 'Joyy Joyy', rating: 5, text: 'Highly recommended expertise in optimizing website performance and design transformed my site into a faster, more visually appealing platform that truly resonates with users. The level of professionalism and attention to detail has exceeded my expectations, making them a valuable partner for anyone looking to improve their online presence.', author_url: 'https://www.google.com/maps/contrib/101409880505567290526/reviews/@-1.2850584,36.9715242,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D' },
  { author_name: 'Antony anto', rating: 5, text: 'Best services as required. Delivers on time as expected.', author_url: 'https://www.google.com/maps/contrib/104598126882522319967/reviews/@-1.2850584,36.9715242,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D' },
  { author_name: 'Abigail Kaluki', rating: 5, text: 'Definitely the best', author_url: 'https://www.google.com/maps/contrib/106244396823764806131/reviews/@-1.2850584,36.9715242,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D' },
  { author_name: 'Priscah', rating: 5, text: '', author_url: 'https://www.google.com/maps/contrib/108838367492441053929/reviews/@-1.2850584,36.9715242,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D' },
  // ... more reviews here
])

const openReview = (url) => {
  window.open(url, '_blank')
}

// SEO metadata
useHead({
  title: 'Testimonials | Antocap Teknologies Reviews',
  meta: [
    { name: 'description', content: 'See what satisfied clients are saying about Antocap Teknologies. Rated 5+ stars on Google!' },
    { name: 'keywords', content: 'rating and reviews, testimonials, client feedback, software reviews, Antocap Teknologies, Nairobi IT services' },
    { name: 'robots', content: 'index, follow' },
    { name: 'google-site-verification', content: '5hBLXfg-cAkfTMQDRDlg4h78fQ8fo6xtex41hVJFlz4' },
    { property: 'og:title', content: 'Top Client Reviews | Antocap Teknologies' },
    { property: 'og:description', content: '5+ Star Rating | Trusted Tech Solutions by Antocap Teknologies. Read our verified client testimonials.' },
    { property: 'og:url', content: 'https://antocapteknologies.com/testimonials' },
    { property: 'og:image', content: 'https://antocapteknologies.com/logo.png' },
    { name: 'twitter:title', content: 'Client Testimonials | Antocap Teknologies' },
    { name: 'twitter:description', content: 'Read verified reviews and testimonials from happy clients of Antocap Teknologies.' },
    { name: 'twitter:image', content: 'https://antocapteknologies.com/logo.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://antocapteknologies.com/testimonials' }
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
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Fid Techs"
        }
      })
    }
  ]
})
</script>


<style scoped>
/* ===== BASE LUXURY THEME ===== */
.testimonials-section {
  background: #000;
  padding: 4rem 1rem;
  color: white;
  text-align: center;
  margin-top: 1%;
}

.section-header h5 {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: gold;
  margin-bottom: 0.5rem;
}

.section-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-header .subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2rem auto;
}

/* ===== SWIPER STYLING ===== */
.testimonial-swiper {
  max-width: 800px;
  margin: 0 auto;
}

.swiper-pagination-bullet {
  background: gold !important;
  opacity: 0.6;
}
.swiper-pagination-bullet-active {
  opacity: 1;
}

.custom-nav {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
}

.custom-nav:hover {
  background: rgba(255, 215, 0, 0.8); /* gold hover */
}

/* Hide Swiper's default navigation arrows */
.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}


/* ===== TESTIMONIAL CARD ===== */
.testimonial-card {
  border: 1px solid gold;
  border-radius: 20px;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 215, 0, 0.15);
}

.rating {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  color: gold;
}
.rating-text {
  margin-left: 0.5rem;
  font-size: 0.95rem;
  color: white;
}

.review-text {
  font-style: italic;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.author {
  font-size: 1.2rem;
  font-weight: bold;
  color: gold;
  margin-bottom: 1rem;
}

.read-btn {
  border-color: gold !important;
  color: gold !important;
  font-weight: bold;
  text-transform: uppercase;
}
.read-btn:hover {
  background: gold !important;
  color: black !important;
}

/* ===== GOLD BUTTON ===== */
.review-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem; /* space between buttons */
  margin-top: 2rem;
}

/* Gold Filled Button */
.btn-gold-filled {
  background: gold;
  color: black;
  font-weight: bold;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  border: 2px solid gold;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-gold-filled:hover {
  background: black;
  color: gold;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

/* Gold Outline Button */
.btn-gold-outline {
  background: white;
  color: gold;
  font-weight: bold;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  border: 2px solid gold;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-gold-outline:hover {
  background: gold;
  color: black;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

/* Make sure buttons fit well on all screens */
@media (max-width: 480px) {
  .review-buttons {
    flex-direction: column;
    align-items: center;
  }
  .btn-gold-filled, .btn-gold-outline {
    width: 100%;
    text-align: center;
  }
}


/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .testimonials-section { margin-top: 4%;}
  .section-header h1 {
    font-size: 2rem;
  }
  .testimonial-card {
    padding: 1.5rem;
  }
}
@media (max-width: 640px) {
  .testimonials-section { margin-top: 10%;}
  .section-header h1 {
    font-size: 1.5rem;
  }
  .testimonial-card {
    padding: 1rem;
  }
}
@media (max-width: 320px) {
  .testimonials-section { margin-top: 8%;}
  .section-header h1 {
    font-size: 1.3rem;
  }
  .testimonial-card {
    padding: 0.95rem;
  }
}
</style>