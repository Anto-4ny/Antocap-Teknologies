<template>
  <section class="about-section">
    <v-container fluid>
      <v-row class="d-flex align-center">

        <!-- Left Image -->
        <v-col 
          cols="12" md="6" 
          class="image-col" 
          data-aos="fade-right"
        >
          <v-img
            :src="about1"
            alt="About Antocap Teknologies"
            cover
          />
        </v-col>

        <!-- Right Content -->
        <v-col 
          cols="12" md="6" 
          class="text-col" 
          data-aos="fade-left"
        >
          <div class="content-wrapper" :class="{ collapsed: !isExpanded }">

            <!-- Updated Heading -->
            <h1 class="gold-heading">
              Innovating Your Digital Future
            </h1>

            <!-- Updated Intro -->
            <p class="intro-text">
              Established in <strong>August 2024</strong>, <strong>Antocap Teknologies</strong> crafts premium ICT solutions 
              that don’t just work—they inspire. From websites and apps to secure systems and automation, 
              we transform your ideas into cutting-edge digital realities.
            </p>

            <!-- Updated Feature List -->
            <div class="feature-grid" data-aos="fade-up" data-aos-delay="200">
              <div class="feature-item">
                <v-icon class="gold-icon" size="20">mdi-laptop</v-icon> Bespoke Website Design & Development
              </div>
              <div class="feature-item">
                <v-icon class="gold-icon" size="20">mdi-cellphone</v-icon> Intuitive Mobile App Creation
              </div>
              <div class="feature-item">
                <v-icon class="gold-icon" size="20">mdi-clipboard-list</v-icon> Streamlined Management Systems
              </div>
              <div class="feature-item">
                <v-icon class="gold-icon" size="20">mdi-cash-register</v-icon> Smart Billing & Payment Platforms
              </div>
              <div class="feature-item">
                <v-icon class="gold-icon" size="20">mdi-barcode-scan</v-icon> Advanced POS Solutions
              </div>
              <div class="feature-item">
                <v-icon class="gold-icon" size="20">mdi-google</v-icon> High-Impact SEO Services
              </div>
              <div class="feature-item">
                <v-icon class="gold-icon" size="20">mdi-robot</v-icon> Custom Automation & Bot Development
              </div>
              <div class="feature-item">
                <v-icon class="gold-icon" size="20">mdi-desktop-classic</v-icon> Reliable Computer Maintenance
              </div>
              <div class="feature-item">
                <v-icon class="gold-icon" size="20">mdi-lock-reset</v-icon> Secure PC PIN Recovery
              </div>
              <div class="feature-item">
                <v-icon class="gold-icon" size="20">mdi-shield-refresh</v-icon> Account & Device Protection
              </div>
              <div class="feature-item">
                <v-icon class="gold-icon" size="20">mdi-cog-outline</v-icon> Tailored IT Solutions
              </div>
            </div>

            <!-- Mission & Vision -->
            <div 
              class="mission-vision" 
              data-aos="fade-up" 
              data-aos-delay="400"
            >
              <h2 class="section-title">Our Mission</h2>
              <p>
                To empower businesses with innovative, secure, and user-focused digital 
                solutions that accelerate growth, enhance performance, and boost visibility.
              </p>

              <h2 class="section-title">Our Vision</h2>
              <p>
                To stand as a global leader in software innovation, delivering premium 
                technology that transforms challenges into success stories.
              </p>
            </div>

            <!-- Fade overlay for collapsed content -->
            <div v-if="!isExpanded" class="fade-overlay"></div>
          </div>

          <!-- Buttons Row -->
        <div class="buttons-row" data-aos="fade-up" data-aos-delay="600">
          <v-btn class="gold-btn-primary" to="/about">Learn More</v-btn>
          <v-btn class="gold-btn-secondary" @click="isExpanded = !isExpanded">
            {{ isExpanded ? 'Read Less' : 'Read More' }}
          </v-btn>
        </div>
        </v-col>

      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import about1 from '@/assets/about1.jpg'
const isExpanded = ref(false)
</script>

<style scoped>
.about-section {
  background-color: #000;
  color: #fff;
  padding: 3rem 0;
}

.image-col {
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-img {
  width: 20%;
  height: 20%;
  margin-left: 6%;
}

.text-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Content with collapse */
.content-wrapper {
  position: relative;
  overflow: hidden;
  transition: max-height 0.4s ease;
}
.content-wrapper.collapsed {
  max-height: 300px;
}

.fade-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000);
}

/* Typography */
.gold-heading {
  color: #ffd700;
  font-size: 2.5rem;
  font-weight: 900;
}
.intro-text {
  font-size: 1.1rem;
  color: #ddd;
}

/* Feature grid */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.6rem 1rem;
  margin: 1rem 0;
}
.feature-item {
  display: flex;
  align-items: center;
  font-size: 1rem;
}
.gold-icon {
  color: #ffd700;
  margin-right: 0.6rem;
}

.section-title {
  color: #ffd700;
  font-size: 1.3rem;
  margin-top: 1rem;
  margin-bottom: 0.4rem;
}

/* Buttons */
/* Primary: Gold Luxury Button */
.gold-btn-primary {
  background: linear-gradient(135deg, #d4af37, #b88a44);
  color: #fff !important;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  border-radius: 50px;
  padding: 10px 28px;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
  transition: all 0.3s ease;
}

.gold-btn-primary:hover {
  background: linear-gradient(135deg, #c7a135, #a97c38);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(212, 175, 55, 0.4);
}

/* Secondary: Black–White with Gold Border */
.gold-btn-secondary {
  background: linear-gradient(135deg, #000, #2c2c2c);
  color: #d4af37 !important;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  border: 2px solid #d4af37;
  border-radius: 50px;
  padding: 10px 28px;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.gold-btn-secondary:hover {
  background: linear-gradient(135deg, #ffffff, #eaeaea);
  color: #000 !important;
  border-color: #b88a44;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(212, 175, 55, 0.3);
}

/* Buttons Row */
.buttons-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;
}

@media (max-width: 960px) {
  .gold-heading {
    text-align: center;
  }
  .intro-text, .mission-vision {
    text-align: center;
  }
  .buttons-row {
    justify-content: center;
  }
}
</style>

