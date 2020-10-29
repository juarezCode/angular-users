export type Product = {
  name: string;
  description: string;
  price: number;
};

export type Products = {
  data: {
    total: number;
    products: Product[];
  };
};
