<script setup lang="ts">
import { IProduct } from '@/entities/products.ts';
import useBasketStore from '@/stores/basket.ts';

defineProps<{
  product: IProduct;
}>();

const basketStore = useBasketStore();
</script>

<template>
  <div class="flex justify-between items-center p-5 rounded-2xl border border-border-color border-solid gap-2.5">
    <div class="min-w-70 w-70 h-70">
      <img
        :src="product.imageUrl"
        :alt="product.title"
        width="70"
        height="70"
        class="object-contain w-full h-full"
      >
    </div>

    <div>
      <p class="text-sm">
        {{ product.title }}
      </p>
      <p class="text-sm font-bold mt-2">
        {{ product.price }} руб.
      </p>
    </div>

    <button class="w-8 h-8 min-w-8" aria-label="Удалить из корзины" @click="basketStore.toggleBasketItem(product)">
      <img
        src="/close.svg"
        alt="Удалить из корзины"
      >
    </button>
  </div>
</template>

<style scoped>

</style>
