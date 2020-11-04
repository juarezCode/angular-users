import { createSelector } from '@ngrx/store';
import { selectProduct } from './feature';

const selectUpdateProductReducer = createSelector(selectProduct, (state) => state.updateProduct);

export const selectUpdatingProduct = createSelector(
  selectUpdateProductReducer,
  (state) => state.loading,
);
