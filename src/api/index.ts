import apiHelper from '@/api/apiHelper.ts';
import { IProductResponse } from '@/entities/fetchParams.ts';

const getProducts = async (): Promise<IProductResponse> => apiHelper('get', 'items');

export default getProducts;
