<script setup lang="ts">
import LinkButton from "~/components/LinkButton.vue";
import ProfileHeader from "~/components/ProfileHeader.vue";
import ExperienceSection from "~/components/ExperienceSection.vue";
import ProjectsSection from '~/components/ProjectsSection.vue';

const taskGroups = [
  {
    group: "Sistema de Soporte Técnico (GLPI)",
    tasks: [
      "Investigación para implementación de un sistema OpenSource en soporte técnico (GLPI).",
      "Modificación del sistema GLPI con PHP, Twig, Docker y MariaDB.",
      "Desarrollo de manual de usuario web con Nuxt.js y Tailwind CSS.",
    ],
  },
  {
    group: "Sistema de Gestión de Bienes Integral",
    tasks: [
      "Optimización y desarrollo de funcionalidades con TypeScript, NestJS, Prisma.",
      "Mejora de rendimiento con vistas y procedimientos en PostgreSQL.",
      "Implementación de seguridad con decoradores, guards y JWT.",
    ],
  },
];
</script>

<template>
  <section class="p-6 md:p-20 max-w-3xl mx-auto">
    <div class="flex flex-col md:flex-row md:items-center md:gap-6">
      <ProfileHeader />
    </div>

    <h2 class="text-xl md:text-2xl font-semibold text-white mt-6 mb-4">
      Desarrollador Back-end.
    </h2>
    <p class="text-base md:text-lg text-white leading-relaxed max-w-lg mb-6">
      Especializado en el Desarrollo web con NestJS, TypeScript y con amplios
      conocimientos en análisis, modelado y optimización de datos.
    </p>

    <div
      class="flex flex-wrap md:flex-nowrap items-center gap-3 whitespace-nowrap mb-10"
    >
      <LinkButton
        href="https://docs.google.com/document/d/1FUk4lqyDqXprfvgadS0RWml6un7GXHTdCvizfKD_Jsg/edit?usp=sharing"
        color="blue"
        class="text-sm px-4 py-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 14 14"
        >
          <g fill="none" stroke="currentColor" stroke-linecap="round">
            <path
              stroke-linejoin="round"
              d="M4.098 3.65a1.15 1.15 0 1 0 2.3 0a1.15 1.15 0 0 0-2.3 0"
            />
            <path
              stroke-linejoin="round"
              d="M3.5 5.94a2.2 2.2 0 0 1 .746-.834c.306-.2.652-.304 1.003-.304s.697.104 1.003.304c.307.199.563.486.746.834"
            />
            <path
              stroke-linejoin="round"
              d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4z"
            />
            <path d="M3.5 8.5h7m-7 2.5h4" />
          </g>
        </svg>
        Curriculum
      </LinkButton>

      <LinkButton
        href="https://github.com/gimzz"
        color="gray"
        class="text-sm px-4 py-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
          />
        </svg>
        GitHub
      </LinkButton>

      <LinkButton
        href="mailto:letig732@gmail.com"
        color="red"
        class="text-sm px-4 py-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M6.712 3.97a59.4 59.4 0 0 1 10.576 0l1.518.136A3.28 3.28 0 0 1 21.76 6.9a35.3 35.3 0 0 1 0 10.2a3.28 3.28 0 0 1-2.954 2.793l-1.518.136a59.4 59.4 0 0 1-10.576 0l-1.518-.136A3.28 3.28 0 0 1 2.24 17.1a35.3 35.3 0 0 1 0-10.2a3.28 3.28 0 0 1 2.954-2.794zm-.856 2.87a.75.75 0 0 0-1.106.66V17a.75.75 0 0 0 1.5 0V8.756l5.394 2.904c.222.12.49.12.712 0l5.394-2.904V17a.75.75 0 0 0 1.5 0V7.5a.75.75 0 0 0-1.106-.66L12 10.148z"
            clip-rule="evenodd"
          />
        </svg>
        Correo electrónico
      </LinkButton>
    </div>
    <h2
      class="flex items-center text-2xl font-bold text-purple-300 mb-4 mt-14 gap-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><!-- Icon from Streamline Emojis by Streamline - https://creativecommons.org/licenses/by/4.0/ --><path fill="#45413c" d="M45.5 45.18C45.5 46.29 35.87 47 24 47s-21.5-.71-21.5-1.82s9.63-2 21.5-2s21.5.89 21.5 2" opacity=".15"/><path fill="#656769" d="M3.84 3.84h40.31v40.31H3.84Z"/><path fill="#87898c" d="M41.47 3.84H6.53a2.7 2.7 0 0 0-2.69 2.69v3.86a2.69 2.69 0 0 1 2.69-2.68h34.94a2.69 2.69 0 0 1 2.69 2.68V6.53a2.7 2.7 0 0 0-2.69-2.69"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M3.84 3.84h40.31v40.31H3.84Z"/><path fill="#e8f4fa" d="M8.55 24a15.45 15.45 0 1 0 30.9 0a15.45 15.45 0 1 0-30.9 0"/><path fill="#daedf7" d="M24 12.07a15.45 15.45 0 0 1 15.35 13.69a15 15 0 0 0 .1-1.76a15.45 15.45 0 0 0-30.9 0a15 15 0 0 0 .1 1.76A15.45 15.45 0 0 1 24 12.07"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M8.55 24a15.45 15.45 0 1 0 30.9 0a15.45 15.45 0 1 0-30.9 0"/><path fill="#f0f0f0" d="M34.08 19.3h10.08v9.4H34.08a1.34 1.34 0 0 1-1.34-1.34v-6.72a1.34 1.34 0 0 1 1.34-1.34"/><path fill="#fff" d="M34.08 19.3a1.35 1.35 0 0 0-1.35 1.34v3.44a1.35 1.35 0 0 1 1.35-1.34h10.08V19.3Z"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M34.08 19.3h10.08v9.4h0h-10.08a1.34 1.34 0 0 1-1.34-1.34v-6.72a1.34 1.34 0 0 1 1.34-1.34"/><path fill="#fff" d="m24 24l-12.78 8.69A15.5 15.5 0 0 0 17.4 38Zm12.78-8.7a15.6 15.6 0 0 0-6.17-5.3L24 24Z"/><path fill="#e8f4fa" d="m34.9 16.58l1.88-1.28a15.6 15.6 0 0 0-6.17-5.3l-1.4 3a15.3 15.3 0 0 1 5.69 3.58"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M11.22 32.69A15.5 15.5 0 0 0 17.4 38L24 24ZM36.78 15.3a15.6 15.6 0 0 0-6.17-5.3L24 24Z"/><path fill="#c0dceb" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M18.63 24a5.37 5.37 0 1 0 10.74 0a5.37 5.37 0 1 0-10.74 0"/><path fill="#87898c" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M21.98 24a2.02 2.02 0 1 0 4.04 0a2.02 2.02 0 1 0-4.04 0"/></svg>
      Experiencia Laboral
    </h2>

    <ExperienceSection
      company="Alcaldía de Iribarren"
      title="Desarrollador de Software"
      years="2024 - Presente"
      :taskGroups="taskGroups"
    />


    <TechnologiesSection />
<h2
      class="flex items-center text-2xl font-bold text-purple-300 mb-4 mt-14 gap-2 mr-10"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 254"><!-- Icon from SVG Logos by Gil Barbara - https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt --><defs><linearGradient id="logosVisualStudioCode0" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient><path id="logosVisualStudioCode1" d="M180.828 252.605a15.87 15.87 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.94 15.94 0 0 0-9.025-14.363l-52.5-25.263a15.88 15.88 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.507 91.695a15.85 15.85 0 0 0 5.464 3.571m10.464-183.649l-76.262 57.889l76.262 57.888z"/></defs><mask id="logosVisualStudioCode2" fill="#fff"><use href="#logosVisualStudioCode1"/></mask><path fill="#0065A9" d="M246.135 26.873L193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.94 15.94 0 0 0-9.024-14.36" mask="url(#logosVisualStudioCode2)"/><path fill="#007ACC" d="m246.135 226.816l-52.542 25.298a15.89 15.89 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.94 15.94 0 0 1-9.024 14.36" mask="url(#logosVisualStudioCode2)"/><path fill="#1F9CF0" d="M193.428 252.134a15.89 15.89 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.89 15.89 0 0 1 18.125-3.084l52.533 25.263a15.94 15.94 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363z" mask="url(#logosVisualStudioCode2)"/><path fill="url(#logosVisualStudioCode0)" fill-opacity=".25" d="M180.828 252.605a15.87 15.87 0 0 0 12.65-.486l52.5-25.263a15.94 15.94 0 0 0 9.026-14.363V41.197a15.94 15.94 0 0 0-9.025-14.363L193.477 1.57a15.88 15.88 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.506 91.695a15.9 15.9 0 0 0 5.465 3.571m10.464-183.65l-76.262 57.89l76.262 57.888z" mask="url(#logosVisualStudioCode2)"/></svg>
Proyectos    </h2>

        <ProjectsSection />
<Footer/>
  </section>
</template>
