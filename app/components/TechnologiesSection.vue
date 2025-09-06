<script setup lang="ts">
import IconDocker from './icons/IconDocker.vue';
import IconGit from './icons/IconGit.vue';
import IconJavaScript from './icons/IconJavaScript.vue';
import IconLinux from './icons/IconLinux.vue';
import IconMysql from './icons/IconMysql.vue';
import IconNestjs from './icons/IconNestjs.vue';
import IconPhp from './icons/IconPhp.vue';
import IconPostgresql from './icons/IconPostgresql.vue';
import IconTailwind from './icons/IconTailwind.vue';
import IconTypeScript from './icons/IconTypeScript.vue';
import IconVue from './icons/IconVue.vue';
import TechnologyItem from './TechnologyItem.vue';
import IconJava from '~/components/icons/IconJava.vue';
const technologies = [
  { icon: IconJava, label: 'Java' },
  { icon: IconLinux, label: 'Linux' },
  {icon: IconNestjs, label: 'NestJS'},
  {icon: IconTypeScript, label: 'TypeScript'},
  {icon: IconGit, label: 'Git'},
  {icon: IconPhp, label: 'PHP'},
  {icon: IconPostgresql, label: 'PostgreSQL'},
  {icon:IconMysql, label: 'MySQL'},
  {icon:IconVue, label: 'Vue.js'},
  {icon:IconTailwind, label: 'Tailwind'},
  {icon: IconDocker , label: 'Docker'},
  {icon: IconJavaScript, label: 'JavaScript'},
];
</script>

<template>
  <section class="mt-16">
    <h2 class="flex items-center text-2xl font-bold text-purple-300 mb-6 gap-2 select-none">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    class="fill-none stroke-current stroke-1"
  >
    <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
      <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m0-3h19M7 6h.009M11 6h.009"/>
      <path d="m8 13l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L8 17m4 0h4"/>
    </g>
  </svg>
  Tecnologías
</h2>
    <div class="w-full flex justify-start items-center gap-8 flex-wrap">
      <TechnologyItem
        v-for="(tech, index) in technologies"
        :key="index"
        :icon="tech.icon"
        :label="tech.label"
      />
    </div>
  </section>
</template>
