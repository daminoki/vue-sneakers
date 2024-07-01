<script setup lang="ts">
import { onMounted } from 'vue';
import BasketCard from '@/components/BasketCard.vue';
import useBasketStore from '@/stores/basket.ts';

const basketStore = useBasketStore();

onMounted(() => {
  basketStore.initializeBasket();
});
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full bg-overlay-color">
    <div class="fixed top-0 right-0 w-385 h-full bg-bg-color-secondary p-8 max-pad:w-full overflow-auto no-scrollbar">
      <div class="flex justify-between">
        <p class="text-2xl font-bold">
          Корзина
        </p>

        <button>
          <img src="/close.svg" alt="Закрыть" @click="basketStore.toggleBasket()">
        </button>
      </div>

      <div class="pt-10">
        <ul class="flex flex-col gap-3">
          <li v-for="item in basketStore.getBasketItems" :key="item.id">
            <BasketCard :product="item" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
