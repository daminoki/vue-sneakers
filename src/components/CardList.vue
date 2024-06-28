<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import getProducts from '@/api/index.ts';
import { ref, onMounted } from 'vue';
import { IProduct } from '@/entities/products.ts';

const products = ref<IProduct[]>([]);

onMounted(async () => {
  const { data } = await getProducts();

  if (data) {
    products.value = data;
  }
});
</script>

<template>
  <div class="p-5">
    <ul class="grid grid-cols-4 gap-4 max-tablet:grid-cols-3 max-pad:grid-cols-1">
      <li v-for="item in products" :key="item.id">
        <ProductCard :product="item" />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
