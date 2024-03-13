<script setup lang="ts">
const quizzes = [
  {
    title: 'HTTP Status Quiz',
    description: 'Test your knowledge of HTTP status codes and their meaning.',
    to: '/http-status-quiz',
    icon: 'i-tabler-server',
    difficulty: 'hard',
  },
  {
    title: 'Regex Tokens Quiz',
    description: 'Test your knowledge of regex tokens with this online quiz.',
    to: '/regex-tokens-quiz',
    icon: 'i-tabler-regex',
    difficulty: 'easy',
  },
];
</script>

<template>
  <grid-background>
    <div class="flex flex-col items-center justify-center">
      <div class="py-24 sm:py-32 relative md:py-32 !pb-0">
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
    <UCard v-for="(quiz, index) in quizzes" :key="index" :to="quiz.to" :icon="quiz.icon">
      <div class="flex sm:items-center gap-4 flex-col sm:flex-row">
        <div class="flex-1">
          <div class="font-bold text-base truncate">{{ quiz.title }}</div>
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
          <UButton to="/http-status-quiz" label="Start this quiz" icon="i-tabler-arrow-right" trailing color="white" size="lg" />
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
