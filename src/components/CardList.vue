<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { IProduct } from '@/entities/products.ts';

defineProps<({
  products: IProduct[],
  isProductsLoading?: boolean,
})>();
</script>

<template>
  <div v-if="!products.length && !isProductsLoading" class="py-48 my-auto max-pad:py-24">
    <img
      src="/emoji-1.png"
      width="70"
      height="70"
      class="mx-auto"
    >
    <p class="text-center text-2xl font-bold mt-5">
      Ничего не найдено
    </p>
  </div>

  <ul v-else class="grid grid-cols-4 gap-4 max-tablet:grid-cols-3 max-pad:grid-cols-1">
    <li v-for="item in products" :key="item.id">
      <ProductCard :product="item" />
    </li>
  </ul>
</template>

<style scoped></style>
