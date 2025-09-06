<script setup lang="ts">
import avatar from '~/assets/avatar.jpeg';
</script>

<template>
  <img 
    :src="avatar" 
    alt="Avatar" 
    class="w-36 h-36 rounded-full object-cover object-center border-[3px] border-violet-200 p-1"
  />
</template>
