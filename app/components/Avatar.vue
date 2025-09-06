<script setup lang="ts">
import avatar from '~/assets/avatar.jpeg';
</script>

<template>
  <img 
    :src="avatar" 
    alt="Avatar" 
    class="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover object-center border-[3px] border-violet-200 p-1"
  />
</template>

<style scoped>
</style>
