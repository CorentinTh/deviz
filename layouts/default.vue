<template>
  <div class="w-full min-h-screen dark:bg-gray-900 text-sm relative font-sans flex flex-col">
    <app-header />

    <div class="flex-1 pb-16">
      <slot />
    </div>

    <app-footer />
  </div>
</template>
