<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheBasket from '@/components/TheBasket.vue';
</script>

<template>
  <div class="w-full flex-1 flex flex-col bg-bg-color-secondary rounded-3xl max-w-7xl mx-auto">
    <TheHeader />
    <main class="flex-1 p-5 flex flex-col">
      <router-view />
      <TheBasket />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>

</style>
