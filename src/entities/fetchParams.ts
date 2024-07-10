import { IProduct } from '@/entities/products.ts';

export interface IProductResponse {
  data: IProduct[] | null;
  error: string | null;
}

export interface ISearchParams {
  title?: string;
}
