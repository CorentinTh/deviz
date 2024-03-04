<script setup lang="ts">
import { getHttpCodeQuestions } from '../http-codes/http-codes.service';

const questions = ref(getHttpCodeQuestions());

const currentQuestionIndex = ref(0);
const currentQuestion = computed(() => questions.value[currentQuestionIndex.value]);
const isAnswered = ref(false);
const selectedAnswer = ref<{
  label: string;
  isCorrect: boolean;
}>();

function handleAnswer({
  answer,
}: {
  answer: {
    label: string;
    isCorrect: boolean;
  };
}) {
  isAnswered.value = true;
  selectedAnswer.value = answer;
}

function handleNext() {
  isAnswered.value = false;
  selectedAnswer.value = undefined;

  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++;
  } else {
    currentQuestionIndex.value = 0;
    questions.value = getHttpCodeQuestions();
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center max-w-md text-center mt-12">
      <ClientOnly>
        <h1 class="text-xl text-neutral-300">{{ currentQuestion.question }}</h1>
        <h2 class="text-4xl font-bold my-10">{{ currentQuestion.heading }}</h2>

        <div class="flex flex-col gap-1 w-full">
          <UButton
            v-for="(answer, index) in currentQuestion.answers"
            :key="index"
            :onClick="() => handleAnswer({ answer })"
            :disabled="isAnswered"
            size="lg"
            class="transition"
            :color="isAnswered ? (answer.isCorrect ? 'green' : selectedAnswer === answer ? 'red' : 'primary') : 'primary'"
          >
            {{ answer.label }}
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
            <UButton @click="handleNext" size="lg" color="orange" trailingIcon="i-tabler-arrow-right"> Next </UButton>
          </div>
        </div>

        <template #fallback>
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
  </div>
</template>
