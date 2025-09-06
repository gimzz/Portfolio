<script setup lang="ts">
import Avatar from '~/components/Avatar.vue';
import BadgeVenezuela from '~/components/BadgeVenezuela.vue';
</script>

<template>
  <div class="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6">
    <Avatar />
    <h1 class="text-2xl sm:text-4xl font-semibold text-white flex items-center gap-2 sm:gap-4">
      <span>Hola, soy Gimz.</span>
      <BadgeVenezuela label="Venezuela" />
    </h1>
  </div>
</template>
