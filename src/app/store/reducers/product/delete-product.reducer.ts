import { Action, createReducer } from '@ngrx/store';
import { mutableOn } from 'ngrx-etc';
import {
  deleteProduct,
  deleteProductError,
  deleteProductSuccess,
} from '../../actions/product/delete-product.actions';

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
    mutableOn(deleteProduct, (state) => {
      state.loading = true;
      state.error = null;
    }),
    mutableOn(deleteProductSuccess, (state) => {
      state.loading = false;
      state.error = null;
    }),
    mutableOn(deleteProductError, (state, action) => {
      state.loading = false;
      state.error = action.error;
    }),
  )(state, action);
}
