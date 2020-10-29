import { combineReducers } from '@ngrx/store';
import * as fromProducts from './products.reducer';

export const key = 'product';

export type State = {
  products: fromProducts.State;
};

export const reducers = combineReducers({
  products: fromProducts.reducer,
});
