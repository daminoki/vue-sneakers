import { defineStore } from 'pinia';
import { IProduct } from '@/entities/products.ts';
import { addToBasket, getProducts } from '@/api/index.ts';
import { enableBodyScroll, disableBodyScroll } from '@funboxteam/diamonds';

interface IBasketStore {
  isOpened: boolean;
  items: IProduct[];
}

const getBasketProducts = async (): Promise<IProduct[]> => {
  const { data } = await getProducts();

  if (!data) return [];

  return data.filter((item) => item.isAddedToBasket);
};

const useBasketStore = defineStore('basket', {
  state: (): IBasketStore => ({ isOpened: false, items: [] }),
  getters: {
    getIsItemInBasket: (state) => (item: IProduct) => state.items.find((basketItem) => basketItem.id === item.id),
    getTotalPrice: (state) => state.items.reduce((total, item) => total + item.price, 0),
    getBasketItems: (state) => state.items,
  },
  actions: {
    async initializeBasket() {
      this.items = await getBasketProducts();
    },
    toggleBasket() {
      this.isOpened = !this.isOpened;

      if (this.isOpened) {
        disableBodyScroll();
      } else {
        enableBodyScroll();
      }
    },
    async toggleBasketItem(item: IProduct) {
      const { error } = await addToBasket({ ...item, isAddedToBasket: !item.isAddedToBasket });

      if (error) return console.error(error);

      const isItemInBasket = this.items.some((basketItem) => basketItem.id === item.id);

      if (isItemInBasket) {
        this.items = this.items.filter((basketItem) => basketItem.id !== item.id);
      } else {
        this.items = [...this.items, item];
      }

      return this.items;
    },
  },
});

export default useBasketStore;
