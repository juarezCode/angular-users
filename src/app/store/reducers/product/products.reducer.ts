import { Action, createReducer } from '@ngrx/store';
import { mutableOn } from 'ngrx-etc';
import { Product } from 'src/app/types/product';
import {
  getProducts,
  getProductsError,
  getProductsSuccess,
} from '../../actions/product/products.actions';

export type State = {
  loaded: boolean;
  loading: boolean;
  error: any;
  results: Product[];
};

const initialState: State = {
  loaded: false,
  loading: false,
  error: null,
  results: [],
};

export function reducer(state: State, action: Action) {
  return createReducer(
    initialState,
    mutableOn(getProducts, (state) => {
      state.loaded = false;
      state.loading = true;
      state.error = null;
      state.results = [];
    }),
    mutableOn(getProductsSuccess, (state, action) => {
      state.loaded = true;
      state.loading = false;
      state.results = action.payload;
    }),
    mutableOn(getProductsError, (state, action) => {
      state.loading = false;
      state.error = action.error;
    }),
  )(state, action);
}
