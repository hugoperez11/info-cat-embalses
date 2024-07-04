<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import AboutUs from "./components/AboutUs.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <AboutUs />
  <Footer />
  <RouterView />
</template>

<style scoped></style>
