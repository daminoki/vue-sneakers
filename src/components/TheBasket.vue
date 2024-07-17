<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BasketCard from '@/components/BasketCard.vue';
import useBasketStore from '@/stores/basket.ts';
import BaseButton from '@/components/ui/BaseButton.vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { onClickOutside } from '@vueuse/core';

const basketStore = useBasketStore();

const modalRef = ref(null);

onMounted(() => {
  basketStore.initializeBasket();
});

onClickOutside(modalRef, () => {
  basketStore.toggleBasket();
});
</script>

<template>
  <Transition>
    <div v-if="basketStore.isOpened" class="fixed top-0 left-0 w-full h-full bg-overlay-color outer">
      <div
        ref="modalRef"
        class="fixed top-0 right-0 w-385 h-full bg-bg-color-secondary
    px-8 pt-8 max-pad:w-full overflow-auto no-scrollbar flex flex-col inner"
      >
        <div class="flex justify-between">
          <p class="text-2xl font-bold">
            Корзина
          </p>

          <button>
            <img src="/close.svg" alt="Закрыть" @click="basketStore.toggleBasket()">
          </button>
        </div>

        <div v-if="!basketStore.getBasketItems.length" class="m-auto flex flex-col items-center">
          <img
            src="/package-icon.png"
            alt="Корзина пуста"
            width="120"
            height="120"
          >
          <p class="text-center text-2xl font-bold">
            Корзина пуста
          </p>
          <p class="text-center text-text-light mt-2">
            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ
          </p>
        </div>

        <div v-else class="pt-10 pb-14">
          <ul class="flex flex-col gap-3">
            <li v-for="item in basketStore.getBasketItems" :key="item.id">
              <BasketCard :product="item" />
            </li>
          </ul>
        </div>

        <div
          class="mt-auto sticky bottom-0 left-0 bg-bg-color-secondary
        pb-8 pt-2 before:block before:w-full before:h-2/3 before:absolute before:-top-2/3
        before:bg-gradient-to-t from-bg-color-secondary to-transparent"
        >
          <p class="flex justify-between mb-3.5">
            <b>Итого:</b> <span>{{ basketStore.getTotalPrice }} руб.</span>
          </p>
          <BaseButton text="Оформить заказ" :disabled="!basketStore.getBasketItems.length" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.75s ease;

  .inner {
    transition: transform 0.5s ease 0.25s;
  }
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transition-delay: 0.5s;

  .inner {
    transform: translateX(100%);
  }
}
</style>
