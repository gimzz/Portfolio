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
    amber: 'bg-amber-600 text-white border-amber-800',
    red: 'bg-red-600 text-white border-red-800'
}
</script>
<template>
  <a
    :href="href"
    role="link"
    target="_blank"
    rel="noopener noreferrer"
    :class="`inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base ${colors[props.color] ?? colors['amber']} transition borde rounded-full hover:opacity-45 duration-300`"
  >
    <slot />
</a>
</template>
