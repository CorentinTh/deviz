<script setup lang="ts">
const links = [
  {
    icon: 'i-tabler-brand-github',
    label: 'GitHub repository',
    to: 'https://github.com/CorentinTh/deviz',
  },
  {
    icon: 'i-tabler-brand-x',
    label: 'Twitter',
    to: 'https://twitter.com/cthmsst',
  },
];
</script>

<template>
  <div class="border-b border-gray-800">
    <UContainer class="flex justify-between items-center h-16">
      <UButton label="Deviz" color="gray" variant="ghost" class="text-xl font-bold">
        <template #leading>
          <UIcon name="i-tabler-terminal-2" class="w-8 h-8 text-primary" />
        </template>
      </UButton>

      <div class="flex-1" />

      <div class="flex items-center gap-1">
        <UTooltip v-for="({ icon, label, to }, index) in links" :key="index" :text="label">
          <UButton color="gray" variant="ghost" :icon="icon" :to="to" target="_blank" :aria-label="label" size="lg" />
        </UTooltip>
      </div>
    </UContainer>
  </div>
</template>
