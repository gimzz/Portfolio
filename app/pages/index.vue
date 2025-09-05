<script setup lang="ts">
import LinkButton from '~/components/LinkButton.vue';

</script>

<template>
  <section class="p-30 max-w-3xl mx-auto">
    <h1 class="text-4xl font-bold mb-4 text-white">Hola, soy Gimz.</h1>
        <h2 class="text-xl font-bold mb-4 text-white">Desarrollador Back-end.</h2>
    <p class="text-lg text-white">
      Especializado en el Desarrollo web con NestJS, TypeScript y con amplios conocimientos en  análisis, modelado y optimización de datos.
    </p>
    <LinkButton href="#">
      github
    </LinkButton>
     <LinkButton href="#" color="red">
      Gmail
    </LinkButton>
     <LinkButton href="#">
      Curriculum
    </LinkButton>
  </section>
</template>
