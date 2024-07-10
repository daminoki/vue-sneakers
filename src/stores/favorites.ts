import { defineStore } from 'pinia';
import { addToBasket, getProducts } from '@/api/index.ts';
import { IProduct } from '@/entities/products.ts';

interface IFavoritesStore {
  favorites: IProduct[];
}

const getFavoritesProducts = async () => {
  const { data } = await getProducts();

  if (!data) return [];

  return data.filter((item) => item.isAddedToFavorites);
};

const useFavoritesStore = defineStore('favorites', {
  state: (): IFavoritesStore => ({
    favorites: [],
  }),
  getters: {
    getIsItemInFavorites: (state) => (item: IProduct) => state.favorites.find(
      (favoriteItem) => favoriteItem.id === item.id,
    ),
    getFavoritesItems: (state) => state.favorites,
  },
  actions: {
    async initializeFavorites() {
      this.favorites = await getFavoritesProducts();
    },
    async toggleFavoriteItem(item: IProduct) {
      const { error } = await addToBasket({ ...item, isAddedToFavorites: !item.isAddedToFavorites });

      if (error) return console.error(error);

      const isItemInFavorites = this.favorites.find((favoriteItem) => favoriteItem.id === item.id);

      if (isItemInFavorites) {
        this.favorites = this.favorites.filter((favoriteItem) => favoriteItem.id !== item.id);
      } else {
        this.favorites = [...this.favorites, item];
      }

      return this.favorites;
    },
  },
});

export default useFavoritesStore;
