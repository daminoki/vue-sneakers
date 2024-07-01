import apiHelper from '@/api/apiHelper.ts';
import { IProductResponse } from '@/entities/fetchParams.ts';
import { IProduct } from '@/entities/products.ts';

export const getProducts = async (): Promise<IProductResponse> => apiHelper('get', 'items');

export const addToBasket = async (item: IProduct): Promise<IProductResponse> => apiHelper('post', 'basket', item);

export const removeFromBasket = async (items: IProduct[]): Promise<IProductResponse> => apiHelper('patch', 'basket', items);
