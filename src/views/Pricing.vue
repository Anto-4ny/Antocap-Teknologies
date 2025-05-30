<template>
  <section class="py-16 px-4" style="background-color: #000; color: #fff">
    <v-container>
      <v-row justify="center" class="mb-12">
        <v-col cols="12" md="8" class="text-center">
          <h1 class="text-h4 font-weight-bold gradient-gold-text mb-4">
            Pricing Plans
          </h1>
          <p class="text-subtitle-1 gold-faded-text">
            Explore our affordable and flexible pricing options tailored to your needs. Prices listed in both KES and USD.
          </p>
        </v-col>
      </v-row>

      <div v-for="(service, i) in services" :key="i" class="mb-16">
        <h2 class="text-h5 font-weight-bold mb-6 white--text">
          <v-icon :color="service.color" class="mr-2">{{ service.icon }}</v-icon>
          {{ service.name }}
        </h2>

        <v-row dense>
          <v-col
            v-for="(plan, j) in service.plans"
            :key="j"
            cols="12"
            sm="6"
            md="4"
            class="mb-4"
          >
            <v-card
              class="pa-4"
              style="background-color: #111; border: 1px solid gold; border-radius: 16px; box-shadow: 0 4px 12px rgba(255, 215, 0, 0.2);"
            >
              <v-card-title class="font-weight-bold text-h6 gold-accent">
                {{ plan.name }}
              </v-card-title>

              <v-card-subtitle class="white-accent mb-2">
                {{ plan.description }}
              </v-card-subtitle>

              <div class="mb-4">
                <div class="white-accent mb-1">
                  <strong class="white--text">KES:</strong> {{ plan.kes.toLocaleString() }}
                </div>
                <div class="white-accent">
                  <strong class="white--text">USD:</strong> ${{ plan.usd.toFixed(2) }}
                </div>
              </div>

              <v-list dense class="mb-4">
                <v-list-item
                  v-for="(feature, k) in plan.features"
                  :key="k"
                  class="px-0"
                >
                  <v-icon
                    :color="feature.included ? 'green' : 'red'"
                    size="20"
                    class="mr-2"
                  >
                    {{ feature.included ? 'mdi-check-circle' : 'mdi-close-circle' }}
                  </v-icon>
                  <span class="white--text">{{ feature.text }}</span>
                </v-list-item>
              </v-list>

              <v-btn color="yellow-darken-2" rounded block :to="`/contact?service=${service.name}`">
                Get Started
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const services = [
  {
    name: 'Website Development',
    icon: 'mdi-web',
    color: 'light-blue',
    plans: [
      {
        name: 'Basic',
        description: 'Simple and elegant single-page website.',
        kes: 20000,
        usd: 155,
        features: [
          { text: 'A single clean page for your business.', included: true },
          { text: 'Looks great on phones and computers.', included: true },
          { text: 'Helps people find your site on Google.', included: true },
          { text: 'Cannot update content yourself.', included: false },
          { text: 'No product buying/selling.', included: false },
        ],
      },
      {
        name: 'Advanced',
        description: 'Multi-page professional business website.',
        kes: 55000,
        usd: 426,
        features: [
          { text: 'Includes Home, About, Services, etc.', included: true },
          { text: 'Works smoothly on all screen sizes.', included: true },
          { text: 'Makes your site easier to find online.', included: true },
          { text: 'You can edit your website anytime.', included: true },
          { text: 'Not made for selling products online.', included: false },
        ],
      },
      {
        name: 'Premium',
        description: 'Advanced website with premium features.',
        kes: 85000,
        usd: 658,
        features: [
          { text: 'Perfect for b/s with lots of information.', included: true },
          { text: 'Higher chance to appear at the top on Google.', included: true },
          { text: 'Full control to update and manage your content.', included: true },
          { text: 'Sell your products or services online.', included: true },
          { text: '1 year support.', included: true },
        ],
      },
      {
        name: 'Ultimate',
        description: 'Custom web app with all features.',
        kes: 135000,
        usd: 1045,
        features: [
          { text: 'Designed specially for your brand and users.', included: true },
          { text: 'Private area for customers or staff to log in.', included: true },
          { text: 'Connects to other apps or systems.', included: true },
          { text: 'Stores your business or user data safely.', included: true },
          { text: 'We’re here to assist you for 2 full years.', included: true },
        ],
      },
    ],
  },
  {
    name: 'App Development',
    icon: 'mdi-android',
    color: 'green',
    plans: [
      {
        name: 'Starter',
        description: 'Basic Android app.',
        kes: 40000,
        usd: 310,
        features: [
          { text: 'Works on Android phones.', included: true },
          { text: 'Data is stored on the device only.', included: false },
          { text: 'Easy to use and clean design.', included: true },
          { text: 'Anyone can open and use the app.', included: false },
        ],
      },
      {
        name: 'Pro',
        description: 'Cross-platform app with backend.',
        kes: 135000,
        usd: 1045,
        features: [
          { text: 'Works on both Apple and Android devices.', included: true },
          { text: 'Data is stored online and can be shared.', included: true },
          { text: 'Users can sign up and log in securely.', included: true },
          { text: 'Send alerts or messages to users.', included: true },
        ],
      },
    ],
  },
  {
    name: 'Management Systems',
    icon: 'mdi-briefcase-outline',
    color: 'indigo',
    plans: [
      {
        name: 'School System',
        description: 'Full-featured school management tool.',
        kes: 80000,
        usd: 539,
        features: [
          { text: 'Track student and teacher info.', included: true },
          { text: 'Record and share student exam results.', included: true },
          { text: 'Parents can log in and view student progress.', included: true },
          { text: 'Matches your school’s logo and colors.', included: true },
        ],
      },
      {
        name: 'Inventory Tool',
        description: 'Track and manage inventory.',
        kes: 50000,
        usd: 339,
        features: [
          { text: 'Know what’s in and out of stock.', included: true },
          { text: 'Different access for staff and managers.', included: true },
          { text: 'See trends and performance.', included: true },
          { text: 'Use it easily on a phone or tablet.', included: true },
        ],
      },
    ],
  },
  {
    name: 'Billing Systems',
    icon: 'mdi-cash-register',
    color: 'orange',
    plans: [
      {
        name: 'Basic Billing',
        description: 'Simple billing system.',
        kes: 25000,
        usd: 169,
        features: [
          { text: 'Create and send bills to clients.', included: true },
          { text: 'Save customer details and history.', included: true },
          { text: 'Download and print invoices easily.', included: true },
          { text: 'Fewer charts or summaries about your sales.', included: false },
        ],
      },
      {
        name: 'Advanced Billing',
        description: 'Full-featured billing and invoicing.',
        kes: 55000,
        usd: 369,
        features: [
          { text: 'Clients can log in and view their invoices.', included: true },
          { text: 'Send automatic monthly or weekly bills.', included: true },
          { text: 'Get detailed sales and income summaries.', included: true },
          { text: 'Automatically include taxes in bills.', included: true },
        ],
      },
    ],
  },
  {
    name: 'SEO Services',
    icon: 'mdi-chart-line',
    color: 'purple',
    plans: [
      {
        name: 'Starter SEO',
        description: 'Ideal for new websites.',
        kes: 10000,
        usd: 69,
        features: [
          { text: 'Helps search engines know what your site is about.', included: true },
          { text: 'We check and suggest improvements.', included: true },
          { text: 'Makes it easier for Google to scan your site.', included: true },
          { text: 'No links from other websites yet.', included: false },
        ],
      },
      {
        name: 'Professional SEO',
        description: 'For growing online businesses.',
        kes: 30000,
        usd: 199,
        features: [
          { text: 'Deep review of your site’s performance.', included: true },
          { text: 'Use the right words to reach more people.', included: true },
          { text: 'We help other sites link to yours.', included: true },
          { text: 'See progress and improvements every month.', included: true },
        ],
      },
    ],
  },
];
</script>


<style scoped>
.gradient-gold-text {
  background: linear-gradient(90deg, gold, orange);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 5%;
}

.gold-accent {
  color: gold;
}

.gold-faded-text {
  color: rgba(255, 215, 0, 0.7);
}

.white-accent {
  color: white;
}
</style>