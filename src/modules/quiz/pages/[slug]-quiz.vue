<script setup lang="ts">
import { getQuiz } from '../quiz.repository';

const route = useRoute();

const quizDetails = computed(() => getQuiz({ slug: String(route.params.slug) }));

defineOgImageComponent('base-og-image', {
  title: computed(() => quizDetails.value.name),
  description: computed(() => quizDetails.value.description),
  icon: computed(() => quizDetails.value.icon),
});

useSeoMeta({
  title: computed(() => quizDetails.value.name),
  description: computed(() => quizDetails.value.description),
  titleTemplate: (title) => `${title} - Deviz`,
});
</script>

<template>
  <UContainer class="flex flex-col items-center justify-center">
    <quiz :questions-generator="quizDetails.questionsGenerator" />
  </UContainer>
</template>
