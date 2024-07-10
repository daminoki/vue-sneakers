<script setup lang="ts">
import CardList from '@/components/CardList.vue';
import { getProducts } from '@/api/index.ts';
import {
  ref, onMounted,
} from 'vue';
import { IProduct } from '@/entities/products.ts';
import useFavoritesStore from '@/stores/favorites.ts';
import { useDebounceFn } from '@vueuse/core';

const products = ref<IProduct[]>([]);
const isProductsLoading = ref(false);
const searchQuery = ref('');

const fetchProducts = async () => {
  isProductsLoading.value = true;
  const { data } = await getProducts(searchQuery.value);
  isProductsLoading.value = false;

  if (data) {
    products.value = data;
  }
};

const debouncedFetchProducts = useDebounceFn(fetchProducts, 300);

const favoritesStore = useFavoritesStore();

onMounted(() => {
  favoritesStore.initializeFavorites();
  fetchProducts();
});
</script>

<template>
  <div class="flex justify-end pb-8">
    <div class="relative max-pad:w-full">
      <img src="/search.svg" alt="search" class="absolute top-1/2 left-3 w-4 h-4 -translate-y-1/2">
      <input
        v-model="searchQuery"
        placeholder="Поиск"
        type="search"
        class="no-search-cancel p-3 pl-10 rounded-3xl border-border-color border-2
    min-w-80 focus:outline-none focus:border-text-light
    transition-colors duration-300 ease-in-out text-text-light-secondary max-pad:w-full max-pad:min-w-full"
        @input="debouncedFetchProducts"
      >
    </div>
  </div>
  <CardList :products="products" :is-products-loading="isProductsLoading" />
</template>

<style scoped></style>
