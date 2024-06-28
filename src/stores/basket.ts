import { defineStore } from 'pinia';

const useBasketStore = defineStore('basket', {
  state: () => ({ isOpened: false }),
  actions: {
    toggleBasket() {
      this.isOpened = !this.isOpened;
    },
  },
});

export default useBasketStore;
