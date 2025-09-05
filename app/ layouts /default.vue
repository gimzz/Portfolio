<script setup>
import Footer from '~/components/Footer.vue';
import '@fontsource-variable/onest'; 

import { useHead } from '#imports';
useHead({
  title: 'Gimz ~ Fullstack Dev',
  meta: [
    { name: 'description', content: 'Portafolio personal, desarrollador backend.' }
  ],
  link: [{ rel: 'shortcut icon', href: '/favicon.ico' }]
});
</script>

<template>
  <div class="relative scroll-smooth min-h-screen flex flex-col font-sans">
    <slot />
    <Footer />
  </div>
</template>
