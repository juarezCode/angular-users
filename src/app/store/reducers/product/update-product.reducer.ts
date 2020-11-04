import { Action, createReducer } from '@ngrx/store';
import { mutableOn } from 'ngrx-etc';
import {
  updateProduct,
  updateProductError,
  updateProductSuccess,
} from '../../actions/product/update.product.actions';

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
    mutableOn(updateProduct, (state) => {
      state.loading = true;
      state.error = null;
    }),
    mutableOn(updateProductSuccess, (state) => {
      state.loading = false;
    }),
    mutableOn(updateProductError, (state, action) => {
      state.loading = false;
      state.error = action.error;
    }),
  )(state, action);
}
