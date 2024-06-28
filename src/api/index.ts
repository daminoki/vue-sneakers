import apiHelper from '@/api/apiHelper.ts';
import { IProductResponse } from '@/entities/globals.ts';

const getProducts = async (): Promise<IProductResponse> => apiHelper('get', 'items');

export default getProducts;
