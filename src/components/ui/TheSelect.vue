<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { onClickOutside } from '@vueuse/core';

import { mdiChevronDown } from '@mdi/js';

const emit = defineEmits(['sortChange']);

type SortOptionsKey = 'price' | '-price';

const isOpen = ref(false);
const selectedValue = ref<SortOptionsKey>('price');

const toggleSelect = () => {
  isOpen.value = !isOpen.value;
};

const overlay = ref(null);

onClickOutside(overlay, () => {
  isOpen.value = false;
});

const sortOptions: Record<SortOptionsKey, string> = {
  price: 'Сначала недорогие',
  '-price': 'Сначала дорогие',
};

const handleSelectionChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  selectedValue.value = target.value as SortOptionsKey;
  emit('sortChange', selectedValue.value);
};
</script>

<template>
  <div ref="overlay" class="relative mb-4 self-end min-w-52">
    <div
      class="py-1 px-2 cursor-pointer border-border-color border-2 flex gap-3
    items-center justify-between w-full"
      @click="toggleSelect"
    >
      <p>{{ sortOptions[selectedValue] }}</p>
      <svg-icon type="mdi" :path="mdiChevronDown" class="w-4 h-4" />
    </div>

    <div
      v-if="isOpen"
      class="absolute top-full left-0 z-10 bg-bg-color-secondary w-full border-border-color
    border-2 border-t-0"
    >
      <ul class="py-1 px-2">
        <li>
          <label class="cursor-pointer">
            <input
              v-model="selectedValue"
              type="radio"
              name="sort"
              value="price"
              class="hidden peer"
              @change="handleSelectionChange"
            >
            <span class="peer-checked:font-bold">Сначала недорогие</span>
          </label>
        </li>
        <li>
          <label class="cursor-pointer">
            <input
              v-model="selectedValue"
              type="radio"
              name="sort"
              value="-price"
              class="hidden peer"
              @change="handleSelectionChange"
            >
            <span class="peer-checked:font-bold">Сначала дорогие</span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>
