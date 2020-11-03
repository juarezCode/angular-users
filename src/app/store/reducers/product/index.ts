import { combineReducers } from '@ngrx/store';
import * as fromProducts from './products.reducer';
import * as fromCreateProduct from './create-product.reducer';

export const key = 'product';

export type State = {
  products: fromProducts.State;
  createProduct: fromCreateProduct.State;
};

export const reducers = combineReducers({
  products: fromProducts.reducer,
  createProduct: fromCreateProduct.reducer,
});
