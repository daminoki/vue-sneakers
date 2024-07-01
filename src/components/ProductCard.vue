<script setup lang="ts">
import { IProduct } from '@/entities/products.ts';
import useBasketStore from '@/stores/basket.ts';

defineProps<{
  product: IProduct;
}>();

const basketStore = useBasketStore();
</script>

<template>
  <div
    class="pt-5 px-7 pb-7 rounded-2xl border-2 border-solid border-border-color
     flex flex-col relative h-full"
  >
    <div class="w-133 h-112 mx-auto">
      <img
        :src="product.imageUrl"
        width="133"
        height="112"
        class="object-contain w-full h-full"
      >
    </div>

    <h3 class="text-sm mt-3.5">
      {{ product.title }}
    </h3>

    <div class="flex justify-between w-full mt-auto pt-3.5">
      <div>
        <p class="text-xs text-text-light uppercase font-semibold">
          Цена:
        </p>
        <p class="text-sm font-bold">
          {{ product.price }} руб.
        </p>
      </div>

      <button @click="basketStore.toggleBasketItem(product)">
        <img src="/plus.svg" alt="Добавить в корзину">
      </button>
    </div>

    <button class="absolute top-5 left-7">
      <img src="/like-1.svg" alt="Добавить в избранное">
    </button>
  </div>
</template>
