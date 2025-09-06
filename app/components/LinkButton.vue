<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'amber'
  },
});
const colors= {
  gray: 'bg-gray-600 text-white border-gray-800',
  amber: 'bg-amber-600 text-white border-amber-800',
  red: 'bg-red-500 text-white border-red-800',
  blue: 'bg-blue-600 text-white border-blue-800',
}
</script>

<template>
  <a
    :href="href"
    role="link"
    target="_blank"
    rel="noopener noreferrer"
    :class="[
      'inline-flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base transition border rounded-xl hover:opacity-70 duration-400',
      colors[color] ?? colors['amber']
    ]"
  >
    <slot />
  </a>
</template>
