<script setup lang="ts">
defineProps({
  icon: Object,
  label: String
});
</script>

<template>
  <div
    class="flex flex-col items-center bg-gray-800 p-4 rounded-lg md:gap-y-1 w-[85px] h-[85px] md:w-[100px] md:h-[100px] justify-center"
  >
    <component :is="icon" class="w-12 h-12 text-white" />
    <span class="text-white text-xs md:text-sm mt-1 text-center">{{ label }}</span>
  </div>
</template>
