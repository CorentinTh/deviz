<script setup lang="ts">
const props = defineProps<{ score: number; total: number }>();
const { score, total } = toRefs(props);

const percentage = computed(() => (score.value / total.value) * 100);

const sentence = computed(() => {
  if (percentage.value === 100) {
    return 'Congratulations! You got a perfect score!';
  }

  if (percentage.value > 80) {
    return 'Great job!';
  }

  if (percentage.value > 50) {
    return 'Good effort!';
  }

  if (percentage.value > 25) {
    return 'You can do better!';
  }

  return 'If you would have answered randomly, you would have scored better!';
});
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">You scored {{ score }}/{{ total }}</h1>
    <p class="text-lg my-8 text-gray-400">{{ sentence }}</p>
  </div>
</template>
