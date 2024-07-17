<script setup lang="ts">
defineProps<{
  text: string;
  // handleButtonClick:() => void;
  disabled?: boolean;
}>();
</script>

<template>
  <button
    :disabled="disabled"
    class="p-4 w-full bg-button-color rounded-2xl text-bg-color-secondary font-bold
    hover:bg-button-hover-color transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none"
  >
    {{ text }}
  </button>
</template>
