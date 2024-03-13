<script setup lang="ts">
import { getHttpQuestions } from '../http-status.usecases';

defineOgImageComponent('base-og-image', {
  title: 'HTTP Status Quiz',
  description: 'Test your knowledge of HTTP status codes with this online quiz.',
  icon: 'i-tabler-terminal-2',
});
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <quiz :questions-generator="getHttpQuestions" />
  </div>
</template>
