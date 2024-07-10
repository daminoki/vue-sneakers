<script setup lang="ts">
import { onMounted } from 'vue';
import useFavoritesStore from '@/stores/favorites.ts';
import CardList from '@/components/CardList.vue';

const favoritesStore = useFavoritesStore();

onMounted(() => {
  favoritesStore.initializeFavorites();
});
</script>

<template>
  <div v-if="!favoritesStore.favorites.length" class="py-48 my-auto max-pad:py-24">
    <img
      src="/emoji-1.png"
      width="70"
      height="70"
      class="mx-auto"
    >

    <p class="text-center text-2xl font-bold mt-5">
      У вас нет избранных товаров
    </p>
  </div>
  <CardList v-else :products="favoritesStore.getFavoritesItems" />
</template>

<style scoped></style>
