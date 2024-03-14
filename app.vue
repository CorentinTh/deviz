<script setup lang="ts">
useSeoMeta({
  title: 'Deviz - Online quizzes for devs',
  description: 'Test your knowledge of dev stuff with these online quizzes.',
  author: 'Corentin Thomasset',
});

defineOgImageComponent('base-og-image', {
  title: 'Deviz - Online quizzes for devs',
  description: 'Test your knowledge of dev stuff with these online quizzes.',
  icon: 'i-tabler-terminal-2',
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <UNotifications />
    <!-- <CommandPalette /> -->
  </NuxtLayout>
</template>
