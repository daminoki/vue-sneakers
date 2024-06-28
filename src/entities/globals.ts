export interface IProduct {
  id: number;
  imageUrl: string;
  price: number;
  title: string;
}

export interface IProductResponse {
  data: IProduct[] | null;
  error: string | null;
}
