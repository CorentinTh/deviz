<script setup lang="ts">
useHead({
  title: 'Deviz - Developer Quiz Online',
  meta: [
    {
      name: 'description',
      content: 'Test your knowledge of HTTP status codes with this quiz.',
    },
    { name: 'author', content: 'Corentin Thomasset' },
    {
      name: 'keywords',
      content: 'http, status, code, quiz, test, knowledge, developer, deviz',
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <UNotifications />
    <CommandPalette />
  </NuxtLayout>
</template>
