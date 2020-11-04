export type Product = {
  name: string;
  description: string;
  price: number;
};

export type NewProduct = {
  name: string;
  description: string;
  price: number;
};

export type ProductUpdate = {
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

export type ProductResponse = {
  status: string;
  data: Product;
};
