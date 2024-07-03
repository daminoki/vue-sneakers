<script setup lang="ts">
import { ref } from 'vue';
import { IProduct } from '@/entities/products.ts';
import useBasketStore from '@/stores/basket.ts';
import useFavoritesStore from '@/stores/favorites.ts';

const props = defineProps<{
  product: IProduct;
}>();

const basketStore = useBasketStore();
const favoritesStore = useFavoritesStore();

const loadingToBasket = ref(false);
const loadingToFavorites = ref(false);

const handleBasketButtonClick = async () => {
  loadingToBasket.value = true;
  await basketStore.toggleBasketItem(props.product);
  loadingToBasket.value = false;
};

const handleFavoritesButtonClick = async () => {
  loadingToFavorites.value = true;
  await favoritesStore.toggleFavoriteItem(props.product);
  loadingToFavorites.value = false;
};
</script>

<template>
  <div class="pt-5 px-7 pb-7 rounded-2xl border-2 border-solid border-border-color flex flex-col relative h-full">
    <div class="w-133 h-112 mx-auto">
      <img
        :src="product.imageUrl"
        width="133"
        height="112"
        class="object-contain w-full h-full"
        :alt="product.title"
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

      <button
        aria-label="Добавить в корзину"
        class="disabled:pointer-events-none disabled:opacity-50"
        :disabled="loadingToBasket"
        @click="handleBasketButtonClick"
      >
        <img :src="basketStore.getIsItemInBasket(product) ? '/checked.svg' : '/plus.svg'" alt="Добавить в корзину">
      </button>
    </div>

    <button
      class="absolute top-5 left-7"
      aria-label="Добавить в избранное"
      :disabled="loadingToFavorites"
      @click="handleFavoritesButtonClick"
    >
      <img
        :src="favoritesStore.getIsItemInFavorites(product) ? '/like-2.svg' : '/like-1.svg'"
        alt="Добавить в избранное"
      >
    </button>
  </div>
</template>
