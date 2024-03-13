<script setup lang="ts">
const props = withDefaults(defineProps<{ fadeBottom?: boolean }>(), { fadeBottom: true })
</script>

<template>
  <div class="w-full bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:48px_48px] pt-20">
    <slot />

    <div v-if="props.fadeBottom" class="bg-gradient-to-t dark:from-gray-900 from-white to-transparent h-24 mt-24" />
  </div>
</template> 