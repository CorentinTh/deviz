<template>
  <div class="border-b border-gray-800">
    <UContainer class="flex justify-between items-center h-16">
      <UButton label="Deviz" color="gray" variant="ghost" class="text-xl font-bold">
        <template #leading>
          <UIcon name="i-tabler-terminal-2" class="w-8 h-8 text-primary" />
        </template>
      </UButton>

      <div class="flex-1" />

      <UTooltip text="GitHub repository">
        <UButton color="gray" variant="ghost" icon="i-tabler-brand-github" href="https://github.com/CorentinTh/deviz" target="_blank" />
      </UTooltip>
    </UContainer>
  </div>
</template>
