<script setup lang="ts">
import { onMounted } from 'vue';
import useBasketStore from '@/stores/basket.ts';

const basketStore = useBasketStore();

onMounted(() => {
  basketStore.initializeBasket();
});
</script>

<template>
  <header class="py-7 px-8 border-b-2">
    <div class="flex justify-between items-center">
      <RouterLink to="/" class="flex gap-4">
        <div class="w-10 h-10 overflow-hidden">
          <img class="w-full h-full object-contain" src="/logo.png" alt="Logo">
        </div>
        <div class="max-pad:hidden">
          <p class="font-bold text-xl">
            VUE SNEAKERS
          </p>
          <p class="text-xs text-text-light">
            Магазин лучших кроссовок
          </p>
        </div>
      </RouterLink>

      <div class="flex gap-8 max-pad:gap-6">
        <button class="flex gap-3 items-center" @click="basketStore.toggleBasket()">
          <img
            src="/cart.svg"
            alt="Cart"
            width="18"
            height="18"
          >
          <span class="text-sm font-bold text-text-light-secondary max-pad:hidden">
            {{ basketStore.getTotalPrice }} руб.
          </span>
        </button>

        <RouterLink to="/favorites" class="flex gap-3 items-center">
          <img
            src="/heart.svg"
            alt="Favorites"
            width="18"
            height="18"
          >
          <span class="text-sm text-text-light-secondary max-pad:hidden">Закладки</span>
        </RouterLink>

        <RouterLink to="/" class="flex gap-3 items-center">
          <img
            src="/profile.svg"
            alt="Profile"
            width="18"
            height="18"
          >
          <span class="text-sm text-text-light-secondary max-pad:hidden">Профиль</span>
        </RouterLink>
      </div>
    </div>
  </header>
</template>
