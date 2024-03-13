<script setup lang="ts">
import { getFeedbackSentence } from '../quiz.models';

const props = defineProps<{ score: number; total: number }>();
const { score, total } = toRefs(props);

const percentage = computed(() => (score.value / total.value) * 100);

const sentence = computed(() => getFeedbackSentence({ scorePercentage: percentage.value }));
</script>

<template>
  <div>
    <Icon name="i-tabler-star" class="text-7xl text-primary" v-if="percentage > 80" />
    <Icon name="i-tabler-mood-happy" class="text-7xl text-primary" v-else-if="percentage > 60" />
    <Icon name="i-tabler-mood-annoyed" class="text-7xl text-primary" v-else-if="percentage > 0" />
    <Icon name="i-tabler-poo" class="text-7xl text-primary" v-else />

    <h1 class="text-3xl font-bold mt-4">You scored {{ score }}/{{ total }}</h1>
    <p class="text-lg my-4 text-gray-400">{{ sentence }}</p>
  </div>
</template>
