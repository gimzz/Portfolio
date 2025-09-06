<script setup lang="ts">
const props = defineProps({
  company: { type: String, required: true },
  title: { type: String, required: true },
  years: { type: String, required: true },
  taskGroups: {
    type: Array as () => { group: string; tasks: string[] }[],
    required: true
  },
});
</script>

<template>
  <div class="mb-8">
    <h3 class="text-xl font-bold text-white">
      {{ title }} <span class="text-gray-400">- {{ company }} ({{ years }})</span>
    </h3>
    <div v-for="(group, index) in taskGroups" :key="index" class="mt-4">
      <h4 class="text-lg font-semibold text-purple-300 mb-2">
        {{ group.group }}
      </h4>
      <ul class="list-disc list-inside text-white space-y-1">
        <li v-for="(task, idx) in group.tasks" :key="idx">{{ task }}</li>
      </ul>
    </div>
  </div>
</template>
