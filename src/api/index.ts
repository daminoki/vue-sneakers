import apiHelper from '@/api/apiHelper.ts';
import { IProductResponse } from '@/entities/fetchParams.ts';
import { IProduct } from '@/entities/products.ts';

export const getProducts = async (searchQuery?: string): Promise<IProductResponse> => apiHelper('get', `items?title=*${searchQuery}`);

export const addToBasket = async (item: IProduct): Promise<IProductResponse> => apiHelper('patch', `items/${item.id}`, item);
