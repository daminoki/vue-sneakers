<script setup lang="ts">
defineProps<{
  title?: string;
  price: number;
}>();
</script>

<template>
  <div class="product">
    <h2>Product: {{ title }}</h2>
    <h3>Price: ${{ price }}</h3>
  </div>
</template>

<style scoped lang="scss"></style>
