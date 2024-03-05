<template>
  <div class="border-t border-gray-800">
    <UContainer class="text-gray-500 text-sm h-24 flex items-center justify-center">
      <div>
        <span>© {{ new Date().getFullYear() }} Deviz</span>
        <span class="mx-2">•</span>
        <span>Developed by </span>
        <UButton label="Corentin Thomasset" color="gray-500" variant="link" to="https://corentin-thomasset.fr" target="_blank" :padded="false" />
      </div>
    </UContainer>
  </div>
</template>
