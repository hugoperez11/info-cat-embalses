<script setup>
import Header from "./components/Header.vue";

import { RouterLink, RouterView } from "vue-router";

import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />

  <Footer />
  <RouterView />
</template>

<style scoped></style>
