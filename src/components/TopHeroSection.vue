<template>
  <section :class="{ 'dark-bg': isDarkMode, 'light-bg': !isDarkMode }">
    <v-container fluid class="top-section" data-aos="fade-up" data-aos-duration="1000">
      <v-row class="d-flex align-center responsive-layout">
        
        <!-- Carousel -->
        <v-col cols="12" md="6" class="carousel-col" data-aos="fade-right" data-aos-duration="800">
          <v-carousel
            cycle
            height="500"
            hide-delimiter-background
            show-arrows
            interval="5000"
            class="custom-carousel"
          >
            <template v-for="(slide, index) in slides" :key="index">
              <v-carousel-item>
                <div class="carousel-image-container">
                  <template v-if="loadedImages[index]">
                    <v-img
                      :src="slide.src"
                      :alt="slide.alt"
                      class="image-with-overlay"
                      height="500"
                      cover
                      loading="lazy"
                    />
                    <div class="dark-overlay" />
                    <div class="text-overlay">
                      <h2 class="overlay-title">{{ slide.title }}</h2>
                      <p class="overlay-desc">{{ slide.description }}</p>
                    </div>
                  </template>
                  <div v-else class="loading-placeholder">
                    <v-progress-circular indeterminate color="primary" />
                  </div>
                </div>
              </v-carousel-item>
            </template>
          </v-carousel>
        </v-col>

        <!-- Hero Text -->
        <v-col cols="12" md="6" class="hero-text" data-aos="fade-left" data-aos-duration="800">
          <h1 class="jump-heading">Innovating the Future of Technology</h1>
          <h2 class="medium-desc">Pushing the boundaries of software development.</h2>

          <p class="description-text">
            At Antocap Teknologies, we deliver high-end ICT solutions — from premium websites and powerful POS systems 
            to tailored business management tools, SEO, and app development. We blend innovation with precision to 
            empower your business growth.
          </p>

          <ul class="feature-list">
            <li><v-icon class="gold-tick" size="18">mdi-check-circle</v-icon>Custom Websites: Responsive, SEO-optimized, scalable.</li>
            <li><v-icon class="gold-tick" size="18">mdi-check-circle</v-icon>POS & Billing: Fast, secure sales & payment systems.</li>
            <li><v-icon class="gold-tick" size="18">mdi-check-circle</v-icon>Management Systems: Integrated tools to streamline operations.</li>
            <li><v-icon class="gold-tick" size="18">mdi-check-circle</v-icon>App Development: Mobile & web apps that drive engagement.</li>
            <li><v-icon class="gold-tick" size="18">mdi-check-circle</v-icon>SEO Services: Boost visibility & rank higher on Google.</li>
          </ul>

          <div class="button-container">
            <v-btn class="luxury-btn primary" href="/contact">Get Started</v-btn>
            <v-btn class="luxury-btn secondary" href="/services">Explore Our Services</v-btn>
          </div>
        </v-col>

      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { isDarkMode } from '@/composables/useTheme.js'

import carousel0 from '@/assets/carousel0.webp'
import carousel1 from '@/assets/carousel1.jpg'
import carousel2 from '@/assets/carousel2.jpg'
import carousel3 from '@/assets/carousel3.webp'
import carousel4 from '@/assets/carousel4.jpg'
import carousel5 from '@/assets/carousel5.png'
import carousel6 from '@/assets/carousel6.png'
import about from '@/assets/about.jpg'

const slides = ref([
  { src: carousel1, title: 'Website Development Excellence', description: 'Crafting modern, responsive websites tailored by Antocap Teknologies.', alt: 'Website Development' },
  { src: carousel0, title: 'Web & Billing Systems Integration', description: 'Robust website solutions integrated with seamless billing systems.', alt: 'Billing Systems' },
  { src: carousel2, title: 'Boost Your Online Presence', description: 'Helping businesses stand out with powerful online strategies.', alt: 'Online Presence' },
  { src: carousel3, title: 'Custom App Development', description: 'Building user-friendly mobile and web apps tailored to your goals.', alt: 'App Development' },
  { src: carousel4, title: 'Social Media Integration', description: 'Connecting your brand to audiences through smart media strategies.', alt: 'Social Media' },
  { src: carousel5, title: 'SEO & Google Rankings', description: 'Optimizing your digital footprint to rank higher and reach wider.', alt: 'SEO' },
  { src: carousel6, title: 'Efficient Management Systems', description: 'Streamlining operations with tailored management solutions.', alt: 'Management Systems' },
  { src: about, title: 'Social Media Integration', description: 'Connecting your brand to audiences through smart media strategies.', alt: 'Social Media' },
])

const loadedImages = ref(Array(slides.value.length).fill(false))

onMounted(() => {
  slides.value.forEach((slide, index) => {
    const img = new Image()
    img.src = slide.src
    img.onload = () => (loadedImages.value[index] = true)
  })
})
</script>

<style scoped>
.dark-bg { background-color: #000; color: #fff; }
.light-bg { background-color: #fff; color: #000; }

.top-section { padding-top: 30px; margin-top: 48px; }

/* Default: Mobile first - carousel first */
.responsive-layout { flex-direction: column; }

/* Desktop: hero left, carousel right */
@media (min-width: 960px) {
  .responsive-layout { flex-direction: row-reverse; }
}

.carousel-col { display: flex; justify-content: center; align-items: center; }
.carousel-image-container { position: relative; height: 500px; width: 100%; overflow: hidden; }
.image-with-overlay { height: 100%; z-index: 1; }
.dark-overlay { position: absolute; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.53); z-index:2; }
.text-overlay { position: absolute; bottom: 0; width: 100%; padding: 1.5rem; color: #ffd700; z-index: 3; background: rgba(0,0,0,0.35); text-align: center; }
.overlay-title { font-size: clamp(0.9rem, 2.5vw, 1.2rem); font-weight: bold; margin-bottom: 0.5rem; }
.overlay-desc { font-size: clamp(0.75rem, 2vw, 0.9rem); color: #fff; }

/* Force carousel arrows visible */
.custom-carousel .v-carousel__controls { opacity: 1 !important; visibility: visible !important; }
.custom-carousel .v-btn--icon { background-color: rgba(0,0,0,0.4) !important; color: #ffd700 !important; transform: scale(0.8); }
@media (max-width: 600px) {
  .custom-carousel .v-btn--icon { transform: scale(0.65); }
}

/* Hero text block */
.hero-text { display: flex; flex-direction: column; justify-content: center; max-height: 500px; padding: clamp(0.5rem, 2vw, 1.5rem); }
.jump-heading { 
  color: #ffd700; 
  font-size: clamp(1.8rem, 4vw, 3rem); 
  font-weight: 900; 
  margin-bottom: 0.6rem; 
  line-height: 1.2; 
  text-align: left;
}
.medium-desc { font-size: clamp(1.1rem, 1.6vw, 1.2rem); color: #ccc; margin-bottom: 1rem; text-align: left; }
.description-text { font-size: clamp(0.85rem, 1.3vw, 1.1rem); color: #ddd; margin-bottom: 1.2rem; text-align: left; }

.feature-list { list-style: none; padding: 0; margin: 0 0 1.5rem; margin-left: 15px; }
.feature-list li { display: flex; align-items: center; margin-bottom: 0.4rem; font-size: clamp(0.75rem, 1vw, 0.9rem); }
.gold-tick { color: #fdc703ff; margin-right: 0.6rem; }

/* Buttons */
.button-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.luxury-btn {
  border-radius: 30px;
  padding: clamp(8px, 2vw, 10px) clamp(18px, 4vw, 26px);
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  font-weight: 500;
  letter-spacing: 0.5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: none;
  transition: all 0.3s ease;
}

/* Premium Gold Primary */
.luxury-btn.primary {
  background: linear-gradient(135deg, #d4af37, #b88a1e);
  color: white !important;
  box-shadow: 0 3px 10px rgba(212, 175, 55, 0.4);
}
.luxury-btn.primary:hover {
  background: linear-gradient(135deg, #c19d2b, #a67c1a);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.5);
}

/* Minimal Elegant Secondary */
.luxury-btn.secondary {
  background-color: transparent;
  color: #d4af37 !important;
  border: 1.5px solid #d4af37;
}
.luxury-btn.secondary:hover {
  background-color: rgba(212, 175, 55, 0.1);
  transform: translateY(-2px);
}

/* Small & foldable devices */
@media (max-width: 480px) {
  .carousel-image-container,
  .custom-carousel { height: 350px !important; margin-top: 15px;}
  .jump-heading, .medium-desc, { text-align: center; }
  .description-text { text-align: left; }
  .button-container { justify-content: center; gap: 0.5rem; margin-bottom: 0px; }
  .luxury-btn.primary, .luxury-btn.secondary {
    flex: 1 1 calc(50% - 0.6rem);
    min-width: 120px;
    max-width: 180px;
    padding: 8px 10px;
  }
}

/* Ultra small screens (e.g., foldables half screen) */
@media (max-width: 320px) {
  .jump-heading { font-size: 1rem; }
  .medium-desc { font-size: 0.75rem; }
  .description-text { font-size: 0.6rem; text-align: left;}
  .feature-list li { font-size: 0.5rem; }
  .luxury-btn { font-size: 0.4rem; padding: 3px 4px; }
  .carousel-image-container, .custom-carousel { height: 230px !important; }
}
</style>
