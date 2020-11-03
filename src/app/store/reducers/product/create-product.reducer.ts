import { Action, createReducer } from '@ngrx/store';
import { mutableOn } from 'ngrx-etc';
import {
  createProduct,
  createProductError,
  createProductSuccess,
} from '../../actions/product/create-product.actions';

export type State = {
  loading: boolean;
  error: any;
};

const initialState: State = {
  loading: false,
  error: null,
};

export function reducer(state: State, action: Action) {
  return createReducer(
    initialState,
    mutableOn(createProduct, (state) => {
      (state.loading = true), (state.error = null);
    }),
    mutableOn(createProductSuccess, (state, action) => {
      state.loading = false;
    }),
    mutableOn(createProductError, (state, action) => {
      state.loading = false;
      state.error = action.error;
    }),
  )(state, action);
}
