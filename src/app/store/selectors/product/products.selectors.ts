import { createSelector } from '@ngrx/store';
import { selectProduct } from './feature';

const selectProductsReducer = createSelector(selectProduct, (state) => state.products);

export const selectProducts = createSelector(selectProductsReducer, (state) => state.results);

export const selectLoadedProducts = createSelector(selectProductsReducer, (state) => state.loaded);

export const selectLoadingProducts = createSelector(
  selectProductsReducer,
  (state) => state.loading,
);

export const selectErrorProducts = createSelector(selectProductsReducer, (state) => state.error);
