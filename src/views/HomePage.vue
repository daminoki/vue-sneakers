<script setup lang="ts">
import CardList from '@/components/CardList.vue';
import { getProducts } from '@/api/index.ts';
import { ref, onMounted } from 'vue';
import { IProduct } from '@/entities/products.ts';
import useFavoritesStore from '@/stores/favorites.ts';

const products = ref<IProduct[]>([]);

const fetchProducts = async () => {
  const { data } = await getProducts();

  if (data) {
    products.value = data;
  }
};

const favoritesStore = useFavoritesStore();

onMounted(() => {
  favoritesStore.initializeFavorites();
  fetchProducts();
});
</script>

<template>
  <div>
    <CardList :products="products" />
  </div>
</template>

<style scoped></style>
