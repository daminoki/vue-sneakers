import { defineStore } from 'pinia';
import { IProduct } from '@/entities/products.ts';
import { addToBasket, getProducts } from '@/api/index.ts';

interface IBasketStore {
  isOpened: boolean;
  items: IProduct[];
  totalPrice: number;
}

const getBasketProducts = async (): Promise<IProduct[]> => {
  const { data } = await getProducts();

  if (!data) return [];

  return data.filter((item) => item.isAddedToBasket);
};

const useBasketStore = defineStore('basket', {
  state: (): IBasketStore => ({ isOpened: false, items: [], totalPrice: 0 }),
  getters: {
    getIsItemInBasket: (state) => (item: IProduct) => state.items.find((basketItem) => basketItem.id === item.id),
  },
  actions: {
    async initializeBasket() {
      this.items = await getBasketProducts();
      this.getCartTotalPrice();
    },
    toggleBasket() {
      this.isOpened = !this.isOpened;
    },
    toggleBasketItem(item: IProduct) {
      addToBasket({ ...item, isAddedToBasket: !item.isAddedToBasket });

      const isItemInBasket = this.items.some((basketItem) => basketItem.id === item.id);

      if (isItemInBasket) {
        this.items = this.items.filter((basketItem) => basketItem.id !== item.id);
        this.totalPrice -= item.price;
      } else {
        this.items = [...this.items, item];
        this.totalPrice += item.price;
      }
    },
    getCartTotalPrice() {
      this.totalPrice = this.items.reduce((acc, item) => acc + item.price, 0);
    },
  },
});

export default useBasketStore;
