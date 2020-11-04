import { Action, createReducer } from '@ngrx/store';
import { mutableOn } from 'ngrx-etc';
import { Product } from 'src/app/types/product';
import {
  getProduct,
  getProductError,
  getProductSuccess,
} from '../../actions/product/product.actions';

export type State = {
  loaded: boolean;
  loading: boolean;
  error: any;
  result: Product;
};

const initialState: State = {
  loaded: false,
  loading: false,
  error: null,
  result: null,
};

export function reducer(state: State, action: Action) {
  return createReducer(
    initialState,
    mutableOn(getProduct, (state) => {
      state.loaded = false;
      state.loading = true;
      state.error = null;
      state.result = null;
    }),
    mutableOn(getProductSuccess, (state, action) => {
      state.loaded = true;
      state.loading = false;
      state.result = action.payload;
    }),
    mutableOn(getProductError, (state, action) => {
      state.loading = false;
      state.error = action.error;
    }),
  )(state, action);
}
