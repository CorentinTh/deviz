<template>
  <div class="flex flex-col items-center max-w-md w-full text-center mt-12">
    <div v-if="isFinished">
      <score-panel :score="score" :total="questionCount" />

      <UButton @click="reset" size="lg" color="primary" trailingIcon="i-tabler-arrow-right"> Try again </UButton>
    </div>

    <ClientOnly v-else>
      <UProgress :value="progress" class="w-full mb-4" />
      <div class="text-gray-400 mb-4">Question {{ currentQuestionIndex + 1 }} of {{ questionCount }}</div>

      <h1 class="text-xl text-neutral-300">{{ currentQuestion.question }}</h1>
      <h2 class="text-4xl font-bold my-10">{{ currentQuestion.heading }}</h2>

      <div class="flex flex-col gap-1 w-full">
        <UButton
          v-for="(answer, index) in currentQuestion.answers"
          :key="index"
          :onClick="() => selectAnswer({ answer })"
          :disabled="isAnswered"
          size="lg"
          class="transition text-left"
          :color="isAnswered ? (answer.isCorrect ? 'green' : selectedAnswer === answer ? 'red' : 'primary') : 'primary'"
        >
          {{ isAnswered ? answer.explanation ?? answer.label : answer.label }}
        </UButton>
      </div>

      <div v-if="isAnswered" class="mt-8 flex flex-col gap-8 w-full">
        <UCard class="text-left w-full" v-if="currentQuestion.explanation">
          <div class="font-bold mb-2">
            {{ currentQuestion.explanation.title }}
          </div>

          <div class="text-gray-400">
            {{ currentQuestion.explanation.description }}
          </div>
        </UCard>

        <div class="flex justify-end">
          <UButton @click="goToNextQuestion" size="lg" color="orange" trailingIcon="i-tabler-arrow-right"> Next </UButton>
        </div>
      </div>

      <template #fallback>
        <h1 class="sr-only">HTTP Status codes quiz</h1>
        <p class="sr-only">Test your knowledge of HTTP status codes with this online quiz.</p>

        <USkeleton class="h-4 w-[300px]" />
        <USkeleton class="h-4 w-[150px] mt-4" />
        <USkeleton class="h-8 w-[100px] my-10" />
        <USkeleton class="h-6 w-[300px] mb-1" />
        <USkeleton class="h-6 w-[300px] mb-1" />
        <USkeleton class="h-6 w-[300px] mb-1" />
        <USkeleton class="h-6 w-[300px] mb-1" />
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import type { QuestionsGenerator } from '../quiz.types';

const props = withDefaults(defineProps<{ questionsGenerator?: QuestionsGenerator; questionCount?: number }>(), { questionsGenerator: () => [], questionCount: 10 });
const { questionsGenerator, questionCount } = toRefs(props);

const { currentQuestion, selectAnswer, isAnswered, selectedAnswer, goToNextQuestion, isFinished, reset, score, progress, currentQuestionIndex } = useQuiz({
  questionsGenerator,
  questionCount,
});
</script>
