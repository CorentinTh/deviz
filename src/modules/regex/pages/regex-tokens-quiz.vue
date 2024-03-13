<script setup lang="ts">
import { getRegexQuestions } from '../regex.usecases';

defineOgImageComponent('base-og-image', {
  title: 'Regex Tokens Quiz',
  description: 'Test your knowledge of regex tokens with this online quiz.',
  icon: 'i-tabler-regex',
});
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <quiz :questions-generator="getRegexQuestions" />
  </div>
</template>
