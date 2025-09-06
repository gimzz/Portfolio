<script setup lang="ts">
const projects = [
  {
    title: 'Pay-Orders',
    description:
      'Sistema diseñado y desarrollado para el control de materia prima y mejorar la toma de pedidos en un local.',
    technologies: ['Java', 'JavaFX', 'PostgreSQL', 'Maven'],
    video: '/videos/demo.mp4',
    link: 'https://github.com/gimzz/pay-orders',
  },
  {
    title: 'Sistema de Gestión de Bienes Integral',
    description:
      'Sistema para gestionar bienes, mejorando la transparencia y eficiencia en la administración pública.',
    technologies: ['NestJS', 'TypeScript', 'Docker'],
    image: '/images/sgbi.jpeg',
  },
];
</script>

<template>
  <section class="mt-16 px-4 sm:px-0">
    <ul class="flex flex-col gap-y-16">
      <li
        v-for="(project, index) in projects"
        :key="index"
      >
        <article
          class="flex h-full flex-col md:flex-row space-x-0 md:space-x-8 space-y-8 md:space-y-0 group"
        >
          <div v-if="project.video" class="w-full md:w-1/2 h-full">
            <video
              controls
              class="object-cover object-top w-full h-60 rounded-xl border-2 border-gray-600/50"
              :src="project.video"
              @loadedmetadata="event => event.target.playbackRate = 2"
            >
              <source :src="project.video" type="video/mp4" />
              Tu navegador no soporta el elemento video.
            </video>
          </div>
          <div v-else-if="project.image" class="w-full md:w-1/2 h-full">
            <div
              class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl"
            >
              <img
                :src="project.image"
                alt="Proyecto imagen"
                class="object-cover object-top w-full h-60 rounded-xl border-2 border-gray-600/50 transition-opacity duration-400 hover:opacity-70"
              />
            </div>
          </div>
          <div
            :class="
              project.image || project.video
                ? 'w-full h-full md:w-1/2 md:max-w-lg'
                : 'w-full'
            "
            class="flex flex-col justify-center"
          >
            <div>
              <p class="text-2xl font-bold text-gray-100">{{ project.title }}</p>
            </div>
            <div class="flex flex-wrap mt-2">
              <div
                v-for="(tech, i) in project.technologies"
                :key="i"
                class="mt-2 text-gray-200 mr-4"
              >
                {{ tech }}
              </div>
            </div>
            <div class="mt-4 text-gray-200">{{ project.description }}</div>
            <div v-if="project.link" class="mt-6">
              <a
                :href="project.link"
                target="_blank"
                class="inline-flex items-center justify-center gap-2 px-3 py-2 text-base text-white transition border rounded-xl hover:opacity-70 duration-400 bg-gray-800 border-gray-600 hover:bg-gray-800 hover:border-gray-900 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-offset-2 active:bg-black"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  />
                </svg>
                <span>Repositorio</span>
              </a>
            </div>
          </div>
        </article>
      </li>
    </ul>
  </section>
</template>
