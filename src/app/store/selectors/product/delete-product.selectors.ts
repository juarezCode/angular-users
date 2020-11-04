import { createSelector } from '@ngrx/store';
import { selectProduct } from './feature';

const selectDeleteProductReducer = createSelector(selectProduct, (state) => state.deleteProduct);

export const selectDeletingProduct = createSelector(
  selectDeleteProductReducer,
  (state) => state.loading,
);
