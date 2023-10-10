<script setup lang="ts">
import Layout from '@/layouts/index.vue';
// console.log('VITE_NODE_ENV ', VITE_NODE_ENV);
// console.log(import.meta.env);
</script>

<template>
  <Layout />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
