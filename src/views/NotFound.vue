<template>
  <v-container class="not-found-container text-center">
    <h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p class="text-lg">Oops! The page you're looking for doesn't exist.</p>
  </v-container>
</template>

<script setup>
// No script needed for now
</script>

<style scoped>
.not-found-container {
  margin-top: 10%;
  font-family: 'Inter', sans-serif;
}

@media (max-width: 600px) {
  .not-found-container {
    margin-top: 20%;
  }
}
</style>
