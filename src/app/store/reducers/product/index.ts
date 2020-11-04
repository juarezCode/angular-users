import { combineReducers } from '@ngrx/store';
import * as fromProducts from './products.reducer';
import * as fromProduct from './product.reducer';
import * as fromCreateProduct from './create-product.reducer';
import * as fromDeleteProduct from './create-product.reducer';
import * as fromUpdateProduct from './update-product.reducer';

export const key = 'product';

export type State = {
  products: fromProducts.State;
  product: fromProduct.State;
  createProduct: fromCreateProduct.State;
  deleteProduct: fromDeleteProduct.State;
  updateProduct: fromUpdateProduct.State;
};

export const reducers = combineReducers({
  products: fromProducts.reducer,
  product: fromProduct.reducer,
  createProduct: fromCreateProduct.reducer,
  deleteProduct: fromDeleteProduct.reducer,
  updateProduct: fromUpdateProduct.reducer,
});
