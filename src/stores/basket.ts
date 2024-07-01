import { defineStore } from 'pinia';
import { IProduct } from '@/entities/products.ts';
import { addToBasket, removeFromBasket } from '@/api/index.ts';

interface IBasketStore {
  isOpened: boolean;
  items: IProduct[];
}

const useBasketStore = defineStore('basket', {
  state: (): IBasketStore => ({ isOpened: false, items: [] }),
  actions: {
    toggleBasket() {
      this.isOpened = !this.isOpened;
    },
    toggleBasketItem(item: IProduct) {
      const isItemInBasket = this.items.some((i) => i.id === item.id);

      if (isItemInBasket) {
        this.items = this.items.filter((i) => i.id !== item.id);
        removeFromBasket(this.items);
      } else {
        this.items.push(item);
        addToBasket(item);
      }
    },
  },
});

export default useBasketStore;
