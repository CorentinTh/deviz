<template>
  <div class="w-full min-h-screen dark:bg-gray-900 text-sm relative font-sans flex flex-col">
    <app-header />

    <UContainer class="flex-1">
      <slot />
    </UContainer>

    <app-footer />
  </div>
</template>
