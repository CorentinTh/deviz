<script setup lang="ts">
import { getQuizzes } from '~/src/modules/quiz/quiz.repository';

const quizzes = getQuizzes();
</script>

<template>
  <grid-background>
    <div class="flex flex-col items-center justify-center">
      <div class="pt-24 pb-12">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 gap-16 sm:gap-y-24 flex flex-col max-w-5xl">
          <div class="text-center">
            <h1 class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Online <span class="text-primary">quizzes</span> for devs</h1>
            <p class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">
              Test your knowledge of dev stuff with these online quizzes. <br class="hidden sm:block" />Choose a quiz and start answering questions.
            </p>
            <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
              <UButton to="/http-status-quiz" label="HTTP Status Quiz" color="primary" size="lg" icon="i-tabler-arrow-right" trailing />
            </div>
          </div>
        </div>
      </div>
    </div>
  </grid-background>

  <UContainer class="flex flex-col gap-4 max-w-4xl">
    <UCard v-for="(quiz, index) in quizzes" :key="index" :icon="quiz.icon">
      <div class="flex sm:items-center gap-4 flex-col sm:flex-row">
        <div class="flex-1">
          <div class="font-bold text-base truncate">{{ quiz.name }}</div>
          <div class="text-gray-500 text-sm my-1">{{ quiz.description }}</div>
          <div class="flex items-center text-gray-500 text-sm">
            <div class="flex gap-1">
              <UIcon class="w-4 h-4" dynamic name="i-tabler-star-filled" />
              <UIcon class="w-4 h-4" dynamic :name="quiz.difficulty === 'easy' ? 'i-tabler-star' : 'i-tabler-star-filled'" />
              <UIcon class="w-4 h-4" dynamic :name="quiz.difficulty === 'easy' || quiz.difficulty === 'medium' ? 'i-tabler-star' : 'i-tabler-star-filled'" />
            </div>
            <div>
              <span class="mx-2">-</span><span class="capitalize">{{ quiz.difficulty }}</span>
            </div>
          </div>
        </div>

        <div class="flex-shrink-0">
          <UButton label="Start this quiz" icon="i-tabler-arrow-right" trailing color="white" size="lg" :to="quiz.route" />
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
